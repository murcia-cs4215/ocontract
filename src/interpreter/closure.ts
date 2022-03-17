import structuredClone from '@ungap/structured-clone';

import { FunctionType, LambdaExpression } from 'parser/types';
import { formatType } from 'utils/formatters';

import { Context, Environment, RuntimeResult } from '../types';

import { handleRuntimeError, TooManyArgumentsError } from './errors';

function structuredCloneWithClosure<T>(item: T): T {
  if (Array.isArray(item)) {
    return item.map((i) => structuredCloneWithClosure(i)) as unknown as T;
  }
  if (item == null) {
    return item;
  }
  if (item instanceof Closure) {
    return Closure.createFromClosure(item) as unknown as T;
  }
  if (typeof item === 'object') {
    const result: Partial<T> = {};
    for (const [key, value] of Object.entries(item)) {
      result[key as keyof T] = structuredCloneWithClosure(value);
    }
    return result as T;
  }
  return structuredClone(item);
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
      structuredCloneWithClosure(context.runtime.environments),
    );
  }

  static createFromClosure(closure: Closure): Closure {
    return new Closure(closure.originalNode, closure.clonedEnvironments);
  }

  getType(): FunctionType {
    return this.originalNode.typeDeclaration;
  }
}

export function checkNumberOfArguments(
  closure: Closure,
  args: RuntimeResult[],
  context: Context,
): void {
  const params = closure.originalNode.params;
  if (params.length < args.length) {
    return handleRuntimeError(
      context,
      new TooManyArgumentsError(
        formatType(closure.getType()),
        context.runtime.nodes[0],
      ),
    );
  }
}
