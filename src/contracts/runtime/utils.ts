import assert from 'assert';

import { cloneDeepWithClosure } from 'interpreter/closure';
import { createContractEnvironment } from 'interpreter/environment';
import { handleRuntimeError } from 'interpreter/errors';
import { apply } from 'interpreter/interpreter';
import { Expression, Node, SourceLocation } from 'parser/types';
import { isBool } from 'types/utils';

import { Context, Environment, RuntimeResult } from '../../runtimeTypes';
import { Contract, FlatContract } from '../types';

import { ContractViolationError } from './errors';

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
    if (contract.isSetNotation) {
      contract.contract.clonedEnvironments[0].head[
        contract.contract.originalNode.params[0].name
      ] = val;
    }
    return;
  }

  return handleRuntimeError(
    context,
    new ContractViolationError(node, contract, blame),
  );
}

export function verifyContractExists(exp: Expression): boolean {
  if (exp.contracts.length === 0) {
    return false;
  }
  return exp.contracts[0].contract != null;
}

export function propagateLoc(
  contract: Contract,
  loc: SourceLocation | undefined,
): void {
  if (contract.type === 'FlatContract') {
    contract.loc = loc;
    return;
  }
  propagateLoc(contract.parameterContract, loc);
  propagateLoc(contract.returnContract, loc);
}

export function propagateEnvironment(
  contract: Contract,
  context: Context,
): void {
  _propagateEnvironment(
    contract,
    cloneDeepWithClosure(context.runtime.environments),
  );
}

function _propagateEnvironment(
  contract: Contract,
  environments: Environment[],
): void {
  if (contract.type === 'FlatContract') {
    if (!contract.isSetNotation) {
      return; // We don't touch non-set notation contracts
    }
    contract.contract.clonedEnvironments = [...environments];
    return;
  }
  if (contract.parameterContract.type === 'FunctionContract') {
    const contractEnvironment = createContractEnvironment(environments);
    _propagateEnvironment(contract.parameterContract, [
      contractEnvironment,
      ...environments,
    ]);
  } else {
    _propagateEnvironment(contract.parameterContract, environments);
  }
  _propagateEnvironment(contract.returnContract, environments);
}
