import { boolType, valueTypeToPrimitive } from 'types/utils';
import { expectTypeError, runTest } from 'utils/tests';

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
    expect(res).toMatchObject({
      status: 'finished',
      type: boolType,
    });
  });

  test(`${operator} with non-bools`, () => {
    let res;
    for (const value1 of testValues['bool']) {
      for (const [type, values2] of testValueEntries) {
        if (type === 'bool') {
          continue;
        }
        res = runTest(`${value1} ${operator} ${values2[0]};;`);
        expectTypeError(res, boolType, valueTypeToPrimitive[type]);

        res = runTest(`${values2[0]} ${operator} ${value1};;`);
        expectTypeError(res, boolType, valueTypeToPrimitive[type]);

        res = runTest(`${values2[0]} ${operator} ${values2[1]};;`);
        expectTypeError(res, boolType, valueTypeToPrimitive[type]);
      }
    }
  });
}
