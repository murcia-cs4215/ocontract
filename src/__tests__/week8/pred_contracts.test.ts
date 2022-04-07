import { intType } from 'types/utils';
import { expectContractViolation, runTest } from 'utils/tests';

test('contract violation on assignment', () => {
  const res = runTest(`let gt0 : int -> bool = fun (x : int) : bool -> x > 0;;
contract f = gt0;;
let f : int = -1;;`);
  expectContractViolation(res, 'main', 2, 0); // contract definition location
});

test('no contract violation if satisfy contract', () => {
  const res = runTest(`let gt0 : int -> bool = fun (x : int) : bool -> x > 0;;
contract f = gt0;;
let f : int = 1;;`);
  expect(res).toEqual({
    status: 'finished',
    value: 1,
    type: intType,
    name: 'f',
  });
});

test('contract violation on complex expression', () => {
  const res = runTest(`let gt0 : int -> bool = fun (x : int) : bool -> x > 0;;
contract f = gt0;;
let f : int = if false then 1 + 3 else (-1) - 100;;`);
  expectContractViolation(res, 'main', 2, 0); // contract definition location
});

test('no contract violation on complex expression if satisfy contract', () => {
  const res = runTest(`let gt0 : int -> bool = fun (x : int) : bool -> x > 0;;
contract f = gt0;;
let f : int = if true then 1 + 3 else (-1) - 100;;`);
  expect(res).toEqual({
    status: 'finished',
    value: 4,
    type: intType,
    name: 'f',
  });
});

test('contract with complex expression', () => {
  const res =
    runTest(`let gt (x : int) : int -> bool = fun (y : int) : bool -> y > x;;
contract f = (gt 0);;
let f : int = if true then 1 + 3 else (-1) - 100;;`);
  expect(res).toEqual({
    status: 'finished',
    value: 4,
    type: intType,
    name: 'f',
  });
});

test('contract violation in let local binding LHS', () => {
  const res =
    runTest(`let gt (x : int) : int -> bool = fun (y : int) : bool -> y > x;;
contract f = (gt 0);;
let f : int = 0 in f + 1;;`);
  expectContractViolation(res, 'main', 2, 0); // contract definition location
});

test('no contract violation in let local binding LHS', () => {
  const res =
    runTest(`let gt (x : int) : int -> bool = fun (y : int) : bool -> y > x;;
contract f = (gt 0);;
let f : int = 1 in f + 1;;`);
  expect(res).toEqual({
    status: 'finished',
    value: 2,
    type: intType,
  });
});

test('contract violation in let local binding RHS', () => {
  const res =
    runTest(`let gt (x : int) : int -> bool = fun (y : int) : bool -> y > x;;
contract f = (gt 0);;
let x : int = 0 in let f : int = 0 in 5;;`);
  expectContractViolation(res, 'main', 2, 0); // contract definition location
});

test('no contract violation in let local binding RHS', () => {
  const res =
    runTest(`let gt (x : int) : int -> bool = fun (y : int) : bool -> y > x;;
contract f = (gt 0);;
let x : int = 0 in let f : int = 1 in 5;;`);
  expect(res).toEqual({
    status: 'finished',
    value: 5,
    type: intType,
  });
});
