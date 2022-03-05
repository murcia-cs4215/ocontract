import structuredClone from '@ungap/structured-clone';

import { FunctionExpression } from 'parser/types';

import { unitType } from '../constants';
import { Context, Environment, FunctionType } from '../types';

export class Closure {
  originalNode: FunctionExpression;
  originalEnvironment: Environment | null;
  constructor(
    node: FunctionExpression,
    environment: Environment | null,
    public context: Context,
  ) {
    this.originalNode = node;
    this.originalEnvironment = structuredClone(environment);
  }

  getType(): FunctionType {
    return {
      kind: 'function',
      // TODO: Update this to be the actual function types
      parameterTypes: [unitType],
      returnType: unitType,
    };
  }
}
