import assert from 'assert';

import { FlatContract } from 'contracts/types';
import { DefaultClosure } from 'interpreter/closure';
import { handleRuntimeError } from 'interpreter/errors';
import { GlobalLetStatement } from 'parser/types';

import { Context, RuntimeResult } from '../../runtimeTypes';
import { lookupContract } from '../environment';

import { DefaultFunctionContractNotSupportedError } from './errors';
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
  // TODO: Support contracts for default closures in the future
  if (result.value instanceof DefaultClosure) {
    return handleRuntimeError(
      context,
      new DefaultFunctionContractNotSupportedError(context.runtime.nodes[0]),
    );
  }
  assert(node.left.contracts.length > 0);
  checkFlatContract(
    node,
    result,
    contract as FlatContract,
    context,
    node.left.contracts[0].neg as string,
  );
}
