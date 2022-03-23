import { LogicalExpression } from 'parser/types';
import { formatType } from 'utils/formatters';

import { Context } from '../../runtimeTypes';
import { Type } from '../types';
import { boolType, isBool } from '../utils';

import { TypeMismatchError } from './errors';
import { typeCheck } from './index';

export function checkLogicalExpression(
  node: LogicalExpression,
  context: Context,
): Type {
  const logicalLeft = typeCheck(node.left, context);
  if (!isBool(logicalLeft)) {
    throw new TypeMismatchError(
      node.left,
      formatType(boolType),
      formatType(logicalLeft),
    );
  }
  const logicalRight = typeCheck(node.right, context);
  if (!isBool(logicalRight)) {
    throw new TypeMismatchError(
      node.right,
      formatType(boolType),
      formatType(logicalRight),
    );
  }
  return logicalLeft;
}
