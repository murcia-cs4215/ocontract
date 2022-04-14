import assert from 'assert';

import { StringWrapper } from 'parser/wrappers';
import { boolType, makeFunctionType, stringType } from 'types/utils';

import { RuntimeResult } from '../../../runtimeTypes';
import { DefaultClosure } from '../../closure';

// NOTE: starts_with A B checks if B starts with A.
export const starts_with = new DefaultClosure(
  makeFunctionType(stringType, stringType, boolType),
  2,
  (args: RuntimeResult[]): RuntimeResult => {
    assert(args[0].value instanceof StringWrapper);
    assert(args[1].value instanceof StringWrapper);
    const prefix = args[0].value.unwrap();
    const str = args[1].value.unwrap();
    return { value: str.startsWith(prefix), type: boolType };
  },
);
