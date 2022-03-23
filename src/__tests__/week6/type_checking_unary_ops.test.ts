import {
  boolType,
  floatType,
  intType,
  valueTypeToPrimitive,
} from 'types/utils';
import { assertTypeError, runTest } from 'utils/tests';

const testValues = {
  int: ['1', '2'],
  float: ['1.', '2.5'],
  char: ["'a'", "'b'"],
  string: ['"hello"', '"world"'],
  bool: ['true', 'false'],
};

test('not with bool', () => {
  const res = runTest('not true;;');
  expect(res).toEqual({
    status: 'finished',
    value: false,
    type: boolType,
  });
});

test('not with non-bools', () => {
  let res;
  for (const [type, values] of Object.entries(testValues)) {
    if (type === 'bool') {
      continue;
    }
    res = runTest(`not ${values[0]};;`);
    assertTypeError(res, boolType, valueTypeToPrimitive[type]);
  }
});

test('-unary with int', () => {
  const res = runTest('-1;;');
  expect(res).toEqual({
    status: 'finished',
    value: -1,
    type: intType,
  });
});

test('-unary with float', () => {
  const res = runTest('-1.5;;');
  expect(res).toEqual({
    status: 'finished',
    value: -1.5,
    type: floatType,
  });
});

test('-unary with non-ints and non-floats', () => {
  let res;
  for (const [type, values] of Object.entries(testValues)) {
    if (type === 'int' || type === 'float') {
      continue;
    }
    res = runTest(`-${values[0]};;`);
    assertTypeError(res, 'int or float', valueTypeToPrimitive[type]);
  }
});
