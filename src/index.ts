import { typeCheck } from 'checkers/types/staticChecker';
import { validate } from 'checkers/types/validator';
import { wrapProgramInMonitor } from 'contracts/contractMonitor';
import { start } from 'repl';
import { inspect } from 'util';

import { evaluate } from 'interpreter/interpreter';
import { parse } from 'parser/parser';
import { StringWrapper } from 'parser/wrappers';
import { formatErrorsForRepl, formatFinishedForRepl } from 'utils/formatters';

import {
  cleanUpContextAfterRun,
  createContext,
  prepareContextForRun,
} from './context';
import { Context, Result } from './types';

export function run(code: string, context: Context): Result {
  try {
    let program = parse(code, context);
    program = validate(program);
    // TODO: Wrap computation in a scheduler / stepper
    typeCheck(program, context);

    prepareContextForRun(context);
    wrapProgramInMonitor(program, context);
    const result = evaluate(program, context);
    cleanUpContextAfterRun(context);

    return {
      ...result,
      status: 'finished',
      value:
        result.value instanceof StringWrapper
          ? result.value.unwrap()
          : result.value,
    };
  } catch (e) {
    cleanUpContextAfterRun(context);
    return { status: 'errored' };
  }
}

function main(): void {
  const context = createContext();
  start({
    eval: (code, _context, _filename, callback) => {
      const result = run(code, context);
      if (result.status === 'finished') {
        callback(null, result);
      } else {
        callback(new Error(formatErrorsForRepl(context.errors)), undefined);
        context.errors = []; // TODO: Clear errors for now, look into a better rollback mechanism
      }
    },
    writer: (output) => {
      if (output instanceof Error) {
        return inspect(output, {
          depth: 1000,
          colors: true,
        });
      }
      return formatFinishedForRepl(output);
    },
  });
}

if (process.env.NODE_ENV !== 'test') {
  main();
}
