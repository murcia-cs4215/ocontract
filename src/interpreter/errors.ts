import { RuntimeSourceError } from 'errors/runtimeSourceError';

import { Node, SourceLocation } from 'parser/types';

import { UNKNOWN_LOCATION } from '../constants';
import { ErrorSeverity, ErrorType, SourceError } from '../errors/types';
import { Context } from '../types';

export class InterpreterError implements SourceError {
  public type = ErrorType.SYNTAX;
  public severity = ErrorSeverity.ERROR;
  public constructor(
    public location: SourceLocation = UNKNOWN_LOCATION,
    public message = 'Unexpected evaluation',
  ) {}

  public explain(): string {
    return this.message;
  }

  public elaborate(): string {
    return 'There is an evaluation error. This is an internal error.';
  }
}

export class UnboundValueError extends RuntimeSourceError {
  constructor(public name: string, node: Node) {
    super(node);
  }

  public explain(): string {
    return `Unbound value ${this.name}`;
  }

  public elaborate(): string {
    return `Before you can read the value of ${this.name}, you need to bind it to a value.`;
  }
}

export function handleRuntimeError(
  context: Context,
  error: RuntimeSourceError,
): never {
  context.errors.push(error);
  context.runtime.environments = context.runtime.environments.slice(
    -context.numberOfOuterEnvironments,
  );
  throw error;
}
