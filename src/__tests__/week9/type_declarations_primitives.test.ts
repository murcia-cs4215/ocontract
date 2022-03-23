import { Type } from 'types/types';
import {
  boolType,
  charType,
  floatType,
  intType,
  stringType,
} from 'types/utils';
import { getStaticTypeErrorMessage } from 'utils/tests';

import { createContext } from '../../context';
import { run } from '../../index';

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
      const context = createContext();
      const res = run(
        `let x : ${type1} = ${value2[0] as string | number | boolean};;`,
        context,
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
      expect(res).toEqual({
        status: 'errored',
      });
      expect(context.errors).toHaveLength(1);
      expect(context.errors[0].explain()).toBe(
        getStaticTypeErrorMessage(value1[1] as Type, value2[1] as Type),
      );
    });
  }
}

// TODO: test local binding also
