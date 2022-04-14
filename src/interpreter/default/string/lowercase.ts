import assert from 'assert';

import { StringWrapper } from 'parser/wrappers';
import { makeFunctionType, stringType } from 'types/utils';

import { RuntimeResult } from '../../../runtimeTypes';
import { DefaultClosure } from '../../closure';

export const lowercase = new DefaultClosure(
  makeFunctionType(stringType, stringType),
  1,
  (args: RuntimeResult[]): RuntimeResult => {
    assert(args[0].value instanceof StringWrapper);
    const value = args[0].value.unwrap();
    return {
      value: new StringWrapper(value.toLocaleLowerCase()),
      type: stringType,
    };
  },
);
