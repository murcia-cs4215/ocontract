import { SourceLocation } from 'parser/types';

export type Value = any;

export interface Errored {
  status: 'errored';
  errors: SourceError[];
}

export interface Finished {
  status: 'finished';
  value: Value;
}

export type Result = Finished | Errored;

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
