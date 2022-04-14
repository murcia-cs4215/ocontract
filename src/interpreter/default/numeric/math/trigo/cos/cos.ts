import { floatType, makeFunctionType, numericType } from 'types/utils';

import { RuntimeResult } from '../../../../../../runtimeTypes';
import { DefaultClosure } from '../../../../../closure';

export const cos = new DefaultClosure(
  makeFunctionType(numericType, floatType),
  1,
  (args: RuntimeResult[]): RuntimeResult => {
    return { value: Math.cos(args[0].value), type: floatType };
  },
);
