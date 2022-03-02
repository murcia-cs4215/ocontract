import {
  ForAll,
  FunctionType,
  Primitive,
  Type,
  TypeEnvironment,
  Variable,
} from '../../types';

export function tPrimitive(name: Primitive['name']): Primitive {
  return {
    kind: 'primitive',
    name,
  };
}

export function tVar(name: string | number): Variable {
  return {
    kind: 'variable',
    name: `T${name}`,
    constraint: 'none',
  };
}

export function tComparable(name: string): Variable {
  return {
    kind: 'variable',
    name: `${name}`,
    constraint: 'comparable',
  };
}
export function tNegatable(name: string): Variable {
  return {
    kind: 'variable',
    name: `${name}`,
    constraint: 'negatable',
  };
}

export function tForAll(type: Type): ForAll {
  return {
    kind: 'forall',
    polyType: type,
  };
}

export function tFunc(...types: Type[]): FunctionType {
  const parameterTypes = types.slice(0, -1);
  const returnType = types.slice(-1)[0];
  return {
    kind: 'function',
    parameterTypes,
    returnType,
  };
}

export const tInt = tPrimitive('int');
export const tFloat = tPrimitive('float');
export const tBool = tPrimitive('bool');
export const tString = tPrimitive('string');
export const tChar = tPrimitive('char');

const predeclaredNames: [string, Type][] = [];

// Name of Unary negative builtin operator
const NEGATIVE_OP = '-_1';

const primitiveFuncs: [string, Type][] = [
  [NEGATIVE_OP, tForAll(tFunc(tNegatable('A'), tNegatable('A')))],
  ['not', tFunc(tBool, tBool)],
  ['&&', tFunc(tBool, tBool, tBool)],
  ['||', tFunc(tBool, tBool, tBool)],
  ['<', tForAll(tFunc(tComparable('A'), tComparable('A'), tBool))],
  ['<=', tForAll(tFunc(tComparable('A'), tComparable('A'), tBool))],
  ['>', tForAll(tFunc(tComparable('A'), tComparable('A'), tBool))],
  ['>=', tForAll(tFunc(tComparable('A'), tComparable('A'), tBool))],
  ['=', tForAll(tFunc(tComparable('A'), tComparable('A'), tBool))],
  ['<>', tForAll(tFunc(tComparable('A'), tComparable('A'), tBool))],
  ['==', tForAll(tFunc(tComparable('A'), tComparable('A'), tBool))],
  ['!=', tForAll(tFunc(tComparable('A'), tComparable('A'), tBool))],
  ['+', tFunc(tInt, tInt, tInt)],
  ['%', tFunc(tInt, tInt, tInt)],
  ['-', tFunc(tInt, tInt, tInt)],
  ['*', tFunc(tInt, tInt, tInt)],
  ['/', tFunc(tInt, tInt, tInt)],
  ['+.', tFunc(tFloat, tFloat, tFloat)],
  ['-.', tFunc(tFloat, tFloat, tFloat)],
  ['*.', tFunc(tFloat, tFloat, tFloat)],
  ['/.', tFunc(tFloat, tFloat, tFloat)],
  ['**', tFunc(tFloat, tFloat, tFloat)],
  ['^', tFunc(tString, tString, tString)],
];

export function createTypeEnvironment(): TypeEnvironment {
  const initialTypeMappings = [...predeclaredNames, ...primitiveFuncs];

  return [
    {
      typeMap: new Map(initialTypeMappings),
    },
  ];
}
