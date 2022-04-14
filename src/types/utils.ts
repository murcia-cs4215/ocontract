import isEqual from 'lodash.isequal';

import { Contract } from 'contracts/types';
import { formatType } from 'utils/formatters';

import {
  ContractType,
  FunctionType,
  JoinedType,
  JoinedValueType,
  PrimitiveType,
  PrimitiveValueType,
  Type,
} from './types';

export function makePrimitive(type: PrimitiveValueType): PrimitiveType {
  return {
    type: 'PrimitiveType',
    valueType: type,
  };
}

export function makeJoined(type: JoinedValueType): JoinedType {
  return {
    type: 'JoinedType',
    valueType: type,
  };
}

export function makeFunctionType(...types: Type[]): FunctionType {
  const parameterTypes = types.slice(0, -1);
  const returnType = types[types.length - 1];
  if (isJoinedType(returnType)) {
    throw new Error('Return type cannot be a joined type!');
  }
  return curryParamTypes(parameterTypes, returnType);
}

export const intType = makePrimitive('int');
export const floatType = makePrimitive('float');
export const boolType = makePrimitive('bool');
export const stringType = makePrimitive('string');
export const charType = makePrimitive('char');
export const unitType = makePrimitive('unit');
export const numericType = makeJoined('numeric');
export const anyType = makeJoined('any');

export const primitiveTypes = [
  intType,
  floatType,
  boolType,
  stringType,
  charType,
  unitType,
];

export const valueTypeToPrimitive: { [valueType: string]: PrimitiveType } = {
  int: intType,
  float: floatType,
  bool: boolType,
  string: stringType,
  char: charType,
};

export function isPrimitiveType(type: Type): type is PrimitiveType {
  return type.type === 'PrimitiveType';
}

export function isFunctionType(type: Type): type is FunctionType {
  return type.type === 'FunctionType';
}

export function isJoinedType(type: Type): type is JoinedType {
  return type.type === 'JoinedType';
}

export function isInt(type: Type): boolean {
  return isEqual(type, intType);
}

export function isFloat(type: Type): boolean {
  return isEqual(type, floatType);
}

export function isBool(type: Type): boolean {
  return isEqual(type, boolType);
}

export function isString(type: Type): boolean {
  return isEqual(type, stringType);
}

export function isChar(type: Type): boolean {
  return isEqual(type, charType);
}

export function isNumeric(type: Type): boolean {
  return isEqual(type, numericType);
}

export function isAny(type: Type): boolean {
  return isEqual(type, anyType);
}

export function isSameType(type1: Type, type2: Type): boolean {
  if (isAny(type1) || isAny(type2)) {
    return true;
  }
  if (isNumeric(type1)) {
    return isNumeric(type2) || isInt(type2) || isFloat(type2);
  }
  if (isNumeric(type2)) {
    return isNumeric(type1) || isInt(type1) || isFloat(type1);
  }
  return isEqual(type1, type2);
}

/**
 * Curries a function with type of format x -> x -> x -> x
 * to a type with format x -> (x -> (x -> x)).
 */
export function curryParamTypes(
  paramTypes: Type[],
  returnType: Type,
): FunctionType {
  let finalType = returnType;
  for (let i = paramTypes.length - 1; i >= 0; i--) {
    finalType = {
      type: 'FunctionType',
      parameterType: paramTypes[i],
      returnType: finalType,
    };
  }
  return finalType as FunctionType;
}

export function formatContractType(contractType: ContractType): string {
  if (contractType.type === 'FlatContractType') {
    if (Array.isArray(contractType.contractType)) {
      return formatType(contractType.contractType.map((t) => t.parameterType));
    }
    return formatType(contractType.contractType.parameterType);
  }
  return `${formatContractType(
    contractType.parameterType,
  )} -> ${formatContractType(contractType.returnType)}`;
}

export function getTypeOfContract(contract: Contract): Type {
  if (contract.type === 'FlatContract') {
    return (contract.contract.getType() as FunctionType).parameterType;
  }
  return makeFunctionType(
    getTypeOfContract(contract.parameterContract),
    getTypeOfContract(contract.returnContract),
  );
}
