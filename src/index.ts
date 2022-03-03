import { typeCheck } from 'checkers/types/staticChecker';
import { validate } from 'checkers/types/validator';
import { start } from 'repl';
import { inspect } from 'util';

import { evaluate } from 'interpreter/interpreter';
import { parse } from 'parser/parser';
import { StringWrapper } from 'parser/wrappers';
import { parseError } from 'utils/errors';
import { formatFinishedForRepl } from 'utils/formatters';

import { createContext } from './context';
import { Context, Result } from './types';

// TODO: Inject context into run
export function run(code: string, context: Context): Result {
  try {
    let program = parse(code, context);
    program = validate(program);
    // TODO: Wrap computation in a scheduler / stepper
    typeCheck(program, context);
    const result = evaluate(program, context);
    return {
      status: 'finished',
      type: result.type,
      value:
        result.value instanceof StringWrapper
          ? result.value.unwrap()
          : result.value,
    };
  } catch {
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
        callback(new Error(parseError(context.errors)), undefined);
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
