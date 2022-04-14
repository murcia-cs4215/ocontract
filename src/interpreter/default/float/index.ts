import { ceil } from './ceil';
import { floor } from './floor';
import { round } from './round';

export const floatDefaultFunctions = {
  ceil: {
    value: ceil,
    type: ceil.getType(),
  },
  floor: {
    value: floor,
    type: floor.getType(),
  },
  round: {
    value: round,
    type: round.getType(),
  },
};
