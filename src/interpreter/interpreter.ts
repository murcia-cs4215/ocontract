import assert from 'assert';
import cloneDeep from 'lodash.clonedeep';

import { addContractToCurrentScope } from 'contracts/environment';
import {
  checkArgumentContract,
  checkGlobalLetContract,
  checkIdentifierContract,
  checkReturnValueContract,
} from 'contracts/runtime';
import { propagateEnvironment, propagateLoc } from 'contracts/runtime/utils';
import { Contract, FlatContract, FunctionContract } from 'contracts/types';
import { GlobalLetStatement, LambdaExpression, Node } from 'parser/types';
import {
  checkArgumentType,
  checkBinaryExpressionType,
  checkBooleanType,
  checkUnaryExpressionType,
  LHS,
  RHS,
} from 'types/runtime';
import { FunctionType } from 'types/types';
import { getTypeOfContract, unitType, valueTypeToPrimitive } from 'types/utils';

import { Context, RuntimeResult } from '../runtimeTypes';

import { Closure } from './closure';
import {
  createFunctionEnvironment,
  createLocalEnvironment,
  getVariable,
  popEnvironment,
  pushEnvironment,
  setVariable,
} from './environment';
import { assertClosure, handleRuntimeError, InterpreterError } from './errors';
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
    const res = getVariable(context, node.name);
    checkIdentifierContract(node, context, res);
    return res;
  },
  UnaryExpression: (node: Node, context: Context): RuntimeResult => {
    if (node.type !== 'UnaryExpression') {
      return handleRuntimeError(context, new InterpreterError(node));
    }
    const argument = evaluate(node.argument, context);
    checkUnaryExpressionType(node, node.operator, argument, context);
    return evaluateUnaryExpression(node.operator, argument);
  },
  BinaryExpression: (node: Node, context: Context): RuntimeResult => {
    if (node.type !== 'BinaryExpression') {
      return handleRuntimeError(context, new InterpreterError(node));
    }
    const left = evaluate(node.left, context);
    const right = evaluate(node.right, context);
    checkBinaryExpressionType(node, node.operator, left, right, context);
    return evaluateBinaryExpression(node.operator, left, right);
  },
  LogicalExpression: (node: Node, context: Context): RuntimeResult => {
    if (node.type !== 'LogicalExpression') {
      return handleRuntimeError(context, new InterpreterError(node));
    }
    const left = evaluate(node.left, context);
    checkBooleanType(node, left, LHS, context);
    if (
      (node.operator === '&&' && !left.value) ||
      (node.operator === '||' && left.value)
    ) {
      return left;
    }
    const right = evaluate(node.right, context);
    checkBooleanType(node, right, RHS, context);
    return evaluateLogicalExpression(node.operator, left, right);
  },
  ConditionalExpression: (node: Node, context: Context): RuntimeResult => {
    if (node.type !== 'ConditionalExpression') {
      return handleRuntimeError(context, new InterpreterError(node));
    }
    const test = evaluate(node.test, context);
    checkBooleanType(node, test, undefined, context);
    return test.value
      ? evaluate(node.consequent, context)
      : evaluate(node.alternate, context);
  },
  GlobalLetStatement: (node: Node, context: Context): RuntimeResult => {
    if (node.type !== 'GlobalLetStatement') {
      return handleRuntimeError(context, new InterpreterError(node));
    }
    // TODO: Look into handling of `let rec` expressions
    const identifier = node.left;
    let closure, value;
    if (node.params.length > 0) {
      closure = Closure.createFromLambdaExpression(
        convertGlobalLetFuncToLambda(node),
        context,
      );
    } else {
      value = evaluate(node.right, context);
      if (value.value instanceof Closure) {
        closure = value.value;
      }
    }

    // Define self in the closure's cloned environment only if recursive
    if (closure && node.recursive) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      closure.clonedEnvironments[0]!.head[identifier.name] = {
        value: closure,
        type: closure.getType(),
      };
    }
    if (closure) {
      return setVariable(context, identifier.name, closure);
    }

    assert(value != null); // Functions have been handled above
    checkGlobalLetContract(node, context, value);
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
  LambdaExpression: (node: Node, context: Context): RuntimeResult => {
    if (node.type !== 'LambdaExpression') {
      return handleRuntimeError(context, new InterpreterError(node));
    }
    const closure = Closure.createFromLambdaExpression(node, context);
    return {
      value: closure,
      type: closure.getType(),
    };
  },
  CallExpression: (node: Node, context: Context): RuntimeResult => {
    if (node.type !== 'CallExpression') {
      return handleRuntimeError(context, new InterpreterError(node));
    }
    let result = evaluate(node.callee, context);
    let closure = result.value;
    const args = node.arguments.map((arg) => evaluate(arg, context));

    // inherit neg because "scope" of closure is now callee's "neg" position
    closure.originalNode.neg = node.callee.neg;

    for (let i = 0; i < args.length; i++) {
      assertClosure(closure, node, context);
      checkArgumentType(node, closure, args[i], context);
      result = apply(closure, args[i], context);
      closure = result.value;
    }
    return result;
  },
  ExpressionStatement: (node: Node, context: Context): RuntimeResult => {
    if (node.type !== 'ExpressionStatement') {
      return handleRuntimeError(context, new InterpreterError(node));
    }
    return evaluate(node.expression, context);
  },
  ContractDeclarationStatement: (
    node: Node,
    context: Context,
  ): RuntimeResult => {
    if (node.type !== 'ContractDeclarationStatement') {
      return handleRuntimeError(context, new InterpreterError(node));
    }
    const id = node.id.name;
    const contract = evaluate(node.contract, context);
    propagateLoc(contract.value as Contract, node.loc);
    propagateEnvironment(contract.value as Contract, context);
    addContractToCurrentScope(context, id, contract.value as Contract);
    return {
      ...contract,
      name: id,
    };
  },
  ContractExpression: (node: Node, context: Context): RuntimeResult => {
    if (
      node.type !== 'ContractExpression' ||
      node.contract.type === 'EmptyContractExpression'
    ) {
      return handleRuntimeError(context, new InterpreterError(node));
    }
    if (node.contract.type === 'FlatContractExpression') {
      const result = evaluate(node.contract.contract, context);
      assert(result.value instanceof Closure);

      const contract = {
        type: 'FlatContract',
        contract: result.value,
        isSetNotation: node.contract.isSetNotation,
      } as FlatContract;

      return {
        value: contract,
        type: getTypeOfContract(contract), // TODO: Look into the type to return here
      };
    }
    const parameterContract = evaluate(node.contract.parameterContract, context)
      .value as Contract;
    const returnContract = evaluate(node.contract.returnContract, context)
      .value as Contract;
    const contract = {
      type: 'FunctionContract',
      parameterContract,
      returnContract,
    } as FunctionContract;

    return {
      value: contract,
      type: getTypeOfContract(contract), // TODO: Look into the type to return here
    };
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

export function apply(
  closure: Closure,
  arg: RuntimeResult,
  context: Context,
): RuntimeResult {
  const copyArg = cloneDeep(arg);
  checkArgumentContract(closure, copyArg, context);

  // Replace context environments with function environments
  // Note that unlike JS, where you can define/modify bindings later and have it affect functions define prior,
  // in OCaml/OContract, function environments are fixed upon definition. So we need to do a substitution here.
  const originalEnvironments = context.runtime.environments;
  const functionEnvironment = createFunctionEnvironment(closure, copyArg);

  context.runtime.environments = [...closure.clonedEnvironments];
  pushEnvironment(context, functionEnvironment);

  const originalNode = closure.originalNode;

  // Means fully evaluated, no currying occurring here
  if (originalNode.params.length === 1) {
    const result = evaluate(originalNode.body, context);
    checkReturnValueContract(closure, result, context);
    // Restore context environments
    context.runtime.environments = originalEnvironments;
    return result;
  }

  const curriedClosure = Closure.createFromLambdaExpression(
    {
      type: 'LambdaExpression',
      params: originalNode.params.slice(1),
      body: originalNode.body,
      contract: originalNode.contract
        ? (originalNode.contract as FunctionContract).returnContract
        : undefined,
      pos: originalNode.pos,
      neg: originalNode.neg,
      typeDeclaration: closure.getType().returnType as FunctionType,
      loc: originalNode.loc,
    },
    context,
  );

  // Restore context environments
  context.runtime.environments = originalEnvironments;
  return { value: curriedClosure, type: curriedClosure.getType() };
}

// HELPER FUNCTIONS

function convertGlobalLetFuncToLambda(
  node: GlobalLetStatement,
): LambdaExpression {
  return {
    type: 'LambdaExpression',
    params: node.params,
    body: node.right,
    typeDeclaration: node.typeDeclaration as FunctionType,
    loc: node.loc,
  };
}

function visitNode(context: Context, node: Node): void {
  context.runtime.nodes.unshift(node);
}

function leaveNode(context: Context): void {
  context.runtime.nodes.shift();
}
