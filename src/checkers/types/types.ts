import { Node } from 'parser/types';

import { Type } from '../../types';

export interface Untypable {
  typability?: 'Untypable';
  inferredType?: Type;
}

export interface NotYetTyped {
  typability?: 'NotYetTyped';
  inferredType?: Type;
}

export interface Typed {
  typability?: 'Typed';
  inferredType?: Type;
}

export type TypeAnnotation = Untypable | Typed | NotYetTyped;

export type TypeAnnotatedNode<T extends Node> = TypeAnnotation & T;
