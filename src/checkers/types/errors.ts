import { RuntimeSourceError } from 'errors/runtimeSourceError';

import { Node, SourceLocation } from 'parser/types';

import { ErrorSeverity, ErrorType, SourceError } from '../../errors/types';

export class StaticTypeError implements SourceError {
  public type = ErrorType.TYPE;
  public severity = ErrorSeverity.WARNING;

  constructor(public node: Node, public expected: string, public got: string) {}

  get location(): SourceLocation {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return this.node.loc!;
  }

  public explain(): string {
    return `This expression has type ${this.got} but an expression was expected of type ${this.expected}`;
  }
  public elaborate(): string {
    return this.explain();
  }
}

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
