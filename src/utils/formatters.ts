import { SourceError } from 'errors/types';
import { Type } from 'types/types';

import { Finished } from '../runtimeTypes';

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
    result.value = '()';
  }
  if (type === 'float' && Math.floor(result.value) === result.value) {
    result.value = `${result.value}.`;
  }

  const value = result.type.type === 'FunctionType' ? '<fun>' : result.value;

  if (result.name) {
    return `val ${result.name} : ${type} = ${value}`;
  }
  return `- : ${type} = ${value}`;
}

export function formatType(type: Type | Type[]): string {
  if (Array.isArray(type)) {
    return type.map(formatType).join(' or ');
  }
  if (type.type === 'PrimitiveType') {
    return type.valueType;
  }
  return `${formatType(type.parameterType)} -> ${formatType(type.returnType)}`;
}
