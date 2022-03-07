import { runTest } from 'utils/tests';

import { intType } from '../../constants';

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
