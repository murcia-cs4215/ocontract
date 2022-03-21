import { Context } from 'runtimeTypes';

import { Node, Program } from 'parser/types';
import { unitType, valueTypeToPrimitive } from 'types/utils';

import { Type } from '../types';

import { checkBinaryExpression } from './checkBinary';
import { checkCallExpression } from './checkCall';
import { checkConditionalExpression } from './checkConditional';
import { checkGlobalLetStatement } from './checkGlobalLet';
import { checkIdentifier } from './checkIdentifier';
import { checkLambdaExpression } from './checkLambda';
import { checkLocalLetExpression } from './checkLocalLet';
import { checkLogicalExpression } from './checkLogical';
import { checkProgram } from './checkProgram';
import { checkUnaryExpression } from './checkUnary';
import { StaticTypeError } from './errors';

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

export function _typeCheck(node: Node, context: Context): Type {
  switch (node.type) {
    case 'BinaryExpression':
      return checkBinaryExpression(node, context);
    case 'CallExpression':
      return checkCallExpression(node, context);
    case 'ConditionalExpression':
      return checkConditionalExpression(node, context);
    case 'ContractDeclarationStatement':
    case 'ContractExpression':
    case 'EmptyExpression':
      return unitType; // We won't type contract stuff for now
    case 'ExpressionStatement':
      return _typeCheck(node.expression, context);
    case 'GlobalLetStatement':
      return checkGlobalLetStatement(node, context);
    case 'Identifier':
      return checkIdentifier(node, context);
    case 'LambdaExpression':
      return checkLambdaExpression(node, context); // TODO
    case 'Literal':
      return valueTypeToPrimitive[node.valueType];
    case 'LocalLetExpression':
      return checkLocalLetExpression(node, context);
    case 'LogicalExpression':
      return checkLogicalExpression(node, context);
    case 'Program':
      return checkProgram(node, context);
    case 'UnaryExpression':
      return checkUnaryExpression(node, context);
  }
  return unitType;
}
