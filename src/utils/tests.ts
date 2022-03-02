import { createContext } from '../context';
import { run } from '../index';
import { Result } from '../types';

export function runTest(code: string): Result {
  const context = createContext();
  return run(code, context);
}

export function getStaticTypeErrorMessage(
  expected: string,
  got: string,
): string {
  return `This expression has type ${got} but an expression was expected of type ${expected}`;
}
