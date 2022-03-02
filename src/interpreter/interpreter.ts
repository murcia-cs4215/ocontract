import { Node } from 'parser/types';

import { Context, Value } from '../types';

import {
  evaluateBinaryExpression,
  evaluateLogicalExpression,
  evaluateUnaryExpression,
} from './operators';

// TODO: Add context to evaluator signature
type Evaluator = (node: Node, context: Context) => Value;

const evaluators: { [nodeType: string]: Evaluator } = {
  Literal: (node: Node, _context: Context): Value => {
    if (node.type !== 'Literal') {
      return;
    }
    return node.value;
  },
  UnaryExpression: (node: Node, context: Context): Value => {
    if (node.type !== 'UnaryExpression') {
      return;
    }
    const value = evaluate(node.argument, context);
    // TODO: Add typechecking of unary expression
    return evaluateUnaryExpression(node.operator, value);
  },
  BinaryExpression: (node: Node, context: Context): Value => {
    if (node.type !== 'BinaryExpression') {
      return;
    }
    const left = evaluate(node.left, context);
    const right = evaluate(node.right, context);
    // TODO: Add typechecking of binary expression
    return evaluateBinaryExpression(node.operator, left, right);
  },
  LogicalExpression: (node: Node, context: Context): Value => {
    if (node.type !== 'LogicalExpression') {
      return;
    }
    const left = evaluate(node.left, context);
    const right = evaluate(node.right, context);
    // TODO: Add typechecking of logical expression
    return evaluateLogicalExpression(node.operator, left, right);
  },
  ConditionalExpression: (node: Node, context: Context): Value => {
    if (node.type !== 'ConditionalExpression') {
      return;
    }
    const test = evaluate(node.test, context);
    return test
      ? evaluate(node.consequent, context)
      : evaluate(node.alternate, context);
  },
  ExpressionStatement: (node: Node, context: Context): Value => {
    if (node.type !== 'ExpressionStatement') {
      return;
    }
    return evaluate(node.expression, context);
  },
  SequenceStatement: (node: Node, context: Context): Value => {
    if (node.type !== 'SequenceExpression') {
      return;
    }
    let value = undefined;
    for (const expression of node.expressions) {
      value = evaluate(expression, context);
    }
    return value;
  },
  Program: (node: Node, context: Context): Value => {
    if (node.type !== 'Program') {
      return;
    }
    let value = undefined;
    for (const statement of node.body) {
      value = evaluate(statement, context);
    }
    return value;
  },
};

export function evaluate(node: Node, context: Context): Value {
  const result: any = evaluators[node.type](node, context);
  return result;
}
