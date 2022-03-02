import { Node, SourceLocation } from 'parser/types';

import { ErrorSeverity, ErrorType, SourceError } from '../../types';

import { TypeAnnotatedNode } from './types';

export class TypeError implements SourceError {
  public type = ErrorType.TYPE;
  public severity = ErrorSeverity.WARNING;

  constructor(public node: TypeAnnotatedNode<Node>, public message: string) {
    node.typability = 'Untypable';
  }

  get location(): SourceLocation {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return this.node.loc!;
  }

  public explain(): string {
    return this.message;
  }
  public elaborate(): string {
    return this.message;
  }
}
