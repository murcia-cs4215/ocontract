import assert from 'assert';

import { StringWrapper } from 'parser/wrappers';
import { intType, makeFunctionType, stringType } from 'types/utils';

import { RuntimeResult } from '../../runtimeTypes';
import { DefaultClosure } from '../closure';

export const length = new DefaultClosure(
  makeFunctionType(stringType, intType),
  1,
  (args: RuntimeResult[]): RuntimeResult => {
    assert(args[0].value instanceof StringWrapper);
    return { value: args[0].value.unwrap().length, type: intType };
  },
);
