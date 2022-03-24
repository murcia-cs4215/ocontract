import { boolType, intType, makeFunctionType, stringType } from 'types/utils';
import {
  expectContractReturnTypeError,
  expectContractTypeError,
  expectNotAFunction,
  expectTypeError,
  runTest,
} from 'utils/tests';

test('contract that does not return bool', () => {
  const res = runTest(`let f (x : int) : int = x;;
contract g = f;;`);
  expectContractReturnTypeError(res, intType);
});

test('contract in set notation that does not return bool', () => {
  const res = runTest('contract g = {x : int | x + 1};;');
  expectTypeError(res, boolType, intType); // TODO: Look into triggering the other error instead
});

test('contract that is not a function', () => {
  const res = runTest('contract f = 5;;');
  expectNotAFunction(res, intType);
});

test('contract closure type does not match parameter type', () => {
  const res = runTest(`contract f = {x : int | x > 0} -> {y : string | true};;
let f (x : string) : string = x ^ "World";;`);
  expectContractTypeError(
    res,
    makeFunctionType(intType, stringType),
    makeFunctionType(stringType, stringType),
  );
});

test('contract closure type does not match return type', () => {
  const res =
    runTest(`contract f = {x : string | x > "Hello"} -> {y : int | true};;
let f (x : string) : string = x ^ "World";;`);
  expectContractTypeError(
    res,
    makeFunctionType(stringType, intType),
    makeFunctionType(stringType, stringType),
  );
});

test('contract arity mismatch', () => {
  const res = runTest(`contract f = {x : int | x > 0};;
let f (x : int) : int = x;;`);
  expectContractTypeError(res, intType, makeFunctionType(intType, intType));
});

test('using flat contract for a hof', () => {
  const res = runTest(`contract f = {x : int | x > 0} -> {y : int | y > 0};;
let f (x : int -> int) : int = x 0;;`);
  expectContractTypeError(
    res,
    makeFunctionType(intType, intType),
    makeFunctionType(makeFunctionType(intType, intType), intType),
  );
});

test('using function contract for a non-function parameter', () => {
  const res =
    runTest(`contract f = ({x : int | x > 0} -> {y : int | y > 0}) -> {z: int | z > 0};;
let f (x : int) : int = x;;`);
  expectContractTypeError(
    res,
    makeFunctionType(makeFunctionType(intType, intType), intType),
    makeFunctionType(intType, intType),
  );
});
