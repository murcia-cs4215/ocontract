import structuredClone from '@ungap/structured-clone';

import { FunctionExpression } from 'parser/types';
import { formatType } from 'utils/formatters';

import { primitiveTypes, unitType } from '../constants';
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
  constructor(node: FunctionExpression, public context: Context) {
    this.name = node.id.name;
    this.originalNode = node;
    this.clonedEnvironments = structuredCloneWithTypes(
      context.runtime.environments,
    );
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
