import { lookupContract } from 'contracts/environment';
import { Closure } from 'interpreter/closure';
import { Identifier } from 'parser/types';

import { Context, RuntimeResult } from '../../runtimeTypes';
import { wrapExpressionInMonitor } from '../utils';

export function monitorIdentifier(
  node: Identifier,
  context: Context,
  result: RuntimeResult,
): void {
  const contract = lookupContract(node.name, context);
  if (contract == null) {
    return;
  }
  node.contract = contract;
  if (contract && node.pos && node.neg && result.value instanceof Closure) {
    wrapExpressionInMonitor(
      result.value.originalNode,
      node.contract,
      node.pos,
      node.neg,
    );
  }
}
