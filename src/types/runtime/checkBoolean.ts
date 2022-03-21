import { Node } from 'parser/types';
import { formatType } from 'utils/formatters';

import { RuntimeResult } from '../../runtimeTypes';
import { boolType } from '../utils';

import { RuntimeTypeError } from './errors';
import { isBoolResult } from './utils';

export const checkBoolean = (
  node: Node,
  value: RuntimeResult,
  side = '',
): RuntimeTypeError | undefined => {
  if (!isBoolResult(value)) {
    return new RuntimeTypeError(
      node,
      side,
      formatType(boolType),
      formatType(value.type),
    );
  }
};
