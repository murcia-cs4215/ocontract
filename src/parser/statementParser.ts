import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { ErrorNode } from 'antlr4ts/tree/ErrorNode';

import {
  ContractDeclarationContext,
  ExpressionContext,
  LetGlobalBindingContext,
  StatementContext,
} from 'lang/GrammarParser';
import { GrammarVisitor } from 'lang/GrammarVisitor';
import { Type } from 'types/types';
import { curryParamTypes } from 'types/utils';

import { UNKNOWN_LOCATION } from '../constants';

import { ContractParser } from './contractParser';
import { FatalSyntaxError } from './errors';
import { ExpressionParser } from './expressionParser';
import { TypeParser } from './typeParser';
import {
  Expression,
  ExpressionStatement,
  GlobalLetStatement,
  Identifier,
  Statement,
} from './types';
import { contextToLocation, nodeToErrorLocation } from './utils';

export class StatementParser
  extends AbstractParseTreeVisitor<Statement>
  implements GrammarVisitor<Statement>
{
  private expressionParser = new ExpressionParser();
  private contractParser = new ContractParser();
  private typeParser = new TypeParser();

  protected defaultResult(): Statement {
    return {
      type: 'EmptyStatement',
      loc: UNKNOWN_LOCATION,
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
    let params: Identifier[] = [];
    let type: Type;

    if (ctx._params != null) {
      for (let i = 0; i < ctx._params.childCount; i++) {
        const exp = ctx._params
          .getChild(i)
          .accept(this.expressionParser) as Identifier;
        params = [...params, exp];
      }
      type = curryParamTypes(
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        params.map((p) => p.typeDeclaration!),
        this.typeParser.visit(ctx._idType),
      );
    } else {
      type = this.typeParser.visit(ctx._idType);
    }

    return {
      type: 'GlobalLetStatement',
      recursive: ctx.REC() != null,
      left: this.expressionParser.visit(ctx._id) as Identifier,
      params: params,
      right: this.expressionParser.visit(ctx._init),
      typeDeclaration: type,
      loc: contextToLocation(ctx),
    };
  }

  visitContractDeclaration(ctx: ContractDeclarationContext): Statement {
    const id = this.expressionParser.visit(ctx.identifier()) as Identifier;
    return {
      type: 'ContractDeclarationStatement',
      id: id,
      contract: this.contractParser.visit(ctx.contractExpression()),
      loc: contextToLocation(ctx),
    };
  }

  visitExpression(ctx: ExpressionContext): Statement {
    return this.wrapAsExpressionStatement(this.expressionParser.visit(ctx));
  }

  visitErrorNode(node: ErrorNode): Statement {
    throw new FatalSyntaxError(nodeToErrorLocation(node), 'Syntax error');
  }
}
