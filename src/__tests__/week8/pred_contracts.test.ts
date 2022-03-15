import { runTest } from 'utils/tests';
import { intType } from 'utils/typing';

test('contract violation on assignment', () => {
  const res = runTest(`
    let gt0 = fun x -> x > 0;;
    contract f = gt0;;
    let f = -1;;
  `);
  expect(res).toEqual({
    status: 'errored',
  });
});

test('no contract violation if satisfy contract', () => {
  const res = runTest(`
    let gt0 = fun x -> x > 0;;
    contract f = gt0;;
    let f = 1;;
  `);
  expect(res).toEqual({
    status: 'finished',
    value: 1,
    type: intType,
    name: 'f',
  });
});

test('contract violation on complex expression', () => {
  const res = runTest(`
    let gt0 = fun x -> x > 0;;
    contract f = gt0;;
    let f = if false then 1 + 3 else (-1) - 100;;
  `);
  expect(res).toEqual({
    status: 'errored',
  });
});

test('no contract violation on complex expression if satisfy contract', () => {
  const res = runTest(`
    let gt0 = fun x -> x > 0;;
    contract f = gt0;;
    let f = if true then 1 + 3 else (-1) - 100;;
  `);
  expect(res).toEqual({
    status: 'finished',
    value: 4,
    type: intType,
    name: 'f',
  });
});

test('contract with complex expression', () => {
  const res = runTest(`
    let gt x = fun y -> y > x;;
    contract f = (gt 0);;
    let f = if true then 1 + 3 else (-1) - 100;;
  `);
  expect(res).toEqual({
    status: 'finished',
    value: 4,
    type: intType,
    name: 'f',
  });
});
