import { BinaryOperator, LogicalOperator, UnaryOperator } from 'parser/types';
import { StringWrapper } from 'parser/wrappers';

import { boolType } from '../constants';
import { RuntimeResult } from '../types';

// Assumes that type checking has been done prior, i.e. all operations
// should succeed
export function evaluateUnaryExpression(
  operator: UnaryOperator,
  argument: RuntimeResult,
): RuntimeResult {
  if (operator === 'not') {
    return { value: !argument.value, type: argument.type };
  } else if (operator === '-') {
    return { value: -argument.value, type: argument.type };
  } else {
    return { value: +argument.value, type: argument.type };
  }
}

const physicalEqualityOperators = ['==', '!='];

// TODO: Handle float binary operators + check comparisons
// Assumes that type checking has been done prior, i.e. all operations
// should succeed
export function evaluateBinaryExpression(
  operator: BinaryOperator,
  left: RuntimeResult,
  right: RuntimeResult,
): RuntimeResult {
  if (
    left.value instanceof StringWrapper &&
    !physicalEqualityOperators.includes(operator)
  ) {
    left.value = left.value.unwrap();
  }
  if (
    right.value instanceof StringWrapper &&
    !physicalEqualityOperators.includes(operator)
  ) {
    right.value = right.value.unwrap();
  }

  switch (operator) {
    case '**': // Must be float-float
      return { value: left.value ** right.value, type: left.type };
    case '+':
    case '+.':
      return { value: left.value + right.value, type: left.type };
    case '-':
    case '-.':
      return { value: left.value - right.value, type: left.type };
    case '*':
    case '*.':
      return { value: left.value * right.value, type: left.type };
    case '/':
      return { value: Math.floor(left.value / right.value), type: left.type };
    case '/.':
      return { value: left.value / right.value, type: left.type };
    case 'mod':
      return { value: left.value % right.value, type: left.type };
    case '==':
      return { value: left.value === right.value, type: boolType };
    case '!=':
      return { value: left.value !== right.value, type: boolType };
    case '<=':
      return { value: left.value <= right.value, type: boolType };
    case '<':
      return { value: left.value < right.value, type: boolType };
    case '>':
      return { value: left.value > right.value, type: boolType };
    case '>=':
      return { value: left.value >= right.value, type: boolType };
    case '=':
      return { value: left.value == right.value, type: boolType };
    case '<>':
      return { value: left.value != right.value, type: boolType };
    case '^':
      return {
        value: new StringWrapper(left.value + right.value),
        type: left.type,
      };
  }
}

// Assumes that type checking has been done prior, i.e. all operations
// should succeed
export function evaluateLogicalExpression(
  operator: LogicalOperator,
  left: RuntimeResult,
  right: RuntimeResult,
): RuntimeResult {
  switch (operator) {
    case '&&':
      return { value: left.value && right.value, type: left.type };
    case '||':
      return { value: left.value || right.value, type: left.type };
  }
}
