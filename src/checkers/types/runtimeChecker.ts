import { RuntimeSourceError } from 'errors/runtimeSourceError';

import { BinaryOperator, Node, UnaryOperator } from 'parser/types';
import { formatType } from 'utils/formatters';

import {
  boolType,
  charType,
  floatType,
  intType,
  stringType,
} from '../../constants';
import { RuntimeResult } from '../../types';

import { RuntimeTypeError } from './errors';

const LHS = ' on left hand side of operation';
const RHS = ' on right hand side of operation';

const isInt = (v: RuntimeResult): boolean =>
  v.type === intType && typeof v.value === 'number';
const isFloat = (v: RuntimeResult): boolean =>
  v.type === floatType && typeof v.value === 'number';
const isBool = (v: RuntimeResult): boolean =>
  v.type === boolType && typeof v.value === 'boolean';
const isString = (v: RuntimeResult): boolean =>
  v.type === stringType && typeof v.value.value === 'string';
const isChar = (v: RuntimeResult): boolean =>
  v.type === charType && typeof v.value === 'string' && v.value.length === 1;

export const checkUnaryExpression = (
  node: Node,
  operator: UnaryOperator,
  value: RuntimeResult,
): RuntimeSourceError | undefined => {
  if (operator === '-' && !isInt(value) && !isFloat(value)) {
    return new RuntimeTypeError(
      node,
      '',
      'int or float',
      formatType(value.type),
    );
  } else if (operator === 'not' && !isBool(value)) {
    return new RuntimeTypeError(node, '', 'bool', formatType(value.type));
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
      if (!isInt(left)) {
        return new RuntimeTypeError(node, LHS, 'int', formatType(left.type));
      } else if (!isInt(right)) {
        return new RuntimeTypeError(node, RHS, 'int', formatType(right.type));
      }
      return;
    case '+.':
    case '-.':
    case '*.':
    case '/.':
    case '**':
      if (!isFloat(left)) {
        return new RuntimeTypeError(node, LHS, 'float', formatType(left.type));
      } else if (!isFloat(right)) {
        return new RuntimeTypeError(node, RHS, 'float', formatType(right.type));
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
        (isInt(left) && !isInt(right)) ||
        (isFloat(left) && !isFloat(right)) ||
        (isString(left) && !isString(right)) ||
        (isChar(left) && !isChar(right)) ||
        (isBool(left) && !isBool(right))
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
      if (!isString(left)) {
        return new RuntimeTypeError(node, LHS, 'string', formatType(left.type));
      } else if (!isString(right)) {
        return new RuntimeTypeError(
          node,
          RHS,
          'string',
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
): RuntimeSourceError | undefined => {
  if (!isBool(value)) {
    return new RuntimeTypeError(node, '', 'bool', formatType(value.type));
  }
};
