import { cbrt } from './cbrt';
import { exponentDefaultFunctions } from './exp';
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
};
