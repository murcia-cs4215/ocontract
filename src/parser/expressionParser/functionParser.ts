import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { Constructable } from 'types';

import { FuncApplicationContext, LambdaContext } from 'lang/GrammarParser';
import { Expression } from 'parser/types';
import { contextToLocation } from 'parser/utils';

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
      let params: any[] = [];
      if (ctx._params != undefined) {
        for (let i = 0; i < ctx._params.childCount; i++) {
          const exp = ctx._params
            .getChild(i)
            .accept(this as unknown as AbstractParseTreeVisitor<Expression>);
          if (exp.type === 'EmptyExpression') {
            continue;
          }
          params = [...params, exp];
        }
      }
      return {
        type: 'LambdaExpression',
        params: params,
        body: this.visit(ctx._body),
        loc: contextToLocation(ctx),
      };
    }
  };

  return DerivedClass;
};
