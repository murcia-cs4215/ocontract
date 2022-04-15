import { boolType } from 'types/utils';
import { runTest } from 'utils/tests';

test('positive with int', () => {
  let res = runTest('positive 10;;');
  expect(res).toEqual({
    status: 'finished',
    value: true,
    type: boolType,
  });

  res = runTest('positive (-10);;');
  expect(res).toEqual({
    status: 'finished',
    value: false,
    type: boolType,
  });
});

test('positive with float', () => {
  let res = runTest('positive 5.4;;');
  expect(res).toEqual({
    status: 'finished',
    value: true,
    type: boolType,
  });

  res = runTest('positive (-5.4);;');
  expect(res).toEqual({
    status: 'finished',
    value: false,
    type: boolType,
  });
});

test('negative with int', () => {
  let res = runTest('negative 10;;');
  expect(res).toEqual({
    status: 'finished',
    value: false,
    type: boolType,
  });

  res = runTest('negative (-10);;');
  expect(res).toEqual({
    status: 'finished',
    value: true,
    type: boolType,
  });
});

test('negative with float', () => {
  let res = runTest('negative 5.4;;');
  expect(res).toEqual({
    status: 'finished',
    value: false,
    type: boolType,
  });

  res = runTest('negative (-5.4);;');
  expect(res).toEqual({
    status: 'finished',
    value: true,
    type: boolType,
  });
});

test('zero with int', () => {
  let res = runTest('zero 0;;');
  expect(res).toEqual({
    status: 'finished',
    value: true,
    type: boolType,
  });

  res = runTest('zero 1;;');
  expect(res).toEqual({
    status: 'finished',
    value: false,
    type: boolType,
  });
});

test('zero with float', () => {
  let res = runTest('zero 0.;;');
  expect(res).toEqual({
    status: 'finished',
    value: true,
    type: boolType,
  });

  res = runTest('zero 1.;;');
  expect(res).toEqual({
    status: 'finished',
    value: false,
    type: boolType,
  });
});

const testValues = {
  int: '1',
  float: '1.',
  char: "'a'",
  string: '"hello"',
  bool: 'true',
};

Object.entries(testValues).forEach(([type, value]) => {
  test(`any with ${type}`, () => {
    const res = runTest(`any ${value};;`);
    expect(res).toEqual({
      status: 'finished',
      value: true,
      type: boolType,
    });
  });
});
