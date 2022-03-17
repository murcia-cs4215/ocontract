import { propagateContract } from 'checkers/contracts/contractMonitor';
import {
  addContractToCurrentScope,
  lookupContracts,
} from 'checkers/contracts/environment';
import {
  checkBinaryExpression,
  checkBoolean,
  checkTypeOfArgument,
  checkUnaryExpression,
  LHS,
  RHS,
} from 'checkers/types/runtimeChecker';
import { unitType, valueTypeToPrimitive } from 'checkers/types/utils';
import {
  ContractType,
  FlatContractExpression,
  FunctionType,
  GlobalLetStatement,
  LambdaExpression,
  Node,
} from 'parser/types';
import { formatType } from 'utils/formatters';

import { Context, RuntimeResult } from '../types';

import { Closure } from './closure';
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
    const res = getVariable(context, node.name);
    if (node.contract && node.pos && node.neg && res.value instanceof Closure) {
      propagateContract(
        node.contract,
        node.pos,
        node.neg,
        res.value.originalNode,
      );
    }
    return res;
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
  GlobalLetStatement: (node: Node, context: Context): RuntimeResult => {
    if (node.type !== 'GlobalLetStatement') {
      return handleRuntimeError(context, new InterpreterError(node));
    }
    // TODO: Look into handling of `let rec` expressions
    const identifier = node.left;
    if (node.params.length > 0) {
      // is function declaration
      const closure = Closure.createFromLambdaExpression(
        convertGlobalLetFuncToLambda(node),
        context,
      );
      // Define self in the closure's cloned environment only if recursive
      if (node.recursive) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        closure.clonedEnvironments[0]!.head[identifier.name] = {
          value: closure,
          type: closure.getType(),
        };
      }
      return setVariable(context, identifier.name, closure);
    }
    const value = evaluate(node.right, context);
    if (value.value instanceof Closure) {
      // is function declaration
      const closure = value.value;
      if (node.recursive) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        closure.clonedEnvironments[0]!.head[identifier.name] = {
          value: closure,
          type: closure.getType(),
        };
      }
      return setVariable(context, identifier.name, closure);
    }
    const contractForId = lookupContracts(
      node.left.name,
      context.contractEnvironment,
    );
    if (contractForId != undefined) {
      // this contract should be flat
      // enforce this contract
      checkPredContract(
        node,
        value,
        (contractForId as Array<ContractType>)[0],
        context,
      );
    }
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

    for (let i = 0; i < args.length; i++) {
      if (!(closure instanceof Closure)) {
        return handleRuntimeError(
          context,
          new NotAFunctionError(
            formatType(result.type),
            context.runtime.nodes[0],
          ),
        );
      }
      const error = checkTypeOfArgument(node, closure, args[i]);
      if (error) {
        return handleRuntimeError(context, error);
      }
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
    const contract = node.contract.contract;
    addContractToCurrentScope(context.contractEnvironment, id, contract);
    return {
      value: undefined,
      type: unitType,
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

function apply(
  closure: Closure,
  arg: RuntimeResult,
  context: Context,
): RuntimeResult {
  // check preds for arguments
  if (closure.originalNode.contract) {
    if (isPrimitive(arg.value)) {
      checkPredContract(
        closure.originalNode,
        arg,
        (closure.originalNode.contract as Array<ContractType>)[0],
        context,
      );
    }
  }

  // Replace context environments with function environments
  // Note that unlike JS, where you can define/modify bindings later and have it affect functions define prior,
  // in OCaml/OContract, function environments are fixed upon definition. So we need to do a substitution here.
  const originalEnvironments = context.runtime.environments;
  const functionEnvironment = createFunctionEnvironment(closure, arg);

  context.runtime.environments = [...closure.clonedEnvironments];
  pushEnvironment(context, functionEnvironment);

  const originalNode = closure.originalNode;

  // Means fully evaluated, no currying occurring here
  if (originalNode.params.length === 1) {
    const result = evaluate(originalNode.body, context);
    if (closure.originalNode.contract && isPrimitive(result.value)) {
      const contractList = closure.originalNode.contract as Array<ContractType>;
      checkPredContract(
        closure.originalNode,
        result,
        contractList[contractList.length - 1],
        context,
      );
    }
    // Restore context environments
    context.runtime.environments = originalEnvironments;
    return result;
  }

  const curriedClosure = Closure.createFromLambdaExpression(
    {
      type: 'LambdaExpression',
      params: originalNode.params.slice(1),
      body: originalNode.body,
      contract: closure.originalNode.contract
        ? (closure.originalNode.contract as Array<ContractType>).slice(1)
        : undefined,
      typeDeclaration: closure.getType().returnType as FunctionType,
    },
    context,
  );

  // Restore context environments
  context.runtime.environments = originalEnvironments;
  return { value: curriedClosure, type: curriedClosure.getType() };
}

// HELPER FUNCTIONS

function checkPredContract(
  node: Node,
  val: RuntimeResult,
  contract: ContractType,
  context: Context,
): void {
  const contractExp = evaluate(
    (contract as FlatContractExpression).contract,
    context,
  ).value;

  if (!(contractExp instanceof Closure)) {
    return handleRuntimeError(
      context,
      new InterpreterError(node, 'Expected flat contract for value'),
    );
  } else {
    const check = apply(contractExp, val, context);
    if (check.value === false) {
      return handleRuntimeError(
        context,
        new InterpreterError(node, 'Contract Violation!'),
      );
    }
  }
}

function isPrimitive(test: any): boolean {
  return test !== Object(test);
}

function convertGlobalLetFuncToLambda(
  node: GlobalLetStatement,
): LambdaExpression {
  return {
    type: 'LambdaExpression',
    params: node.params,
    body: node.right,
    typeDeclaration: node.typeDeclaration as FunctionType,
  };
}

function visitNode(context: Context, node: Node): void {
  context.runtime.nodes.unshift(node);
}

function leaveNode(context: Context): void {
  context.runtime.nodes.shift();
}
