import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';

import {
  ContractListContext,
  ContractSetNotationContext,
  ContractSimpleExpressionContext,
  ParenthesesContractContext,
} from 'lang/GrammarParser';
import { GrammarVisitor } from 'lang/GrammarVisitor';

import { ExpressionParser } from './expressionParser';
import { ContractExpression, ContractType, Identifier } from './types';

export class ContractParser
  extends AbstractParseTreeVisitor<ContractExpression>
  implements GrammarVisitor<ContractExpression>
{
  private expressionParser = new ExpressionParser();

  private wrapWithContractExpression(
    con: Array<ContractType>,
  ): ContractExpression {
    return {
      type: 'ContractExpression',
      contract: con,
    };
  }

  protected defaultResult(): ContractExpression {
    return this.wrapWithContractExpression([
      {
        type: 'EmptyContractExpression',
      },
    ]);
  }

  visitContractSimpleExpression(
    ctx: ContractSimpleExpressionContext,
  ): ContractExpression {
    return this.wrapWithContractExpression([
      {
        type: 'FlatContractExpression',
        contract: this.expressionParser.visit(ctx.expression()),
      },
    ]);
  }

  visitContractSetNotation(
    ctx: ContractSetNotationContext,
  ): ContractExpression {
    const param = this.expressionParser.visit(ctx.identifier()) as Identifier;
    return this.wrapWithContractExpression([
      {
        type: 'FlatContractExpression',
        contract: {
          type: 'LambdaExpression',
          body: this.expressionParser.visit(ctx.expression()),
          params: [param],
          typeDeclaration: {
            type: 'FunctionType',
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            parameterType: param.typeDeclaration!,
            returnType: {
              type: 'PrimitiveType',
              valueType: 'bool',
            },
          },
        },
      },
    ]);
  }

  visitContractList(ctx: ContractListContext): ContractExpression {
    let contractList: Array<ContractType> = [];
    const contractExpArr = ctx.contractExpression();
    for (let i = 0; i < contractExpArr.length; i++) {
      contractList = contractList.concat(
        this.visit(contractExpArr[i]).contract,
      );
    }
    return this.wrapWithContractExpression(contractList);
  }

  visitParenthesesContract(
    ctx: ParenthesesContractContext,
  ): ContractExpression {
    return this.wrapWithContractExpression([
      this.visit(ctx.contractExpression()).contract,
    ]);
  }
}
