import { SourceError } from 'errors/types';
import { ContractType, Node } from 'parser/types';
import { Type } from 'types/types';

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

export type TypeEnvironment = Map<string, Type | Type[]>;

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

  typeEnvironments: TypeEnvironment[];
  contractEnvironment: ContractEnvironment;
}
