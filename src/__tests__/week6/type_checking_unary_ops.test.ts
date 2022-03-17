import {
  boolType,
  floatType,
  intType,
  valueTypeToPrimitive,
} from 'checkers/types/utils';
import { getStaticTypeErrorMessage } from 'utils/tests';

import { createContext } from '../../context';
import { run } from '../../index';

const testValues = {
  int: ['1', '2'],
  float: ['1.', '2.5'],
  char: ["'a'", "'b'"],
  string: ['"hello"', '"world"'],
  bool: ['true', 'false'],
};

test('not with bool', () => {
  const context = createContext();
  const res = run('not true;;', context);
  expect(res).toEqual({
    status: 'finished',
    value: false,
    type: boolType,
  });
});

test('not with non-bools', () => {
  const context = createContext();
  let res;
  for (const [type, values] of Object.entries(testValues)) {
    if (type === 'bool') {
      continue;
    }
    res = run(`not ${values[0]};;`, context);
    expect(res).toEqual({
      status: 'errored',
    });
    expect(context.errors).toHaveLength(1);
    expect(context.errors[0].explain()).toBe(
      getStaticTypeErrorMessage(boolType, valueTypeToPrimitive[type]),
    );
    context.errors = [];
  }
});

test('-unary with int', () => {
  const context = createContext();
  const res = run('-1;;', context);
  expect(res).toEqual({
    status: 'finished',
    value: -1,
    type: intType,
  });
});

test('-unary with float', () => {
  const context = createContext();
  const res = run('-1.5;;', context);
  expect(res).toEqual({
    status: 'finished',
    value: -1.5,
    type: floatType,
  });
});

test('-unary with non-ints and non-floats', () => {
  const context = createContext();
  let res;
  for (const [type, values] of Object.entries(testValues)) {
    if (type === 'int' || type === 'float') {
      continue;
    }
    res = run(`-${values[0]};;`, context);
    expect(res).toEqual({
      status: 'errored',
    });
    expect(context.errors).toHaveLength(1);
    expect(context.errors[0].explain()).toBe(
      getStaticTypeErrorMessage('int or float', valueTypeToPrimitive[type]),
    );
    context.errors = [];
  }
});
