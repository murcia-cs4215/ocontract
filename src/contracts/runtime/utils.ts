import assert from 'assert';

import { Contract, FlatContract } from 'contracts/types';
import { handleRuntimeError } from 'interpreter/errors';
import { apply } from 'interpreter/interpreter';
import { Expression, Node } from 'parser/types';
import { isBool } from 'types/utils';

import { Context, RuntimeResult } from '../../runtimeTypes';

import { ContractNotWellFormedError, ContractViolationError } from './errors';

export function checkFlatContract(
  node: Node,
  val: RuntimeResult,
  contract: FlatContract,
  context: Context,
  blame: string,
): void {
  const check = apply(contract.contract, val, context);
  assert(isBool(check.type)); // should have been validated by the type checker
  if (check.value) {
    // Contract successfully asserted
    return;
  }

  return handleRuntimeError(
    context,
    new ContractViolationError(node, contract.contract.originalNode, blame),
  );
}

export function verifyContractExists(
  exp: Expression,
  context: Context,
): boolean {
  if (exp.contract == null) {
    return false;
  }
  if (exp.pos == null || exp.neg == null) {
    return handleRuntimeError(
      context,
      new ContractNotWellFormedError(
        exp,
        'Expected contract, pos, neg to be well-defined',
      ),
    );
  }
  return true;
}

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
