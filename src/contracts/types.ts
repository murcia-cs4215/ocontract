import { Closure } from 'interpreter/closure';

export type Contract = FlatContract | FunctionContract;

export interface BaseContractMonitor {
  contract?: Contract;
  pos?: string;
  neg?: string;
}

export interface FunctionContract {
  type: 'FunctionContract';
  parameterContract: Contract; // Note that we will curry contracts, i.e. the next param's contract is inside the return contract
  returnContract: Contract;
}

export interface FlatContract {
  type: 'FlatContract';
  contract: Closure;
}
