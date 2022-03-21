import { RuntimeSourceError } from 'errors/runtimeSourceError';
import { ErrorSeverity, ErrorType } from 'errors/types';
import { Node } from 'parser/types';

export class ContractViolationError extends RuntimeSourceError {
  public type = ErrorType.RUNTIME;
  public severity = ErrorSeverity.ERROR;

  constructor(node: Node, public message: string) {
    super(node);
  }

  public explain(): string {
    return this.message;
  }

  public elaborate(): string {
    return this.explain();
  }
}
