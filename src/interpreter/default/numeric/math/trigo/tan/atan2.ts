import { floatType, makeFunctionType, numericType } from 'types/utils';

import { RuntimeResult } from '../../../../../../runtimeTypes';
import { DefaultClosure } from '../../../../../closure';

export const atan2 = new DefaultClosure(
  makeFunctionType(numericType, numericType, floatType),
  2,
  (args: RuntimeResult[]): RuntimeResult => {
    return { value: Math.atan2(args[0].value, args[1].value), type: floatType };
  },
);
