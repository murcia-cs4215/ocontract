import { StringWrapper } from 'parser/wrappers';
import { Type } from 'types/types';
import { floatType, stringType } from 'types/utils';

export const globalEnvironmentDefaultConstants = {
  infinity: {
    value: Infinity,
    type: floatType,
  },
  neg_infinity: {
    value: -Infinity,
    type: floatType,
  },
  nan: {
    value: Number.NaN,
    type: floatType,
  },
  pi: {
    value: Math.PI,
    type: floatType,
  },
  empty: {
    value: new StringWrapper(''),
    type: stringType,
  },
};

export const globalEnvironmentDefaultConstantTypes: [string, Type][] =
  Object.entries(globalEnvironmentDefaultConstants).map(([key, value]) => {
    return [key, value.type];
  });
