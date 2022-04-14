import { floatType, intType, makeFunctionType } from 'types/utils';

import { RuntimeResult } from '../../../runtimeTypes';
import { DefaultClosure } from '../../closure';

export const floor = new DefaultClosure(
  makeFunctionType(floatType, intType),
  1,
  (args: RuntimeResult[]): RuntimeResult => {
    return { value: Math.floor(args[0].value), type: intType };
  },
);
