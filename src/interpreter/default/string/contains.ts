import assert from 'assert';

import { StringWrapper } from 'parser/wrappers';
import { boolType, charType, makeFunctionType, stringType } from 'types/utils';

import { RuntimeResult } from '../../../runtimeTypes';
import { DefaultClosure } from '../../closure';

export const contains = new DefaultClosure(
  makeFunctionType(stringType, charType, boolType),
  2,
  (args: RuntimeResult[]): RuntimeResult => {
    assert(args[0].value instanceof StringWrapper);
    const value1 = args[0].value.unwrap();
    return { value: value1.includes(args[1].value as string), type: boolType };
  },
);
