import { ContractDeclarationStatement, ContractExpression } from 'parser/types';
import { formatType } from 'utils/formatters';

import { Context } from '../../runtimeTypes';
import { setContractType } from '../environment';
import { ContractType, Type } from '../types';
import { boolType, isBool, isPrimitiveType, unitType } from '../utils';

import { NotAFunctionError, TypeMismatchError } from './errors';
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
      throw new TypeMismatchError(
        node,
        formatType(boolType),
        formatType(closureType),
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
  const returnContract = checkContractExpression(
    contract.returnContract,
    context,
  );
  return {
    type: 'FunctionContractType',
    parameterType: parameterContract,
    returnType: returnContract,
  };
}
