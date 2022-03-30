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

const operators = ['<', '<=', '>', '>=', '=', '<>', '==', '!='];

for (const operator of operators) {
  test(`${operator} with matching types`, () => {
    let res;
    for (const [_type, values] of testValueEntries) {
      res = runTest(`${values[0]} ${operator} ${values[1]};;`);
      expect(res).toMatchObject({
        status: 'finished',
        type: boolType,
      });
    }
  });

  test(`${operator} with non-matching types`, () => {
    let res;
    for (const [type1, values1] of testValueEntries) {
      for (const [type2, values2] of testValueEntries) {
        if (type1 === type2) {
          continue;
        }
        res = runTest(`${values1[0]} ${operator} ${values2[0]};;`);
        expectTypeError(
          res,
          valueTypeToPrimitive[type1],
          valueTypeToPrimitive[type2],
        );
      }
    }
  });
}
