import { start } from 'repl';
import { inspect } from 'util';

import { parse } from 'parser/parser';

start({
  eval: (command, _context, _filename, callback) => {
    callback(null, parse(command));
  },
  writer: (output) => {
    return inspect(output, {
      depth: 2,
      colors: true,
    });
  },
});
