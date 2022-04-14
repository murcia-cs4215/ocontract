import { lookupContract } from 'contracts/environment';
import { Closure } from 'interpreter/closure';
import { Identifier } from 'parser/types';

import { Context, RuntimeResult } from '../../runtimeTypes';
import { wrapExpressionInMonitor } from '../utils';

// Note: An identifier can have at most one contract attached to it.
// This is also why we can confidently index [0] on it.
export function checkIdentifierContract(
  node: Identifier,
  context: Context,
  result: RuntimeResult,
): void {
  const contract = lookupContract(node.name, context);
  if (node.contracts.length === 0 || contract == null) {
    return;
  }
  if (node.contracts[0].contract == null) {
    node.contracts[0].contract = contract;
  }
  if (!(result.value instanceof Closure)) {
    return;
  }

  // Check if the closure already has the current contract - if so, we don't propagate it
  if (
    result.value.originalNode.contracts.some((c) => c.contract === contract)
  ) {
    return;
  }
  wrapExpressionInMonitor(
    result.value.originalNode,
    contract,
    node.contracts[0].pos,
    node.contracts[0].neg,
  );
}
