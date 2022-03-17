import assert from 'assert';

import { boolType, valueTypeToPrimitive } from 'checkers/types/utils';
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

const operators = ['<', '<=', '>', '>=', '=', '<>', '==', '!='];

for (const operator of operators) {
  test(`${operator} with matching types`, () => {
    const context = createContext();
    let res;
    for (const [_type, values] of testValueEntries) {
      res = run(`${values[0]} ${operator} ${values[1]};;`, context);
      expect(res.status).toBe('finished');
      assert('type' in res);
      expect(res.type).toBe(boolType);
    }
  });

  test(`${operator} with non-matching types`, () => {
    const context = createContext();
    let res;
    for (const [type1, values1] of testValueEntries) {
      for (const [type2, values2] of testValueEntries) {
        if (type1 === type2) {
          continue;
        }
        res = run(`${values1[0]} ${operator} ${values2[0]};;`, context);
        expect(res).toEqual({
          status: 'errored',
        });
        expect(context.errors).toHaveLength(1);
        expect(context.errors[0].explain()).toBe(
          getStaticTypeErrorMessage(
            valueTypeToPrimitive[type1],
            valueTypeToPrimitive[type2],
          ),
        );
        context.errors = [];
      }
    }
  });
}
