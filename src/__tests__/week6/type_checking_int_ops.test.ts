import { intType, valueTypeToPrimitive } from 'types/utils';
import { expectTypeError, runTest } from 'utils/tests';

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
    const values = testValues['int'];
    const res = runTest(`${values[0]} ${operator} ${values[1]};;`);
    expect(res).toMatchObject({
      status: 'finished',
      type: intType,
    });
  });

  test(`${operator} with non-ints`, () => {
    let res;
    for (const value1 of testValues['int']) {
      for (const [type, values2] of testValueEntries) {
        if (type === 'int') {
          continue;
        }
        res = runTest(`${value1} ${operator} ${values2[0]};;`);
        expectTypeError(res, intType, valueTypeToPrimitive[type]);

        res = runTest(`${values2[0]} ${operator} ${value1};;`);
        expectTypeError(res, intType, valueTypeToPrimitive[type]);

        res = runTest(`${values2[0]} ${operator} ${values2[1]};;`);
        expectTypeError(res, intType, valueTypeToPrimitive[type]);
      }
    }
  });
}
