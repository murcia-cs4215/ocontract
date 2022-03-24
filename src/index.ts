import { readFileSync } from 'fs';
import { start } from 'repl';
import { inspect } from 'util';

import { SourceError } from 'errors/types';
import { evaluate } from 'interpreter/interpreter';
import { parse } from 'parser/parser';
import { StringWrapper } from 'parser/wrappers';
import { typeCheck } from 'types/static';
import { formatErroredForRepl, formatFinishedForRepl } from 'utils/formatters';

import {
  cleanUpContextAfterRun,
  createContext,
  prepareContextForRun,
} from './context';
import { Context, Result } from './runtimeTypes';

export function run(code: string, context: Context): Result {
  try {
    const program = parse(code);
    // TODO: Wrap computation in a scheduler / stepper
    typeCheck(program, context);

    prepareContextForRun(context);
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
  } catch (error) {
    cleanUpContextAfterRun(context);
    return { status: 'errored', error: error as SourceError };
  }
}

function main(): void {
  const context = createContext();
  if (process.argv[2]) {
    const code = readFileSync(process.argv[2], 'utf-8');
    const result = run(code, context);
    if (result.status === 'errored') {
      console.log(formatErroredForRepl(result));
    } else {
      console.log(formatFinishedForRepl(result));
    }
    return;
  }

  start({
    eval: (code, _context, _filename, callback) => {
      const result = run(code, context);
      if (result.status === 'finished') {
        callback(null, result);
      } else {
        callback(new Error(formatErroredForRepl(result)), undefined);
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
