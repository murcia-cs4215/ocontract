import { runTest } from 'utils/tests';
import { intType } from 'utils/typing';

test('single parameter lambda', () => {
  const res = runTest('let x = fun a -> a + 10;;');
  expect(res.status).toBe('finished');

  // TODO: Add test for type once typing is introduced
});

test('multiple parameter lambda', () => {
  let res = runTest('let x = fun a -> fun b -> a + b;;');
  expect(res.status).toBe('finished');

  // two parameters at once
  res = runTest('let x = fun a b -> a + b;;');
  expect(res.status).toBe('finished');
  // TODO: Add test for type once typing is introduced
});

test('lambda call with one argument', () => {
  const res = runTest(`
    let x = fun a -> a + 10;;
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
    let x = fun a -> fun b -> a + b;;
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
    let x = fun a -> fun b -> a + b;;
    let y = x 10;;
  `);
  expect(res.status).toBe('finished');

  // TODO: Add test for type once typing is introduced
});

test('lambda currying with call', () => {
  const res = runTest(`
    let x = fun a b -> a + b;;
    let y = x 10;;
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
    let m = 10;;
    let x = fun a -> m + a;;
    let m = 30;;
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
    let m = 10;;
    let x = fun a -> m + a;;
    let m = 30;;
    let j = fun y -> m + x y;;
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
    let x = fun x -> fun y -> fun z -> x + y + z in x 1 2 3;;
  `);
  expect(res).toEqual({
    status: 'finished',
    value: 6,
    type: intType,
  });
});

test('lambda declaration without assigning it to a variable', () => {
  const res = runTest(`
    (fun x -> x + 1) 2;;
  `);
  expect(res).toEqual({
    status: 'finished',
    value: 3,
    type: intType,
  });
});

test('passing in lambda as argument to hof', () => {
  const res = runTest(`
    let f g = g 2;;
    f (fun x -> x);;
  `);
  expect(res).toEqual({
    status: 'finished',
    value: 2,
    type: intType,
  });
});

test('returning lambda in hof', () => {
  const res = runTest(`
    let f g = fun x -> x + g 2;;
    f (fun x -> x) 2;;
  `);
  expect(res).toEqual({
    status: 'finished',
    value: 4,
    type: intType,
  });
});

test('variable that is defined as lambda', () => {
  const res = runTest(`
    let f = fun x -> x + 1;;
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
    let rec f = fun x -> if x == 0 then 1 else f (x - 1) * x;;
    f 5;;
  `);
  expect(res).toEqual({
    status: 'finished',
    value: 120,
    type: intType,
  });
});
