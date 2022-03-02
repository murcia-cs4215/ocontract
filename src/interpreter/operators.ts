import { BinaryOperator, LogicalOperator, UnaryOperator } from 'parser/types';
import { StringWrapper } from 'parser/wrappers';

export function evaluateUnaryExpression(
  operator: UnaryOperator,
  value: boolean | number,
): boolean | number {
  if (operator === 'not') {
    return !value;
  } else if (operator === '-') {
    return -value;
  } else {
    return +value;
  }
}

const physicalEqualityOperators = ['==', '!='];

// TODO: Handle float binary operators + check comparisons
export function evaluateBinaryExpression(
  operator: BinaryOperator,
  left: any,
  right: any,
): any {
  if (
    left instanceof StringWrapper &&
    !physicalEqualityOperators.includes(operator)
  ) {
    left = left.unwrap();
  }
  if (
    right instanceof StringWrapper &&
    !physicalEqualityOperators.includes(operator)
  ) {
    right = right.unwrap();
  }

  switch (operator) {
    case '**':
      return left ** right;
    case '+':
    case '+.':
      return left + right;
    case '-':
    case '-.':
      return left - right;
    case '*':
    case '*.':
      return left * right;
    case '/':
    case '/.':
      return left / right;
    case 'mod':
      return left % right;
    case '==':
      return left === right;
    case '!=':
      return left !== right;
    case '<=':
      return left <= right;
    case '<':
      return left < right;
    case '>':
      return left > right;
    case '>=':
      return left >= right;
    case '=':
      return left == right;
    case '<>':
      return left != right;
    case '^':
      return new StringWrapper(left + right);
    default:
      return undefined;
  }
}

export function evaluateLogicalExpression(
  operator: LogicalOperator,
  left: any,
  right: any,
): any {
  switch (operator) {
    case '&&':
      return left && right;
    case '||':
      return left || right;
  }
}
