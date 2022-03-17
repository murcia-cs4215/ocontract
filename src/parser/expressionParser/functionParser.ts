import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { Constructable } from 'types';

import { FuncApplicationContext, LambdaContext } from 'lang/GrammarParser';
import { TypeParser } from 'parser/typeParser';
import { Expression, Identifier } from 'parser/types';
import { contextToLocation, curryParamTypes } from 'parser/utils';

export const parseFunction = <T extends Constructable>(
  BaseClass: T,
): typeof DerivedClass => {
  const DerivedClass = class extends BaseClass {
    visitFuncApplication(ctx: FuncApplicationContext): Expression {
      const args = ctx._args.funcArgument();
      const callee = ctx._func
        ? this.visit(ctx._func)
        : this.visit(ctx._lambdaFunc);
      return {
        type: 'CallExpression',
        callee: callee,
        arguments: args.map((arg) => this.visit(arg)),
        loc: contextToLocation(ctx),
      };
    }

    visitLambda(ctx: LambdaContext): Expression {
      let params: Identifier[] = [];
      if (ctx._params != undefined) {
        for (let i = 0; i < ctx._params.childCount; i++) {
          const exp = ctx._params
            .getChild(i)
            .accept(
              this as unknown as AbstractParseTreeVisitor<Expression>,
            ) as Identifier;
          params = [...params, exp];
        }
      }
      const returnType = new TypeParser().visit(ctx._returnType);

      const type = curryParamTypes(
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        params.map((p) => p.typeDeclaration!),
        returnType,
      );
      return {
        type: 'LambdaExpression',
        params: params,
        body: this.visit(ctx._body),
        loc: contextToLocation(ctx),
        typeDeclaration: type,
      };
    }
  };

  return DerivedClass;
};
