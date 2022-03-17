import assert from 'assert';

import { intType, makeFunctionType } from 'checkers/types/utils';
import { runTest } from 'utils/tests';

test('single parameter lambda', () => {
  const res = runTest('let x : int -> int = fun (a : int) : int -> a + 10;;');
  expect(res.status).toBe('finished');
  assert('type' in res);
  expect(res.type).toEqual(makeFunctionType(intType, intType));
});

test('multiple parameter lambda', () => {
  let res = runTest(
    'let x : int -> int -> int = fun (a : int) : int -> int -> fun (b : int) : int -> a + b;;',
  );
  expect(res.status).toBe('finished');
  assert('type' in res);
  expect(res.type).toEqual(
    makeFunctionType(intType, makeFunctionType(intType, intType)),
  );

  // two parameters at once
  res = runTest(
    'let x : int -> int -> int = fun (a : int) (b : int) : int -> a + b;;',
  );
  expect(res.status).toBe('finished');
  assert('type' in res);
  expect(res.type).toEqual(makeFunctionType(intType, intType, intType));
});

test('lambda call with one argument', () => {
  const res = runTest(`
    let x : int -> int = fun (a : int) : int -> a + 10;;
    x 20;;
  `);
  expect(res).toEqual({
    status: 'finished',
    value: 30,
    type: intType,
  });
});

test('lambda call with two arguments', () => {
  const res = runTest(`
    let x : int -> int -> int = fun (a : int) : int -> int -> fun (b : int) : int -> a + b;;
    x 20 10;;
  `);
  expect(res).toEqual({
    status: 'finished',
    value: 30,
    type: intType,
  });
});

test('lambda currying', () => {
  const res = runTest(`
    let x : int -> int -> int = fun (a : int) : int -> int -> fun (b : int) : int -> a + b;;
    let y : int -> int = x 10;;
  `);
  expect(res.status).toBe('finished');
  assert('type' in res);
  expect(res.type).toEqual(makeFunctionType(intType, intType));
});

test('lambda currying with call', () => {
  const res = runTest(`
    let x : int -> int -> int = fun (a : int) (b : int) : int -> a + b;;
    let y : int -> int = x 10;;
    y 20;;
  `);
  expect(res).toEqual({
    status: 'finished',
    value: 30,
    type: intType,
  });
});

test('lambda closure captures previous environment', () => {
  const res = runTest(`
    let m : int = 10;;
    let x : int -> int = fun (a : int) : int -> m + a;;
    let m : int = 30;;
    x 5;;
  `);
  expect(res).toEqual({
    status: 'finished',
    value: 15,
    type: intType,
  });
});

test('multiple closures all capture their previous environments correctly', () => {
  const res = runTest(`
    let m : int = 10;;
    let x : int -> int = fun (a : int) : int -> m + a;;
    let m : int = 30;;
    let j : int -> int = fun (y : int) : int -> m + x y;;
    j 5;;
  `);
  expect(res).toEqual({
    status: 'finished',
    value: 45,
    type: intType,
  });
});

test('lambda chaining', () => {
  const res = runTest(`
    let x : int -> int -> int -> int = fun (x : int) : int -> int -> int -> fun (y : int) : int -> int -> fun (z : int) : int -> x + y + z in x 1 2 3;;
  `);
  expect(res).toEqual({
    status: 'finished',
    value: 6,
    type: intType,
  });
});

test('lambda declaration without assigning it to a variable', () => {
  const res = runTest(`
    (fun (x : int) : int -> x + 1) 2;;
  `);
  expect(res).toEqual({
    status: 'finished',
    value: 3,
    type: intType,
  });
});

test('passing in lambda as argument to hof', () => {
  const res = runTest(`
    let f (g : int -> int) : int = g 2;;
    f (fun (x : int) : int -> x);;
  `);
  expect(res).toEqual({
    status: 'finished',
    value: 2,
    type: intType,
  });
});

test('returning lambda in hof', () => {
  const res = runTest(`
    let f (g : int -> int) : int -> int = fun (x : int) : int -> x + g 2;;
    f (fun (x : int) : int -> x) 2;;
  `);
  expect(res).toEqual({
    status: 'finished',
    value: 4,
    type: intType,
  });
});

test('variable that is defined as lambda', () => {
  const res = runTest(`
    let f : int -> int = fun (x : int) : int -> x + 1;;
    f 1;;
  `);
  expect(res).toEqual({
    status: 'finished',
    value: 2,
    type: intType,
  });
});

test('recursive function that is a variable that is defined as lambda', () => {
  const res = runTest(`
    let rec f : int -> int = fun (x : int) : int -> if x == 0 then 1 else f (x - 1) * x;;
    f 5;;
  `);
  expect(res).toEqual({
    status: 'finished',
    value: 120,
    type: intType,
  });
});
