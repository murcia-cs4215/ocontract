import { UnaryExpression } from 'parser/types';
import { formatType } from 'utils/formatters';

import { Context } from '../../runtimeTypes';
import { getType, NEGATIVE_OP } from '../environment';
import { FunctionType, Type } from '../types';
import { isSameType } from '../utils';

import { TypeMismatchError } from './errors';
import { typeCheck } from './index';

export function checkUnaryExpression(
  node: UnaryExpression,
  context: Context,
): Type {
  const argument = typeCheck(node.argument, context);
  const operator = node.operator === '-' ? NEGATIVE_OP : node.operator;
  let unaryTypes = getType(context, operator) as FunctionType | FunctionType[];
  if (!Array.isArray(unaryTypes)) {
    unaryTypes = [unaryTypes];
  }
  for (const pair of unaryTypes) {
    if (isSameType(pair.parameterType, argument)) {
      return pair.returnType;
    }
  }
  throw new TypeMismatchError(
    node.argument,
    formatType(unaryTypes.map((u) => u.parameterType)),
    formatType(argument),
  );
}
