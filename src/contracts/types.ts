import { Closure, DefaultClosure } from 'interpreter/closure';
import { SourceLocation } from 'parser/types';

export type Contract = FlatContract | FunctionContract;

export interface ContractDetails {
  contract?: Contract;
  pos: string;
  neg: string;
}

export interface BaseContractMonitor {
  contracts: ContractDetails[];
}

export interface FunctionContract {
  type: 'FunctionContract';
  parameterContract: Contract; // Note that we will curry contracts, i.e. the next param's contract is inside the return contract
  returnContract: Contract;
  loc?: SourceLocation; // Where the contract was first defined
}

export interface FlatContract {
  type: 'FlatContract';
  contract: Closure | DefaultClosure;
  isSetNotation: boolean;
  loc?: SourceLocation; // Where the contract was first defined
}
