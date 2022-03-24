import { Context, ContractEnvironment } from '../runtimeTypes';

import { Contract } from './types';

export function lookupContract(
  name: string,
  context: Context,
): Contract | undefined {
  for (let i = 0; i < context.contractEnvironment.length; i++) {
    if (context.contractEnvironment[i].contractMap.has(name)) {
      return context.contractEnvironment[i].contractMap.get(name);
    }
  }
  return undefined;
}

export function getCurrentContractScope(context: Context): string {
  return context.contractEnvironment[0].currentScope;
}

export function addContractToCurrentScope(
  context: Context,
  name: string,
  contract: Contract,
): void {
  context.contractEnvironment[0].contractMap.set(name, contract);
}

export function createInitialContractEnvironment(): ContractEnvironment {
  return [
    {
      contractMap: new Map<string, Contract>(),
      currentScope: 'main',
    },
  ];
}
