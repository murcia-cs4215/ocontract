import { Constructable } from 'types';

import {
  IdentifierContext,
  IdentifierWithContextParenContext,
  LetLocalBindingContext,
} from 'lang/GrammarParser';
import { StatementParser } from 'parser/statementParser';
import { Expression } from 'parser/types';
import { contextToLocation } from 'parser/utils';

export const parseBinding = <T extends Constructable>(
  BaseClass: T,
): typeof DerivedClass => {
  const DerivedClass = class extends BaseClass {
    visitIdentifier(ctx: IdentifierContext): Expression {
      return {
        type: 'Identifier',
        name: ctx.IDENTIFIER().text,
        loc: contextToLocation(ctx),
      };
    }

    visitIdentifierWithContextParen(
      ctx: IdentifierWithContextParenContext,
    ): Expression {
      return {
        type: 'Identifier',
        name: ctx.identifierWithContext().identifier().IDENTIFIER().text,
        loc: contextToLocation(ctx),
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
      };
    }
  };

  return DerivedClass;
};
