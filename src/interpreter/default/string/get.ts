import assert from 'assert';

import { StringWrapper } from 'parser/wrappers';
import { charType, intType, makeFunctionType, stringType } from 'types/utils';

import { RuntimeResult } from '../../../runtimeTypes';
import { DefaultClosure } from '../../closure';

// TODO: Guard against index out of bounds
export const get = new DefaultClosure(
  makeFunctionType(stringType, intType, charType),
  2,
  (args: RuntimeResult[]): RuntimeResult => {
    assert(args[0].value instanceof StringWrapper);
    const str = args[0].value.unwrap();
    const index = args[1].value;
    return { value: str.charAt(index), type: charType };
  },
);
