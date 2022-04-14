import { floatType, makeFunctionType, numericType } from 'types/utils';

import { RuntimeResult } from '../../../../../../runtimeTypes';
import { DefaultClosure } from '../../../../../closure';

export const atan = new DefaultClosure(
  makeFunctionType(numericType, floatType),
  1,
  (args: RuntimeResult[]): RuntimeResult => {
    return { value: Math.atan(args[0].value), type: floatType };
  },
);
