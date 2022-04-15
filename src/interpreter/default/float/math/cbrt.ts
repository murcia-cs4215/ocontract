import { floatType, makeFunctionType } from 'types/utils';

import { RuntimeResult } from '../../../../runtimeTypes';
import { DefaultClosure } from '../../../closure';

export const cbrt = new DefaultClosure(
  makeFunctionType(floatType, floatType),
  1,
  (args: RuntimeResult[]): RuntimeResult => {
    return { value: Math.cbrt(args[0].value), type: floatType };
  },
);
