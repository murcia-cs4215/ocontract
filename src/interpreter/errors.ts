import { RuntimeSourceError } from 'errors/runtimeSourceError';
import { Node } from 'parser/types';

import { ErrorSeverity, ErrorType } from '../errors/types';
import { Context } from '../runtimeTypes';

import { Closure, DefaultClosure } from './closure';

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

export class DivisionByZeroError extends RuntimeSourceError {
  public type = ErrorType.SYNTAX;
  public severity = ErrorSeverity.ERROR;

  public constructor(public node: Node, public message = 'Division by zero') {
    super(node);
  }

  public explain(): string {
    return this.message;
  }

  public elaborate(): string {
    return this.message;
  }
}

export function handleRuntimeError(
  context: Context,
  error: RuntimeSourceError,
): never {
  context.runtime.environments = context.runtime.environments.slice(
    -context.numberOfOuterEnvironments,
  );
  throw error;
}

export function assertClosure(
  closure: any,
  node: Node,
  context: Context,
): closure is Closure {
  if (!(closure instanceof Closure || closure instanceof DefaultClosure)) {
    return handleRuntimeError(
      context,
      new InterpreterError(
        node,
        'A non-function was called, which should have been caught by the type checker',
      ),
    );
  }
  return true;
}
