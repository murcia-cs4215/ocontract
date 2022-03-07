import { runTest } from 'utils/tests';
import { intType } from 'utils/typing';

test('conditional expression', () => {
  const resT = runTest('if true then 10 else 20;;');
  expect(resT).toEqual({
    status: 'finished',
    value: 10,
    type: intType,
  });
  const resF = runTest('if false then 10 else 20;;');
  expect(resF).toEqual({
    status: 'finished',
    value: 20,
    type: intType,
  });
});

test('parenthesized conditional expression', () => {
  const res = runTest('if true then (if (1 == 2) then 10 else 20) else 20;;');
  expect(res).toEqual({
    status: 'finished',
    value: 20,
    type: intType,
  });
});
