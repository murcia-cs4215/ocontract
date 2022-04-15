import { floatType, makeFunctionType } from 'types/utils';

import { RuntimeResult } from '../../../../../runtimeTypes';
import { DefaultClosure } from '../../../../closure';

export const hypot = new DefaultClosure(
  makeFunctionType(floatType, floatType, floatType),
  2,
  (args: RuntimeResult[]): RuntimeResult => {
    if (!Number.isFinite(args[0].value) || !Number.isFinite(args[1].value)) {
      return { value: Infinity, type: floatType };
    }
    return { value: Math.hypot(args[0].value, args[1].value), type: floatType };
  },
);
