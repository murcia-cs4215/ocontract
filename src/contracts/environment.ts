import { ContractEnvironment } from 'types';

import { ContractType } from 'parser/types';

export function lookupContracts(
  name: string,
  env: ContractEnvironment,
): ContractType | undefined {
  for (let i = env.length - 1; i >= 0; i--) {
    if (env[i].contractMap.has(name)) {
      return env[i].contractMap.get(name);
    }
  }
  return undefined;
}

export function getCurrentContractScope(env: ContractEnvironment): string {
  return env[env.length - 1].currentScope;
}

export function addContractToCurrentScope(
  env: ContractEnvironment,
  name: string,
  contract: ContractType,
): void {
  env[env.length - 1].contractMap.set(name, contract);
}

export function createContractEnvironment(): ContractEnvironment {
  return [
    {
      contractMap: new Map<string, ContractType>(),
      currentScope: 'main',
    },
  ];
}
