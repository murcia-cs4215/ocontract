import { floatType, makeFunctionType, numericType } from 'types/utils';

import { RuntimeResult } from '../../../../../runtimeTypes';
import { DefaultClosure } from '../../../../closure';

export const expm1 = new DefaultClosure(
  makeFunctionType(numericType, floatType),
  1,
  (args: RuntimeResult[]): RuntimeResult => {
    return { value: Math.expm1(args[0].value), type: floatType };
  },
);
