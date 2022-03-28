import assert from 'assert';

import { FlatContract } from 'contracts/types';
import { Closure } from 'interpreter/closure';
import { handleRuntimeError, InterpreterError } from 'interpreter/errors';
import { apply, evaluate } from 'interpreter/interpreter';
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
  const contractExp = evaluate(contract.contract, context).value;

  if (!(contractExp instanceof Closure)) {
    return handleRuntimeError(
      context,
      new InterpreterError(
        node,
        'Contract is not a function, which should have been caught by the type checker.',
      ),
    );
  }
  const check = apply(contractExp, val, context);
  assert(isBool(check.type));
  if (check.value) {
    // Contract successfully asserted
    return;
  }

  return handleRuntimeError(
    context,
    new ContractViolationError(node, contractExp.originalNode, blame),
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
