import { capitalize } from './capitalize';
import { contains } from './contains';
import { ends_with } from './ends_with';
import { get } from './get';
import { length } from './length';
import { lowercase } from './lowercase';
import { make } from './make';
import { starts_with } from './starts_with';
import { substring } from './substring';
import { uppercase } from './uppercase';

export const stringDefaultFunctions = {
  capitalize: {
    value: capitalize,
    type: capitalize.getType(),
  },
  contains: {
    value: contains,
    type: contains.getType(),
  },
  ends_with: {
    value: ends_with,
    type: ends_with.getType(),
  },
  get: {
    value: get,
    type: get.getType(),
  },
  length: {
    value: length,
    type: length.getType(),
  },
  lowercase: {
    value: lowercase,
    type: lowercase.getType(),
  },
  make: {
    value: make,
    type: make.getType(),
  },
  starts_with: {
    value: starts_with,
    type: starts_with.getType(),
  },
  substring: {
    value: substring,
    type: substring.getType(),
  },
  uppercase: {
    value: uppercase,
    type: uppercase.getType(),
  },
};
