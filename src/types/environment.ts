import { Context, TypeEnvironment } from '../runtimeTypes';

import { ContractType, Type } from './types';
import {
  anyType,
  boolType,
  floatType,
  intType,
  makeFunctionType,
  numericType,
  primitiveTypes,
  stringType,
} from './utils';

const predeclaredNames: [string, Type | Type[]][] = [
  ['any', makeFunctionType(anyType, boolType)],
  ['positive', makeFunctionType(numericType, boolType)],
  ['negative', makeFunctionType(numericType, boolType)],
  ['zero', makeFunctionType(numericType, boolType)],
];

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

  return [
    { typeMap: new Map(initialTypeMappings), contractTypeMap: new Map() },
  ];
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
    if (context.typeEnvironments[i].typeMap.has(name)) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      return context.typeEnvironments[i].typeMap.get(name)!;
    }
  }
  return null;
}

export function setType(
  context: Context,
  name: string,
  type: Type | Type[],
): void {
  context.typeEnvironments[0].typeMap.set(name, type);
}

export function getContractType(
  context: Context,
  name: string,
): ContractType | null {
  for (let i = 0; i < context.typeEnvironments.length; i++) {
    if (context.typeEnvironments[i].contractTypeMap.has(name)) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      return context.typeEnvironments[i].contractTypeMap.get(name)!;
    }
  }
  return null;
}

export function setContractType(
  context: Context,
  name: string,
  type: ContractType,
): void {
  context.typeEnvironments[0].contractTypeMap.set(name, type);
}

// LOCAL ENVIRONMENT

export function createLocalTypeEnvironment(): TypeEnvironment {
  return { typeMap: new Map(), contractTypeMap: new Map() };
}
