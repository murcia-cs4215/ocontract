import uniqueId from 'lodash.uniqueid';

import { Context, Environment, Frame, RuntimeResult } from '../types';

import { Closure } from './closure';
import {
  handleRuntimeError,
  InterpreterError,
  UnboundValueError,
} from './errors';

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
    new UnboundValueError(name, context.runtime.nodes[0]),
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
  args: RuntimeResult[],
): Environment {
  const environment = {
    name: closure.name,
    tail: closure.clonedEnvironments[0],
    head: {} as Frame,
    id: uniqueId(),
  };

  // We bound the number of iterations by the number of arguments
  args.forEach((arg, index) => {
    if (!environment.head) {
      return;
    }
    const param = closure.originalNode.params[index];
    environment.head[param.name] = arg;
  });

  return environment;
}
