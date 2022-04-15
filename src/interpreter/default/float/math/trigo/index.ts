import { acos } from './cos/acos';
import { acosh } from './cos/acosh';
import { cos } from './cos/cos';
import { cosh } from './cos/cosh';
import { asin } from './sin/asin';
import { asinh } from './sin/asinh';
import { sin } from './sin/sin';
import { sinh } from './sin/sinh';
import { atan } from './tan/atan';
import { atan2 } from './tan/atan2';
import { atanh } from './tan/atanh';
import { tan } from './tan/tan';
import { tanh } from './tan/tanh';
import { hypot } from './hypot';

export const trigoDefaultFunctions = {
  // cos functions
  acos: {
    value: acos,
    type: acos.getType(),
  },
  acosh: {
    value: acosh,
    type: acosh.getType(),
  },
  cos: {
    value: cos,
    type: cos.getType(),
  },
  cosh: {
    value: cosh,
    type: cosh.getType(),
  },

  // sin functions
  asin: {
    value: asin,
    type: asin.getType(),
  },
  asinh: {
    value: asinh,
    type: asinh.getType(),
  },
  sin: {
    value: sin,
    type: sin.getType(),
  },
  sinh: {
    value: sinh,
    type: sinh.getType(),
  },

  // tan functions
  atan: {
    value: atan,
    type: atan.getType(),
  },
  atan2: {
    value: atan2,
    type: atan2.getType(),
  },
  atanh: {
    value: atanh,
    type: atanh.getType(),
  },
  tan: {
    value: tan,
    type: tan.getType(),
  },
  tanh: {
    value: tanh,
    type: tanh.getType(),
  },

  // General
  hypot: {
    value: hypot,
    type: hypot.getType(),
  },
};
