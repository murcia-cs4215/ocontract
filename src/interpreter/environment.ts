import uniqueId from 'lodash.uniqueid';

import { Context, Environment, Frame, RuntimeResult } from '../runtimeTypes';

import { Closure } from './closure';
import { handleRuntimeError, InterpreterError } from './errors';

// ENVIRONMENT HELPERS

export function currentEnvironment(context: Context): Environment | null {
  return context.runtime.environments[0] ?? null;
}

export function pushEnvironment(
  context: Context,
  environment: Environment,
): void {
  context.runtime.environments.unshift(environment);
  // TODO: See if we need the environment tree here
}

export function popEnvironment(context: Context): Environment | null {
  return context.runtime.environments.shift() ?? null;
}

// VARIABLE FUNCTIONS

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
    new InterpreterError(
      context.runtime.nodes[0],
      'Variable referenced before being initialised, which should have been caught by the type checker.',
    ),
  );
}

export function setVariable(
  context: Context,
  name: string,
  value: RuntimeResult | Closure,
): RuntimeResult {
  const environment = currentEnvironment(context);
  if (!environment) {
    return handleRuntimeError(
      context,
      new InterpreterError(context.runtime.nodes[0]),
    );
  }
  if (value instanceof Closure) {
    value = {
      value,
      type: value.getType(),
    };
  }

  environment.head[name] = value;
  return { ...value, name };
}

// LOCAL ENVIRONMENT

export function createLocalEnvironment(
  context: Context,
  name = 'localEnvironment',
): Environment {
  return {
    name,
    tail: currentEnvironment(context),
    head: {},
    id: uniqueId(),
  };
}

// Assumption: number of arguments <= number of parameters
export function createFunctionEnvironment(
  closure: Closure,
  arg: RuntimeResult,
): Environment {
  const environment = {
    tail: closure.clonedEnvironments[0],
    head: {} as Frame,
    id: uniqueId(),
  };

  const param = closure.originalNode.params[0];
  environment.head[param.name] = arg;
  return environment;
}
