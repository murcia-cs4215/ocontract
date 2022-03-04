import { Context, Environment, RuntimeResult } from '../types';

import { handleRuntimeError, UnboundValueError } from './errors';

export function currentEnvironment(context: Context): Environment | null {
  return context.runtime.environments[0] ?? null;
}

export function getVariable(context: Context, name: string): RuntimeResult {
  let environment = currentEnvironment(context);

  while (environment) {
    if (Object.prototype.hasOwnProperty.call(environment.head, name)) {
      return environment.head[name];
    } else {
      environment = environment.tail;
    }
  }
  return handleRuntimeError(
    context,
    new UnboundValueError(name, context.runtime.nodes[0]),
  );
}
