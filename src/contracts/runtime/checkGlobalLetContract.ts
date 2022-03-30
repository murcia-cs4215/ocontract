import { GlobalLetStatement } from 'parser/types';

import { Context, RuntimeResult } from '../../runtimeTypes';
import { lookupContract } from '../environment';

import { checkFlatContract } from './utils';

/**
 * Should only be called when the global let binding is working with
 * non-functions. This function will do a flat contract check.
 */
export function checkGlobalLetContract(
  node: GlobalLetStatement,
  context: Context,
  result: RuntimeResult,
): void {
  const contract = lookupContract(node.left.name, context);
  if (contract == null || contract.type !== 'FlatContract') {
    return;
  }
  checkFlatContract(node, result, contract, context, node.left.name);
}
