import { BinaryOperator, Node, UnaryOperator } from 'parser/types';

import { RuntimeResult } from '../../types';

import { RuntimeTypeError } from './errors';

const LHS = ' on left hand side of operation';
const RHS = ' on right hand side of operation';

const isInt = (v: RuntimeResult): boolean =>
  v.type === 'int' && typeof v.value === 'number';
const isFloat = (v: RuntimeResult): boolean =>
  v.type === 'float' && typeof v.value === 'number';
const isBool = (v: RuntimeResult): boolean =>
  v.type === 'bool' && typeof v.value === 'boolean';
const isString = (v: RuntimeResult): boolean =>
  v.type === 'string' && typeof v.value.value === 'string';
const isChar = (v: RuntimeResult): boolean =>
  v.type === 'char' && typeof v.value === 'string' && v.value.length === 1;

export const checkUnaryExpression = (
  node: Node,
  operator: UnaryOperator,
  value: RuntimeResult,
): void => {
  if (operator === '-' && !isInt(value) && !isFloat(value)) {
    throw new RuntimeTypeError(node, '', 'int or float', value.type);
  } else if (operator === 'not' && !isBool(value)) {
    throw new RuntimeTypeError(node, '', 'bool', value.type);
  }
};

export const checkBinaryExpression = (
  node: Node,
  operator: BinaryOperator,
  left: RuntimeResult,
  right: RuntimeResult,
): void => {
  switch (operator) {
    case '+':
    case '-':
    case '*':
    case '/':
    case 'mod':
      if (!isInt(left)) {
        throw new RuntimeTypeError(node, LHS, 'int', left.type);
      } else if (!isInt(right)) {
        throw new RuntimeTypeError(node, RHS, 'int', right.type);
      }
      return;
    case '+.':
    case '-.':
    case '*.':
    case '/.':
    case '**':
      if (!isFloat(left)) {
        throw new RuntimeTypeError(node, LHS, 'float', left.type);
      } else if (!isFloat(right)) {
        throw new RuntimeTypeError(node, RHS, 'float', right.type);
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
        throw new RuntimeTypeError(node, RHS, left.type, right.type);
      }
      return;
    case '^':
      if (!isString(left)) {
        throw new RuntimeTypeError(node, LHS, 'string', left.type);
      } else if (!isString(right)) {
        throw new RuntimeTypeError(node, RHS, 'string', right.type);
      }
      return;
    default:
      return;
  }
};

export const checkBoolean = (node: Node, value: RuntimeResult): void => {
  if (!isBool(value)) {
    throw new RuntimeTypeError(node, '', 'bool', value.type);
  }
};
