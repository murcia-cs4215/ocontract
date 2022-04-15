import { cbrt } from './cbrt';
import { ceil } from './ceil';
import { exponentDefaultFunctions } from './exp';
import { floor } from './floor';
import { round } from './round';
import { sqrt } from './sqrt';
import { trigoDefaultFunctions } from './trigo';

export const mathDefaultFunctions = {
  ...exponentDefaultFunctions,
  ...trigoDefaultFunctions,
  sqrt: {
    value: sqrt,
    type: sqrt.getType(),
  },
  cbrt: {
    value: cbrt,
    type: cbrt.getType(),
  },
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
