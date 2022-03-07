import assert from 'assert';

import { getStaticTypeErrorMessage } from 'utils/tests';
import { floatType, valueTypeToPrimitive } from 'utils/typing';

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

const operators = ['+.', '-.', '*.', '/.', '**'];

for (const operator of operators) {
  test(`${operator} with floats`, () => {
    const context = createContext();
    const values = testValues['float'];
    const res = run(`${values[0]} ${operator} ${values[1]};;`, context);
    expect(res.status).toBe('finished');
    assert('type' in res);
    expect(res.type).toBe(floatType);
  });

  test(`${operator} with non-floats`, () => {
    const context = createContext();
    let res;
    for (const value1 of testValues['float']) {
      for (const [type, values2] of testValueEntries) {
        if (type === 'float') {
          continue;
        }
        res = run(`${value1} ${operator} ${values2[0]};;`, context);
        expect(res).toEqual({
          status: 'errored',
        });
        expect(context.errors).toHaveLength(1);
        expect(context.errors[0].explain()).toBe(
          getStaticTypeErrorMessage(floatType, valueTypeToPrimitive[type]),
        );
        context.errors = [];

        res = run(`${values2[0]} ${operator} ${value1};;`, context);
        expect(res).toEqual({
          status: 'errored',
        });
        expect(context.errors).toHaveLength(1);
        expect(context.errors[0].explain()).toBe(
          getStaticTypeErrorMessage(floatType, valueTypeToPrimitive[type]),
        );
        context.errors = [];

        res = run(`${values2[0]} ${operator} ${values2[1]};;`, context);
        expect(res).toEqual({
          status: 'errored',
        });
        expect(context.errors).toHaveLength(1);
        expect(context.errors[0].explain()).toBe(
          getStaticTypeErrorMessage(floatType, valueTypeToPrimitive[type]),
        );
        context.errors = [];
      }
    }
  });
}
