import { is_nan } from './is_nan';
import { mathDefaultFunctions } from './math';
import { of_int } from './of_int';
import { to_int } from './to_int';

export const floatDefaultFunctions = {
  ...mathDefaultFunctions,
  is_nan: {
    value: is_nan,
    type: is_nan.getType(),
  },
  of_int: {
    value: of_int,
    type: of_int.getType(),
  },
  to_int: {
    value: to_int,
    type: to_int.getType(),
  },
};
