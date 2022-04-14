import { exp } from './exp';
import { exp2 } from './exp2';
import { expm1 } from './expm1';
import { log } from './log';
import { log1p } from './log1p';
import { log2 } from './log2';
import { log10 } from './log10';

export const exponentDefaultFunctions = {
  exp: {
    value: exp,
    type: exp.getType(),
  },
  exp2: {
    value: exp2,
    type: exp2.getType(),
  },
  expm1: {
    value: expm1,
    type: expm1.getType(),
  },
  log: {
    value: log,
    type: log.getType(),
  },
  log1p: {
    value: log1p,
    type: log1p.getType(),
  },
  log2: {
    value: log2,
    type: log2.getType(),
  },
  log10: {
    value: log10,
    type: log10.getType(),
  },
};
