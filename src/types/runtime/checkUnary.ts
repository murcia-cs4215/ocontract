import { handleRuntimeError } from 'interpreter/errors';
import { Node, UnaryOperator } from 'parser/types';
import { boolType, floatType, intType } from 'types/utils';
import { formatType } from 'utils/formatters';

import { Context, RuntimeResult } from '../../runtimeTypes';

import { RuntimeTypeError } from './errors';
import { isBoolResult, isFloatResult, isIntResult } from './utils';

export const checkUnaryExpressionType = (
  node: Node,
  operator: UnaryOperator,
  value: RuntimeResult,
  context: Context,
): void => {
  if (operator === '-' && !isIntResult(value) && !isFloatResult(value)) {
    return handleRuntimeError(
      context,
      new RuntimeTypeError(
        node,
        '',
        formatType([intType, floatType]),
        formatType(value.type),
      ),
    );
  } else if (operator === 'not' && !isBoolResult(value)) {
    return handleRuntimeError(
      context,
      new RuntimeTypeError(
        node,
        '',
        formatType(boolType),
        formatType(value.type),
      ),
    );
  }
};
