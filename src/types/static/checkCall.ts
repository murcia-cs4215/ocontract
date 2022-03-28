import { CallExpression } from 'parser/types';
import { formatType } from 'utils/formatters';

import { Context } from '../../runtimeTypes';
import { FunctionType, Type } from '../types';
import { isSameType } from '../utils';

import {
  NotAFunctionError,
  TooManyArgumentsError,
  TypeMismatchError,
} from './errors';
import { typeCheck } from './index';

export function checkCallExpression(
  node: CallExpression,
  context: Context,
): Type {
  // Two cases to handle here: when all arguments have been supplied vs partial
  const originalFunctionType = typeCheck(node.callee, context);
  if (originalFunctionType.type !== 'FunctionType') {
    throw new NotAFunctionError(formatType(originalFunctionType), node);
  }

  let functionType: Type = originalFunctionType;
  // Assumption: The validator has already handled cases where num args > num params
  for (let i = 0; i < node.arguments.length; i++) {
    if (functionType.type !== 'FunctionType') {
      throw new TooManyArgumentsError(formatType(originalFunctionType), node);
    }
    const expectedType = (functionType as FunctionType).parameterType;
    const argumentType = typeCheck(node.arguments[i], context);
    if (!isSameType(expectedType, argumentType)) {
      throw new TypeMismatchError(
        node.arguments[i],
        formatType(expectedType),
        formatType(argumentType),
      );
    }
    functionType = (functionType as FunctionType).returnType;
  }
  return functionType;
}
