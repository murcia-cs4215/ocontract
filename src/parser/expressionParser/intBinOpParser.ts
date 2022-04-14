import {
  AdditionContext,
  DivisionContext,
  ModulusContext,
  MultiplicationContext,
  SubtractionContext,
} from 'lang/GrammarParser';
import { Expression } from 'parser/types';
import { Constructable, contextToLocation } from 'parser/utils';

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
        contracts: [],
      };
    }

    visitSubtraction(ctx: SubtractionContext): Expression {
      return {
        type: 'BinaryExpression',
        operator: '-',
        left: this.visit(ctx._left),
        right: this.visit(ctx._right),
        loc: contextToLocation(ctx),
        contracts: [],
      };
    }

    visitMultiplication(ctx: MultiplicationContext): Expression {
      return {
        type: 'BinaryExpression',
        operator: '*',
        left: this.visit(ctx._left),
        right: this.visit(ctx._right),
        loc: contextToLocation(ctx),
        contracts: [],
      };
    }

    visitDivision(ctx: DivisionContext): Expression {
      return {
        type: 'BinaryExpression',
        operator: '/',
        left: this.visit(ctx._left),
        right: this.visit(ctx._right),
        loc: contextToLocation(ctx),
        contracts: [],
      };
    }

    visitModulus(ctx: ModulusContext): Expression {
      return {
        type: 'BinaryExpression',
        operator: 'mod',
        left: this.visit(ctx._left),
        right: this.visit(ctx._right),
        loc: contextToLocation(ctx),
        contracts: [],
      };
    }
  };

  return DerivedClass;
};
