import { FunctionType, Primitive, Type, TypeEnvironment } from '../../types';

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

const predeclaredNames: [string, Type | Type[]][] = [];

// Name of Unary negative builtin operator
export const NEGATIVE_OP = '-_1';

function makeComparableTypes(): Type[] {
  return [intType, floatType, boolType, stringType, charType].map((type) =>
    makeFunctionType(type, type, boolType),
  );
}

const primitiveFuncs: [string, Type | Type[]][] = [
  [
    NEGATIVE_OP,
    [
      makeFunctionType(intType, intType),
      makeFunctionType(floatType, floatType),
    ],
  ],
  ['not', makeFunctionType(boolType, boolType)],
  ['&&', makeFunctionType(boolType, boolType, boolType)],
  ['||', makeFunctionType(boolType, boolType, boolType)],
  ['<', makeComparableTypes()],
  ['<=', makeComparableTypes()],
  ['>', makeComparableTypes()],
  ['>=', makeComparableTypes()],
  ['=', makeComparableTypes()],
  ['<>', makeComparableTypes()],
  ['==', makeComparableTypes()],
  ['!=', makeComparableTypes()],
  ['+', makeFunctionType(intType, intType, intType)],
  ['%', makeFunctionType(intType, intType, intType)],
  ['-', makeFunctionType(intType, intType, intType)],
  ['*', makeFunctionType(intType, intType, intType)],
  ['/', makeFunctionType(intType, intType, intType)],
  ['mod', makeFunctionType(intType, intType, intType)],
  ['+.', makeFunctionType(floatType, floatType, floatType)],
  ['-.', makeFunctionType(floatType, floatType, floatType)],
  ['*.', makeFunctionType(floatType, floatType, floatType)],
  ['/.', makeFunctionType(floatType, floatType, floatType)],
  ['**', makeFunctionType(floatType, floatType, floatType)],
  ['^', makeFunctionType(stringType, stringType, stringType)],
];

export function createTypeEnvironment(): TypeEnvironment {
  const initialTypeMappings = [...predeclaredNames, ...primitiveFuncs];

  return [
    {
      typeMap: new Map(initialTypeMappings),
    },
  ];
}
