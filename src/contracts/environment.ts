import { ContractEnvironment } from 'types';

import { ContractType } from 'parser/types';

export function lookupContractInCurrentScope(
  name: string,
  env: ContractEnvironment,
): ContractType | undefined {
  if (env[env.length - 1].contractMap.has(name)) {
    return env[env.length - 1].contractMap.get(name);
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
