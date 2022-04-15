import { boolType, intType } from 'types/utils';
import { expectError, runTest } from 'utils/tests';

test('integer', () => {
  const res = runTest('1;;');
  expect(res).toEqual({
    status: 'finished',
    value: 1,
    type: intType,
  });
});

test('negative integer', () => {
  const res = runTest('-5;;');
  expect(res).toEqual({
    status: 'finished',
    value: -5,
    type: intType,
  });
});

test('integer addition', () => {
  let res = runTest('1 + 2;;');
  expect(res).toEqual({
    status: 'finished',
    value: 3,
    type: intType,
  });
  res = runTest('1 + -2;;');
  expect(res).toEqual({
    status: 'finished',
    value: -1,
    type: intType,
  });
});

test('integer subtraction', () => {
  let res = runTest('10 - 12;;');
  expect(res).toEqual({
    status: 'finished',
    value: -2,
    type: intType,
  });
  res = runTest('10 - -12;;');
  expect(res).toEqual({
    status: 'finished',
    value: 22,
    type: intType,
  });
});

test('integer multiplication', () => {
  let res = runTest('2 * 50;;');
  expect(res).toEqual({
    status: 'finished',
    value: 100,
    type: intType,
  });
  res = runTest('2 * -50;;');
  expect(res).toEqual({
    status: 'finished',
    value: -100,
    type: intType,
  });
});

test('integer division', () => {
  let res = runTest('100 / 50;;');
  expect(res).toEqual({
    status: 'finished',
    value: 2,
    type: intType,
  });
  res = runTest('100 / -50;;');
  expect(res).toEqual({
    status: 'finished',
    value: -2,
    type: intType,
  });
});

test('integer division by 0', () => {
  const res = runTest('100 / 0;;');
  expectError(res, 'Division by zero');
});

test('integer modulo', () => {
  const res = runTest('100 mod 30;;');
  expect(res).toEqual({
    status: 'finished',
    value: 10,
    type: intType,
  });
});

test('integer greaterthan', () => {
  const res = runTest('50 > 50;;');
  expect(res).toEqual({
    status: 'finished',
    value: false,
    type: boolType,
  });
});

test('integer smallerthan', () => {
  const res = runTest('49 < 50;;');
  expect(res).toEqual({
    status: 'finished',
    value: true,
    type: boolType,
  });
});

test('integer greaterthanequals', () => {
  const res = runTest('50 >= 50;;');
  expect(res).toEqual({
    status: 'finished',
    value: true,
    type: boolType,
  });
});

test('integer smallerthanequals', () => {
  const res = runTest('50 <= 50;;');
  expect(res).toEqual({
    status: 'finished',
    value: true,
    type: boolType,
  });
});

test('integer structural equality', () => {
  let res = runTest('50 = 50;;');
  expect(res).toEqual({
    status: 'finished',
    value: true,
    type: boolType,
  });
  res = runTest('49 = 50;;');
  expect(res).toEqual({
    status: 'finished',
    value: false,
    type: boolType,
  });
});

test('integer structural inequality', () => {
  let res = runTest('50 <> 50;;');
  expect(res).toEqual({
    status: 'finished',
    value: false,
    type: boolType,
  });
  res = runTest('49 <> 50;;');
  expect(res).toEqual({
    status: 'finished',
    value: true,
    type: boolType,
  });
});

test('integer physical equality', () => {
  let res = runTest('50 == 50;;');
  expect(res).toEqual({
    status: 'finished',
    value: true,
    type: boolType,
  });
  res = runTest('49 == 50;;');
  expect(res).toEqual({
    status: 'finished',
    value: false,
    type: boolType,
  });
});

test('integer physical inequality', () => {
  let res = runTest('50 != 50;;');
  expect(res).toEqual({
    status: 'finished',
    value: false,
    type: boolType,
  });
  res = runTest('49 != 50;;');
  expect(res).toEqual({
    status: 'finished',
    value: true,
    type: boolType,
  });
});

test('parenthesized expression', () => {
  const res = runTest('(1 + 2) / 3;;');
  expect(res).toEqual({
    status: 'finished',
    value: 1,
    type: intType,
  });
});

test('integer order of precedence', () => {
  const res = runTest('1 + 2 / 2;;');
  expect(res).toEqual({
    status: 'finished',
    value: 2,
    type: intType,
  });
});
