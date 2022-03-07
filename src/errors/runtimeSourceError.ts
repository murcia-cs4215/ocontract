import { Node, SourceLocation } from 'parser/types';

import { UNKNOWN_LOCATION } from '../constants';

import { ErrorSeverity, ErrorType, SourceError } from './types';

export class RuntimeSourceError implements SourceError {
  public type = ErrorType.RUNTIME;
  public severity = ErrorSeverity.ERROR;
  public location: SourceLocation;

  constructor(node?: Node) {
    this.location = node?.loc ?? UNKNOWN_LOCATION;
  }

  public explain(): string {
    return '';
  }

  public elaborate(): string {
    return this.explain();
  }
}
