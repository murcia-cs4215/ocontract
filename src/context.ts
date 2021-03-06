import { createInitialContractEnvironments } from 'contracts/environment';
import { createInitialTypeEnvironments } from 'types/environment';

import { globalEnvironmentDefaultFunctions } from './interpreter/default';
import { globalEnvironmentDefaultConstants } from './interpreter/default/constants';
import { GLOBAL } from './constants';
import { Context, Environment, Value } from './runtimeTypes';

const createEmptyRuntime = (): Context['runtime'] => ({
  isRunning: false,
  environments: [],
  value: undefined,
  nodes: [],
});

const createEmptyContext = <T>(
  externalSymbols: string[],
  externalContext?: T,
): Context<T> => {
  return {
    externalSymbols,
    externalContext,
    runtime: createEmptyRuntime(),
    numberOfOuterEnvironments: 1,
    prelude: null,
    typeEnvironments: createInitialTypeEnvironments(),
    contractEnvironments: createInitialContractEnvironments(),
  };
};

const createGlobalEnvironment = (): Environment => ({
  tail: null,
  name: 'global',
  head: {
    ...globalEnvironmentDefaultConstants,
    ...globalEnvironmentDefaultFunctions,
  },
  id: '-1',
});

const ensureGlobalEnvironmentExist = (context: Context): void => {
  if (!context.runtime) {
    context.runtime = createEmptyRuntime();
  }
  if (!context.runtime.environments) {
    context.runtime.environments = [];
  }
  if (context.runtime.environments.length === 0) {
    context.runtime.environments.push(createGlobalEnvironment());
  }
};

const defineSymbol = (context: Context, name: string, value: Value): void => {
  const globalEnvironment = context.runtime.environments[0];
  Object.defineProperty(globalEnvironment.head, name, {
    value,
    writable: false,
    enumerable: true,
  });
  // const typeEnv = context.typeEnvironment[0];

  // // if the global type env doesn't already have the imported symbol,
  // // we set it to a type var T that can type check with anything.
  // if (!typeEnv.typeMap.has(name)) {
  //   typeEnv.typeMap.set(name, []);
  // }
};

const importExternalSymbols = (
  context: Context,
  externalSymbols: string[],
): void => {
  ensureGlobalEnvironmentExist(context);

  externalSymbols.forEach((symbol) => {
    defineSymbol(context, symbol, (GLOBAL as any)[symbol]);
  });
};

export function createContext<T>(
  externalSymbols: string[] = [],
  externalContext?: T,
): Context {
  const context = createEmptyContext(externalSymbols, externalContext);

  importExternalSymbols(context, externalSymbols);

  return context;
}

export function prepareContextForRun(context: Context): void {
  context.runtime.isRunning = true;
}

export function cleanUpContextAfterRun(context: Context): void {
  context.runtime.isRunning = false;
}
