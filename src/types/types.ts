export type Type = PrimitiveType | FunctionType | JoinedType;

export type PrimitiveValueType =
  | 'int'
  | 'float'
  | 'string'
  | 'char'
  | 'bool'
  | 'unit';

export interface PrimitiveType {
  type: 'PrimitiveType';
  valueType: PrimitiveValueType;
}

export interface FunctionType {
  type: 'FunctionType';
  parameterType: Type; // If multiple params, it's curried in types as well
  returnType: Type;
}

export type JoinedValueType = 'numeric' | 'any';

export interface JoinedType {
  type: 'JoinedType';
  valueType: JoinedValueType;
}

export type ContractType = FlatContractType | FunctionContractType;

export interface FlatContractType {
  type: 'FlatContractType';
  contractType: FunctionType;
}

export interface FunctionContractType {
  type: 'FunctionContractType';
  parameterType: ContractType;
  returnType: ContractType;
}
