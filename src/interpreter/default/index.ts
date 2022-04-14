import { anyFunction } from './any';
import { positive } from './positive';

export const globalEnvironmentDefaultFunctions = {
  any: {
    value: anyFunction,
    type: anyFunction.getType(),
  },
  positive: {
    value: positive,
    type: positive.getType(),
  },
};
