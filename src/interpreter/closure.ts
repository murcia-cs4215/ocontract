import assert from 'assert';
import cloneDeep from 'lodash.clonedeep';

import { LambdaExpression } from 'parser/types';
import { FunctionType, Type } from 'types/types';

import { Context, Environment, RuntimeResult } from '../runtimeTypes';

import { handleRuntimeError, InterpreterError } from './errors';

export function cloneDeepWithClosure<T>(item: T): T {
  if (Array.isArray(item)) {
    return item.map((i) => cloneDeepWithClosure(i)) as unknown as T;
  }
  if (item == null) {
    return item;
  }
  if (item instanceof Closure) {
    return Closure.createFromClosure(item) as unknown as T;
  }
  if (item instanceof DefaultClosure) {
    return DefaultClosure.createFromDefaultClosure(item) as unknown as T;
  }
  if (typeof item === 'object') {
    const result: Partial<T> = {};
    for (const [key, value] of Object.entries(item)) {
      result[key as keyof T] = cloneDeepWithClosure(value);
    }
    return result as T;
  }
  return cloneDeep(item);
}

export class Closure {
  originalNode: LambdaExpression;
  clonedEnvironments: Environment[];

  private constructor(node: LambdaExpression, environments: Environment[]) {
    this.originalNode = node;
    this.clonedEnvironments = environments;
  }

  static createFromLambdaExpression(
    node: LambdaExpression,
    context: Context,
  ): Closure {
    return new Closure(
      node,
      cloneDeepWithClosure(context.runtime.environments),
    );
  }

  static createFromClosure(closure: Closure): Closure {
    return new Closure(closure.originalNode, closure.clonedEnvironments);
  }

  getType(): FunctionType {
    return this.originalNode.typeDeclaration;
  }
}

// Default in-built functions, must be standalone functions that work solely with
// the provided arguments. Will not support contracts on these functions.
export class DefaultClosure {
  type: Type;
  numberOfArguments: number;
  args: RuntimeResult[];
  func: (args: RuntimeResult[]) => RuntimeResult;

  constructor(
    type: Type,
    numberOfArguments: number,
    func: (args: RuntimeResult[]) => RuntimeResult,
    args: RuntimeResult[] = [],
  ) {
    this.type = type;
    this.numberOfArguments = numberOfArguments;
    this.func = func;
    this.args = args;
  }

  static createFromDefaultClosure(closure: DefaultClosure): DefaultClosure {
    return new DefaultClosure(
      closure.type,
      closure.numberOfArguments,
      closure.func,
      closure.args,
    );
  }

  // Assumes that the argument type and argument length has been checked before.
  addArg(argument: RuntimeResult): DefaultClosure {
    assert(this.args.length < this.numberOfArguments);
    const newArgs = [...this.args, argument];
    const newType = (this.type as FunctionType).returnType;
    return new DefaultClosure(
      newType,
      this.numberOfArguments,
      this.func,
      newArgs,
    );
  }

  canCompute(): boolean {
    return this.args.length === this.numberOfArguments;
  }

  compute(context: Context): RuntimeResult {
    if (this.args.length !== this.numberOfArguments) {
      return handleRuntimeError(
        context,
        new InterpreterError(context.runtime.nodes[0]),
      );
    }
    return this.func(this.args);
  }

  getType(): Type {
    return this.type;
  }
}
