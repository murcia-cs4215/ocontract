import { SourceLocation } from 'parser/types';
import { makePrimitive } from 'utils/typing';

import { Primitive } from './types';

export const GLOBAL = typeof window === 'undefined' ? global : window;
export const UNKNOWN_LOCATION: SourceLocation = {
  start: {
    line: -1,
    column: -1,
  },
  end: {
    line: -1,
    column: -1,
  },
};

export const intType = makePrimitive('int');
export const floatType = makePrimitive('float');
export const boolType = makePrimitive('bool');
export const stringType = makePrimitive('string');
export const charType = makePrimitive('char');
export const unitType = makePrimitive('unit');

export const primitiveTypes = [
  intType,
  floatType,
  boolType,
  stringType,
  charType,
  unitType,
];

export const valueTypeToPrimitive: { [valueType: string]: Primitive } = {
  int: intType,
  float: floatType,
  bool: boolType,
  string: stringType,
  char: charType,
};
