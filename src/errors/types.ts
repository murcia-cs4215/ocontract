import { SourceLocation } from 'parser/types';

export enum ErrorType {
  SYNTAX = 'Syntax',
  TYPE = 'Type',
  RUNTIME = 'Runtime',
}

export enum ErrorSeverity {
  WARNING = 'Warning',
  ERROR = 'Error',
}

export interface SourceError {
  type: ErrorType;
  severity: ErrorSeverity;
  location: SourceLocation;
  explain(): string;
  elaborate(): string;
}
