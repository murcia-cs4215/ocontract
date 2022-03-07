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

export const intType = makePrimitive('int');
export const floatType = makePrimitive('float');
export const boolType = makePrimitive('bool');
export const stringType = makePrimitive('string');
export const charType = makePrimitive('char');
export const unitType = makePrimitive('unit');

export const primitiveTypes = [
  intType,
  floatType,
  boolType,
  stringType,
  charType,
  unitType,
];

export const valueTypeToPrimitive: { [valueType: string]: Primitive } = {
  int: intType,
  float: floatType,
  bool: boolType,
  string: stringType,
  char: charType,
};

export function isPrimitive(type: Type): type is Primitive {
  return type.kind === 'primitive';
}

export function isFunction(type: Type): type is FunctionType {
  return type.kind === 'function';
}

export function isInt(type: Type): boolean {
  return type === intType;
}

export function isFloat(type: Type): boolean {
  return type === floatType;
}

export function isBool(type: Type): boolean {
  return type === boolType;
}

export function isString(type: Type): boolean {
  return type === stringType;
}

export function isChar(type: Type): boolean {
  return type === charType;
}

export function isSameType(type1: Type, type2: Type): boolean {
  if (type1.kind !== type2.kind) {
    return false;
  }
  if (isFunction(type1) && isFunction(type2)) {
    return (
      type1.parameterTypes.length === type2.parameterTypes.length &&
      type1.parameterTypes.every((param, index) =>
        isSameType(param, type2.parameterTypes[index]),
      ) &&
      isSameType(type1.returnType, type2.returnType)
    );
  }
  return type1 === type2;
}
