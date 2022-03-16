import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { ErrorNode } from 'antlr4ts/tree/ErrorNode';

import {
  ContractDeclarationContext,
  ExpressionContext,
  LetGlobalBindingContext,
  StatementContext,
} from 'lang/GrammarParser';
import { GrammarVisitor } from 'lang/GrammarVisitor';

import { ContractParser } from './contractParser';
import { FatalSyntaxError } from './errors';
import { ExpressionParser } from './expressionParser';
import {
  Expression,
  ExpressionStatement,
  GlobalLetStatement,
  Identifier,
  Statement,
} from './types';
import { nodeToErrorLocation } from './utils';

export class StatementParser
  extends AbstractParseTreeVisitor<Statement>
  implements GrammarVisitor<Statement>
{
  private expressionParser = new ExpressionParser();
  private contractParser = new ContractParser();
  protected defaultResult(): Statement {
    return {
      type: 'EmptyStatement',
    };
  }
  private wrapAsExpressionStatement(e: Expression): ExpressionStatement {
    return {
      type: 'ExpressionStatement',
      expression: e,
      loc: e.loc,
    };
  }

  visitStatement(ctx: StatementContext): Statement {
    const exp = ctx.expression();
    const letGlob = ctx.letGlobalBinding();
    const conDecl = ctx.contractDeclaration();
    if (exp != undefined) {
      return this.visitExpression(exp);
    } else if (letGlob != undefined) {
      return this.visitLetGlobalBinding(letGlob);
    } else if (conDecl != undefined) {
      return this.visitContractDeclaration(conDecl);
    }
    return this.defaultResult();
  }

  visitLetGlobalBinding(ctx: LetGlobalBindingContext): GlobalLetStatement {
    let params: any[] = [];
    if (ctx._params != undefined) {
      for (let i = 0; i < ctx._params.childCount; i++) {
        const exp = ctx._params
          .getChild(i)
          .accept(this.expressionParser) as Expression;
        if (exp.type === 'EmptyExpression') {
          continue;
        }
        params = [...params, exp];
      }
    }
    return {
      type: 'GlobalLetStatement',
      recursive: ctx.REC() != null,
      left: this.expressionParser.visit(ctx._id) as Identifier,
      params: params as Identifier[],
      right: this.expressionParser.visit(ctx._init),
    };
  }

  visitContractDeclaration(ctx: ContractDeclarationContext): Statement {
    const id = this.expressionParser.visit(ctx.identifier()) as Identifier;
    return {
      type: 'ContractDeclarationStatement',
      id: id,
      contract: this.contractParser.visit(ctx.contractExpression()),
    };
  }

  visitExpression(ctx: ExpressionContext): Statement {
    return this.wrapAsExpressionStatement(this.expressionParser.visit(ctx));
  }

  visitErrorNode(node: ErrorNode): Statement {
    throw new FatalSyntaxError(nodeToErrorLocation(node), 'Syntax error');
  }
}
