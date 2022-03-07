import assert from 'assert';

import { getStaticTypeErrorMessage } from 'utils/tests';

import { boolType, valueTypeToPrimitive } from '../../constants';
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

const operators = ['&&', '||'];

for (const operator of operators) {
  test(`${operator} with bools`, () => {
    const context = createContext();
    const values = testValues['bool'];
    const res = run(`${values[0]} ${operator} ${values[1]};;`, context);
    expect(res.status).toBe('finished');
    assert('type' in res);
    expect(res.type).toBe(boolType);
  });

  test(`${operator} with non-bools`, () => {
    const context = createContext();
    let res;
    for (const value1 of testValues['bool']) {
      for (const [type, values2] of testValueEntries) {
        if (type === 'bool') {
          continue;
        }
        res = run(`${value1} ${operator} ${values2[0]};;`, context);
        expect(res).toEqual({
          status: 'errored',
        });
        expect(context.errors).toHaveLength(1);
        expect(context.errors[0].explain()).toBe(
          getStaticTypeErrorMessage(boolType, valueTypeToPrimitive[type]),
        );
        context.errors = [];

        res = run(`${values2[0]} ${operator} ${value1};;`, context);
        expect(res).toEqual({
          status: 'errored',
        });
        expect(context.errors).toHaveLength(1);
        expect(context.errors[0].explain()).toBe(
          getStaticTypeErrorMessage(boolType, valueTypeToPrimitive[type]),
        );
        context.errors = [];

        res = run(`${values2[0]} ${operator} ${values2[1]};;`, context);
        expect(res).toEqual({
          status: 'errored',
        });
        expect(context.errors).toHaveLength(1);
        expect(context.errors[0].explain()).toBe(
          getStaticTypeErrorMessage(boolType, valueTypeToPrimitive[type]),
        );
        context.errors = [];
      }
    }
  });
}
