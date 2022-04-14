import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { ErrorNode } from 'antlr4ts/tree/ErrorNode';
import flow from 'lodash.flow';

import {
  CondExpContext,
  ParenthesesExpressionContext,
} from 'lang/GrammarParser';
import { GrammarVisitor } from 'lang/GrammarVisitor';
import { FatalSyntaxError } from 'parser/errors';
import { Expression } from 'parser/types';
import { contextToLocation, nodeToErrorLocation } from 'parser/utils';

import { parseBinding } from './bindingParser';
import { parseComparator } from './comparatorParser';
import { parseFloatBinOp } from './floatBinOpParser';
import { parseFunction } from './functionParser';
import { parseIntBinOp } from './intBinOpParser';
import { parseLogicalOp } from './logicalOpParser';
import { parsePrimitive } from './primitiveParser';
import { parseStringBinOp } from './stringBinOpParser';
import { parseUnaryOp } from './unaryOpParser';

class BaseParser
  extends AbstractParseTreeVisitor<Expression>
  implements GrammarVisitor<Expression>
{
  protected defaultResult(): Expression {
    return {
      type: 'EmptyExpression',
      contracts: [],
    };
  }

  visitParenthesesExpression(ctx: ParenthesesExpressionContext): Expression {
    return this.visit(ctx._inner);
  }

  visitCondExp(ctx: CondExpContext): Expression {
    return {
      type: 'ConditionalExpression',
      test: this.visit(ctx._test),
      consequent: this.visit(ctx._consequent),
      alternate: this.visit(ctx._alternate),
      loc: contextToLocation(ctx),
      contracts: [],
    };
  }

  visitErrorNode(node: ErrorNode): Expression {
    throw new FatalSyntaxError(nodeToErrorLocation(node), 'Syntax error');
  }
}

// Compose parsing behaviours, which operate like unary functions that can be chained
const ParsingBehaviours = flow(
  parsePrimitive,
  parseIntBinOp,
  parseFloatBinOp,
  parseStringBinOp,
  parseLogicalOp,
  parseUnaryOp,
  parseComparator,
  parseBinding,
  parseFunction,
)(BaseParser);

export class ExpressionParser extends ParsingBehaviours {}
