import { runTest } from '../../utils/tests';

test('integer', () => {
  const res = runTest('1;;');
  expect(res).toEqual({
    status: 'finished',
    value: 1,
  });
});

test('negative integer', () => {
  const res = runTest('-5;;');
  expect(res).toEqual({
    status: 'finished',
    value: -5,
  });
});

test('integer addition', () => {
  let res = runTest('1 + 2;;');
  expect(res).toEqual({
    status: 'finished',
    value: 3,
  });
  res = runTest('1 + -2;;');
  expect(res).toEqual({
    status: 'finished',
    value: -1,
  });
});

test('integer subtraction', () => {
  let res = runTest('10 - 12;;');
  expect(res).toEqual({
    status: 'finished',
    value: -2,
  });
  res = runTest('10 - -12;;');
  expect(res).toEqual({
    status: 'finished',
    value: 22,
  });
});

test('integer multiplication', () => {
  let res = runTest('2 * 50;;');
  expect(res).toEqual({
    status: 'finished',
    value: 100,
  });
  res = runTest('2 * -50;;');
  expect(res).toEqual({
    status: 'finished',
    value: -100,
  });
});

test('integer division', () => {
  let res = runTest('100 / 50;;');
  expect(res).toEqual({
    status: 'finished',
    value: 2,
  });
  res = runTest('100 / -50;;');
  expect(res).toEqual({
    status: 'finished',
    value: -2,
  });
});

test('integer division by 0', () => {
  const res = runTest('100 / 0;;');
  expect(res).toEqual({
    status: 'finished',
    value: Infinity,
  });
});

test('integer modulo', () => {
  const res = runTest('100 mod 30;;');
  expect(res).toEqual({
    status: 'finished',
    value: 10,
  });
});

test('integer greaterthan', () => {
  const res = runTest('50 > 50;;');
  expect(res).toEqual({
    status: 'finished',
    value: false,
  });
});

test('integer smallerthan', () => {
  const res = runTest('49 < 50;;');
  expect(res).toEqual({
    status: 'finished',
    value: true,
  });
});

test('integer greaterthanequals', () => {
  const res = runTest('50 >= 50;;');
  expect(res).toEqual({
    status: 'finished',
    value: true,
  });
});

test('integer smallerthanequals', () => {
  const res = runTest('50 <= 50;;');
  expect(res).toEqual({
    status: 'finished',
    value: true,
  });
});

test('integer structural equality', () => {
  let res = runTest('50 = 50;;');
  expect(res).toEqual({
    status: 'finished',
    value: true,
  });
  res = runTest('49 = 50;;');
  expect(res).toEqual({
    status: 'finished',
    value: false,
  });
});

test('integer structural inequality', () => {
  let res = runTest('50 <> 50;;');
  expect(res).toEqual({
    status: 'finished',
    value: false,
  });
  res = runTest('49 <> 50;;');
  expect(res).toEqual({
    status: 'finished',
    value: true,
  });
});

test('integer physical equality', () => {
  let res = runTest('50 == 50;;');
  expect(res).toEqual({
    status: 'finished',
    value: true,
  });
  res = runTest('49 == 50;;');
  expect(res).toEqual({
    status: 'finished',
    value: false,
  });
});

test('integer physical inequality', () => {
  let res = runTest('50 != 50;;');
  expect(res).toEqual({
    status: 'finished',
    value: false,
  });
  res = runTest('49 != 50;;');
  expect(res).toEqual({
    status: 'finished',
    value: true,
  });
});

test('parenthesized expression', () => {
  const res = runTest('(1 + 2) / 3;;');
  expect(res).toEqual({
    status: 'finished',
    value: 1,
  });
});

test('integer order of precedence', () => {
  const res = runTest('1 + 2 / 2;;');
  expect(res).toEqual({
    status: 'finished',
    value: 2,
  });
});
