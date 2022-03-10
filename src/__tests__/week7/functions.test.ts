import { runTest } from 'utils/tests';
import { intType } from 'utils/typing';

import { createContext } from '../../context';
import { run } from '../../index';

test('single parameter function', () => {
  const res = runTest('let x a = a + 10;;');
  expect(res.status).toBe('finished');

  // TODO: Add test for type once typing is introduced
});

test('multiple parameter function', () => {
  const res = runTest('let x a b = a + b;;');
  expect(res.status).toBe('finished');

  // TODO: Add test for type once typing is introduced
});

// TODO: Add more comprehensive tests once recursive functionality is fully supported
test('recursive function', () => {
  const res = runTest('let rec x a = a;;');
  expect(res.status).toBe('finished');

  // TODO: Add test for type once typing is introduced
});

test('function call with one argument', () => {
  const res = runTest(`
    let rec x a = a + 10;;
    x 20;;
  `);
  expect(res).toEqual({
    status: 'finished',
    value: 30,
    type: intType,
  });
});

test('function call with two arguments', () => {
  const res = runTest(`
    let x a b = a + b;;
    x 20 10;;
  `);
  expect(res).toEqual({
    status: 'finished',
    value: 30,
    type: intType,
  });
});

test('function currying', () => {
  const res = runTest(`
    let x a b = a + b;;
    let y = x 10;;
  `);
  expect(res.status).toBe('finished');

  // TODO: Add test for type once typing is introduced
});

test('function currying with call', () => {
  const res = runTest(`
    let x a b = a + b;;
    let y = x 10;;
    y 20;;
  `);
  expect(res).toEqual({
    status: 'finished',
    value: 30,
    type: intType,
  });
});

test('closure captures previous environment', () => {
  const res = runTest(`
    let m = 10;;
    let x a = m + a;;
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
    let x a = m + a;;
    let m = 30;;
    let j y = m + x y;;
    j 5;;
  `);
  expect(res).toEqual({
    status: 'finished',
    value: 45,
    type: intType,
  });
});

test('recursive functions', () => {
  const res = runTest(`
    let rec fact n = if n == 0 then 1 else fact (n - 1) * n;;
    fact 5;;
  `);
  expect(res).toEqual({
    status: 'finished',
    value: 120,
    type: intType,
  });
});

test('application of non-function', () => {
  const context = createContext();
  const res = run(
    `
    let x = 5;;
    x 10;;
  `,
    context,
  );
  expect(res).toEqual({
    status: 'errored',
  });
  expect(context.errors).toHaveLength(1);
  expect(context.errors[0].elaborate()).toBe(
    'This is not a function; it cannot be applied.',
  );
});
