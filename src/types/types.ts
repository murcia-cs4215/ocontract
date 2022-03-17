export type Type = PrimitiveType | FunctionType;

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
