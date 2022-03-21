import { RuntimeResult } from 'runtimeTypes';

import { isBool, isChar, isFloat, isInt, isString } from '../utils';

export const LHS = ' on left hand side of operation';
export const RHS = ' on right hand side of operation';

export const isIntResult = (v: RuntimeResult): boolean =>
  isInt(v.type) && typeof v.value === 'number';
export const isFloatResult = (v: RuntimeResult): boolean =>
  isFloat(v.type) && typeof v.value === 'number';
export const isBoolResult = (v: RuntimeResult): boolean =>
  isBool(v.type) && typeof v.value === 'boolean';
export const isStringResult = (v: RuntimeResult): boolean =>
  isString(v.type) && typeof v.value.value === 'string';
export const isCharResult = (v: RuntimeResult): boolean =>
  isChar(v.type) && typeof v.value === 'string' && v.value.length === 1;
