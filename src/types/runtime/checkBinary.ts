import { handleRuntimeError } from 'interpreter/errors';
import { BinaryOperator, Node } from 'parser/types';
import { floatType, intType, stringType } from 'types/utils';
import { formatType } from 'utils/formatters';

import { Context, RuntimeResult } from '../../runtimeTypes';

import { RuntimeTypeError } from './errors';
import {
  isBoolResult,
  isCharResult,
  isFloatResult,
  isIntResult,
  isStringResult,
  LHS,
  RHS,
} from './utils';

export const checkBinaryExpression = (
  node: Node,
  operator: BinaryOperator,
  left: RuntimeResult,
  right: RuntimeResult,
  context: Context,
): void => {
  switch (operator) {
    case '+':
    case '-':
    case '*':
    case '/':
    case 'mod':
      if (!isIntResult(left)) {
        return handleRuntimeError(
          context,
          new RuntimeTypeError(
            node,
            LHS,
            formatType(intType),
            formatType(left.type),
          ),
        );
      } else if (!isIntResult(right)) {
        return handleRuntimeError(
          context,
          new RuntimeTypeError(
            node,
            RHS,
            formatType(intType),
            formatType(right.type),
          ),
        );
      }
      return;
    case '+.':
    case '-.':
    case '*.':
    case '/.':
    case '**':
      if (!isFloatResult(left)) {
        return handleRuntimeError(
          context,
          new RuntimeTypeError(
            node,
            LHS,
            formatType(floatType),
            formatType(left.type),
          ),
        );
      } else if (!isFloatResult(right)) {
        return handleRuntimeError(
          context,
          new RuntimeTypeError(
            node,
            RHS,
            formatType(floatType),
            formatType(right.type),
          ),
        );
      }
      return;
    case '<':
    case '<=':
    case '>':
    case '>=':
    case '!=':
    case '==':
    case '=':
    case '<>':
      if (
        (isIntResult(left) && !isIntResult(right)) ||
        (isFloatResult(left) && !isFloatResult(right)) ||
        (isStringResult(left) && !isStringResult(right)) ||
        (isCharResult(left) && !isCharResult(right)) ||
        (isBoolResult(left) && !isBoolResult(right))
      ) {
        return handleRuntimeError(
          context,
          new RuntimeTypeError(
            node,
            RHS,
            formatType(left.type),
            formatType(right.type),
          ),
        );
      }
      return;
    case '^':
      if (!isStringResult(left)) {
        return handleRuntimeError(
          context,
          new RuntimeTypeError(
            node,
            LHS,
            formatType(stringType),
            formatType(left.type),
          ),
        );
      } else if (!isStringResult(right)) {
        return handleRuntimeError(
          context,
          new RuntimeTypeError(
            node,
            RHS,
            formatType(stringType),
            formatType(right.type),
          ),
        );
      }
      return;
    default:
      return;
  }
};
