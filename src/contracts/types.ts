import { Closure } from 'interpreter/closure';
import { SourceLocation } from 'parser/types';

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
  loc?: SourceLocation; // Where the contract was first defined
}

export interface FlatContract {
  type: 'FlatContract';
  contract: Closure;
  isSetNotation: boolean;
  loc?: SourceLocation; // Where the contract was first defined
}
