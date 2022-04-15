import { floatType, intType, makeFunctionType } from 'types/utils';

import { RuntimeResult } from '../../../runtimeTypes';
import { DefaultClosure } from '../../closure';

export const to_int = new DefaultClosure(
  makeFunctionType(floatType, intType),
  1,
  (args: RuntimeResult[]): RuntimeResult => {
    if (
      Number.isNaN(args[0].value) ||
      args[0].value === Infinity ||
      args[0].value === -Infinity
    ) {
      return { value: 0, type: intType };
    }
    return { value: Math.trunc(args[0].value), type: intType };
  },
);
