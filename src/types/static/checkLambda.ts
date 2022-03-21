import assert from 'assert';
import { Context } from 'runtimeTypes';

import { LambdaExpression } from 'parser/types';
import { formatType } from 'utils/formatters';

import {
  createLocalTypeEnvironment,
  popTypeEnvironment,
  pushTypeEnvironment,
  setType,
} from '../environment';
import { FunctionType, Type } from '../types';
import { isSameType } from '../utils';

import { TypeMismatchError } from './errors';
import { _typeCheck } from './index';

export function checkLambdaExpression(
  node: LambdaExpression,
  context: Context,
): Type {
  const lambdaEnvironment = createLocalTypeEnvironment();
  pushTypeEnvironment(context, lambdaEnvironment);

  let lambdaType: Type = node.typeDeclaration;
  for (let i = 0; i < node.params.length; i++) {
    setType(
      context,
      node.params[i].name,
      (lambdaType as FunctionType).parameterType,
    );
    lambdaType = (lambdaType as FunctionType).returnType;
  }

  const returnType = _typeCheck(node.body, context);
  const poppedEnvironment = popTypeEnvironment(context);
  assert(poppedEnvironment === lambdaEnvironment);

  if (!isSameType(lambdaType, returnType)) {
    throw new TypeMismatchError(
      node,
      formatType(lambdaType),
      formatType(returnType),
    );
  }

  return node.typeDeclaration;
}
