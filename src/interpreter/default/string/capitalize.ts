import assert from 'assert';

import { StringWrapper } from 'parser/wrappers';
import { makeFunctionType, stringType } from 'types/utils';

import { RuntimeResult } from '../../../runtimeTypes';
import { DefaultClosure } from '../../closure';

export const capitalize = new DefaultClosure(
  makeFunctionType(stringType, stringType),
  1,
  (args: RuntimeResult[]): RuntimeResult => {
    assert(args[0].value instanceof StringWrapper);
    const value = args[0].value.unwrap();
    if (value.length === 0) {
      return args[0];
    }
    const newValue = value[0].toLocaleUpperCase() + value.substring(1);
    return { value: new StringWrapper(newValue), type: stringType };
  },
);
