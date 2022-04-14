import { negative } from './negative';
import { positive } from './positive';
import { zero } from './zero';

export const numericDefaultFunctions = {
  positive: {
    value: positive,
    type: positive.getType(),
  },
  negative: {
    value: negative,
    type: negative.getType(),
  },
  zero: {
    value: zero,
    type: zero.getType(),
  },
};
