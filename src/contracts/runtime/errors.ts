import { RuntimeSourceError } from 'errors/runtimeSourceError';
import { ErrorSeverity, ErrorType } from 'errors/types';
import { Node } from 'parser/types';

import { UNKNOWN_LOCATION } from '../../constants';

export class ContractViolationError extends RuntimeSourceError {
  public type = ErrorType.RUNTIME;
  public severity = ErrorSeverity.ERROR;

  constructor(node: Node, public contractNode: Node, public blame: string) {
    super(node);
  }

  public explain(): string {
    const loc = this.contractNode.loc ?? UNKNOWN_LOCATION;
    return (
      'Contract Violation!\n' +
      `Blame: ${this.blame}\n` +
      `Source of blame:  Line ${loc.start.line}, Column ${loc.start.column}`
    );
  }

  public elaborate(): string {
    return this.explain();
  }
}

export class ContractNotWellFormedError extends RuntimeSourceError {
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