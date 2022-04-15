import { boolType, floatType, makeFunctionType } from 'types/utils';

import { RuntimeResult } from '../../../runtimeTypes';
import { DefaultClosure } from '../../closure';

export const is_nan = new DefaultClosure(
  makeFunctionType(floatType, boolType),
  1,
  (args: RuntimeResult[]): RuntimeResult => {
    return { value: Number.isNaN(args[0].value), type: boolType };
  },
);
