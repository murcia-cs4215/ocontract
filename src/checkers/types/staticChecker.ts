/* eslint-disable no-case-declarations */
import { Node, Program } from 'parser/types';
import { formatType } from 'utils/formatters';
import {
  boolType,
  isBool,
  isSameType,
  unitType,
  valueTypeToPrimitive,
} from 'utils/typing';

import { Context, FunctionType, Type, TypeEnvironment } from '../../types';

import { NEGATIVE_OP } from './environment';
import { StaticTypeError } from './errors';

function lookupType(
  name: string,
  env: TypeEnvironment,
): Type | Type[] | undefined {
  for (let i = env.length - 1; i >= 0; i--) {
    if (env[i].typeMap.has(name)) {
      return env[i].typeMap.get(name);
    }
  }
  return undefined;
}

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
    case 'Program':
      let programType: Type = unitType;
      for (const body of node.body) {
        programType = _typeCheck(body, context);
      }
      return programType;

    case 'ExpressionStatement':
      return _typeCheck(node.expression, context);

    case 'Literal':
      return valueTypeToPrimitive[node.valueType];

    case 'Identifier':
      return lookupType(node.name, context.typeEnvironment) as Type;

    case 'UnaryExpression':
      const argument = _typeCheck(node.argument, context);
      const operator = node.operator === '-' ? NEGATIVE_OP : node.operator;
      let unaryTypes = lookupType(operator, context.typeEnvironment) as
        | FunctionType
        | FunctionType[];
      if (!Array.isArray(unaryTypes)) {
        unaryTypes = [unaryTypes];
      }
      for (const pair of unaryTypes) {
        if (isSameType(pair.parameterTypes[0], argument)) {
          return pair.returnType;
        }
      }
      throw new StaticTypeError(
        node.argument,
        formatType(unaryTypes.map((u) => u.parameterTypes[0])),
        formatType(argument),
      );

    case 'BinaryExpression':
      const binaryLeft = _typeCheck(node.left, context);
      const binaryRight = _typeCheck(node.right, context);
      let binaryTypes = lookupType(node.operator, context.typeEnvironment) as
        | FunctionType
        | FunctionType[];
      if (!Array.isArray(binaryTypes)) {
        binaryTypes = [binaryTypes];
      }

      let expectedRight = undefined;
      for (const pair of binaryTypes) {
        if (isSameType(pair.parameterTypes[0], binaryLeft)) {
          if (isSameType(pair.parameterTypes[1], binaryRight)) {
            return pair.returnType;
          }
          if (!expectedRight) {
            expectedRight = pair.parameterTypes[1];
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
        formatType(binaryTypes.map((b) => b.parameterTypes[0])),
        formatType(binaryLeft),
      );

    case 'LogicalExpression':
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

    case 'SequenceExpression':
      let sequenceType: Type = unitType;
      for (const expression of node.expressions) {
        sequenceType = _typeCheck(expression, context);
      }
      return sequenceType;

    case 'ConditionalExpression':
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

    case 'GlobalLetExpression':
      const type = _typeCheck(node.right, context);
      const name = node.left.name;
      context.typeEnvironment[0].typeMap.set(name, type);
      return type;

    case 'EmptyExpression':
    default:
      return unitType;
  }
}
