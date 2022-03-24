import { lookupContract } from 'contracts/environment';
import { Closure } from 'interpreter/closure';
import { Identifier } from 'parser/types';

import { Context, RuntimeResult } from '../../runtimeTypes';
import { wrapExpressionInMonitor } from '../utils';

export function checkIdentifierContract(
  node: Identifier,
  context: Context,
  result: RuntimeResult,
): void {
  node.contract = lookupContract(node.name, context);
  if (
    node.contract &&
    node.pos &&
    node.neg &&
    result.value instanceof Closure
  ) {
    wrapExpressionInMonitor(
      result.value.originalNode,
      node.contract,
      node.pos,
      node.neg,
    );
  }
}
