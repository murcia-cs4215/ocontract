import { start } from 'repl';
import { inspect } from 'util';

import { evaluate } from 'interpreter/interpreter';
import { parse } from 'parser/parser';
import { StringWrapper } from 'parser/wrappers';
import { parseError } from 'utils/errors';

import { createContext } from './context';
import { Context, Result } from './types';

// TODO: Inject context into run
export function run(code: string, context: Context): Result {
  const program = parse(code, context);
  if (!program) {
    return {
      status: 'errored',
    };
  }
  // TODO: Validate program
  // TODO: Typecheck program
  // TODO: Wrap computation in a scheduler / stepper
  const result = evaluate(program, context);
  return {
    status: 'finished',
    value: result instanceof StringWrapper ? result.unwrap() : result,
  };
}

function main(): void {
  const context = createContext();
  start({
    eval: (code, _context, _filename, callback) => {
      const result = run(code, context);
      if (result.status === 'finished') {
        callback(null, result.value);
      } else {
        callback(new Error(parseError(context.errors)), undefined);
      }
    },
    writer: (output) => {
      return inspect(output, {
        depth: 1000,
        colors: true,
      });
    },
  });
}

main();
