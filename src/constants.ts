import { SourceLocation } from 'parser/types';

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
