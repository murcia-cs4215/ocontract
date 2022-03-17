/* eslint-disable no-case-declarations */
import assert from 'assert';

import {
  BinaryExpression,
  CallExpression,
  ConditionalExpression,
  FunctionType,
  GlobalLetStatement,
  LambdaExpression,
  LogicalExpression,
  Node,
  Program,
  Type,
  UnaryExpression,
} from 'parser/types';
import { formatType } from 'utils/formatters';

import { Context } from '../../types';

import {
  createLocalTypeEnvironment,
  getType,
  NEGATIVE_OP,
  popTypeEnvironment,
  pushTypeEnvironment,
  setType,
} from './environment';
import { StaticTypeError } from './errors';
import {
  boolType,
  isBool,
  isSameType,
  unitType,
  valueTypeToPrimitive,
} from './utils';

export function typeCheck(program: Program, context: Context): void {
  try {
    _typeCheck(program, context);
  } catch (e) {
    if (e instanceof StaticTypeError) {
      context.errors.push(e);
    }
    throw e;
  }
}

// Assumption: All primitive types will utilise the same instances.
function _typeCheck(node: Node, context: Context): Type {
  switch (node.type) {
    case 'BinaryExpression':
      return _typeCheckBinaryExpression(node, context);
    case 'CallExpression':
      return _typeCheckCallExpression(node, context);
    case 'ConditionalExpression':
      return _typeCheckConditionalExpression(node, context);
    case 'ContractDeclarationStatement':
    case 'ContractExpression':
    case 'EmptyExpression':
      return unitType; // We won't type contract stuff for now
    case 'ExpressionStatement':
      return _typeCheck(node.expression, context);
    case 'GlobalLetStatement':
      return _typeCheckGlobalLetStatement(node, context);
    case 'Identifier':
      return getType(context, node.name) as Type;
    case 'LambdaExpression':
      return _typeCheckLambdaExpression(node, context); // TODO
    case 'Literal':
      return valueTypeToPrimitive[node.valueType];
    case 'LocalLetExpression':
      const localLetEnvironment = createLocalTypeEnvironment();
      pushTypeEnvironment(context, localLetEnvironment);
      _typeCheck(node.left, context); // let the global bindings happen
      const type = _typeCheck(node.right, context); // TODO: Check if we should return this type
      popTypeEnvironment(context);
      return type;
    case 'LogicalExpression':
      return _typeCheckLogicalExpression(node, context);
    case 'Program':
      let programType: Type = unitType;
      for (const body of node.body) {
        programType = _typeCheck(body, context);
      }
      return programType;
    case 'UnaryExpression':
      return _typeCheckUnaryExpression(node, context);
  }
  return unitType;
}

function _typeCheckBinaryExpression(
  node: BinaryExpression,
  context: Context,
): Type {
  const binaryLeft = _typeCheck(node.left, context);
  const binaryRight = _typeCheck(node.right, context);
  let binaryTypes = getType(context, node.operator) as
    | FunctionType
    | FunctionType[];
  if (!Array.isArray(binaryTypes)) {
    binaryTypes = [binaryTypes];
  }

  let expectedRight = undefined;
  for (const pair of binaryTypes) {
    if (isSameType(pair.parameterType, binaryLeft)) {
      const resultType = pair.returnType as FunctionType;
      if (isSameType(resultType.parameterType, binaryRight)) {
        return resultType.returnType;
      }
      if (!expectedRight) {
        expectedRight = resultType.parameterType;
      }
    }
  }

  if (expectedRight) {
    throw new StaticTypeError(
      node.right,
      formatType(expectedRight),
      formatType(binaryRight),
    );
  }
  throw new StaticTypeError(
    node.left,
    formatType(binaryTypes.map((b) => b.parameterType)),
    formatType(binaryLeft),
  );
}

function _typeCheckUnaryExpression(
  node: UnaryExpression,
  context: Context,
): Type {
  const argument = _typeCheck(node.argument, context);
  const operator = node.operator === '-' ? NEGATIVE_OP : node.operator;
  let unaryTypes = getType(context, operator) as FunctionType | FunctionType[];
  if (!Array.isArray(unaryTypes)) {
    unaryTypes = [unaryTypes];
  }
  for (const pair of unaryTypes) {
    if (isSameType(pair.parameterType, argument)) {
      return pair.returnType;
    }
  }
  throw new StaticTypeError(
    node.argument,
    formatType(unaryTypes.map((u) => u.parameterType)),
    formatType(argument),
  );
}

function _typeCheckLogicalExpression(
  node: LogicalExpression,
  context: Context,
): Type {
  const logicalLeft = _typeCheck(node.left, context);
  if (!isBool(logicalLeft)) {
    throw new StaticTypeError(
      node.left,
      formatType(boolType),
      formatType(logicalLeft),
    );
  }
  const logicalRight = _typeCheck(node.right, context);
  if (!isBool(logicalRight)) {
    throw new StaticTypeError(
      node.right,
      formatType(boolType),
      formatType(logicalRight),
    );
  }
  return logicalLeft;
}

function _typeCheckConditionalExpression(
  node: ConditionalExpression,
  context: Context,
): Type {
  const test = _typeCheck(node.test, context);
  if (!isBool(test)) {
    throw new StaticTypeError(
      node.test,
      formatType(boolType),
      formatType(test),
    );
  }
  const consequent = _typeCheck(node.consequent, context);
  const alternate = _typeCheck(node.alternate, context);
  if (!isSameType(consequent, alternate)) {
    throw new StaticTypeError(
      node.alternate,
      formatType(consequent),
      formatType(alternate),
    );
  }
  return consequent;
}

function _typeCheckCallExpression(
  node: CallExpression,
  context: Context,
): Type {
  // Two cases to handle here: when all arguments have been supplied vs partial
  let functionType = _typeCheck(node.callee, context);

  // Assumption: The validator has already handled cases where num args > num params
  for (let i = 0; i < node.arguments.length; i++) {
    const expectedType = (functionType as FunctionType).parameterType;
    const argumentType = _typeCheck(node.arguments[i], context);
    if (!isSameType(expectedType, argumentType)) {
      throw new StaticTypeError(
        node.arguments[i],
        formatType(expectedType),
        formatType(argumentType),
      );
    }
    functionType = (functionType as FunctionType).returnType;
  }
  return functionType;
}

function _typeCheckGlobalLetStatement(
  node: GlobalLetStatement,
  context: Context,
): Type {
  const name = node.left.name;
  const declaredType = node.typeDeclaration;
  let type;
  let expectedType;

  if (node.params.length === 0) {
    let recursiveEnvironment;
    if (node.recursive) {
      recursiveEnvironment = createLocalTypeEnvironment();
      pushTypeEnvironment(context, recursiveEnvironment);
      setType(context, name, declaredType);
    }
    type = _typeCheck(node.right, context);

    if (node.recursive) {
      const poppedEnvironment = popTypeEnvironment(context);
      assert(poppedEnvironment === recursiveEnvironment);
    }

    expectedType = declaredType;
  } else {
    const functionEnvironment = createLocalTypeEnvironment();
    pushTypeEnvironment(context, functionEnvironment);
    let functionType = declaredType;
    for (let i = 0; i < node.params.length; i++) {
      setType(
        context,
        node.params[i].name,
        (functionType as FunctionType).parameterType,
      );
      functionType = (functionType as FunctionType).returnType;
    }
    if (node.recursive) {
      setType(context, name, declaredType);
    }
    type = _typeCheck(node.right, context);

    const poppedEnvironment = popTypeEnvironment(context);
    assert(poppedEnvironment === functionEnvironment);

    expectedType = functionType;
  }

  if (!isSameType(expectedType, type)) {
    throw new StaticTypeError(node, formatType(expectedType), formatType(type));
  }
  setType(context, name, declaredType);
  return unitType; // update this for functions
}

function _typeCheckLambdaExpression(
  node: LambdaExpression,
  context: Context,
): Type {
  const lambdaEnvironment = createLocalTypeEnvironment();
  pushTypeEnvironment(context, lambdaEnvironment);

  let lambdaType: Type = node.typeDeclaration;
  for (let i = 0; i < node.params.length; i++) {
    setType(
      context,
      node.params[i].name,
      (lambdaType as FunctionType).parameterType,
    );
    lambdaType = (lambdaType as FunctionType).returnType;
  }

  const returnType = _typeCheck(node.body, context);
  const poppedEnvironment = popTypeEnvironment(context);
  assert(poppedEnvironment === lambdaEnvironment);

  if (!isSameType(lambdaType, returnType)) {
    throw new StaticTypeError(
      node,
      formatType(lambdaType),
      formatType(returnType),
    );
  }

  return node.typeDeclaration;
}
