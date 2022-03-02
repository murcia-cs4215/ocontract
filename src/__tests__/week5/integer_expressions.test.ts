import { runTest } from '../../utils/tests';

test('integer', () => {
  const res = runTest('1;;');
  expect(res).toEqual({
    status: 'finished',
    value: 1,
    type: 'int',
  });
});

test('negative integer', () => {
  const res = runTest('-5;;');
  expect(res).toEqual({
    status: 'finished',
    value: -5,
    type: 'int',
  });
});

test('integer addition', () => {
  let res = runTest('1 + 2;;');
  expect(res).toEqual({
    status: 'finished',
    value: 3,
    type: 'int',
  });
  res = runTest('1 + -2;;');
  expect(res).toEqual({
    status: 'finished',
    value: -1,
    type: 'int',
  });
});

test('integer subtraction', () => {
  let res = runTest('10 - 12;;');
  expect(res).toEqual({
    status: 'finished',
    value: -2,
    type: 'int',
  });
  res = runTest('10 - -12;;');
  expect(res).toEqual({
    status: 'finished',
    value: 22,
    type: 'int',
  });
});

test('integer multiplication', () => {
  let res = runTest('2 * 50;;');
  expect(res).toEqual({
    status: 'finished',
    value: 100,
    type: 'int',
  });
  res = runTest('2 * -50;;');
  expect(res).toEqual({
    status: 'finished',
    value: -100,
    type: 'int',
  });
});

test('integer division', () => {
  let res = runTest('100 / 50;;');
  expect(res).toEqual({
    status: 'finished',
    value: 2,
    type: 'int',
  });
  res = runTest('100 / -50;;');
  expect(res).toEqual({
    status: 'finished',
    value: -2,
    type: 'int',
  });
});

test('integer division by 0', () => {
  const res = runTest('100 / 0;;');
  expect(res).toEqual({
    status: 'finished',
    value: Infinity,
    type: 'int',
  });
});

test('integer modulo', () => {
  const res = runTest('100 mod 30;;');
  expect(res).toEqual({
    status: 'finished',
    value: 10,
    type: 'int',
  });
});

test('integer greaterthan', () => {
  const res = runTest('50 > 50;;');
  expect(res).toEqual({
    status: 'finished',
    value: false,
    type: 'bool',
  });
});

test('integer smallerthan', () => {
  const res = runTest('49 < 50;;');
  expect(res).toEqual({
    status: 'finished',
    value: true,
    type: 'bool',
  });
});

test('integer greaterthanequals', () => {
  const res = runTest('50 >= 50;;');
  expect(res).toEqual({
    status: 'finished',
    value: true,
    type: 'bool',
  });
});

test('integer smallerthanequals', () => {
  const res = runTest('50 <= 50;;');
  expect(res).toEqual({
    status: 'finished',
    value: true,
    type: 'bool',
  });
});

test('integer structural equality', () => {
  let res = runTest('50 = 50;;');
  expect(res).toEqual({
    status: 'finished',
    value: true,
    type: 'bool',
  });
  res = runTest('49 = 50;;');
  expect(res).toEqual({
    status: 'finished',
    value: false,
    type: 'bool',
  });
});

test('integer structural inequality', () => {
  let res = runTest('50 <> 50;;');
  expect(res).toEqual({
    status: 'finished',
    value: false,
    type: 'bool',
  });
  res = runTest('49 <> 50;;');
  expect(res).toEqual({
    status: 'finished',
    value: true,
    type: 'bool',
  });
});

test('integer physical equality', () => {
  let res = runTest('50 == 50;;');
  expect(res).toEqual({
    status: 'finished',
    value: true,
    type: 'bool',
  });
  res = runTest('49 == 50;;');
  expect(res).toEqual({
    status: 'finished',
    value: false,
    type: 'bool',
  });
});

test('integer physical inequality', () => {
  let res = runTest('50 != 50;;');
  expect(res).toEqual({
    status: 'finished',
    value: false,
    type: 'bool',
  });
  res = runTest('49 != 50;;');
  expect(res).toEqual({
    status: 'finished',
    value: true,
    type: 'bool',
  });
});

test('parenthesized expression', () => {
  const res = runTest('(1 + 2) / 3;;');
  expect(res).toEqual({
    status: 'finished',
    value: 1,
    type: 'int',
  });
});

test('integer order of precedence', () => {
  const res = runTest('1 + 2 / 2;;');
  expect(res).toEqual({
    status: 'finished',
    value: 2,
    type: 'int',
  });
});
