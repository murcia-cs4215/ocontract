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
      };
    }

    visitLessThanOrEqual(ctx: LessThanOrEqualContext): Expression {
      return {
        type: 'BinaryExpression',
        operator: '<=',
        left: this.visit(ctx._left),
        right: this.visit(ctx._right),
        loc: contextToLocation(ctx),
      };
    }

    visitGreaterThan(ctx: GreaterThanContext): Expression {
      return {
        type: 'BinaryExpression',
        operator: '>',
        left: this.visit(ctx._left),
        right: this.visit(ctx._right),
        loc: contextToLocation(ctx),
      };
    }

    visitGreaterThanOrEqual(ctx: GreaterThanOrEqualContext): Expression {
      return {
        type: 'BinaryExpression',
        operator: '>=',
        left: this.visit(ctx._left),
        right: this.visit(ctx._right),
        loc: contextToLocation(ctx),
      };
    }

    visitEqualStructural(ctx: EqualStructuralContext): Expression {
      return {
        type: 'BinaryExpression',
        operator: '=',
        left: this.visit(ctx._left),
        right: this.visit(ctx._right),
        loc: contextToLocation(ctx),
      };
    }

    visitNotEqualStructural(ctx: NotEqualStructuralContext): Expression {
      return {
        type: 'BinaryExpression',
        operator: '<>',
        left: this.visit(ctx._left),
        right: this.visit(ctx._right),
        loc: contextToLocation(ctx),
      };
    }

    visitEqualPhysical(ctx: EqualPhysicalContext): Expression {
      return {
        type: 'BinaryExpression',
        operator: '==',
        left: this.visit(ctx._left),
        right: this.visit(ctx._right),
        loc: contextToLocation(ctx),
      };
    }

    visitNotEqualPhysical(ctx: NotEqualPhysicalContext): Expression {
      return {
        type: 'BinaryExpression',
        operator: '!=',
        left: this.visit(ctx._left),
        right: this.visit(ctx._right),
        loc: contextToLocation(ctx),
      };
    }
  };

  return DerivedClass;
};
