import { anyType, boolType, makeFunctionType } from 'types/utils';

import { RuntimeResult } from '../../runtimeTypes';
import { DefaultClosure } from '../closure';

export const anyFunction = new DefaultClosure(
  makeFunctionType(anyType, boolType),
  1,
  (_args: RuntimeResult[]): RuntimeResult => {
    return { value: true, type: boolType };
  },
);
