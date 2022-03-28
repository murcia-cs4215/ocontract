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
  if (verifyContractExists(closure.originalNode, context)) {
    const originalContract = closure.originalNode.contract as FunctionContract;
    if (isPrimitiveType(arg.type)) {
      checkFlatContract(
        closure.originalNode,
        arg,
        originalContract.parameterContract as FlatContract,
        context,
        closure.originalNode.neg as string,
      );
    } else {
      // higher order function
      wrapExpressionInMonitor(
        (arg.value as Closure).originalNode,
        originalContract.parameterContract as FunctionContract,
        closure.originalNode.neg as string,
        closure.originalNode.pos as string,
      );
    }
  }
}

export function checkReturnValueContract(
  closure: Closure,
  result: RuntimeResult,
  context: Context,
): void {
  if (verifyContractExists(closure.originalNode, context)) {
    const contract = closure.originalNode.contract as FunctionContract;
    if (isPrimitiveType(result.type)) {
      checkFlatContract(
        closure.originalNode,
        result,
        contract.returnContract as FlatContract,
        context,
        closure.originalNode.pos as string,
      );
    } else {
      wrapExpressionInMonitor(
        (result.value as Closure).originalNode,
        contract.returnContract,
        closure.originalNode.pos as string,
        closure.originalNode.neg as string,
      );
    }
  }
}
