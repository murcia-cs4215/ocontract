import {
  AdditionFloatContext,
  DivisionFloatContext,
  MultiplicationFloatContext,
  PowerContext,
  SubtractionFloatContext,
} from 'lang/GrammarParser';
import { Expression } from 'parser/types';
import { Constructable, contextToLocation } from 'parser/utils';

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
        contracts: [],
      };
    }

    visitSubtractionFloat(ctx: SubtractionFloatContext): Expression {
      return {
        type: 'BinaryExpression',
        operator: '-.',
        left: this.visit(ctx._left),
        right: this.visit(ctx._right),
        loc: contextToLocation(ctx),
        contracts: [],
      };
    }

    visitMultiplicationFloat(ctx: MultiplicationFloatContext): Expression {
      return {
        type: 'BinaryExpression',
        operator: '*.',
        left: this.visit(ctx._left),
        right: this.visit(ctx._right),
        loc: contextToLocation(ctx),
        contracts: [],
      };
    }

    visitDivisionFloat(ctx: DivisionFloatContext): Expression {
      return {
        type: 'BinaryExpression',
        operator: '/.',
        left: this.visit(ctx._left),
        right: this.visit(ctx._right),
        loc: contextToLocation(ctx),
        contracts: [],
      };
    }

    visitPower(ctx: PowerContext): Expression {
      return {
        type: 'BinaryExpression',
        operator: '**',
        left: this.visit(ctx._left),
        right: this.visit(ctx._right),
        loc: contextToLocation(ctx),
        contracts: [],
      };
    }
  };

  return DerivedClass;
};
