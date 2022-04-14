import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';

import {
  ContractListContext,
  ContractSetNotationContext,
  ContractSimpleExpressionContext,
  ParenthesesContractContext,
} from 'lang/GrammarParser';
import { GrammarVisitor } from 'lang/GrammarVisitor';

import { ExpressionParser } from './expressionParser';
import {
  ContractExpression,
  ContractExpressionType,
  Identifier,
} from './types';
import { contextToLocation } from './utils';

export class ContractParser
  extends AbstractParseTreeVisitor<ContractExpression>
  implements GrammarVisitor<ContractExpression>
{
  private expressionParser = new ExpressionParser();

  private wrapWithContractExpression(
    con: ContractExpressionType,
  ): ContractExpression {
    return {
      type: 'ContractExpression',
      contract: con,
      loc: con.loc,
    };
  }

  protected defaultResult(): ContractExpression {
    return this.wrapWithContractExpression({
      type: 'EmptyContractExpression',
    });
  }

  visitContractSimpleExpression(
    ctx: ContractSimpleExpressionContext,
  ): ContractExpression {
    return this.wrapWithContractExpression({
      type: 'FlatContractExpression',
      contract: this.expressionParser.visit(ctx.expression()),
      loc: contextToLocation(ctx),
      isSetNotation: false,
    });
  }

  visitContractSetNotation(
    ctx: ContractSetNotationContext,
  ): ContractExpression {
    const param = this.expressionParser.visit(
      ctx.identifierWithType(),
    ) as Identifier;
    return this.wrapWithContractExpression({
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
        loc: contextToLocation(ctx),
        contracts: [],
      },
      isSetNotation: true,
    });
  }

  visitContractList(ctx: ContractListContext): ContractExpression {
    const contractList: Array<ContractExpression> = [];
    const contractExpArr = ctx.contractExpression();
    for (let i = 0; i < contractExpArr.length; i++) {
      contractList.push(this.visit(contractExpArr[i]));
    }
    return curryParamContracts(contractList);
  }

  visitParenthesesContract(
    ctx: ParenthesesContractContext,
  ): ContractExpression {
    return this.wrapWithContractExpression(
      this.visit(ctx.contractExpression()).contract,
    );
  }
}

function curryParamContracts(
  contracts: ContractExpression[],
): ContractExpression {
  let finalContract = contracts[contracts.length - 1];
  for (let i = contracts.length - 2; i >= 0; i--) {
    finalContract = {
      type: 'ContractExpression',
      contract: {
        type: 'FunctionContractExpression',
        parameterContract: contracts[i],
        returnContract: finalContract,
      },
    };
  }
  return finalContract;
}
