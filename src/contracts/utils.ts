import { Expression, SourceLocation } from 'parser/types';

import { Contract } from './types';

export function wrapExpressionInMonitor(
  exp: Expression,
  contract: Contract | undefined,
  pos: string | undefined,
  neg: string | undefined,
): void {
  exp.contract = contract;
  exp.pos = pos;
  exp.neg = neg;
}

export function propagateLoc(
  contract: Contract,
  loc: SourceLocation | undefined,
): void {
  if (contract.type === 'FlatContract') {
    contract.loc = loc;
    return;
  }
  propagateLoc(contract.parameterContract, loc);
  propagateLoc(contract.returnContract, loc);
}
