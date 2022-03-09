import {
  checkBinaryExpression,
  checkBoolean,
  checkUnaryExpression,
  LHS,
  RHS,
} from 'checkers/types/runtimeChecker';

import { Node } from 'parser/types';
import { formatType } from 'utils/formatters';
import { unitType, valueTypeToPrimitive } from 'utils/typing';

import { Context, RuntimeResult } from '../types';

import { checkNumberOfArguments, Closure } from './closure';
import {
  createFunctionEnvironment,
  createLocalEnvironment,
  getVariable,
  popEnvironment,
  pushEnvironment,
  setVariable,
} from './environment';
import {
  handleRuntimeError,
  InterpreterError,
  NotAFunctionError,
} from './errors';
import {
  evaluateBinaryExpression,
  evaluateLogicalExpression,
  evaluateUnaryExpression,
} from './operators';

type Evaluator = (node: Node, context: Context) => RuntimeResult;

const evaluators: { [nodeType: string]: Evaluator } = {
  Literal: (node: Node, context: Context): RuntimeResult => {
    if (node.type !== 'Literal') {
      return handleRuntimeError(context, new InterpreterError(node));
    }
    return {
      value: node.value,
      type: valueTypeToPrimitive[node.valueType],
    };
  },
  Identifier: (node: Node, context: Context): RuntimeResult => {
    if (node.type !== 'Identifier') {
      return handleRuntimeError(context, new InterpreterError(node));
    }
    return getVariable(context, node.name);
  },
  UnaryExpression: (node: Node, context: Context): RuntimeResult => {
    if (node.type !== 'UnaryExpression') {
      return handleRuntimeError(context, new InterpreterError(node));
    }
    const argument = evaluate(node.argument, context);
    const error = checkUnaryExpression(node, node.operator, argument);
    if (error) {
      return handleRuntimeError(context, error);
    }
    return evaluateUnaryExpression(node.operator, argument);
  },
  BinaryExpression: (node: Node, context: Context): RuntimeResult => {
    if (node.type !== 'BinaryExpression') {
      return handleRuntimeError(context, new InterpreterError(node));
    }
    const left = evaluate(node.left, context);
    const right = evaluate(node.right, context);
    const error = checkBinaryExpression(node, node.operator, left, right);
    if (error) {
      return handleRuntimeError(context, error);
    }
    return evaluateBinaryExpression(node.operator, left, right);
  },
  LogicalExpression: (node: Node, context: Context): RuntimeResult => {
    if (node.type !== 'LogicalExpression') {
      return handleRuntimeError(context, new InterpreterError(node));
    }
    const left = evaluate(node.left, context);
    let error = checkBoolean(node, left, LHS);
    if (error) {
      return handleRuntimeError(context, error);
    }
    if (
      (node.operator === '&&' && !left.value) ||
      (node.operator === '||' && left.value)
    ) {
      return left;
    }
    const right = evaluate(node.right, context);
    error = checkBoolean(node, right, RHS);
    if (error) {
      return handleRuntimeError(context, error);
    }
    return evaluateLogicalExpression(node.operator, left, right);
  },
  ConditionalExpression: (node: Node, context: Context): RuntimeResult => {
    if (node.type !== 'ConditionalExpression') {
      return handleRuntimeError(context, new InterpreterError(node));
    }
    const test = evaluate(node.test, context);
    const error = checkBoolean(node, test);
    if (error) {
      return handleRuntimeError(context, error);
    }
    return test.value
      ? evaluate(node.consequent, context)
      : evaluate(node.alternate, context);
  },
  GlobalLetExpression: (node: Node, context: Context): RuntimeResult => {
    if (node.type !== 'GlobalLetExpression') {
      return handleRuntimeError(context, new InterpreterError(node));
    }
    // TODO: Look into handling of `let rec` expressions
    const identifier = node.left;
    const value = evaluate(node.right, context);
    return setVariable(context, identifier.name, value);
  },
  LocalLetExpression: (node: Node, context: Context): RuntimeResult => {
    if (node.type !== 'LocalLetExpression') {
      return handleRuntimeError(context, new InterpreterError(node));
    }
    const localEnvironment = createLocalEnvironment(context);
    pushEnvironment(context, localEnvironment);
    evaluate(node.left, context); // To initialise any names etc.
    const result = evaluate(node.right, context);
    popEnvironment(context);
    return result;
  },
  FunctionExpression: (node: Node, context: Context): RuntimeResult => {
    if (node.type !== 'FunctionExpression') {
      return handleRuntimeError(context, new InterpreterError(node));
    }
    const identifier = node.id;
    const closure = Closure.createFromFunctionExpression(node, context);

    // Define self in the closure's cloned environment only if recursive
    if (node.recursive) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      closure.clonedEnvironments[0]!.head[identifier.name] = {
        value: closure,
        type: closure.getType(),
      };
    }
    return setVariable(context, identifier.name, closure);
  },
  CallExpression: (node: Node, context: Context): RuntimeResult => {
    if (node.type !== 'CallExpression') {
      return handleRuntimeError(context, new InterpreterError(node));
    }
    const func = evaluate(node.callee, context);
    const args = node.arguments.map((arg) => evaluate(arg, context));
    return apply(func, args, context);
  },
  ExpressionStatement: (node: Node, context: Context): RuntimeResult => {
    if (node.type !== 'ExpressionStatement') {
      return handleRuntimeError(context, new InterpreterError(node));
    }
    return evaluate(node.expression, context);
  },
  SequenceStatement: (node: Node, context: Context): RuntimeResult => {
    if (node.type !== 'SequenceExpression') {
      return handleRuntimeError(context, new InterpreterError(node));
    }
    let value = { value: undefined, type: unitType } as RuntimeResult;
    for (const expression of node.expressions) {
      value = evaluate(expression, context);
    }
    return value;
  },
  Program: (node: Node, context: Context): RuntimeResult => {
    if (node.type !== 'Program') {
      return handleRuntimeError(context, new InterpreterError(node));
    }
    context.numberOfOuterEnvironments += 1;
    const environment = createLocalEnvironment(context, 'programEnvironment');
    pushEnvironment(context, environment);

    let value = { value: undefined, type: unitType } as RuntimeResult;
    for (const statement of node.body) {
      value = evaluate(statement, context);
    }
    return value;
  },
};

export function evaluate(node: Node, context: Context): RuntimeResult {
  visitNode(context, node);
  const evaluator = evaluators[node.type];
  if (!evaluator) {
    return handleRuntimeError(context, new InterpreterError(node));
  }
  const result = evaluator(node, context);
  leaveNode(context);
  return result;
}

function apply(
  func: RuntimeResult,
  args: RuntimeResult[],
  context: Context,
): RuntimeResult {
  if (!(func.value instanceof Closure)) {
    return handleRuntimeError(
      context,
      new NotAFunctionError(formatType(func.type), context.runtime.nodes[0]),
    );
  }
  const closure = func.value;
  checkNumberOfArguments(closure, args, context); // Only throws is num args > func params. Otherwise, it curries if <
  // TODO: Do typechecking of function call

  // Replace context environments with function environments
  // Note that unlike JS, where you can define/modify bindings later and have it affect functions define prior,
  // in OCaml/OContract, function environments are fixed upon definition. So we need to do a substitution here.
  const originalEnvironments = context.runtime.environments;
  const functionEnvironment = createFunctionEnvironment(closure, args);
  context.runtime.environments = closure.clonedEnvironments;
  pushEnvironment(context, functionEnvironment);

  const originalNode = closure.originalNode;

  // Means fully evaluated, no currying occurring here
  if (originalNode.params.length === args.length) {
    const result = evaluate(originalNode.body, context);
    // Restore context environments
    context.runtime.environments = originalEnvironments;
    return result;
  }

  const curriedClosure = Closure.createFromFunctionExpression(
    {
      type: 'FunctionExpression',
      id: { type: 'Identifier', name: 'curried' },
      recursive: false,
      params: originalNode.params.slice(args.length),
      body: originalNode.body,
    },
    context,
  );

  // Restore context environments
  context.runtime.environments = originalEnvironments;
  return { value: curriedClosure, type: curriedClosure.getType() };
}

// HELPER FUNCTIONS

function visitNode(context: Context, node: Node): void {
  context.runtime.nodes.unshift(node);
}

function leaveNode(context: Context): void {
  context.runtime.nodes.shift();
}
