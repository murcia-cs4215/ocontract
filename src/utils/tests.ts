import { Type } from 'parser/types';

import { createContext } from '../context';
import { run } from '../index';
import { Result } from '../types';

import { formatType } from './formatters';

export function runTest(code: string): Result {
  const context = createContext();
  return run(code, context);
}

export function getStaticTypeErrorMessage(
  expected: Type | string,
  got: Type,
): string {
  return `This expression has type ${formatType(
    got,
  )} but an expression was expected of type ${
    typeof expected === 'string' ? expected : formatType(expected)
  }`;
}
