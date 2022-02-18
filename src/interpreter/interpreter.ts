import { Node } from 'parser/types';

import { Value } from '../types';

import {
  evaluateBinaryExpression,
  evaluateLogicalExpression,
  evaluateUnaryExpression,
} from './operators';

// TODO: Add context to evaluator signature
type Evaluator = (node: Node) => Value;

const evaluators: { [nodeType: string]: Evaluator } = {
  Literal: (node: Node): Value => {
    if (node.type !== 'Literal') {
      return;
    }
    return node.value;
  },
  UnaryExpression: (node: Node): Value => {
    if (node.type !== 'UnaryExpression') {
      return;
    }
    const value = evaluate(node.argument);
    // TODO: Add typechecking of unary expression
    return evaluateUnaryExpression(node.operator, value);
  },
  BinaryExpression: (node: Node): Value => {
    if (node.type !== 'BinaryExpression') {
      return;
    }
    const left = evaluate(node.left);
    const right = evaluate(node.right);
    // TODO: Add typechecking of binary expression
    return evaluateBinaryExpression(node.operator, left, right);
  },
  LogicalExpression: (node: Node): Value => {
    if (node.type !== 'LogicalExpression') {
      return;
    }
    const left = evaluate(node.left);
    const right = evaluate(node.right);
    // TODO: Add typechecking of logical expression
    return evaluateLogicalExpression(node.operator, left, right);
  },
  ConditionalExpression: (node: Node): Value => {
    if (node.type !== 'ConditionalExpression') {
      return;
    }
    const test = evaluate(node.test);
    return test ? evaluate(node.consequent) : evaluate(node.alternate);
  },
  ExpressionStatement: (node: Node): Value => {
    if (node.type !== 'ExpressionStatement') {
      return;
    }
    return evaluate(node.expression);
  },
  SequenceStatement: (node: Node): Value => {
    if (node.type !== 'SequenceExpression') {
      return;
    }
    let value = undefined;
    for (const expression of node.expressions) {
      value = evaluate(expression);
    }
    return value;
  },
  Program: (node: Node): Value => {
    if (node.type !== 'Program') {
      return;
    }
    let value = undefined;
    for (const statement of node.body) {
      value = evaluate(statement);
    }
    return value;
  },
};

export function evaluate(node: Node): Value {
  const result: any = evaluators[node.type](node);
  return result;
}
