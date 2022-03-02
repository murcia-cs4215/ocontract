import { ErrorSeverity, ErrorType, SourceError } from '../errors/types';

import { SourceLocation } from './types';

export class FatalSyntaxError implements SourceError {
  public type = ErrorType.SYNTAX;
  public severity = ErrorSeverity.ERROR;
  public constructor(public location: SourceLocation, public message: string) {}

  public explain(): string {
    return this.message;
  }

  public elaborate(): string {
    return 'There is a syntax error in your program';
  }
}
