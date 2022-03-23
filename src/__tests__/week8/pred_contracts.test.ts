import { intType } from 'types/utils';
import { checkContractViolation, runTest } from 'utils/tests';

import { createContext } from '../../context';
import { run } from '../../index';

test('contract violation on assignment', () => {
  const context = createContext();
  const res = run(
    `
    let gt0 : int -> bool = fun (x : int) : bool -> x > 0;;
    contract f = gt0;;
    let f : int = -1;;
  `,
    context,
  );
  expect(res).toEqual({
    status: 'errored',
  });
  checkContractViolation(context, 'f');
});

test('no contract violation if satisfy contract', () => {
  const res = runTest(`
    let gt0 : int -> bool = fun (x : int) : bool -> x > 0;;
    contract f = gt0;;
    let f : int = 1;;
  `);
  expect(res).toEqual({
    status: 'finished',
    value: 1,
    type: intType,
    name: 'f',
  });
});

test('contract violation on complex expression', () => {
  const context = createContext();
  const res = run(
    `
    let gt0 : int -> bool = fun (x : int) : bool -> x > 0;;
    contract f = gt0;;
    let f : int = if false then 1 + 3 else (-1) - 100;;
  `,
    context,
  );
  expect(res).toEqual({
    status: 'errored',
  });
  checkContractViolation(context, 'f');
});

test('no contract violation on complex expression if satisfy contract', () => {
  const res = runTest(`
    let gt0 : int -> bool = fun (x : int) : bool -> x > 0;;
    contract f = gt0;;
    let f : int = if true then 1 + 3 else (-1) - 100;;
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
    let gt (x : int) : int -> bool = fun (y : int) : bool -> y > x;;
    contract f = (gt 0);;
    let f : int = if true then 1 + 3 else (-1) - 100;;
  `);
  expect(res).toEqual({
    status: 'finished',
    value: 4,
    type: intType,
    name: 'f',
  });
});
