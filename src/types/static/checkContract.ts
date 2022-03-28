import assert from 'assert';

import { ContractDeclarationStatement, ContractExpression } from 'parser/types';
import { formatType } from 'utils/formatters';

import { Context } from '../../runtimeTypes';
import {
  createLocalTypeEnvironment,
  popTypeEnvironment,
  pushTypeEnvironment,
  setContractType,
  setType,
} from '../environment';
import { ContractType, Type } from '../types';
import { isBool, isPrimitiveType, unitType } from '../utils';

import { InvalidContractReturnTypeError, NotAFunctionError } from './errors';
import { typeCheck } from './index';

export function checkContractDeclarationStatement(
  node: ContractDeclarationStatement,
  context: Context,
): Type {
  const contractType = checkContractExpression(node.contract, context);
  setContractType(context, node.id.name, contractType);
  return unitType; // TODO: Look into proper type to return
}

function checkContractExpression(
  node: ContractExpression,
  context: Context,
): ContractType {
  const contract = node.contract;
  if (contract.type === 'EmptyContractExpression') {
    throw new NotAFunctionError(formatType(unitType), node);
  }
  if (contract.type === 'FlatContractExpression') {
    const closureType = typeCheck(contract.contract, context);
    if (isPrimitiveType(closureType)) {
      throw new NotAFunctionError(formatType(closureType), node);
    }
    if (!isBool(closureType.returnType)) {
      throw new InvalidContractReturnTypeError(
        node,
        formatType(closureType.returnType),
      );
    }
    return {
      type: 'FlatContractType',
      contractType: closureType,
    };
  }
  const parameterContract = checkContractExpression(
    contract.parameterContract,
    context,
  );
  const isFlatSetNotation =
    contract.parameterContract.contract.type === 'FlatContractExpression' &&
    contract.parameterContract.contract.isSetNotation;

  if (isFlatSetNotation) {
    assert(
      contract.parameterContract.contract.type === 'FlatContractExpression',
    );
    const contractExpression = contract.parameterContract.contract.contract;
    assert(contractExpression.type === 'LambdaExpression'); // True if set notation
    const contractTypeEnvironment = createLocalTypeEnvironment();
    pushTypeEnvironment(context, contractTypeEnvironment);
    setType(
      context,
      contractExpression.params[0].name,
      contractExpression.typeDeclaration.parameterType,
    );
  }

  const returnContract = checkContractExpression(
    contract.returnContract,
    context,
  );

  if (isFlatSetNotation) {
    popTypeEnvironment(context);
  }

  return {
    type: 'FunctionContractType',
    parameterType: parameterContract,
    returnType: returnContract,
  };
}
