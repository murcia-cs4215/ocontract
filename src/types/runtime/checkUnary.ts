import { RuntimeResult } from 'runtimeTypes';

import { Node, UnaryOperator } from 'parser/types';
import { boolType, floatType, intType } from 'types/utils';
import { formatType } from 'utils/formatters';

import { RuntimeTypeError } from './errors';
import { isBoolResult, isFloatResult, isIntResult } from './utils';

export const checkUnaryExpression = (
  node: Node,
  operator: UnaryOperator,
  value: RuntimeResult,
): RuntimeTypeError | undefined => {
  if (operator === '-' && !isIntResult(value) && !isFloatResult(value)) {
    return new RuntimeTypeError(
      node,
      '',
      formatType([intType, floatType]),
      formatType(value.type),
    );
  } else if (operator === 'not' && !isBoolResult(value)) {
    return new RuntimeTypeError(
      node,
      '',
      formatType(boolType),
      formatType(value.type),
    );
  }
};
