import { boolType, floatType } from 'types/utils';
import { runTest } from 'utils/tests';

test('float', () => {
  const res = runTest('1.;;');
  expect(res).toEqual({
    status: 'finished',
    value: 1,
    type: floatType,
  });
});

test('negative float', () => {
  const res = runTest('-1.5;;');
  expect(res).toEqual({
    status: 'finished',
    value: -1.5,
    type: floatType,
  });
});

test('float addition', () => {
  let res = runTest('1.1 +. 2.4;;');
  expect(res).toEqual({
    status: 'finished',
    value: 3.5,
    type: floatType,
  });
  res = runTest('1.1 +. -2.6;;');
  expect(res).toEqual({
    status: 'finished',
    value: -1.5,
    type: floatType,
  });
});

test('float subtraction', () => {
  let res = runTest('10.5 -. 12.75;;');
  expect(res).toEqual({
    status: 'finished',
    value: -2.25,
    type: floatType,
  });
  res = runTest('10.5 -. -12.75;;');
  expect(res).toEqual({
    status: 'finished',
    value: 23.25,
    type: floatType,
  });
});

test('float multiplication', () => {
  let res = runTest('2.5 *. 50.6;;');
  expect(res).toEqual({
    status: 'finished',
    value: 126.5,
    type: floatType,
  });
  res = runTest('2.5 *. -50.6;;');
  expect(res).toEqual({
    status: 'finished',
    value: -126.5,
    type: floatType,
  });
});

test('float division', () => {
  let res = runTest('100.45 /. 6.4;;');
  expect(res).toEqual({
    status: 'finished',
    value: 15.6953125,
    type: floatType,
  });
  res = runTest('100.45 /. -6.4;;');
  expect(res).toEqual({
    status: 'finished',
    value: -15.6953125,
    type: floatType,
  });
});

test('float division by 0', () => {
  const res = runTest('100.5 /. 0.0;;');
  expect(res).toEqual({
    status: 'finished',
    value: Infinity,
    type: floatType,
  });
});

test('float greaterthan', () => {
  const res = runTest('50.5 > 50.5;;');
  expect(res).toEqual({
    status: 'finished',
    value: false,
    type: boolType,
  });
});

test('float smallerthan', () => {
  const res = runTest('49.1 < 50.2;;');
  expect(res).toEqual({
    status: 'finished',
    value: true,
    type: boolType,
  });
});

test('float greaterthanequals', () => {
  const res = runTest('50.6 >= 50.6;;');
  expect(res).toEqual({
    status: 'finished',
    value: true,
    type: boolType,
  });
});

test('float smallerthanequals', () => {
  const res = runTest('50.5 <= 50.5;;');
  expect(res).toEqual({
    status: 'finished',
    value: true,
    type: boolType,
  });
});

test('float structural equality', () => {
  let res = runTest('50.5 = 50.5;;');
  expect(res).toEqual({
    status: 'finished',
    value: true,
    type: boolType,
  });
  res = runTest('49.5 = 50.5;;');
  expect(res).toEqual({
    status: 'finished',
    value: false,
    type: boolType,
  });
});

test('float structural inequality', () => {
  let res = runTest('50.5 <> 50.5;;');
  expect(res).toEqual({
    status: 'finished',
    value: false,
    type: boolType,
  });
  res = runTest('49.5 <> 50.5;;');
  expect(res).toEqual({
    status: 'finished',
    value: true,
    type: boolType,
  });
});

test('float physical equality', () => {
  let res = runTest('50.5 == 50.5;;');
  expect(res).toEqual({
    status: 'finished',
    value: true,
    type: boolType,
  });
  res = runTest('49.5 == 50.5;;');
  expect(res).toEqual({
    status: 'finished',
    value: false,
    type: boolType,
  });
});

test('float physical inequality', () => {
  let res = runTest('50.5 != 50.5;;');
  expect(res).toEqual({
    status: 'finished',
    value: false,
    type: boolType,
  });
  res = runTest('49.5 != 50.5;;');
  expect(res).toEqual({
    status: 'finished',
    value: true,
    type: boolType,
  });
});

test('parenthesized expression', () => {
  const res = runTest('(1.5 +. 2.2);;');
  expect(res).toEqual({
    status: 'finished',
    value: 3.7,
    type: floatType,
  });
});

test('float order of precedence', () => {
  const res = runTest('1.5 +. 2.5 /. 2.0;;');
  expect(res).toEqual({
    status: 'finished',
    value: 2.75,
    type: floatType,
  });
});
