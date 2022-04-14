import {
  IdentifierContext,
  IdentifierExpressionContext,
  IdentifierWithTypeContext,
  IdentifierWithTypeParenContext,
  LetLocalBindingContext,
} from 'lang/GrammarParser';
import { StatementParser } from 'parser/statementParser';
import { TypeParser } from 'parser/typeParser';
import { Expression } from 'parser/types';
import { Constructable, contextToLocation } from 'parser/utils';

export const parseBinding = <T extends Constructable>(
  BaseClass: T,
): typeof DerivedClass => {
  const DerivedClass = class extends BaseClass {
    visitIdentifierExpression(ctx: IdentifierExpressionContext): Expression {
      return this.visitIdentifier(ctx.identifier());
    }

    visitIdentifier(ctx: IdentifierContext): Expression {
      return {
        type: 'Identifier',
        name: ctx.IDENTIFIER().text,
        loc: contextToLocation(ctx),
        contracts: [],
      };
    }

    visitIdentifierWithTypeParen(
      ctx: IdentifierWithTypeParenContext,
    ): Expression {
      return this.visit(ctx.identifierWithType());
    }

    visitIdentifierWithType(ctx: IdentifierWithTypeContext): Expression {
      return {
        type: 'Identifier',
        name: ctx.identifier().IDENTIFIER().text,
        typeDeclaration: new TypeParser().visit(ctx._idType),
        loc: contextToLocation(ctx),
        contracts: [],
      };
    }

    visitLetLocalBinding(ctx: LetLocalBindingContext): Expression {
      return {
        type: 'LocalLetExpression',
        left: new StatementParser().visitLetGlobalBinding(
          ctx.letGlobalBinding(),
        ),
        right: this.visit(ctx._exp2),
        loc: contextToLocation(ctx),
        contracts: [],
      };
    }
  };

  return DerivedClass;
};
