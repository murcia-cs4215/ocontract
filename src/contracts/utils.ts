import { Expression } from 'parser/types';

import { Contract } from './types';

export function wrapExpressionInMonitor(
  exp: Expression,
  contract: Contract,
  pos: string,
  neg: string,
): void {
  if (exp.contracts.length === 0) {
    exp.contracts.push({
      contract,
      pos,
      neg,
    });
    return;
  }
  if (exp.contracts[0].contract == null) {
    exp.contracts[0].contract = contract;
    exp.contracts[0].pos = pos;
    exp.contracts[0].neg = neg;
    return;
  }
  exp.contracts = [
    {
      contract,
      pos,
      neg,
    },
    ...exp.contracts,
  ];
}

export function wrapExpressionInFirstLevelMonitor(
  exp: Expression,
  pos: string,
  neg: string,
): void {
  if (exp.contracts.length > 0) {
    exp.contracts[0].pos = pos;
    exp.contracts[0].neg = neg;
    return;
  }
  exp.contracts.push({
    pos,
    neg,
  });
}
