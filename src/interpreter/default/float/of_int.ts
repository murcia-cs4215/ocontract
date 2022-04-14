import { floatType, intType, makeFunctionType } from 'types/utils';

import { RuntimeResult } from '../../../runtimeTypes';
import { DefaultClosure } from '../../closure';

export const of_int = new DefaultClosure(
  makeFunctionType(intType, floatType),
  1,
  (args: RuntimeResult[]): RuntimeResult => {
    return { value: args[0].value, type: intType };
  },
);
