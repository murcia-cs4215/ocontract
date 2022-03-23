import { intType } from 'types/utils';
import { assertContractViolation, runTest } from 'utils/tests';

test('contract violation on assignment', () => {
  const res = runTest(`let gt0 : int -> bool = fun (x : int) : bool -> x > 0;;
contract f = gt0;;
let f : int = -1;;`);
  assertContractViolation(res, 'f', 2, 28);
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
  assertContractViolation(res, 'f', 2, 28);
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
