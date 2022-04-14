import { Contract } from 'contracts/types';
import { RuntimeSourceError } from 'errors/runtimeSourceError';
import { ErrorSeverity, ErrorType } from 'errors/types';
import { Node } from 'parser/types';

import { UNKNOWN_LOCATION } from '../../constants';

export class ContractViolationError extends RuntimeSourceError {
  public type = ErrorType.RUNTIME;
  public severity = ErrorSeverity.ERROR;

  constructor(node: Node, public contract: Contract, public blame: string) {
    super(node);
  }

  public explain(): string {
    const loc = this.contract.loc ?? UNKNOWN_LOCATION;
    return (
      'Contract violation!\n' +
      `Blame: ${this.blame}\n` +
      `Contract at: Line ${loc.start.line}, Column ${loc.start.column}`
    );
  }

  public elaborate(): string {
    return this.explain();
  }
}

export class DefaultFunctionContractNotSupportedError extends RuntimeSourceError {
  public type = ErrorType.RUNTIME;
  public severity = ErrorSeverity.ERROR;

  constructor(node: Node) {
    super(node);
  }

  public explain(): string {
    return 'Contracts on in-built functions are currently not supported.';
  }

  public elaborate(): string {
    return this.explain();
  }
}
