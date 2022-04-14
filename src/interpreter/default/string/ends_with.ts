import assert from 'assert';

import { StringWrapper } from 'parser/wrappers';
import { boolType, makeFunctionType, stringType } from 'types/utils';

import { RuntimeResult } from '../../../runtimeTypes';
import { DefaultClosure } from '../../closure';

// NOTE: ends_with A B checks if B ends with A.
export const ends_with = new DefaultClosure(
  makeFunctionType(stringType, stringType, boolType),
  2,
  (args: RuntimeResult[]): RuntimeResult => {
    assert(args[0].value instanceof StringWrapper);
    assert(args[1].value instanceof StringWrapper);
    const suffix = args[0].value.unwrap();
    const str = args[1].value.unwrap();
    return { value: str.endsWith(suffix), type: boolType };
  },
);
