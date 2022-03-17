import { RuntimeSourceError } from 'errors/runtimeSourceError';
import { Closure } from 'interpreter/closure';
import { BinaryOperator, Node, UnaryOperator } from 'parser/types';
import { formatType } from 'utils/formatters';

import { RuntimeResult } from '../../types';

import { RuntimeTypeError } from './errors';
import {
  boolType,
  floatType,
  intType,
  isBool,
  isChar,
  isFloat,
  isInt,
  isSameType,
  isString,
  stringType,
} from './utils';

export const LHS = ' on left hand side of operation';
export const RHS = ' on right hand side of operation';

const isIntResult = (v: RuntimeResult): boolean =>
  isInt(v.type) && typeof v.value === 'number';
const isFloatResult = (v: RuntimeResult): boolean =>
  isFloat(v.type) && typeof v.value === 'number';
const isBoolResult = (v: RuntimeResult): boolean =>
  isBool(v.type) && typeof v.value === 'boolean';
const isStringResult = (v: RuntimeResult): boolean =>
  isString(v.type) && typeof v.value.value === 'string';
const isCharResult = (v: RuntimeResult): boolean =>
  isChar(v.type) && typeof v.value === 'string' && v.value.length === 1;

export const checkUnaryExpression = (
  node: Node,
  operator: UnaryOperator,
  value: RuntimeResult,
): RuntimeSourceError | undefined => {
  if (operator === '-' && !isIntResult(value) && !isFloatResult(value)) {
    return new RuntimeTypeError(
      node,
      '',
      formatType([intType, floatType]),
      formatType(value.type),
    );
  } else if (operator === 'not' && !isBoolResult(value)) {
    return new RuntimeTypeError(
      node,
      '',
      formatType(boolType),
      formatType(value.type),
    );
  }
};

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

export const checkBoolean = (
  node: Node,
  value: RuntimeResult,
  side = '',
): RuntimeSourceError | undefined => {
  if (!isBoolResult(value)) {
    return new RuntimeTypeError(
      node,
      side,
      formatType(boolType),
      formatType(value.type),
    );
  }
};

export const checkTypeOfArgument = (
  node: Node,
  closure: Closure,
  arg: RuntimeResult,
): RuntimeSourceError | undefined => {
  const expectedType = closure.getType().parameterType;
  if (!isSameType(expectedType, arg.type)) {
    return new RuntimeTypeError(
      node,
      '',
      formatType(expectedType),
      formatType(arg.type),
    );
  }
};
