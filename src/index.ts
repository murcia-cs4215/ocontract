import { start } from 'repl';
import { inspect } from 'util';

import { evaluate } from 'interpreter/interpreter';
import { parse } from 'parser/parser';
import { StringWrapper } from 'parser/wrappers';
import { parseError } from 'utils/errors';

import { Result } from './types';

// TODO: Inject context into run
export function run(code: string): Result {
  try {
    const program = parse(code);
    // TODO: Validate program
    // TODO: Typecheck program
    // TODO: Wrap computation in a scheduler / stepper
    const result = evaluate(program);
    return {
      status: 'finished',
      value: result instanceof StringWrapper ? result.unwrap() : result,
    };
  } catch (e: any) {
    return {
      status: 'errored',
      errors: [e],
    };
  }
}

start({
  eval: (code, _context, _filename, callback) => {
    const result = run(code);
    if (result.status === 'finished') {
      callback(null, result.value);
    } else {
      callback(new Error(parseError(result.errors)), undefined);
    }
  },
  writer: (output) => {
    return inspect(output, {
      depth: 1000,
      colors: true,
    });
  },
});
