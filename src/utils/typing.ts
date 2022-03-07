import { FunctionType, Primitive, Type } from '../types';

export function makePrimitive(type: Primitive['type']): Primitive {
  return {
    kind: 'primitive',
    type,
  };
}

export function makeFunctionType(...types: Type[]): FunctionType {
  const parameterTypes = types.slice(0, -1);
  const returnType = types.slice(-1)[0];
  return {
    kind: 'function',
    parameterTypes,
    returnType,
  };
}
