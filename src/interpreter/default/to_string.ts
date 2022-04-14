import { StringWrapper } from 'parser/wrappers';
import { anyType, charType, makeFunctionType, stringType } from 'types/utils';

import { RuntimeResult } from '../../runtimeTypes';
import { DefaultClosure } from '../closure';

export const to_string = new DefaultClosure(
  makeFunctionType(anyType, charType),
  1,
  (args: RuntimeResult[]): RuntimeResult => {
    const value = args[0].value as number | boolean | string | StringWrapper;
    if (value instanceof StringWrapper) {
      return args[0];
    }
    return { value: new StringWrapper(value.toString()), type: stringType };
  },
);
