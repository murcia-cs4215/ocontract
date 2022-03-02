import { createTypeEnvironment } from 'checkers/types/environment';

import { GLOBAL } from './constants';
import { Context, Environment, Value } from './types';

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
    errors: [],
    externalContext,
    runtime: createEmptyRuntime(),
    numberOfOuterEnvironments: 1,
    prelude: null,
    typeEnvironment: createTypeEnvironment(),
  };
};

const createGlobalEnvironment = (): Environment => ({
  tail: null,
  name: 'global',
  head: {},
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
