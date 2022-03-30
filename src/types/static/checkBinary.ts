import { BinaryExpression } from 'parser/types';
import { formatType } from 'utils/formatters';

import { Context } from '../../runtimeTypes';
import { getType } from '../environment';
import { FunctionType, Type } from '../types';
import { isSameType } from '../utils';

import { TypeMismatchError } from './errors';
import { typeCheck } from './index';

export function checkBinaryExpression(
  node: BinaryExpression,
  context: Context,
): Type {
  const binaryLeft = typeCheck(node.left, context);
  const binaryRight = typeCheck(node.right, context);
  let binaryTypes = getType(context, node.operator) as
    | FunctionType
    | FunctionType[];
  if (!Array.isArray(binaryTypes)) {
    binaryTypes = [binaryTypes];
  }

  let expectedRight = undefined;
  for (const pair of binaryTypes) {
    if (isSameType(pair.parameterType, binaryLeft)) {
      const resultType = pair.returnType as FunctionType;
      if (isSameType(resultType.parameterType, binaryRight)) {
        return resultType.returnType;
      }
      if (!expectedRight) {
        expectedRight = resultType.parameterType;
      }
    }
  }

  if (expectedRight) {
    throw new TypeMismatchError(
      node.right,
      formatType(expectedRight),
      formatType(binaryRight),
    );
  }
  throw new TypeMismatchError(
    node.left,
    formatType(binaryTypes.map((b) => b.parameterType)),
    formatType(binaryLeft),
  );
}
