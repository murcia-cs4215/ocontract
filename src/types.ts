import { SourceError } from 'errors/types';

import { ContractType, Node } from 'parser/types';

/**
 * TYPES FOR TYPE CHECKING
 */

export type PrimitiveType =
  | 'int'
  | 'float'
  | 'bool'
  | 'string'
  | 'char'
  | 'unit';

export interface Primitive {
  kind: 'primitive';
  type: PrimitiveType;
}

// cannot name Function, conflicts with TS
export interface FunctionType {
  kind: 'function';
  parameterTypes: Type[];
  returnType: Type;
}

export type Type = Primitive | FunctionType;

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
  type: Type;
  name?: string; // Only defined for result of global let bindings
}

export type Result = Finished | Errored;

// Used for tracking non-finished results during runtime
export type RuntimeResult = Omit<Finished, 'status'>;

/**
 * TYPES FOR ENVIRONMENT
 */

export interface Frame {
  [name: string]: RuntimeResult;
}

export interface Environment {
  id: string;
  name?: string;
  tail: Environment | null;
  // callExpression?: es.CallExpression;
  head: Frame;
  thisContext?: Value;
}

export type TypeEnvironment = {
  typeMap: Map<string, Type | Type[]>;
}[];

export type ContractEnvironment = {
  contractMap: Map<string, ContractType>;
  currentScope: string; // used for assigning blame
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
  contractEnvironment: ContractEnvironment;
}

// Interface that helps with class composition
export interface Constructable {
  new (...args: any[]): any;
}
