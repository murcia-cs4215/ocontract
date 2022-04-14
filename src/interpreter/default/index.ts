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
