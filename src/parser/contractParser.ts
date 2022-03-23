import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';

import { Contract } from 'contracts/types';
import { curryParamContracts } from 'contracts/utils';
import {
  ContractListContext,
  ContractSetNotationContext,
  ContractSimpleExpressionContext,
  ParenthesesContractContext,
} from 'lang/GrammarParser';
import { GrammarVisitor } from 'lang/GrammarVisitor';

import { UNKNOWN_LOCATION } from '../constants';

import { ExpressionParser } from './expressionParser';
import { ContractExpression, Identifier } from './types';
import { contextToLocation } from './utils';

export class ContractParser
  extends AbstractParseTreeVisitor<ContractExpression>
  implements GrammarVisitor<ContractExpression>
{
  private expressionParser = new ExpressionParser();

  private wrapWithContractExpression(con: Contract): ContractExpression {
    return {
      type: 'ContractExpression',
      contract: con,
      loc: UNKNOWN_LOCATION,
    };
  }

  protected defaultResult(): ContractExpression {
    return this.wrapWithContractExpression({
      type: 'EmptyContract',
    });
  }

  visitContractSimpleExpression(
    ctx: ContractSimpleExpressionContext,
  ): ContractExpression {
    return this.wrapWithContractExpression({
      type: 'FlatContract',
      contract: this.expressionParser.visit(ctx.expression()),
    });
  }

  visitContractSetNotation(
    ctx: ContractSetNotationContext,
  ): ContractExpression {
    const param = this.expressionParser.visit(ctx.identifier()) as Identifier;
    return this.wrapWithContractExpression({
      type: 'FlatContract',
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
        loc: contextToLocation(ctx),
      },
    });
  }

  visitContractList(ctx: ContractListContext): ContractExpression {
    const contractList: Array<Contract> = [];
    const contractExpArr = ctx.contractExpression();
    for (let i = 0; i < contractExpArr.length; i++) {
      contractList.push(this.visit(contractExpArr[i]).contract);
    }
    return this.wrapWithContractExpression(curryParamContracts(contractList));
  }

  visitParenthesesContract(
    ctx: ParenthesesContractContext,
  ): ContractExpression {
    return this.wrapWithContractExpression(
      this.visit(ctx.contractExpression()).contract,
    );
  }
}
