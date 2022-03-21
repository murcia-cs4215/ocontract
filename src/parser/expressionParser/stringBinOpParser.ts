import { ConcatenationContext } from 'lang/GrammarParser';
import { Expression } from 'parser/types';
import { Constructable, contextToLocation } from 'parser/utils';

export const parseStringBinOp = <T extends Constructable>(
  BaseClass: T,
): typeof DerivedClass => {
  const DerivedClass = class extends BaseClass {
    visitConcatenation(ctx: ConcatenationContext): Expression {
      return {
        type: 'BinaryExpression',
        operator: '^',
        left: this.visit(ctx._left),
        right: this.visit(ctx._right),
        loc: contextToLocation(ctx),
      };
    }
  };

  return DerivedClass;
};
