import { ConditionalExpression } from 'parser/types';
import { formatType } from 'utils/formatters';

import { Context } from '../../runtimeTypes';
import { Type } from '../types';
import { boolType, isBool, isSameType } from '../utils';

import { TypeMismatchError } from './errors';
import { typeCheck } from './index';

export function checkConditionalExpression(
  node: ConditionalExpression,
  context: Context,
): Type {
  const test = typeCheck(node.test, context);
  if (!isBool(test)) {
    throw new TypeMismatchError(
      node.test,
      formatType(boolType),
      formatType(test),
    );
  }
  const consequent = typeCheck(node.consequent, context);
  const alternate = typeCheck(node.alternate, context);
  if (!isSameType(consequent, alternate)) {
    throw new TypeMismatchError(
      node.alternate,
      formatType(consequent),
      formatType(alternate),
    );
  }
  return consequent;
}
