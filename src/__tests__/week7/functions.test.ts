import { intType, makeFunctionType } from 'types/utils';
import { expectError, runTest } from 'utils/tests';

test('single parameter function', () => {
  const res = runTest('let x (a : int) : int = a + 10;;');
  expect(res).toMatchObject({
    status: 'finished',
    type: makeFunctionType(intType, intType),
  });
});

test('multiple parameter function', () => {
  const res = runTest('let x (a : int) (b : int) : int = a + b;;');
  expect(res).toMatchObject({
    status: 'finished',
    type: makeFunctionType(intType, intType, intType),
  });
});

test('recursive function declaration', () => {
  const res = runTest(
    'let rec fact (a : int) : int = if a = 0 then 1 else fact (a - 1) * a;;',
  );
  expect(res).toMatchObject({
    status: 'finished',
    type: makeFunctionType(intType, intType),
  });
});

test('function call with one argument', () => {
  const res = runTest(`let x (a : int) : int = a + 10;;
x 20;;`);
  expect(res).toEqual({
    status: 'finished',
    value: 30,
    type: intType,
  });
});

test('function call with two arguments', () => {
  const res = runTest(`let x (a : int) (b : int) : int = a + b;;
x 20 10;;`);
  expect(res).toEqual({
    status: 'finished',
    value: 30,
    type: intType,
  });
});

test('function currying', () => {
  const res = runTest(`let x (a : int) (b : int) : int = a + b;;
let y : int -> int = x 10;;`);
  expect(res).toMatchObject({
    status: 'finished',
    type: makeFunctionType(intType, intType),
  });
});

test('function currying with call', () => {
  const res = runTest(`let x (a : int) (b : int) : int = a + b;;
let y : int -> int = x 10;;
y 20;;`);
  expect(res).toEqual({
    status: 'finished',
    value: 30,
    type: intType,
  });
});

test('closure captures previous environment', () => {
  const res = runTest(`let m : int = 10;;
let x (a : int) : int = m + a;;
let m : int = 30;;
x 5;;`);
  expect(res).toEqual({
    status: 'finished',
    value: 15,
    type: intType,
  });
});

test('multiple closures all capture their previous environments correctly', () => {
  const res = runTest(`let m : int = 10;;
let x (a : int) : int = m + a;;
let m : int = 30;;
let j (y : int) : int = m + x y;;
j 5;;`);
  expect(res).toEqual({
    status: 'finished',
    value: 45,
    type: intType,
  });
});

test('recursive function application', () => {
  const res =
    runTest(`let rec fact (n : int) : int = if n == 0 then 1 else fact (n - 1) * n;;
fact 5;;`);
  expect(res).toEqual({
    status: 'finished',
    value: 120,
    type: intType,
  });
});

test('application of non-function', () => {
  const res = runTest(`let x : int = 5;;
x 10;;`);
  expectError(
    res,
    'This expression has type int',
    'This is not a function; it cannot be applied.',
  );
});
