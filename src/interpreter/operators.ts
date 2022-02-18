import { BinaryOperator, LogicalOperator, UnaryOperator } from 'parser/types';

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

// TODO: Handle float binary operators + check comparisons
export function evaluateBinaryExpression(
  operator: BinaryOperator,
  left: any,
  right: any,
): any {
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
      // TODO: Fix bug where string objects with same content should not be equal
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
      return left + right;
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
