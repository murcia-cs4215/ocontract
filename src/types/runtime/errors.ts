import { RuntimeSourceError } from 'errors/runtimeSourceError';
import { ErrorSeverity, ErrorType } from 'errors/types';
import { Node } from 'parser/types';

export class RuntimeTypeError extends RuntimeSourceError {
  public type = ErrorType.RUNTIME;
  public severity = ErrorSeverity.ERROR;

  constructor(
    node: Node,
    public side: string,
    public expected: string,
    public got: string,
  ) {
    super(node);
  }

  public explain(): string {
    return `Expected ${this.expected}${this.side}, got ${this.got}.`;
  }

  public elaborate(): string {
    return this.explain();
  }
}
