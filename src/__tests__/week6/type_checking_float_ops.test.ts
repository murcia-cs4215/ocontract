import assert from 'assert';

import { floatType, valueTypeToPrimitive } from 'types/utils';
import { expectTypeError, runTest } from 'utils/tests';

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
    const values = testValues['float'];
    const res = runTest(`${values[0]} ${operator} ${values[1]};;`);
    expect(res.status).toBe('finished');
    assert('type' in res);
    expect(res.type).toBe(floatType);
  });

  test(`${operator} with non-floats`, () => {
    let res;
    for (const value1 of testValues['float']) {
      for (const [type, values2] of testValueEntries) {
        if (type === 'float') {
          continue;
        }
        res = runTest(`${value1} ${operator} ${values2[0]};;`);
        expectTypeError(res, floatType, valueTypeToPrimitive[type]);

        res = runTest(`${values2[0]} ${operator} ${value1};;`);
        expectTypeError(res, floatType, valueTypeToPrimitive[type]);

        res = runTest(`${values2[0]} ${operator} ${values2[1]};;`);
        expectTypeError(res, floatType, valueTypeToPrimitive[type]);
      }
    }
  });
}
