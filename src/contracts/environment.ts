import { ContractEnvironment } from '../runtimeTypes';

import { Contract } from './types';

export function lookupContracts(
  name: string,
  env: ContractEnvironment,
): Contract | undefined {
  for (let i = 0; i < env.length; i++) {
    if (env[i].contractMap.has(name)) {
      return env[i].contractMap.get(name);
    }
  }
  return undefined;
}

export function getCurrentContractScope(env: ContractEnvironment): string {
  return env[0].currentScope;
}

export function addContractToCurrentScope(
  env: ContractEnvironment,
  name: string,
  contract: Contract,
): void {
  env[0].contractMap.set(name, contract);
}

export function createInitialContractEnvironment(): ContractEnvironment {
  return [
    {
      contractMap: new Map<string, Contract>(),
      currentScope: 'main',
    },
  ];
}
