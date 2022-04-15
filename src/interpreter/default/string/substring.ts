import assert from 'assert';

import { StringWrapper } from 'parser/wrappers';
import { intType, makeFunctionType, stringType } from 'types/utils';

import { RuntimeResult } from '../../../runtimeTypes';
import { DefaultClosure } from '../../closure';

// TODO: Guard against invalid index and length
export const substring = new DefaultClosure(
  makeFunctionType(stringType, intType, intType, stringType),
  3,
  (args: RuntimeResult[]): RuntimeResult => {
    assert(args[0].value instanceof StringWrapper);
    const value = args[0].value.unwrap();
    const index = args[1].value;
    const length = args[2].value;
    return {
      value: new StringWrapper(value.substring(index, index + length)),
      type: stringType,
    };
  },
);
