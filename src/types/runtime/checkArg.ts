import { RuntimeResult } from 'runtimeTypes';

import { Closure } from 'interpreter/closure';
import { Node } from 'parser/types';
import { isSameType } from 'types/utils';
import { formatType } from 'utils/formatters';

import { RuntimeTypeError } from './errors';

export const checkArgument = (
  node: Node,
  closure: Closure,
  arg: RuntimeResult,
): RuntimeTypeError | undefined => {
  const expectedType = closure.getType().parameterType;
  if (!isSameType(expectedType, arg.type)) {
    return new RuntimeTypeError(
      node,
      '',
      formatType(expectedType),
      formatType(arg.type),
    );
  }
};
