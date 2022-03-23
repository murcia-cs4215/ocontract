import { handleRuntimeError } from 'interpreter/errors';
import { Node } from 'parser/types';
import { formatType } from 'utils/formatters';

import { Context, RuntimeResult } from '../../runtimeTypes';
import { boolType } from '../utils';

import { RuntimeTypeError } from './errors';
import { isBoolResult } from './utils';

export const checkBoolean = (
  node: Node,
  value: RuntimeResult,
  side = '',
  context: Context,
): void => {
  if (!isBoolResult(value)) {
    return handleRuntimeError(
      context,
      new RuntimeTypeError(
        node,
        side,
        formatType(boolType),
        formatType(value.type),
      ),
    );
  }
};
