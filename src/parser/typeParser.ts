import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';

import {
  FunTypeContext,
  ParenTypeContext,
  PrimTypeContext,
  TypeAnnotationContext,
} from 'lang/GrammarParser';
import { GrammarVisitor } from 'lang/GrammarVisitor';

import { PrimitiveValueType, Type } from './types';
import { curryParamTypes } from './utils';

export class TypeParser
  extends AbstractParseTreeVisitor<Type>
  implements GrammarVisitor<Type>
{
  protected defaultResult(): Type {
    return {
      type: 'PrimitiveType',
      valueType: 'unit',
    };
  }

  visitPrimType(ctx: PrimTypeContext): Type {
    return {
      type: 'PrimitiveType',
      valueType: ctx.PRIMITIVETYPE().text as PrimitiveValueType,
    };
  }

  visitParenType(ctx: ParenTypeContext): Type {
    return this.visit(ctx.type());
  }

  visitFunType(ctx: FunTypeContext): Type {
    const types = ctx.type();
    const parsedTypes = types.map((p) => this.visit(p));

    return curryParamTypes(
      parsedTypes.slice(0, parsedTypes.length - 1),
      parsedTypes[parsedTypes.length - 1],
    );
  }

  visitTypeAnnotation(ctx: TypeAnnotationContext): Type {
    return this.visit(ctx.type());
  }
}
