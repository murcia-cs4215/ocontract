import { boolType, makeFunctionType, numericType } from 'types/utils';

import { RuntimeResult } from '../../../runtimeTypes';
import { DefaultClosure } from '../../closure';

export const negative = new DefaultClosure(
  makeFunctionType(numericType, boolType),
  1,
  (args: RuntimeResult[]): RuntimeResult => {
    return { value: args[0].value < 0, type: boolType };
  },
);
