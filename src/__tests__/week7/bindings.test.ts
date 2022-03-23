import { intType } from 'types/utils';
import { assertError, runTest } from 'utils/tests';

test('unbound name', () => {
  const res = runTest('x;;');
  assertError(res, 'Unbound value x');
});

test('global binding expression', () => {
  const res = runTest('let x : int = 10;;');
  expect(res).toEqual({
    status: 'finished',
    value: 10,
    type: intType,
    name: 'x',
  });
});

test('bound identifier', () => {
  const res = runTest(`let x : int = 10;;
x;;`);
  expect(res).toEqual({
    status: 'finished',
    value: 10,
    type: intType,
  });
});

test('rebinding identifier', () => {
  let res = runTest(`let x : int = 10;;
let x : int = 20;;`);
  expect(res).toEqual({
    status: 'finished',
    value: 20,
    type: intType,
    name: 'x',
  });

  res = runTest(`let x : int = 10;;
let x : int = 20;;
x;;`);
  expect(res).toEqual({
    status: 'finished',
    value: 20,
    type: intType,
  });
});

test('local binding expression', () => {
  const res = runTest('let x : int = 10 in x;;');
  expect(res).toEqual({
    status: 'finished',
    value: 10,
    type: intType,
  });
});

test('local binding with operations', () => {
  const res = runTest('let x : int = 10 in x + 10;;');
  expect(res).toEqual({
    status: 'finished',
    value: 20,
    type: intType,
  });
});

test('local binding with nesting', () => {
  const res = runTest(`let a : int = 1 in
  let b : int = a + 1 in
    let c : int = b + 1 in
      a + b + c;;`);
  expect(res).toEqual({
    status: 'finished',
    value: 6,
    type: intType,
  });
});

test('local binding scopes the declaration', () => {
  const res = runTest(`let a : int = 1 in a;;
a;;`);
  assertError(res, 'Unbound value a');
});

test('operation after binding', () => {
  const res = runTest(`let x : int = 10;;
x + 20;;`);
  expect(res).toEqual({
    status: 'finished',
    value: 30,
    type: intType,
  });
});

test('local binding with functions', () => {
  const res = runTest('let x (y : int) : int = y + 10 in x 20 + 10;;');
  expect(res).toEqual({
    status: 'finished',
    value: 40,
    type: intType,
  });
});
