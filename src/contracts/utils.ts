import { Expression } from 'parser/types';

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
