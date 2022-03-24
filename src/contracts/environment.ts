import { Context, ContractEnvironment } from '../runtimeTypes';

import { Contract } from './types';

export function createInitialContractEnvironments(): ContractEnvironment[] {
  return [
    {
      contractMap: new Map<string, Contract>(),
      nameSet: new Set<string>(),
      currentScope: 'main',
    },
  ];
}

export function pushContractEnvironment(
  context: Context,
  contractEnvironment: ContractEnvironment,
): void {
  context.contractEnvironments.unshift(contractEnvironment);
}

export function popContractEnvironment(
  context: Context,
): ContractEnvironment | null {
  return context.contractEnvironments.shift() ?? null;
}

export function lookupName(name: string, context: Context): boolean {
  for (let i = 0; i < context.contractEnvironments.length; i++) {
    if (context.contractEnvironments[i].nameSet.has(name)) {
      return true;
    }
  }
  return false;
}

export function lookupContract(
  name: string,
  context: Context,
): Contract | undefined {
  for (let i = 0; i < context.contractEnvironments.length; i++) {
    if (context.contractEnvironments[i].contractMap.has(name)) {
      return context.contractEnvironments[i].contractMap.get(name);
    }
  }
  return undefined;
}

export function addContractToCurrentScope(
  context: Context,
  name: string,
  contract: Contract,
): void {
  context.contractEnvironments[0].contractMap.set(name, contract);
}

export function addNameToCurrentScope(context: Context, name: string): void {
  context.contractEnvironments[0].nameSet.add(name);
}

export function getCurrentContractScope(context: Context): string {
  return context.contractEnvironments[0].currentScope;
}
