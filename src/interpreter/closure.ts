import cloneDeep from 'lodash.clonedeep';

import { LambdaExpression } from 'parser/types';
import { FunctionType } from 'types/types';

import { Context, Environment } from '../runtimeTypes';

function cloneDeepWithClosure<T>(item: T): T {
  if (Array.isArray(item)) {
    return item.map((i) => cloneDeepWithClosure(i)) as unknown as T;
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
