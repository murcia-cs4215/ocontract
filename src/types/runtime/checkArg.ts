import { Closure } from 'interpreter/closure';
import { handleRuntimeError } from 'interpreter/errors';
import { Node } from 'parser/types';
import { isSameType } from 'types/utils';
import { formatType } from 'utils/formatters';

import { Context, RuntimeResult } from '../../runtimeTypes';

import { RuntimeTypeError } from './errors';

export const checkArgumentType = (
  node: Node,
  closure: Closure,
  arg: RuntimeResult,
  context: Context,
): void => {
  const expectedType = closure.getType().parameterType;
  if (!isSameType(expectedType, arg.type)) {
    return handleRuntimeError(
      context,
      new RuntimeTypeError(
        node,
        '',
        formatType(expectedType),
        formatType(arg.type),
      ),
    );
  }
};
