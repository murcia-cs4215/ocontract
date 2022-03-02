import { run } from '../../index';

test('integer', () => {
  const res = run('1;;');
  expect(res).toEqual({
    status: 'finished',
    value: 1,
  });
});

test('negative integer', () => {
  const res = run('-5;;');
  expect(res).toEqual({
    status: 'finished',
    value: -5,
  });
});

test('integer addition', () => {
  let res = run('1 + 2;;');
  expect(res).toEqual({
    status: 'finished',
    value: 3,
  });
  res = run('1 + -2;;');
  expect(res).toEqual({
    status: 'finished',
    value: -1,
  });
});

test('integer subtraction', () => {
  let res = run('10 - 12;;');
  expect(res).toEqual({
    status: 'finished',
    value: -2,
  });
  res = run('10 - -12;;');
  expect(res).toEqual({
    status: 'finished',
    value: 22,
  });
});

test('integer multiplication', () => {
  let res = run('2 * 50;;');
  expect(res).toEqual({
    status: 'finished',
    value: 100,
  });
  res = run('2 * -50;;');
  expect(res).toEqual({
    status: 'finished',
    value: -100,
  });
});

test('integer division', () => {
  let res = run('100 / 50;;');
  expect(res).toEqual({
    status: 'finished',
    value: 2,
  });
  res = run('100 / -50;;');
  expect(res).toEqual({
    status: 'finished',
    value: -2,
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
