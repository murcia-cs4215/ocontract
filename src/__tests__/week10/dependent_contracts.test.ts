import { intType } from 'types/utils';
import { expectContractViolation, expectError, runTest } from 'utils/tests';

test('simple dependent contract', () => {
  const res = runTest(`contract f = {x : int | x > 0} -> {y : int | y > x};;
let f (x : int) : int = x + 1;;
f 10;;`);
  expect(res).toEqual({
    status: 'finished',
    value: 11,
    type: intType,
  });
});

test('simple dependent contract violation', () => {
  const res = runTest(`contract f = {x : int | x > 0} -> {y : int | y > x};;
let f (x : int) : int = x - 1;;
f 10;;`);
  expectContractViolation(res, 'f', 1, 0);
});

test('dependent contract with multiple variables', () => {
  const res =
    runTest(`contract f = {x : int | x > 0} -> {y : int | y > 0} -> {z : int | z = y + x};;
let f (a : int) (b : int) : int = a + b;;
f 2 3;;`);
  expect(res).toEqual({
    status: 'finished',
    value: 5,
    type: intType,
  });
});

test('dependent contract violation with multiple variables', () => {
  // When the parameters are dependent and that gets violated
  let res =
    runTest(`contract f = {x : int | x > 0} -> {y : int | y > 0} -> {z : int | z = y + x};;
let f (a : int) (b : int) : int = a + b + 1;;
f 2 3;;`);
  expectContractViolation(res, 'f', 1, 0);

  // When the return value is dependent and that gets violated
  res =
    runTest(`contract f = {x : int | x > 0} -> {y : int | y > x} -> {z : int | z = y + x};;
let f (a : int) (b : int) : int = a + b;;
f 2 (-1);;`);
  expectContractViolation(res, 'main', 1, 0);
});

test('dependent contract with higher order function', () => {
  // The hof is dependent within itself
  let res =
    runTest(`contract f = ({x : int | x > 0} -> {y : int | y > x}) -> {z : int | z > 1};;
let f (a : int -> int) : int = a 1;;
f (fun (x: int) : int -> x + 1);;`);
  expect(res).toEqual({
    status: 'finished',
    value: 2,
    type: intType,
  });

  // The hof is dependent on other parameters, kind of like a higher scope
  res =
    runTest(`contract f = {x : int | x > 0} -> ({z : int | z > x} -> {y : int | y > z && y > x}) -> {z : int | z > x};;
let f (a : int) (b : int -> int) : int = b (a + 1);;
f 2 (fun (x : int) : int -> x + 1);;`);
  expect(res).toEqual({
    status: 'finished',
    value: 4,
    type: intType,
  });
});

test('dependent contract violation with higher order function own dependency', () => {
  const res =
    runTest(`contract f = ({x : int | x > 0} -> {y : int | y > x}) -> {z : int | z > 1};;
let f (a : int -> int) : int = a 1;;
f (fun (x: int) : int -> x - 1);;`);
  expectContractViolation(res, 'main', 1, 0);
});

test('dependent contract violation with higher order function depending on other parameters', () => {
  // Violation at hof parameter level
  let res =
    runTest(`contract f = {x : int | x > 0} -> ({z : int | z > x} -> {y : int | y > z && y > x}) -> {z : int | z > x};;
let f (a : int) (b : int -> int) : int = b a;;
f 2 (fun (x : int) : int -> x + 1);;`);
  expectContractViolation(res, 'f', 1, 0);

  // Violation at hof return value level
  res =
    runTest(`contract f = {x : int | x > 0} -> ({z : int | z > x} -> {y : int | y > z && y > x}) -> {z : int | z > x};;
let f (a : int) (b : int -> int) : int = b (a + 1);;
f 2 (fun (x : int) : int -> x - 1);;`);
  expectContractViolation(res, 'main', 1, 0);
});

test('dependent contract cannot depend on later parameters', () => {
  const res = runTest(
    'contract f = {x : int | x > y} -> {y : int | y > 0} -> {z : int | z > x};;',
  );
  expectError(res, 'Unbound value y');
});

test('dependent contract can depend on environment upon contract declaration', () => {
  // No violation
  let res = runTest(`let x : int = 10;;
contract f = {y : int | y > x} -> {z : int | z > y};;
let f (x : int) : int = x + 1;;
f 20;;`);
  expect(res).toEqual({
    status: 'finished',
    value: 21,
    type: intType,
  });

  // Violation
  res = runTest(`let x : int = 10;;
contract f = {y : int | y > x} -> {z : int | z > y};;
let f (x : int) : int = x + 1;;
f 9;;`);
  expectContractViolation(res, 'main', 2, 0);

  // Environment in contract is not mutable
  res = runTest(`let x : int = 10;;
contract f = {y : int | y > x} -> {z : int | z > y};;
let x : int = 5;;
let f (x : int) : int = x + 1;;
f 9;;`);
  expectContractViolation(res, 'main', 2, 0);
});

test('hof dependent contract can shadow names', () => {
  // the hof's y in z's dependent contract refers to its own y
  const res =
    runTest(`contract f = {y : int | true} -> ({y : int | true} -> {z : int | z > y}) -> {z : int | true};;
let f (x : int) (y : int -> int) : int = y 5;;
f 20 (fun (x : int) : int -> x + 1);;`);
  expect(res).toEqual({
    status: 'finished',
    value: 6,
    type: intType,
  });
});

test('dependent contract cannot be dependent on names only in hof contracts', () => {
  const res = runTest(
    'contract f = ({x : int | x > 0} -> {y : int | y > x}) -> {z : int | z > y};;',
  );
  expectError(res, 'Unbound value y');
});
