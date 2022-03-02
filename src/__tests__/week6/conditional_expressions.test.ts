import { runTest } from '../../utils/tests';

test('conditional expression', () => {
  const resT = runTest('if true then 10 else 20;;');
  expect(resT).toEqual({
    status: 'finished',
    value: 10,
    type: 'int',
  });
  const resF = runTest('if false then 10 else 20;;');
  expect(resF).toEqual({
    status: 'finished',
    value: 20,
    type: 'int',
  });
});

test('parenthesized conditional expression', () => {
  const res = runTest('if true then (if (1 == 2) then 10 else 20) else 20;;');
  expect(res).toEqual({
    status: 'finished',
    value: 20,
    type: 'int',
  });
});
