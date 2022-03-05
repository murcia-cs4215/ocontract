import { SourceError } from 'errors/types';

import { Finished, Type } from '../types';

const verboseErrors = false;

export function formatErrorsForRepl(
  errors: SourceError[],
  verbose: boolean = verboseErrors,
): string {
  const errorMessagesArr = errors.map((error) => {
    const line = error.location ? error.location.start.line : '<unknown>';
    const column = error.location ? error.location.start.column : '<unknown>';
    const explanation = error.explain();

    if (verbose) {
      // TODO: Currently elaboration is just tagged on to a new line after the error message itself. Find a better
      // way to display it.
      const elaboration = error.elaborate();
      return `Line ${line}, Column ${column}: ${explanation}\n${elaboration}\n`;
    } else {
      return `Line ${line}, Column ${column}: ${explanation}`;
    }
  });
  return errorMessagesArr.join('\n');
}

export function formatFinishedForRepl(result: Finished): string {
  const type = formatType(result.type);
  if (type === 'unit') {
    return '';
  }
  if (type === 'float' && Math.floor(result.value) === result.value) {
    result.value = `${result.value}.`;
  }
  if (result.name) {
    return `val ${result.name} : ${type} = ${result.value}${
      result.type.kind === 'function' ? ' = <fun>' : ''
    }`;
  }
  return `- : ${type} = ${result.value}`;
}

export function formatType(type: Type): string {
  if (type.kind === 'primitive') {
    return type.type;
  }
  return [...type.parameterTypes, type.returnType]
    .map((t) => (t.kind === 'function' ? `(${formatType(t)})` : formatType(t)))
    .join(' -> ');
}
