import { Constructable } from 'types';

import {
  AdditionContext,
  DivisionContext,
  ModulusContext,
  MultiplicationContext,
  SubtractionContext,
} from 'lang/GrammarParser';
import { Expression } from 'parser/types';
import { contextToLocation } from 'parser/utils';

export const parseIntBinOp = <T extends Constructable>(
  BaseClass: T,
): typeof DerivedClass => {
  const DerivedClass = class extends BaseClass {
    visitAddition(ctx: AdditionContext): Expression {
      return {
        type: 'BinaryExpression',
        operator: '+',
        left: this.visit(ctx._left),
        right: this.visit(ctx._right),
        loc: contextToLocation(ctx),
      };
    }

    visitSubtraction(ctx: SubtractionContext): Expression {
      return {
        type: 'BinaryExpression',
        operator: '-',
        left: this.visit(ctx._left),
        right: this.visit(ctx._right),
        loc: contextToLocation(ctx),
      };
    }

    visitMultiplication(ctx: MultiplicationContext): Expression {
      return {
        type: 'BinaryExpression',
        operator: '*',
        left: this.visit(ctx._left),
        right: this.visit(ctx._right),
        loc: contextToLocation(ctx),
      };
    }

    visitDivision(ctx: DivisionContext): Expression {
      return {
        type: 'BinaryExpression',
        operator: '/',
        left: this.visit(ctx._left),
        right: this.visit(ctx._right),
        loc: contextToLocation(ctx),
      };
    }

    visitModulus(ctx: ModulusContext): Expression {
      return {
        type: 'BinaryExpression',
        operator: 'mod',
        left: this.visit(ctx._left),
        right: this.visit(ctx._right),
        loc: contextToLocation(ctx),
      };
    }
  };

  return DerivedClass;
};
