import {
  BooleanContext,
  CharContext,
  FloatContext,
  NumberContext,
  StringContext,
} from 'lang/GrammarParser';
import { Expression } from 'parser/types';
import { Constructable, contextToLocation } from 'parser/utils';
import { StringWrapper } from 'parser/wrappers';

export const parsePrimitive = <T extends Constructable>(
  BaseClass: T,
): typeof DerivedClass => {
  const DerivedClass = class extends BaseClass {
    visitNumber(ctx: NumberContext): Expression {
      return {
        type: 'Literal',
        valueType: 'int',
        value: parseInt(ctx.text, 10),
        loc: contextToLocation(ctx),
      };
    }

    visitFloat(ctx: FloatContext): Expression {
      return {
        type: 'Literal',
        valueType: 'float',
        value: parseFloat(ctx.text),
        loc: contextToLocation(ctx),
      };
    }

    visitBoolean(ctx: BooleanContext): Expression {
      return {
        type: 'Literal',
        valueType: 'bool',
        value: ctx.text.trim().toLowerCase() === 'true',
        loc: contextToLocation(ctx),
      };
    }

    visitChar(ctx: CharContext): Expression {
      return {
        type: 'Literal',
        valueType: 'char',
        value: ctx.text.trim().charAt(1),
        loc: contextToLocation(ctx),
      };
    }

    visitString(ctx: StringContext): Expression {
      const value = ctx.text.trim();
      const wrappedValue = new StringWrapper(
        value.substring(1, value.length - 1),
      );
      return {
        type: 'Literal',
        valueType: 'string',
        value: wrappedValue,
        loc: contextToLocation(ctx),
      };
    }
  };
  return DerivedClass;
};
