import assert from 'assert';

import { boolType, valueTypeToPrimitive } from 'types/utils';
import { assertTypeError, runTest } from 'utils/tests';

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
    const values = testValues['bool'];
    const res = runTest(`${values[0]} ${operator} ${values[1]};;`);
    expect(res.status).toBe('finished');
    assert('type' in res);
    expect(res.type).toBe(boolType);
  });

  test(`${operator} with non-bools`, () => {
    let res;
    for (const value1 of testValues['bool']) {
      for (const [type, values2] of testValueEntries) {
        if (type === 'bool') {
          continue;
        }
        res = runTest(`${value1} ${operator} ${values2[0]};;`);
        assertTypeError(res, boolType, valueTypeToPrimitive[type]);

        res = runTest(`${values2[0]} ${operator} ${value1};;`);
        assertTypeError(res, boolType, valueTypeToPrimitive[type]);

        res = runTest(`${values2[0]} ${operator} ${values2[1]};;`);
        assertTypeError(res, boolType, valueTypeToPrimitive[type]);
      }
    }
  });
}
