import { Context, Environment, RuntimeResult } from '../types';

import {
  handleRuntimeError,
  InterpreterError,
  UnboundValueError,
} from './errors';

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

export function setVariable(
  context: Context,
  name: string,
  value: any,
): RuntimeResult {
  const environment = currentEnvironment(context);
  if (!environment) {
    return handleRuntimeError(
      context,
      new InterpreterError(context.runtime.nodes[0].loc),
    );
  }
  environment.head[name] = value;
  return { ...value, name };
}
