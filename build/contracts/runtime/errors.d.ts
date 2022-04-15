import { Contract } from '../types';
import { RuntimeSourceError } from '../../errors/runtimeSourceError';
import { ErrorSeverity, ErrorType } from '../../errors/types';
import { Node } from '../../parser/types';
export declare class ContractViolationError extends RuntimeSourceError {
    contract: Contract;
    blame: string;
    type: ErrorType;
    severity: ErrorSeverity;
    constructor(node: Node, contract: Contract, blame: string);
    explain(): string;
    elaborate(): string;
}
export declare class DefaultFunctionContractNotSupportedError extends RuntimeSourceError {
    type: ErrorType;
    severity: ErrorSeverity;
    constructor(node: Node);
    explain(): string;
    elaborate(): string;
}
//# sourceMappingURL=errors.d.ts.map