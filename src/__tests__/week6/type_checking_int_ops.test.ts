import assert from 'assert';

import { intType, valueTypeToPrimitive } from 'checkers/types/utils';
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

const testValueEntries = Object.entries(testValues);

const operators = ['+', '-', '*', '/', 'mod'];

for (const operator of operators) {
  test(`${operator} with ints`, () => {
    const context = createContext();
    const values = testValues['int'];
    const res = run(`${values[0]} ${operator} ${values[1]};;`, context);
    expect(res.status).toBe('finished');
    assert('type' in res);
    expect(res.type).toBe(intType);
  });

  test(`${operator} with non-ints`, () => {
    const context = createContext();
    let res;
    for (const value1 of testValues['int']) {
      for (const [type, values2] of testValueEntries) {
        if (type === 'int') {
          continue;
        }
        res = run(`${value1} ${operator} ${values2[0]};;`, context);
        expect(res).toEqual({
          status: 'errored',
        });
        expect(context.errors).toHaveLength(1);
        expect(context.errors[0].explain()).toBe(
          getStaticTypeErrorMessage(intType, valueTypeToPrimitive[type]),
        );
        context.errors = [];

        res = run(`${values2[0]} ${operator} ${value1};;`, context);
        expect(res).toEqual({
          status: 'errored',
        });
        expect(context.errors).toHaveLength(1);
        expect(context.errors[0].explain()).toBe(
          getStaticTypeErrorMessage(intType, valueTypeToPrimitive[type]),
        );
        context.errors = [];

        res = run(`${values2[0]} ${operator} ${values2[1]};;`, context);
        expect(res).toEqual({
          status: 'errored',
        });
        expect(context.errors).toHaveLength(1);
        expect(context.errors[0].explain()).toBe(
          getStaticTypeErrorMessage(intType, valueTypeToPrimitive[type]),
        );
        context.errors = [];
      }
    }
  });
}
