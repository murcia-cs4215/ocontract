import { run } from '../../index';

test('integer', () => {
  const res = run('1;;');
  expect(res).toEqual({
    status: 'finished',
    value: 1,
  });
});

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

test('integer division', () => {
  const res = run('100 / 50;;');
  expect(res).toEqual({
    status: 'finished',
    value: 2,
  });
});

test('integer division by 0', () => {
  const res = run('100 / 0;;');
  expect(res).toEqual({
    status: 'finished',
    value: Infinity,
  });
});

test('integer modulo', () => {
  const res = run('100 mod 30;;');
  expect(res).toEqual({
    status: 'finished',
    value: 10,
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

test('integer structural equality', () => {
  let res = run('50 = 50;;');
  expect(res).toEqual({
    status: 'finished',
    value: true,
  });
  res = run('49 = 50;;');
  expect(res).toEqual({
    status: 'finished',
    value: false,
  });
});

test('integer structural inequality', () => {
  let res = run('50 <> 50;;');
  expect(res).toEqual({
    status: 'finished',
    value: false,
  });
  res = run('49 <> 50;;');
  expect(res).toEqual({
    status: 'finished',
    value: true,
  });
});

test('integer physical equality', () => {
  let res = run('50 == 50;;');
  expect(res).toEqual({
    status: 'finished',
    value: true,
  });
  res = run('49 == 50;;');
  expect(res).toEqual({
    status: 'finished',
    value: false,
  });
});

test('integer physical inequality', () => {
  let res = run('50 != 50;;');
  expect(res).toEqual({
    status: 'finished',
    value: false,
  });
  res = run('49 != 50;;');
  expect(res).toEqual({
    status: 'finished',
    value: true,
  });
});

test('parenthesized expression', () => {
  const res = run('(1 + 2) / 3;;');
  expect(res).toEqual({
    status: 'finished',
    value: 1,
  });
});

test('integer order of precedence', () => {
  const res = run('1 + 2 / 2;;');
  expect(res).toEqual({
    status: 'finished',
    value: 2,
  });
});
