import {
  EqualPhysicalContext,
  EqualStructuralContext,
  GreaterThanContext,
  GreaterThanOrEqualContext,
  LessThanContext,
  LessThanOrEqualContext,
  NotEqualPhysicalContext,
  NotEqualStructuralContext,
} from 'lang/GrammarParser';
import { Expression } from 'parser/types';
import { Constructable, contextToLocation } from 'parser/utils';

export const parseComparator = <T extends Constructable>(
  BaseClass: T,
): typeof DerivedClass => {
  const DerivedClass = class extends BaseClass {
    visitLessThan(ctx: LessThanContext): Expression {
      return {
        type: 'BinaryExpression',
        operator: '<',
        left: this.visit(ctx._left),
        right: this.visit(ctx._right),
        loc: contextToLocation(ctx),
        contracts: [],
      };
    }

    visitLessThanOrEqual(ctx: LessThanOrEqualContext): Expression {
      return {
        type: 'BinaryExpression',
        operator: '<=',
        left: this.visit(ctx._left),
        right: this.visit(ctx._right),
        loc: contextToLocation(ctx),
        contracts: [],
      };
    }

    visitGreaterThan(ctx: GreaterThanContext): Expression {
      return {
        type: 'BinaryExpression',
        operator: '>',
        left: this.visit(ctx._left),
        right: this.visit(ctx._right),
        loc: contextToLocation(ctx),
        contracts: [],
      };
    }

    visitGreaterThanOrEqual(ctx: GreaterThanOrEqualContext): Expression {
      return {
        type: 'BinaryExpression',
        operator: '>=',
        left: this.visit(ctx._left),
        right: this.visit(ctx._right),
        loc: contextToLocation(ctx),
        contracts: [],
      };
    }

    visitEqualStructural(ctx: EqualStructuralContext): Expression {
      return {
        type: 'BinaryExpression',
        operator: '=',
        left: this.visit(ctx._left),
        right: this.visit(ctx._right),
        loc: contextToLocation(ctx),
        contracts: [],
      };
    }

    visitNotEqualStructural(ctx: NotEqualStructuralContext): Expression {
      return {
        type: 'BinaryExpression',
        operator: '<>',
        left: this.visit(ctx._left),
        right: this.visit(ctx._right),
        loc: contextToLocation(ctx),
        contracts: [],
      };
    }

    visitEqualPhysical(ctx: EqualPhysicalContext): Expression {
      return {
        type: 'BinaryExpression',
        operator: '==',
        left: this.visit(ctx._left),
        right: this.visit(ctx._right),
        loc: contextToLocation(ctx),
        contracts: [],
      };
    }

    visitNotEqualPhysical(ctx: NotEqualPhysicalContext): Expression {
      return {
        type: 'BinaryExpression',
        operator: '!=',
        left: this.visit(ctx._left),
        right: this.visit(ctx._right),
        loc: contextToLocation(ctx),
        contracts: [],
      };
    }
  };

  return DerivedClass;
};
