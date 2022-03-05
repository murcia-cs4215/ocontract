import { RuntimeSourceError } from 'errors/runtimeSourceError';

import { Node } from 'parser/types';

import { ErrorSeverity, ErrorType } from '../errors/types';
import { Context } from '../types';

export class InterpreterError extends RuntimeSourceError {
  public type = ErrorType.SYNTAX;
  public severity = ErrorSeverity.ERROR;
  public constructor(
    public node: Node,
    public message = 'Unexpected evaluation',
  ) {
    super(node);
  }

  public explain(): string {
    return this.message;
  }

  public elaborate(): string {
    return 'There is an evaluation error. This is an internal error - likely, the interpretation of this type of expression is not yet implemented.';
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

export class TooManyArgumentsError extends RuntimeSourceError {
  constructor(public functionType: string, node: Node) {
    super(node);
  }

  public explain(): string {
    return `This function has type ${this.functionType}`;
  }

  public elaborate(): string {
    return "It is applied to too many arguments; maybe you forgot a `;'.";
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
