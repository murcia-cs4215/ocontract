import { Constructable } from 'types';

import {
  AdditionFloatContext,
  DivisionFloatContext,
  MultiplicationFloatContext,
  PowerContext,
  SubtractionFloatContext,
} from 'lang/GrammarParser';
import { Expression } from 'parser/types';
import { contextToLocation } from 'parser/utils';

export const parseFloatBinOp = <T extends Constructable>(
  BaseClass: T,
): typeof DerivedClass => {
  const DerivedClass = class extends BaseClass {
    visitAdditionFloat(ctx: AdditionFloatContext): Expression {
      return {
        type: 'BinaryExpression',
        operator: '+.',
        left: this.visit(ctx._left),
        right: this.visit(ctx._right),
        loc: contextToLocation(ctx),
      };
    }

    visitSubtractionFloat(ctx: SubtractionFloatContext): Expression {
      return {
        type: 'BinaryExpression',
        operator: '-.',
        left: this.visit(ctx._left),
        right: this.visit(ctx._right),
        loc: contextToLocation(ctx),
      };
    }

    visitMultiplicationFloat(ctx: MultiplicationFloatContext): Expression {
      return {
        type: 'BinaryExpression',
        operator: '*.',
        left: this.visit(ctx._left),
        right: this.visit(ctx._right),
        loc: contextToLocation(ctx),
      };
    }

    visitDivisionFloat(ctx: DivisionFloatContext): Expression {
      return {
        type: 'BinaryExpression',
        operator: '/.',
        left: this.visit(ctx._left),
        right: this.visit(ctx._right),
        loc: contextToLocation(ctx),
      };
    }

    visitPower(ctx: PowerContext): Expression {
      return {
        type: 'BinaryExpression',
        operator: '**',
        left: this.visit(ctx._left),
        right: this.visit(ctx._right),
        loc: contextToLocation(ctx),
      };
    }
  };

  return DerivedClass;
};
