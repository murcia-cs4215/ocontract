import {
  boolType,
  floatType,
  intType,
  makeFunctionType,
  primitiveTypes,
  stringType,
} from 'utils/typing';

import { Type, TypeEnvironment } from '../../types';

const predeclaredNames: [string, Type | Type[]][] = [];

// Name of Unary negative builtin operator
export const NEGATIVE_OP = '-_1';

function makeComparableTypes(): Type[] {
  return primitiveTypes.map((type) => makeFunctionType(type, type, boolType));
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
