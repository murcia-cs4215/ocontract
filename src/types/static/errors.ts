import { Node, SourceLocation } from 'parser/types';

import { UNKNOWN_LOCATION } from '../../constants';
import { ErrorSeverity, ErrorType, SourceError } from '../../errors/types';

export class StaticTypeError implements SourceError {
  public type = ErrorType.TYPE;
  public severity = ErrorSeverity.ERROR;

  constructor(public node: Node) {}

  get location(): SourceLocation {
    return this.node.loc ?? UNKNOWN_LOCATION;
  }

  public explain(): string {
    return 'Static type error has occurred!';
  }

  public elaborate(): string {
    return this.explain();
  }
}

export class TypeMismatchError extends StaticTypeError {
  constructor(public node: Node, public expected: string, public got: string) {
    super(node);
  }

  public explain(): string {
    return `This expression has type ${this.got} but an expression was expected of type ${this.expected}`;
  }

  public elaborate(): string {
    return this.explain();
  }
}

export class UnboundValueError extends StaticTypeError {
  constructor(public name: string, node: Node) {
    super(node);
  }

  public explain(): string {
    return `Unbound value ${this.name}`;
  }

  public elaborate(): string {
    return `Before you can read the value of ${this.name}, you need to bind it to a value.`;
  }
}

export class TooManyArgumentsError extends StaticTypeError {
  constructor(public functionType: string, node: Node) {
    super(node);
  }

  public explain(): string {
    return `This function has type ${this.functionType}`;
  }

  public elaborate(): string {
    return "It is applied to too many arguments; maybe you forgot a `;'.";
  }
}

export class NotAFunctionError extends StaticTypeError {
  constructor(public expressionType: string, node: Node) {
    super(node);
  }

  public explain(): string {
    return `This expression has type ${this.expressionType}`;
  }

  public elaborate(): string {
    return 'This is not a function; it cannot be applied or be used as a contract.';
  }
}

export class InvalidContractReturnTypeError extends StaticTypeError {
  constructor(public node: Node, public got: string) {
    super(node);
  }

  public explain(): string {
    return `This contract has checks that return type ${this.got} instead of type bool`;
  }

  public elaborate(): string {
    return this.explain();
  }
}

export class ContractTypeMismatchError extends StaticTypeError {
  constructor(public node: Node, public expected: string, public got: string) {
    super(node);
  }

  public explain(): string {
    return `This name has type ${this.got} but its contract was expecting type ${this.expected}`;
  }

  public elaborate(): string {
    return this.explain();
  }
}
