import {
  checkBinaryExpression,
  checkBoolean,
  checkUnaryExpression,
} from 'checkers/types/runtimeChecker';
import { RuntimeSourceError } from 'errors/runtimeSourceError';

import { Node } from 'parser/types';

import { Context, RuntimeResult } from '../types';

import { InterpreterError } from './errors';
import {
  evaluateBinaryExpression,
  evaluateLogicalExpression,
  evaluateUnaryExpression,
} from './operators';

type Evaluator = (node: Node, context: Context) => RuntimeResult;

const evaluators: { [nodeType: string]: Evaluator } = {
  Literal: (node: Node, _context: Context): RuntimeResult => {
    if (node.type !== 'Literal') {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      throw new InterpreterError(node.loc!);
    }
    return { value: node.value, type: node.valueType };
  },
  UnaryExpression: (node: Node, context: Context): RuntimeResult => {
    if (node.type !== 'UnaryExpression') {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      throw new InterpreterError(node.loc!);
    }
    const argument = _evaluate(node.argument, context);
    checkUnaryExpression(node, node.operator, argument);
    return evaluateUnaryExpression(node.operator, argument);
  },
  BinaryExpression: (node: Node, context: Context): RuntimeResult => {
    if (node.type !== 'BinaryExpression') {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      throw new InterpreterError(node.loc!);
    }
    const left = _evaluate(node.left, context);
    const right = _evaluate(node.right, context);
    checkBinaryExpression(node, node.operator, left, right);
    return evaluateBinaryExpression(node.operator, left, right);
  },
  LogicalExpression: (node: Node, context: Context): RuntimeResult => {
    if (node.type !== 'LogicalExpression') {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      throw new InterpreterError(node.loc!);
    }
    const left = _evaluate(node.left, context);
    checkBoolean(node, left);
    if (
      (node.operator === '&&' && !left.value) ||
      (node.operator === '||' && left.value)
    ) {
      return left;
    }
    const right = _evaluate(node.right, context);
    checkBoolean(node, left);
    return evaluateLogicalExpression(node.operator, left, right);
  },
  ConditionalExpression: (node: Node, context: Context): RuntimeResult => {
    if (node.type !== 'ConditionalExpression') {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      throw new InterpreterError(node.loc!);
    }
    const test = _evaluate(node.test, context);
    checkBoolean(node, test);
    return test.value
      ? _evaluate(node.consequent, context)
      : _evaluate(node.alternate, context);
  },
  ExpressionStatement: (node: Node, context: Context): RuntimeResult => {
    if (node.type !== 'ExpressionStatement') {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      throw new InterpreterError(node.loc!);
    }
    return _evaluate(node.expression, context);
  },
  SequenceStatement: (node: Node, context: Context): RuntimeResult => {
    if (node.type !== 'SequenceExpression') {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      throw new InterpreterError(node.loc!);
    }
    let value = { value: undefined, type: 'unit' } as RuntimeResult;
    for (const expression of node.expressions) {
      value = _evaluate(expression, context);
    }
    return value;
  },
  Program: (node: Node, context: Context): RuntimeResult => {
    if (node.type !== 'Program') {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      throw new InterpreterError(node.loc!);
    }
    let value = { value: undefined, type: 'unit' } as RuntimeResult;
    for (const statement of node.body) {
      value = _evaluate(statement, context);
    }
    return value;
  },
};

function _evaluate(node: Node, context: Context): RuntimeResult {
  const result = evaluators[node.type](node, context);
  return result;
}

export function evaluate(node: Node, context: Context): RuntimeResult {
  try {
    const result = _evaluate(node, context);
    return result;
  } catch (e: any) {
    if (e instanceof InterpreterError || e instanceof RuntimeSourceError) {
      context.errors.push(e);
    }
    throw e;
  }
}
