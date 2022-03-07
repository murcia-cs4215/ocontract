import structuredClone from '@ungap/structured-clone';

import { FunctionExpression } from 'parser/types';
import { formatType } from 'utils/formatters';
import { primitiveTypes, unitType } from 'utils/typing';

import {
  Context,
  Environment,
  FunctionType,
  Primitive,
  RuntimeResult,
} from '../types';

import { handleRuntimeError, TooManyArgumentsError } from './errors';

function structuredCloneWithTypes<T>(item: T): T {
  if (primitiveTypes.some((t) => t === (item as unknown as Primitive))) {
    return item;
  }
  if (Array.isArray(item)) {
    return item.map((i) => structuredCloneWithTypes(i)) as unknown as T;
  }
  if (item === null || item === undefined) {
    return item;
  }
  if (item instanceof Closure) {
    return Closure.createFromClosure(item) as unknown as T;
  }
  if (typeof item === 'object') {
    const result: Partial<T> = {};
    for (const [key, value] of Object.entries(item)) {
      result[key as keyof T] = structuredCloneWithTypes(value);
    }
    return result as T;
  }
  return structuredClone(item);
}

export class Closure {
  name: string;
  originalNode: FunctionExpression;
  clonedEnvironments: Environment[];

  private constructor(node: FunctionExpression, environments: Environment[]) {
    this.name = node.id.name;
    this.originalNode = node;
    this.clonedEnvironments = environments;
  }

  static createFromFunctionExpression(
    node: FunctionExpression,
    context: Context,
  ): Closure {
    return new Closure(
      node,
      structuredCloneWithTypes(context.runtime.environments),
    );
  }

  static createFromClosure(closure: Closure): Closure {
    return new Closure(closure.originalNode, closure.clonedEnvironments);
  }

  getType(): FunctionType {
    return {
      kind: 'function',
      // TODO: Update this to be the actual function types
      parameterTypes: this.originalNode.params.map(() => unitType),
      returnType: unitType,
    };
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
