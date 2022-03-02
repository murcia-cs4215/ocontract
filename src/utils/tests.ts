import { createContext } from '../context';
import { run } from '../index';
import { Result } from '../types';

export function runTest(code: string): Result {
  const context = createContext();
  return run(code, context);
}
