import { StringWrapper } from 'parser/wrappers';
import { Type } from 'types/types';
import { isJoinedType, isPrimitiveType } from 'types/utils';

import { Errored, Finished } from '../runtimeTypes';

const verboseErrors = false;

export function formatErroredForRepl(
  result: Errored,
  verbose: boolean = verboseErrors,
): string {
  const error = result.error;
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
}

export function formatFinishedForRepl(result: Finished): string {
  const type = formatType(result.type);
  switch (type) {
    case 'unit':
      result.value = '()';
      break;
    case 'float':
      if (Number.isNaN(result.value)) {
        result.value = 'nan';
      } else if (result.value === Infinity) {
        result.value = 'infinity';
      } else if (result.value === -Infinity) {
        result.value = 'neg_infinity';
      } else if (Number.isInteger(result.value)) {
        result.value = `${result.value}.`;
      }
      break;
    case 'int':
      if (
        Number.isNaN(result.value) ||
        result.value === Infinity ||
        result.value === -Infinity
      ) {
        result.value = 0;
      }
      break;
    case 'string':
      if (result.value instanceof StringWrapper) {
        result.value = `"${result.value.unwrap()}"`;
      }
      break;
    case 'char':
      if (typeof result.value === 'string') {
        result.value = `'${result.value}'`;
      }
      break;
  }

  let value;
  if (
    typeof result.value === 'object' &&
    'type' in result.value &&
    (result.value.type === 'FlatContract' ||
      result.value.type === 'FunctionContract')
  ) {
    value = '<contract>';
  } else {
    value = result.type.type === 'FunctionType' ? '<fun>' : result.value;
  }

  if (result.name) {
    return `val ${result.name} : ${type} = ${value}`;
  }
  return `- : ${type} = ${value}`;
}

export function formatType(type: Type | Type[]): string {
  if (Array.isArray(type)) {
    return type.map(formatType).join(' or ');
  }
  if (isPrimitiveType(type) || isJoinedType(type)) {
    return type.valueType;
  }
  let parameterType = formatType(type.parameterType);
  if (type.parameterType.type === 'FunctionType') {
    parameterType = `(${parameterType})`;
  }
  return `${parameterType} -> ${formatType(type.returnType)}`;
}
