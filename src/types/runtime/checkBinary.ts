import { RuntimeResult } from 'runtimeTypes';

import { RuntimeSourceError } from 'errors/runtimeSourceError';
import { BinaryOperator, Node } from 'parser/types';
import { floatType, intType, stringType } from 'types/utils';
import { formatType } from 'utils/formatters';

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
): RuntimeSourceError | undefined => {
  switch (operator) {
    case '+':
    case '-':
    case '*':
    case '/':
    case 'mod':
      if (!isIntResult(left)) {
        return new RuntimeTypeError(
          node,
          LHS,
          formatType(intType),
          formatType(left.type),
        );
      } else if (!isIntResult(right)) {
        return new RuntimeTypeError(
          node,
          RHS,
          formatType(intType),
          formatType(right.type),
        );
      }
      return;
    case '+.':
    case '-.':
    case '*.':
    case '/.':
    case '**':
      if (!isFloatResult(left)) {
        return new RuntimeTypeError(
          node,
          LHS,
          formatType(floatType),
          formatType(left.type),
        );
      } else if (!isFloatResult(right)) {
        return new RuntimeTypeError(
          node,
          RHS,
          formatType(floatType),
          formatType(right.type),
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
        return new RuntimeTypeError(
          node,
          RHS,
          formatType(left.type),
          formatType(right.type),
        );
      }
      return;
    case '^':
      if (!isStringResult(left)) {
        return new RuntimeTypeError(
          node,
          LHS,
          formatType(stringType),
          formatType(left.type),
        );
      } else if (!isStringResult(right)) {
        return new RuntimeTypeError(
          node,
          RHS,
          formatType(stringType),
          formatType(right.type),
        );
      }
      return;
    default:
      return;
  }
};
