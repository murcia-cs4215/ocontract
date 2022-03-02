import { run } from '../../index';

test('conditional expression', () => {
  const resT = run('if true then 10 else 20;;');
  expect(resT).toEqual({
    status: 'finished',
    value: 10,
  });
  const resF = run('if false then 10 else 20;;');
  expect(resF).toEqual({
    status: 'finished',
    value: 20,
  });
});

test('parenthesized conditional expression', () => {
  const res = run('if true then (if (1 == 2) then 10 else 20) else 20;;');
  expect(res).toEqual({
    status: 'finished',
    value: 20,
  });
});
