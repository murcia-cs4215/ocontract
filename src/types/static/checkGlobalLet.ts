import assert from 'assert';

import { GlobalLetStatement } from 'parser/types';
import { formatType } from 'utils/formatters';

import { Context } from '../../runtimeTypes';
import {
  createLocalTypeEnvironment,
  popTypeEnvironment,
  pushTypeEnvironment,
  setType,
} from '../environment';
import { FunctionType, Type } from '../types';
import { isSameType, unitType } from '../utils';

import { TypeMismatchError } from './errors';
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
  setType(context, name, declaredType);
  return unitType; // update this for functions
}
