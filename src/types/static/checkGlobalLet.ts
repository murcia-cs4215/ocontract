import assert from 'assert';

import { GlobalLetStatement } from 'parser/types';
import { formatType } from 'utils/formatters';

import { Context } from '../../runtimeTypes';
import {
  createLocalTypeEnvironment,
  getContractType,
  popTypeEnvironment,
  pushTypeEnvironment,
  setType,
} from '../environment';
import { ContractType, FunctionType, Type } from '../types';
import {
  formatContractType,
  isPrimitiveType,
  isSameType,
  unitType,
} from '../utils';

import { ContractTypeMismatchError, TypeMismatchError } from './errors';
import { typeCheck } from './index';

export function checkGlobalLetStatement(
  node: GlobalLetStatement,
  context: Context,
): Type {
  const name = node.left.name;
  const declaredType = node.typeDeclaration;
  let type;
  let expectedType;

  if (node.params.length === 0) {
    let recursiveEnvironment;
    if (node.recursive) {
      recursiveEnvironment = createLocalTypeEnvironment();
      pushTypeEnvironment(context, recursiveEnvironment);
      setType(context, name, declaredType);
    }
    type = typeCheck(node.right, context);

    if (node.recursive) {
      const poppedEnvironment = popTypeEnvironment(context);
      assert(poppedEnvironment === recursiveEnvironment);
    }

    expectedType = declaredType;
  } else {
    const functionEnvironment = createLocalTypeEnvironment();
    pushTypeEnvironment(context, functionEnvironment);
    let functionType = declaredType;
    for (let i = 0; i < node.params.length; i++) {
      setType(
        context,
        node.params[i].name,
        (functionType as FunctionType).parameterType,
      );
      functionType = (functionType as FunctionType).returnType;
    }
    if (node.recursive) {
      setType(context, name, declaredType);
    }
    type = typeCheck(node.right, context);

    const poppedEnvironment = popTypeEnvironment(context);
    assert(poppedEnvironment === functionEnvironment);

    expectedType = functionType;
  }

  if (!isSameType(expectedType, type)) {
    throw new TypeMismatchError(
      node,
      formatType(expectedType),
      formatType(type),
    );
  }

  const contractType = getContractType(context, name);
  if (contractType && !matchesContractType(declaredType, contractType)) {
    throw new ContractTypeMismatchError(
      node,
      formatContractType(contractType),
      formatType(declaredType),
    );
  }

  setType(context, name, declaredType);
  return unitType; // update this for functions
}

function matchesContractType(type: Type, contractType: ContractType): boolean {
  if (isPrimitiveType(type)) {
    if (contractType.type !== 'FlatContractType') {
      return false;
    }
    return isSameType(type, contractType.contractType.parameterType);
  }
  if (contractType.type !== 'FunctionContractType') {
    return false;
  }
  return (
    matchesContractType(type.parameterType, contractType.parameterType) &&
    matchesContractType(type.returnType, contractType.returnType)
  );
}
