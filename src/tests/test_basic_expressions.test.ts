import { run } from '../index';

test('integer addition', () => {
  const res = run('1 + 2;;');
  expect(res).toEqual({
    status: 'finished',
    value: 3,
  });
});

test('integer subtraction', () => {
  const res = run('10 - 12;;');
  expect(res).toEqual({
    status: 'finished',
    value: -2,
  });
});

test('integer multiplication', () => {
  const res = run('2 * 50;;');
  expect(res).toEqual({
    status: 'finished',
    value: 100,
  });
});

test('integer divison', () => {
  const res = run('100 / 50;;');
  expect(res).toEqual({
    status: 'finished',
    value: 2,
  });
});

test('integer divison by 0', () => {
  const res = run('100 / 0;;');
  expect(res).toEqual({
    status: 'finished',
    value: Infinity,
  });
});

test('integer greaterthan', () => {
  const res = run('50 > 50;;');
  expect(res).toEqual({
    status: 'finished',
    value: false,
  });
});

test('integer smallerthan', () => {
  const res = run('49 < 50;;');
  expect(res).toEqual({
    status: 'finished',
    value: true,
  });
});

test('integer greaterthanequals', () => {
  const res = run('50 >= 50;;');
  expect(res).toEqual({
    status: 'finished',
    value: true,
  });
});

test('integer smallerthanequals', () => {
  const res = run('50 <= 50;;');
  expect(res).toEqual({
    status: 'finished',
    value: true,
  });
});

test('conditionals', () => {
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

test('paranthesized expr', () => {
  const res = run('if true then (if (1 == 2) then 10 else 20) else 20;;');
  expect(res).toEqual({
    status: 'finished',
    value: 20,
  });
});
