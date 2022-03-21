import { Closure } from 'interpreter/closure';
import { handleRuntimeError } from 'interpreter/errors';
import { apply, evaluate } from 'interpreter/interpreter';
import { ContractType, FlatContractExpression, Node } from 'parser/types';

import { Context, RuntimeResult } from '../../runtimeTypes';

import { ContractViolationError } from './errors';

export function checkPredContract(
  node: Node,
  val: RuntimeResult,
  contract: ContractType,
  context: Context,
): void {
  const contractExp = evaluate(
    (contract as FlatContractExpression).contract,
    context,
  ).value;

  if (!(contractExp instanceof Closure)) {
    return handleRuntimeError(
      context,
      new ContractViolationError(node, 'Expected flat contract for value'),
    );
  } else {
    const check = apply(contractExp, val, context);
    if (check.value === false) {
      return handleRuntimeError(
        context,
        new ContractViolationError(node, 'Contract Violation!'),
      );
    }
  }
}
