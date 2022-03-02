import { SourceError } from 'errors/types';

import { Node } from 'parser/types';

/**
 * TYPES FOR OUTPUT
 */

export type Value = any;

export interface Errored {
  status: 'errored';
}

export interface Finished {
  status: 'finished';
  value: Value;
  type: 'int' | 'float' | 'bool' | 'string' | 'char' | 'unit';
}

export type Result = Finished | Errored;

// Used for tracking non-finished results during runtime
export type RuntimeResult = Omit<Finished, 'status'>;

/**
 * TYPES FOR TYPE CHECKING
 */

export interface Primitive {
  kind: 'primitive';
  name: 'int' | 'float' | 'bool' | 'string' | 'char';
}

export interface Variable {
  kind: 'variable';
  name: string;
  constraint: Constraint;
}

// cannot name Function, conflicts with TS
export interface FunctionType {
  kind: 'function';
  parameterTypes: Type[];
  returnType: Type;
}

export type Type = Primitive | Variable | FunctionType;
export type Constraint = 'none' | 'comparable' | 'negatable'; // negatable implies comparable

/**
 * TYPES FOR ENVIRONMENT
 */

export interface Frame {
  [name: string]: any;
}

export interface Environment {
  id: string;
  name: string;
  tail: Environment | null;
  // callExpression?: es.CallExpression;
  head: Frame;
  thisContext?: Value;
}

export interface ForAll {
  kind: 'forall';
  polyType: Type;
}

export type TypeEnvironment = {
  typeMap: Map<string, Type | ForAll>;
}[];

export interface Context<T = any> {
  /** The external symbols that exist in the Context. */
  externalSymbols: string[];

  /** All the errors gathered */
  errors: SourceError[];

  /** Runtime specific state */
  runtime: {
    isRunning: boolean;
    environments: Environment[];
    value: Value;
    nodes: Node[];
  };

  numberOfOuterEnvironments: number;

  prelude: string | null;

  /**
   * Used for storing external properties.
   * For e.g, this can be used to store some application-related
   * context for use in your own built-in functions (like `display(a)`)
   */
  externalContext?: T;

  typeEnvironment: TypeEnvironment;
}
