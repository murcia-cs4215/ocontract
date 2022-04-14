import { Type } from 'types/types';

import { anyFunction } from './any';
import { floatDefaultFunctions } from './float';
import { numericDefaultFunctions } from './numeric';
import { stringDefaultFunctions } from './string';

export const globalEnvironmentDefaultFunctions = {
  ...floatDefaultFunctions,
  ...numericDefaultFunctions,
  ...stringDefaultFunctions,
  any: {
    value: anyFunction,
    type: anyFunction.getType(),
  },
};

export const globalEnvironmentDefaultFunctionTypes: [string, Type][] =
  Object.entries(globalEnvironmentDefaultFunctions).map(([key, value]) => {
    return [key, value.type];
  });
