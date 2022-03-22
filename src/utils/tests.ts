import { Type } from 'types/types';

import { createContext } from '../context';
import { run } from '../index';
import { Context, Result } from '../runtimeTypes';

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

export function checkContractViolation(context: Context, blame: string): void {
  expect(context.errors).toHaveLength(1);
  expect(context.errors[0].explain()).toContain(
    `Contract Violation!\nBlame: ${blame}`,
  );
}
