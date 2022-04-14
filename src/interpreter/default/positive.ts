import { RuntimeResult } from 'runtimeTypes';

import { boolType, makeFunctionType, numericType } from 'types/utils';

import { DefaultClosure } from '../closure';

export const positive = new DefaultClosure(
  makeFunctionType(numericType, boolType),
  1,
  (args: RuntimeResult[]): RuntimeResult => {
    return { value: args[0].value > 0, type: boolType };
  },
);
