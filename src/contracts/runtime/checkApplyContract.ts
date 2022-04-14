import { Closure } from 'interpreter/closure';
import { isPrimitiveType } from 'types/utils';

import { Context, RuntimeResult } from '../../runtimeTypes';
import { FlatContract, FunctionContract } from '../types';
import { wrapExpressionInMonitor } from '../utils';

import { checkFlatContract, verifyContractExists } from './utils';

export function checkArgumentContract(
  closure: Closure,
  arg: RuntimeResult, // Should be cloned
  context: Context,
): void {
  if (verifyContractExists(closure.originalNode)) {
    for (let i = 0; i < closure.originalNode.contracts.length; i += 1) {
      const contractDetails = closure.originalNode.contracts[i];
      if (contractDetails.contract == null) {
        return;
      }
      const contract = contractDetails.contract as FunctionContract;
      if (isPrimitiveType(arg.type)) {
        checkFlatContract(
          closure.originalNode,
          arg,
          contract.parameterContract as FlatContract,
          context,
          contractDetails.neg,
        );
      } else {
        // higher order function
        wrapExpressionInMonitor(
          (arg.value as Closure).originalNode,
          contract.parameterContract as FunctionContract,
          contractDetails.neg,
          contractDetails.pos,
        );
      }
    }
  }
}

export function checkReturnValueContract(
  closure: Closure,
  result: RuntimeResult,
  context: Context,
): void {
  if (verifyContractExists(closure.originalNode)) {
    for (let i = 0; i < closure.originalNode.contracts.length; i += 1) {
      const contractDetails = closure.originalNode.contracts[i];
      if (contractDetails.contract == null) {
        return;
      }
      const contract = contractDetails.contract as FunctionContract;
      if (isPrimitiveType(result.type)) {
        checkFlatContract(
          closure.originalNode,
          result,
          contract.returnContract as FlatContract,
          context,
          contractDetails.pos,
        );
      } else {
        wrapExpressionInMonitor(
          (result.value as Closure).originalNode,
          contract.returnContract,
          contractDetails.pos,
          contractDetails.neg,
        );
      }
    }
  }
}
