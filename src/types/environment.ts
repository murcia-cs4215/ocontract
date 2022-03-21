import { Context, TypeEnvironment } from '../runtimeTypes';

import { Type } from './types';
import {
  boolType,
  floatType,
  intType,
  makeFunctionType,
  primitiveTypes,
  stringType,
} from './utils';

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

export function createInitialTypeEnvironments(): TypeEnvironment[] {
  const initialTypeMappings = [...predeclaredNames, ...primitiveFuncs];

  return [new Map(initialTypeMappings)];
}

// ENVIRONMENT HELPERS

export function pushTypeEnvironment(
  context: Context,
  typeMap: TypeEnvironment,
): void {
  context.typeEnvironments.unshift(typeMap);
}

export function popTypeEnvironment(context: Context): TypeEnvironment | null {
  return context.typeEnvironments.shift() ?? null;
}

// TYPE HELPERS

export function getType(context: Context, name: string): Type | Type[] | null {
  for (let i = 0; i < context.typeEnvironments.length; i++) {
    if (context.typeEnvironments[i].has(name)) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      return context.typeEnvironments[i].get(name)!;
    }
  }
  return null;
}

export function setType(
  context: Context,
  name: string,
  type: Type | Type[],
): void {
  context.typeEnvironments[0].set(name, type);
}

// LOCAL ENVIRONMENT

export function createLocalTypeEnvironment(): TypeEnvironment {
  return new Map();
}
