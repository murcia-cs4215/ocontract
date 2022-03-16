import { Constructable } from 'types';

import { AndContext, OrContext } from 'lang/GrammarParser';
import { Expression } from 'parser/types';
import { contextToLocation } from 'parser/utils';

export const parseLogicalOp = <T extends Constructable>(
  BaseClass: T,
): typeof DerivedClass => {
  const DerivedClass = class extends BaseClass {
    visitAnd(ctx: AndContext): Expression {
      return {
        type: 'LogicalExpression',
        operator: '&&',
        left: this.visit(ctx._left),
        right: this.visit(ctx._right),
        loc: contextToLocation(ctx),
      };
    }
    visitOr(ctx: OrContext): Expression {
      return {
        type: 'LogicalExpression',
        operator: '||',
        left: this.visit(ctx._left),
        right: this.visit(ctx._right),
        loc: contextToLocation(ctx),
      };
    }
  };

  return DerivedClass;
};
