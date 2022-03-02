import {
  ANTLRInputStream,
  CommonTokenStream,
  ConsoleErrorListener,
} from 'antlr4ts';
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { ErrorNode } from 'antlr4ts/tree/ErrorNode';
import { RuleNode } from 'antlr4ts/tree/RuleNode';

import { GrammarLexer } from 'lang/GrammarLexer';
import {
  AdditionContext,
  AdditionFloatContext,
  AndContext,
  BooleanContext,
  CharContext,
  ConcatenationContext,
  CondExpContext,
  ConditionalExpressionContext,
  DivisionContext,
  DivisionFloatContext,
  EqualPhysicalContext,
  EqualStructuralContext,
  ExpressionContext,
  FloatContext,
  GrammarParser,
  GreaterThanContext,
  GreaterThanOrEqualContext,
  LessThanContext,
  LessThanOrEqualContext,
  ModulusContext,
  MultiplicationContext,
  MultiplicationFloatContext,
  NotContext,
  NotEqualPhysicalContext,
  NotEqualStructuralContext,
  NumberContext,
  OrContext,
  ParenthesesContext,
  ParenthesesExpressionContext,
  PowerContext,
  StringContext,
  SubtractionContext,
  SubtractionFloatContext,
} from 'lang/GrammarParser';
import { GrammarVisitor } from 'lang/GrammarVisitor';

import { FatalSyntaxError } from './errors';
import {
  Expression,
  ExpressionStatement,
  Program,
  SourceLocation,
  Statement,
} from './types';
import { StringWrapper } from './wrappers';

function contextToLocation(ctx: ExpressionContext): SourceLocation {
  return {
    start: {
      line: ctx.start.line,
      column: ctx.start.charPositionInLine,
    },
    end: {
      line: ctx.stop ? ctx.stop.line : ctx.start.line,
      column: ctx.stop
        ? ctx.stop.charPositionInLine
        : ctx.start.charPositionInLine,
    },
  };
}

function nodeToErrorLocation(node: ErrorNode): SourceLocation {
  return {
    start: {
      line: node.symbol.line,
      column: node.symbol.charPositionInLine,
    },
    end: {
      line: node.symbol.line,
      column: node.symbol.charPositionInLine + 1,
    },
  };
}

class StatementParser
  extends AbstractParseTreeVisitor<Statement>
  implements GrammarVisitor<Statement>
{
  protected defaultResult(): ExpressionStatement {
    return {
      type: 'ExpressionStatement',
      expression: {
        type: 'EmptyExpression',
      },
    };
  }
  private wrapAsStatement(expression: Expression): ExpressionStatement {
    return {
      type: 'ExpressionStatement',
      expression,
      loc: expression.loc,
    };
  }
  visitNumber(ctx: NumberContext): ExpressionStatement {
    return this.wrapAsStatement({
      type: 'Literal',
      valueType: 'int',
      value: parseInt(ctx.text),
      loc: contextToLocation(ctx),
    });
  }
  visitFloat(ctx: FloatContext): ExpressionStatement {
    return this.wrapAsStatement({
      type: 'Literal',
      valueType: 'float',
      value: parseFloat(ctx.text),
      loc: contextToLocation(ctx),
    });
  }
  visitBoolean(ctx: BooleanContext): ExpressionStatement {
    return this.wrapAsStatement({
      type: 'Literal',
      valueType: 'bool',
      value: ctx.text.trim().toLowerCase() === 'true',
      loc: contextToLocation(ctx),
    });
  }
  visitChar(ctx: CharContext): ExpressionStatement {
    return this.wrapAsStatement({
      type: 'Literal',
      valueType: 'char',
      value: ctx.text.trim().charAt(1),
      loc: contextToLocation(ctx),
    });
  }
  visitString(ctx: StringContext): ExpressionStatement {
    const value = ctx.text.trim();
    const wrappedValue = new StringWrapper(
      value.substring(1, value.length - 1),
    );
    return this.wrapAsStatement({
      type: 'Literal',
      valueType: 'string',
      value: wrappedValue,
      loc: contextToLocation(ctx),
    });
  }
  visitParentheses(ctx: ParenthesesContext): ExpressionStatement {
    return this.visit(ctx.parenthesesExpression());
  }
  visitConditionalExpression(
    ctx: ConditionalExpressionContext,
  ): ExpressionStatement {
    return this.visit(ctx.condExp());
  }
  visitPower(ctx: PowerContext): ExpressionStatement {
    return this.wrapAsStatement({
      type: 'BinaryExpression',
      operator: '**',
      left: this.visit(ctx._left).expression,
      right: this.visit(ctx._right).expression,
      loc: contextToLocation(ctx),
    });
  }
  visitMultiplication(ctx: MultiplicationContext): ExpressionStatement {
    return this.wrapAsStatement({
      type: 'BinaryExpression',
      operator: '*',
      left: this.visit(ctx._left).expression,
      right: this.visit(ctx._right).expression,
      loc: contextToLocation(ctx),
    });
  }
  visitDivision(ctx: DivisionContext): ExpressionStatement {
    return this.wrapAsStatement({
      type: 'BinaryExpression',
      operator: '/',
      left: this.visit(ctx._left).expression,
      right: this.visit(ctx._right).expression,
      loc: contextToLocation(ctx),
    });
  }
  visitMultiplicationFloat(
    ctx: MultiplicationFloatContext,
  ): ExpressionStatement {
    return this.wrapAsStatement({
      type: 'BinaryExpression',
      operator: '*.',
      left: this.visit(ctx._left).expression,
      right: this.visit(ctx._right).expression,
      loc: contextToLocation(ctx),
    });
  }
  visitDivisionFloat(ctx: DivisionFloatContext): ExpressionStatement {
    return this.wrapAsStatement({
      type: 'BinaryExpression',
      operator: '/.',
      left: this.visit(ctx._left).expression,
      right: this.visit(ctx._right).expression,
      loc: contextToLocation(ctx),
    });
  }
  visitModulus(ctx: ModulusContext): ExpressionStatement {
    return this.wrapAsStatement({
      type: 'BinaryExpression',
      operator: 'mod',
      left: this.visit(ctx._left).expression,
      right: this.visit(ctx._right).expression,
      loc: contextToLocation(ctx),
    });
  }
  visitAddition(ctx: AdditionContext): ExpressionStatement {
    return this.wrapAsStatement({
      type: 'BinaryExpression',
      operator: '+',
      left: this.visit(ctx._left).expression,
      right: this.visit(ctx._right).expression,
      loc: contextToLocation(ctx),
    });
  }
  visitSubtraction(ctx: SubtractionContext): ExpressionStatement {
    return this.wrapAsStatement({
      type: 'BinaryExpression',
      operator: '-',
      left: this.visit(ctx._left).expression,
      right: this.visit(ctx._right).expression,
      loc: contextToLocation(ctx),
    });
  }
  visitAdditionFloat(ctx: AdditionFloatContext): ExpressionStatement {
    return this.wrapAsStatement({
      type: 'BinaryExpression',
      operator: '+.',
      left: this.visit(ctx._left).expression,
      right: this.visit(ctx._right).expression,
      loc: contextToLocation(ctx),
    });
  }
  visitSubtractionFloat(ctx: SubtractionFloatContext): ExpressionStatement {
    return this.wrapAsStatement({
      type: 'BinaryExpression',
      operator: '-.',
      left: this.visit(ctx._left).expression,
      right: this.visit(ctx._right).expression,
      loc: contextToLocation(ctx),
    });
  }
  visitLessThan(ctx: LessThanContext): ExpressionStatement {
    return this.wrapAsStatement({
      type: 'BinaryExpression',
      operator: '<',
      left: this.visit(ctx._left).expression,
      right: this.visit(ctx._right).expression,
      loc: contextToLocation(ctx),
    });
  }
  visitLessThanOrEqual(ctx: LessThanOrEqualContext): ExpressionStatement {
    return this.wrapAsStatement({
      type: 'BinaryExpression',
      operator: '<=',
      left: this.visit(ctx._left).expression,
      right: this.visit(ctx._right).expression,
      loc: contextToLocation(ctx),
    });
  }
  visitGreaterThan(ctx: GreaterThanContext): ExpressionStatement {
    return this.wrapAsStatement({
      type: 'BinaryExpression',
      operator: '>',
      left: this.visit(ctx._left).expression,
      right: this.visit(ctx._right).expression,
      loc: contextToLocation(ctx),
    });
  }
  visitGreaterThanOrEqual(ctx: GreaterThanOrEqualContext): ExpressionStatement {
    return this.wrapAsStatement({
      type: 'BinaryExpression',
      operator: '>=',
      left: this.visit(ctx._left).expression,
      right: this.visit(ctx._right).expression,
      loc: contextToLocation(ctx),
    });
  }
  visitEqualStructural(ctx: EqualStructuralContext): ExpressionStatement {
    return this.wrapAsStatement({
      type: 'BinaryExpression',
      operator: '=',
      left: this.visit(ctx._left).expression,
      right: this.visit(ctx._right).expression,
      loc: contextToLocation(ctx),
    });
  }
  visitNotEqualStructural(ctx: NotEqualStructuralContext): ExpressionStatement {
    return this.wrapAsStatement({
      type: 'BinaryExpression',
      operator: '<>',
      left: this.visit(ctx._left).expression,
      right: this.visit(ctx._right).expression,
      loc: contextToLocation(ctx),
    });
  }
  visitEqualPhysical(ctx: EqualPhysicalContext): ExpressionStatement {
    return this.wrapAsStatement({
      type: 'BinaryExpression',
      operator: '==',
      left: this.visit(ctx._left).expression,
      right: this.visit(ctx._right).expression,
      loc: contextToLocation(ctx),
    });
  }
  visitNotEqualPhysical(ctx: NotEqualPhysicalContext): ExpressionStatement {
    return this.wrapAsStatement({
      type: 'BinaryExpression',
      operator: '!=',
      left: this.visit(ctx._left).expression,
      right: this.visit(ctx._right).expression,
      loc: contextToLocation(ctx),
    });
  }
  visitConcatenation(ctx: ConcatenationContext): ExpressionStatement {
    return this.wrapAsStatement({
      type: 'BinaryExpression',
      operator: '^',
      left: this.visit(ctx._left).expression,
      right: this.visit(ctx._right).expression,
      loc: contextToLocation(ctx),
    });
  }
  visitNot(ctx: NotContext): ExpressionStatement {
    return this.wrapAsStatement({
      type: 'UnaryExpression',
      operator: 'not',
      argument: this.visit(ctx._argument).expression,
      loc: contextToLocation(ctx),
    });
  }
  visitAnd(ctx: AndContext): ExpressionStatement {
    return this.wrapAsStatement({
      type: 'LogicalExpression',
      operator: '&&',
      left: this.visit(ctx._left).expression,
      right: this.visit(ctx._right).expression,
      loc: contextToLocation(ctx),
    });
  }
  visitOr(ctx: OrContext): ExpressionStatement {
    return this.wrapAsStatement({
      type: 'LogicalExpression',
      operator: '||',
      left: this.visit(ctx._left).expression,
      right: this.visit(ctx._right).expression,
      loc: contextToLocation(ctx),
    });
  }
  visitParenthesesExpression(
    ctx: ParenthesesExpressionContext,
  ): ExpressionStatement {
    return this.visit(ctx._inner);
  }
  visitCondExp(ctx: CondExpContext): ExpressionStatement {
    return this.wrapAsStatement({
      type: 'ConditionalExpression',
      test: this.visit(ctx._test).expression,
      consequent: this.visit(ctx._consequent).expression,
      alternate: this.visit(ctx._alternate).expression,
      loc: contextToLocation(ctx),
    });
  }
  visitErrorNode(node: ErrorNode): ExpressionStatement {
    throw new FatalSyntaxError(
      nodeToErrorLocation(node),
      `invalid syntax ${node.text}`,
    );
  }
}

class StatementsParser
  extends AbstractParseTreeVisitor<Statement[]>
  implements GrammarVisitor<Statement[]>
{
  private statementParser = new StatementParser();
  protected defaultResult(): ExpressionStatement[] {
    return [];
  }
  visitChildren(node: RuleNode): Statement[] {
    let statements: Statement[] = [];
    for (let i = 0; i < node.childCount; i++) {
      statements = [...statements, ...node.getChild(i).accept(this)];
    }
    return statements;
  }

  /**
   * Delegate the following methods to the statement parser.
   */

  visitErrorNode(node: ErrorNode): Statement[] {
    throw new FatalSyntaxError(
      nodeToErrorLocation(node),
      `invalid syntax ${node.text}`,
    );
  }
  visitNumber(ctx: NumberContext): Statement[] {
    return [ctx.accept(this.statementParser)];
  }
  visitFloat(ctx: FloatContext): Statement[] {
    return [ctx.accept(this.statementParser)];
  }
  visitBoolean(ctx: BooleanContext): Statement[] {
    return [ctx.accept(this.statementParser)];
  }
  visitChar(ctx: CharContext): Statement[] {
    return [ctx.accept(this.statementParser)];
  }
  visitString(ctx: StringContext): Statement[] {
    return [ctx.accept(this.statementParser)];
  }
  visitParentheses(ctx: ParenthesesContext): Statement[] {
    return [ctx.accept(this.statementParser)];
  }
  visitConditionalExpression(ctx: ConditionalExpressionContext): Statement[] {
    return [ctx.accept(this.statementParser)];
  }
  visitPower(ctx: PowerContext): Statement[] {
    return [ctx.accept(this.statementParser)];
  }
  visitMultiplication(ctx: MultiplicationContext): Statement[] {
    return [ctx.accept(this.statementParser)];
  }
  visitDivision(ctx: DivisionContext): Statement[] {
    return [ctx.accept(this.statementParser)];
  }
  visitMultiplicationFloat(ctx: MultiplicationFloatContext): Statement[] {
    return [ctx.accept(this.statementParser)];
  }
  visitDivisionFloat(ctx: DivisionFloatContext): Statement[] {
    return [ctx.accept(this.statementParser)];
  }
  visitModulus(ctx: ModulusContext): Statement[] {
    return [ctx.accept(this.statementParser)];
  }
  visitAddition(ctx: AdditionContext): Statement[] {
    return [ctx.accept(this.statementParser)];
  }
  visitSubtraction(ctx: SubtractionContext): Statement[] {
    return [ctx.accept(this.statementParser)];
  }
  visitAdditionFloat(ctx: AdditionFloatContext): Statement[] {
    return [ctx.accept(this.statementParser)];
  }
  visitSubtractionFloat(ctx: SubtractionFloatContext): Statement[] {
    return [ctx.accept(this.statementParser)];
  }
  visitLessThan(ctx: LessThanContext): Statement[] {
    return [ctx.accept(this.statementParser)];
  }
  visitLessThanOrEqual(ctx: LessThanOrEqualContext): Statement[] {
    return [ctx.accept(this.statementParser)];
  }
  visitGreaterThan(ctx: GreaterThanContext): Statement[] {
    return [ctx.accept(this.statementParser)];
  }
  visitGreaterThanOrEqual(ctx: GreaterThanOrEqualContext): Statement[] {
    return [ctx.accept(this.statementParser)];
  }
  visitEqualStructural(ctx: EqualStructuralContext): Statement[] {
    return [ctx.accept(this.statementParser)];
  }
  visitNotEqualStructural(ctx: NotEqualStructuralContext): Statement[] {
    return [ctx.accept(this.statementParser)];
  }
  visitEqualPhysical(ctx: EqualPhysicalContext): Statement[] {
    return [ctx.accept(this.statementParser)];
  }
  visitNotEqualPhysical(ctx: NotEqualPhysicalContext): Statement[] {
    return [ctx.accept(this.statementParser)];
  }
  visitConcatenation(ctx: ConcatenationContext): Statement[] {
    return [ctx.accept(this.statementParser)];
  }
  visitNot(ctx: NotContext): Statement[] {
    return [ctx.accept(this.statementParser)];
  }
  visitAnd(ctx: AndContext): Statement[] {
    return [ctx.accept(this.statementParser)];
  }
  visitOr(ctx: OrContext): Statement[] {
    return [ctx.accept(this.statementParser)];
  }
  visitParenthesesExpression(ctx: ParenthesesExpressionContext): Statement[] {
    return [ctx.accept(this.statementParser)];
  }
  visitCondExp(ctx: CondExpContext): Statement[] {
    return [ctx.accept(this.statementParser)];
  }
}

function addCustomErrorListeners(
  lexer: GrammarLexer,
  parser: GrammarParser,
): void {
  lexer.removeErrorListener(ConsoleErrorListener.INSTANCE);
  lexer.addErrorListener({
    syntaxError: (
      _recognizer,
      _offendingSymbol,
      line,
      charPositionInLine,
      msg,
      _e,
    ) => {
      throw new FatalSyntaxError(
        {
          start: {
            line: line,
            column: charPositionInLine,
          },
          end: {
            line: line,
            column: charPositionInLine + 1,
          },
        },
        `invalid syntax ${msg}`,
      );
    },
  });
  parser.removeErrorListener(ConsoleErrorListener.INSTANCE);
  parser.addErrorListener({
    syntaxError: (
      _recognizer,
      _offendingSymbol,
      line,
      charPositionInLine,
      msg,
      _e,
    ) => {
      throw new FatalSyntaxError(
        {
          start: {
            line: line,
            column: charPositionInLine,
          },
          end: {
            line: line,
            column: charPositionInLine + 1,
          },
        },
        `invalid syntax ${msg}`,
      );
    },
  });
}

export function parse(source: string): Program {
  const inputStream = new ANTLRInputStream(source);
  const lexer = new GrammarLexer(inputStream);
  const tokenStream = new CommonTokenStream(lexer);
  const parser = new GrammarParser(tokenStream);
  parser.buildParseTree = true;
  addCustomErrorListeners(lexer, parser);
  const statementsParser = new StatementsParser();
  const expression = parser.start();
  return {
    type: 'Program',
    body: expression.accept(statementsParser),
  };
}
