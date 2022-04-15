import { Type } from 'types/types';

import { anyFunction } from './any';
import { floatDefaultFunctions } from './float';
import { numericDefaultFunctions } from './numeric';
import { stringDefaultFunctions } from './string';
import { to_string } from './to_string';

export const globalEnvironmentDefaultFunctions = {
  ...floatDefaultFunctions,
  ...numericDefaultFunctions,
  ...stringDefaultFunctions,
  any: {
    value: anyFunction,
    type: anyFunction.getType(),
  },
  to_string: {
    value: to_string,
    type: to_string.getType(),
  },
};

export const globalEnvironmentDefaultFunctionTypes: [string, Type][] =
  Object.entries(globalEnvironmentDefaultFunctions).map(([key, value]) => {
    return [key, value.type];
  });
