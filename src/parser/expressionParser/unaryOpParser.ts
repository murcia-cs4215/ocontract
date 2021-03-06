import { NegativeContext, NotContext } from 'lang/GrammarParser';
import { Expression } from 'parser/types';
import { Constructable, contextToLocation } from 'parser/utils';

export const parseUnaryOp = <T extends Constructable>(
  BaseClass: T,
): typeof DerivedClass => {
  const DerivedClass = class extends BaseClass {
    visitNegative(ctx: NegativeContext): Expression {
      return {
        type: 'UnaryExpression',
        operator: '-',
        argument: this.visit(ctx._argument),
        loc: contextToLocation(ctx),
        contracts: [],
      };
    }

    visitNot(ctx: NotContext): Expression {
      return {
        type: 'UnaryExpression',
        operator: 'not',
        argument: this.visit(ctx._argument),
        loc: contextToLocation(ctx),
        contracts: [],
      };
    }
  };

  return DerivedClass;
};
