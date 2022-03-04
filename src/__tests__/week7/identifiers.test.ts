import { runTest } from 'utils/tests';

import { createContext } from '../../context';
import { run } from '../../index';

test('unbound name', () => {
  const context = createContext();
  const res = run('x;;', context);
  expect(res).toEqual({
    status: 'errored',
  });
  expect(context.errors).toHaveLength(1);
  expect(context.errors[0].explain()).toBe('Unbound value x');
});

test('global binding expression', () => {
  const res = runTest('let x = 10;;');
  expect(res).toEqual({
    status: 'finished',
    value: 10,
    type: 'int',
    name: 'x',
  });
});

test('bound identifier', () => {
  const res = runTest(`
    let x = 10;;
    x;;
  `);
  expect(res).toEqual({
    status: 'finished',
    value: 10,
    type: 'int',
  });
});

test('rebinding identifier', () => {
  let res = runTest(`
    let x = 10;;
    let x = 20;;
  `);
  expect(res).toEqual({
    status: 'finished',
    value: 20,
    type: 'int',
    name: 'x',
  });

  res = runTest(`
    let x = 10;;
    let x = 20;;
    x;;
  `);
  expect(res).toEqual({
    status: 'finished',
    value: 20,
    type: 'int',
  });
});
