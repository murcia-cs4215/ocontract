import { Closure, DefaultClosure } from '../interpreter/closure';
import { SourceLocation } from '../parser/types';
export declare type Contract = FlatContract | FunctionContract;
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
    parameterContract: Contract;
    returnContract: Contract;
    loc?: SourceLocation;
}
export interface FlatContract {
    type: 'FlatContract';
    contract: Closure | DefaultClosure;
    isSetNotation: boolean;
    loc?: SourceLocation;
}
//# sourceMappingURL=types.d.ts.map