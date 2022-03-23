import { Type } from 'types/types';
import {
  boolType,
  charType,
  floatType,
  intType,
  stringType,
} from 'types/utils';
import { assertTypeError, runTest } from 'utils/tests';

const values = {
  int: [10, intType],
  float: [2.5, floatType],
  string: ['"hello"', stringType],
  char: ["'a'", charType],
  bool: [true, boolType],
};

for (const [type1, value1] of Object.entries(values)) {
  for (const [type2, value2] of Object.entries(values)) {
    test(`declared ${type1}, actually ${type2}`, () => {
      const res = runTest(
        `let x : ${type1} = ${value2[0] as string | number | boolean};;`,
      );
      if (type1 === type2) {
        expect(res).toEqual({
          status: 'finished',
          value:
            typeof value2[0] === 'string'
              ? value2[0].substring(1, value2[0].length - 1)
              : value2[0],
          type: value2[1],
          name: 'x',
        });
        return;
      }
      assertTypeError(res, value1[1] as Type, value2[1] as Type);
    });
  }
}

test('local binding with right types', () => {
  const res = runTest(`
    let x : int = 10 in
      let y : int = 20 in
        x + y;;
  `);
  expect(res).toEqual({
    status: 'finished',
    value: 30,
    type: intType,
  });
});

test('local binding with incorrect types', () => {
  const res = runTest(`
    let x : int = 10.5 in
      let y : int = 20 in
        x + y;;
  `);
  assertTypeError(res, intType, floatType);
});

test('local binding with invalid "body"', () => {
  const res = runTest(`
    let x : int = 10 in
      let y : float = 20.5 in
        x +. y;;
  `);
  assertTypeError(res, floatType, intType);
});
