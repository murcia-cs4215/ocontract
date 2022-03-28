import { Contract, FunctionContract } from './types';

export function curryParamContracts(contracts: Contract[]): FunctionContract {
  let finalContract = contracts[contracts.length - 1];
  for (let i = contracts.length - 2; i >= 0; i--) {
    finalContract = {
      type: 'FunctionContract',
      parameterContract: contracts[i],
      returnContract: finalContract,
    };
  }
  return finalContract as FunctionContract;
}
