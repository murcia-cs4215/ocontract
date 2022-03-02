/* eslint-disable no-case-declarations */
/* eslint-disable no-fallthrough */
import { Node, Program } from 'parser/types';

import {
  Context,
  FunctionType,
  Primitive,
  Type,
  TypeEnvironment,
} from '../../types';

import {
  boolType,
  charType,
  floatType,
  intType,
  NEGATIVE_OP,
  stringType,
  unitType,
} from './environment';
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

function isSameType(type1: Type, type2: Type): boolean {
  if (type1.kind !== type2.kind) {
    return false;
  }
  if (type1.kind === 'function' && type2.kind === 'function') {
    return (
      type1.parameterTypes.length === type2.parameterTypes.length &&
      type1.parameterTypes.every((param, index) =>
        isSameType(param, type2.parameterTypes[index]),
      ) &&
      isSameType(type1.returnType, type2.returnType)
    );
  }
  return type1 === type2;
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
      switch (node.valueType) {
        case 'string':
          return stringType;
        case 'int':
          return intType;
        case 'float':
          return floatType;
        case 'char':
          return charType;
        case 'bool':
          return boolType;
      }

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
        unaryTypes
          .map((f) => (f.parameterTypes[0] as Primitive).type)
          .join(' or '),
        'type' in argument ? argument.type : 'function',
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
          expectedRight = pair.parameterTypes[1];
        }
      }

      if (expectedRight) {
        throw new StaticTypeError(
          node.right,
          'type' in expectedRight ? expectedRight.type : 'function',
          'type' in binaryRight ? binaryRight.type : 'function',
        );
      }
      throw new StaticTypeError(
        node.left,
        binaryTypes
          .map((f) => (f.parameterTypes[0] as Primitive).type)
          .join(' or '),
        'type' in binaryLeft ? binaryLeft.type : 'function',
      );

    case 'LogicalExpression':
      const logicalLeft = _typeCheck(node.left, context);
      if (logicalLeft.kind !== 'primitive' || logicalLeft.type !== 'bool') {
        throw new StaticTypeError(
          node.left,
          'bool',
          'type' in logicalLeft ? logicalLeft.type : 'function',
        );
      }
      const logicalRight = _typeCheck(node.right, context);
      if (logicalRight.kind !== 'primitive' || logicalRight.type !== 'bool') {
        throw new StaticTypeError(
          node.right,
          'bool',
          'type' in logicalRight ? logicalRight.type : 'function',
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
      if (test.kind !== 'primitive' || test.type !== 'bool') {
        throw new StaticTypeError(
          node.test,
          'bool',
          'type' in test ? test.type : 'function',
        );
      }
      const consequent = _typeCheck(node.consequent, context);
      const alternate = _typeCheck(node.alternate, context);
      if (
        consequent.kind !== alternate.kind ||
        (consequent.kind === 'primitive' &&
          alternate.kind === 'primitive' &&
          consequent.type !== alternate.type)
      ) {
        throw new StaticTypeError(
          node.alternate,
          consequent.kind === 'function' ? consequent.kind : consequent.type,
          'type' in alternate ? alternate.type : 'function',
        );
      }
      return consequent;

    case 'EmptyExpression':
      return unitType;
  }
}
