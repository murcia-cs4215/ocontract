import { floatType, makeFunctionType } from 'types/utils';

import { RuntimeResult } from '../../../../../runtimeTypes';
import { DefaultClosure } from '../../../../closure';

export const log1p = new DefaultClosure(
  makeFunctionType(floatType, floatType),
  1,
  (args: RuntimeResult[]): RuntimeResult => {
    return { value: Math.log1p(args[0].value), type: floatType };
  },
);
