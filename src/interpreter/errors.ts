import { SourceLocation } from 'parser/types';

import { ErrorSeverity, ErrorType, SourceError } from '../errors/types';

export class InterpreterError implements SourceError {
  public type = ErrorType.SYNTAX;
  public severity = ErrorSeverity.ERROR;
  public constructor(
    public location: SourceLocation,
    public message = 'Unexpected evaluation',
  ) {}

  public explain(): string {
    return this.message;
  }

  public elaborate(): string {
    return 'There is an evaluation error. This is an internal error.';
  }
}
