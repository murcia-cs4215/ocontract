import assert from 'assert';

import { Type } from 'types/types';

import { createContext } from '../context';
import { run } from '../index';
import { Result } from '../runtimeTypes';

import { formatType } from './formatters';

export function runTest(code: string): Result {
  const context = createContext();
  return run(code, context);
}

export function assertError(
  result: Result,
  explainMessage: string,
  elaborateMessage?: string,
): void {
  expect(result.status).toBe('errored');
  assert('error' in result);
  expect(result.error.explain()).toBe(explainMessage);
  if (elaborateMessage) {
    expect(result.error.elaborate()).toBe(elaborateMessage);
  }
}

export function assertTypeError(
  result: Result,
  expected: Type | string,
  got: Type,
): void {
  assertError(
    result,
    `This expression has type ${formatType(
      got,
    )} but an expression was expected of type ${
      typeof expected === 'string' ? expected : formatType(expected)
    }`,
  );
}

export function assertContractViolation(
  result: Result,
  blame: string,
  row: number,
  col: number,
): void {
  assertError(
    result,
    `Contract Violation!\nBlame: ${blame}\nSource of blame: Line ${row}, Column ${col}`,
  );
}
