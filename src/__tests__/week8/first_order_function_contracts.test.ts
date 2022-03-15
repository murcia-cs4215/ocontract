import { runTest } from 'utils/tests';

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
