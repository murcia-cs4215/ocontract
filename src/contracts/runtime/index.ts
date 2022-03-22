import { Closure } from 'interpreter/closure';
import { handleRuntimeError } from 'interpreter/errors';
import { apply, evaluate } from 'interpreter/interpreter';
import {
  ContractType,
  Expression,
  FlatContractExpression,
  Node,
} from 'parser/types';

import { UNKNOWN_LOCATION } from '../../constants';
import { Context, RuntimeResult } from '../../runtimeTypes';

import { ContractNotWellFormedError, ContractViolationError } from './errors';

export function checkPredContract(
  node: Node,
  val: RuntimeResult,
  contract: ContractType,
  context: Context,
  blame: string,
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
      const loc = contractExp.originalNode.loc ?? UNKNOWN_LOCATION;
      const msg =
        'Contract Violation!\n' +
        `Blame: ${blame}\n` +
        `Source of blame:  Line ${loc.start.line}, Column ${loc.start.column}`;
      return handleRuntimeError(context, new ContractViolationError(node, msg));
    }
  }
}

export function verifyContractExists(
  exp: Expression,
  context: Context,
): boolean {
  if (exp.contract) {
    const verified = exp.pos !== undefined && exp.neg !== undefined;
    if (!verified) {
      return handleRuntimeError(
        context,
        new ContractNotWellFormedError(
          exp,
          'Expected contract, pos, neg to be well-defined',
        ),
      );
    }
    return verified;
  } else {
    return false;
  }
}
