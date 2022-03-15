import { runTest } from 'utils/tests';
import { intType } from 'utils/typing';

test('argument contract violation', () => {
  const res = runTest(`
    let gt0 = fun x -> x > 0;;
    contract f = gt0 -> gt0;;
    let f x = x - 1;;
    f 0;;
  `);
  expect(res).toEqual({
    status: 'errored',
  });
});

test('return result contract violation', () => {
  const res = runTest(`
    let gt0 = fun x -> x > 0;;
    contract f = gt0 -> gt0;;
    let f x = x - 1;;
    f 1;;
  `);
  expect(res).toEqual({
    status: 'errored',
  });
});

test('no violation', () => {
  const res = runTest(`
    let gt0 = fun x -> x > 0;;
    contract f = gt0 -> gt0;;
    let f x = x - 1;;
    f 2;;
  `);
  expect(res).toEqual({
    status: 'finished',
    type: {
      kind: 'primitive',
      type: 'int',
    },
    value: 1,
  });
});

test('curried functions propogate contracts', () => {
  const res = runTest(`
    let gt0 = fun x -> x > 0;;
    contract f = gt0 -> gt0 -> gt0;;
    let f x y = x + y;;
    let g = f 1;;
    g (-2);;
  `);
  expect(res).toEqual({
    status: 'errored',
  });
});

test('contract violation for function contracts using alternate syntax', () => {
  const res = runTest(`
    contract f = {x | x > 0} -> {y | y > 0} -> {z | z > 0};;
    let f x y = x + y;;
    let g = f 1;;
    g (-2);;
  `);
  expect(res).toEqual({
    status: 'errored',
  });
});

test('contract satisfied for function contracts using alternate syntax', () => {
  const res = runTest(`
    contract f = {x | x > 0} -> {y | y > 0} -> {z | z > 0};;
    let f x y = x + y;;
    let g = f 1;;
    g 1;;
  `);
  expect(res).toEqual({
    status: 'finished',
    value: 2,
    type: intType,
  });
});

test('can detect precondition violation for complex contracts', () => {
  const res = runTest(`
    let notEqTriple a b c = fun d -> d != a && d != b && d != c;;
    contract f = (notEqTriple 1 2 3) -> (notEqTriple 1 2 3) -> (notEqTriple 1 2 3)
    let f x y = x + y;;
    let g = f 1;;
    g 1;;
  `);
  expect(res).toEqual({
    status: 'errored',
  });
});

test('can detect postcondition violation for complex contracts', () => {
  const res = runTest(`
    let notEqTriple a b c = fun d -> d != a && d != b && d != c;;
    contract f = (notEqTriple 1 2 3) -> (notEqTriple 1 2 3) -> (notEqTriple 1 2 3)
    let f x y = x + y;;
    let g = f 4;;
    g (-1);;
  `);
  expect(res).toEqual({
    status: 'errored',
  });
});

test('contract satisfied for complex contracts', () => {
  const res = runTest(`
    let notEqTriple a b c = fun d -> d != a && d != b && d != c;;
    contract f = (notEqTriple 1 2 3) -> (notEqTriple 1 2 3) -> (notEqTriple 1 2 3)
    let f x y = x + y;;
    let g = f 4;;
    g 4);;
  `);
  expect(res).toEqual({
    status: 'errored',
  });
});
