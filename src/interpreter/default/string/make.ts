import { StringWrapper } from 'parser/wrappers';
import { charType, intType, makeFunctionType, stringType } from 'types/utils';

import { RuntimeResult } from '../../../runtimeTypes';
import { DefaultClosure } from '../../closure';

// TODO: Guard against index out of bounds
export const make = new DefaultClosure(
  makeFunctionType(intType, charType, stringType),
  2,
  (args: RuntimeResult[]): RuntimeResult => {
    const length = args[0].value as number;
    const char = args[1].value as string;
    return { value: new StringWrapper(char.repeat(length)), type: stringType };
  },
);
