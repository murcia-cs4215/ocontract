import { ContractEnvironment } from 'types';

import { ContractType } from 'parser/types';

export function lookupContract(
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

export function createContractEnvironment(): ContractEnvironment {
  return [
    {
      contractMap: new Map<string, ContractType>(),
    },
  ];
}
