import { Expression } from 'parser/types';

export type Contract = FlatContract | FunctionContract | EmptyContract;

export interface FunctionContract {
  type: 'FunctionContract';
  parameterContract: Contract; // Note that we will curry contracts, i.e. the next param's contract is inside the return contract
  returnContract: Contract;
}

export interface FlatContract {
  type: 'FlatContract';
  contract: Expression;
}

export interface EmptyContract {
  type: 'EmptyContract';
}
