import { ANTLRInputStream, CommonTokenStream } from 'antlr4ts';
import { ErrorNode } from 'antlr4ts/tree/ErrorNode';
import { ParseTree } from 'antlr4ts/tree/ParseTree';
import { RuleNode } from 'antlr4ts/tree/RuleNode';
import { TerminalNode } from 'antlr4ts/tree/TerminalNode';
import { GrammarLexer } from 'lang/GrammarLexer';
import {
  AdditionContext,
  AdditionFloatContext,
  AndContext,
  BooleanContext,
  CharContext,
  ConcatenationContext,
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
  PowerContext,
  StringContext,
  SubtractionContext,
  SubtractionFloatContext,
} from 'lang/GrammarParser';
import { GrammarVisitor } from 'lang/GrammarVisitor';

import { Expression, ExpressionStatement, Program, Statement } from './types';
import { SourceLocation } from './types';

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

class StatementParser implements GrammarVisitor<Statement> {
  private wrapAsStatement(expression: Expression): ExpressionStatement {
    return {
      type: 'ExpressionStatement',
      expression,
      loc: expression.loc,
    };
  }
  visitNumber(ctx: NumberContext): ExpressionStatement {
    const loc = contextToLocation(ctx);
    return this.wrapAsStatement({
      type: 'Literal',
      valueType: 'int',
      value: parseInt(ctx.text),
      loc,
    });
  }
  visitFloat(ctx: FloatContext): ExpressionStatement {
    const loc = contextToLocation(ctx);
    return this.wrapAsStatement({
      type: 'Literal',
      valueType: 'float',
      value: parseFloat(ctx.text),
      loc,
    });
  }
  visitBoolean(ctx: BooleanContext): ExpressionStatement {
    const loc = contextToLocation(ctx);
    return this.wrapAsStatement({
      type: 'Literal',
      valueType: 'bool',
      value: ctx.text.trim().toLowerCase() === 'true',
      loc,
    });
  }
  visitChar(ctx: CharContext): ExpressionStatement {
    // TODO: Check that text has length 1
    const loc = contextToLocation(ctx);
    return this.wrapAsStatement({
      type: 'Literal',
      valueType: 'char',
      value: ctx.text.charAt(0),
      loc,
    });
  }
  visitString(ctx: StringContext): ExpressionStatement {
    const loc = contextToLocation(ctx);
    return this.wrapAsStatement({
      type: 'Literal',
      valueType: 'string',
      value: ctx.text,
      loc,
    });
  }
  visitParentheses(ctx: ParenthesesContext): ExpressionStatement {
    return this.visit(ctx.parenthesesExpression());
  }
  visitPower(ctx: PowerContext): ExpressionStatement {
    const loc = contextToLocation(ctx);
    return this.wrapAsStatement({
      type: 'BinaryExpression',
      operator: '**',
      left: this.visit(ctx._left).expression,
      right: this.visit(ctx._right).expression,
      loc,
    });
  }
  visitMultiplication(ctx: MultiplicationContext): ExpressionStatement {
    const loc = contextToLocation(ctx);
    return this.wrapAsStatement({
      type: 'BinaryExpression',
      operator: '*',
      left: this.visit(ctx._left).expression,
      right: this.visit(ctx._right).expression,
      loc,
    });
  }
  visitDivision(ctx: DivisionContext): ExpressionStatement {
    const loc = contextToLocation(ctx);
    return this.wrapAsStatement({
      type: 'BinaryExpression',
      operator: '/',
      left: this.visit(ctx._left).expression,
      right: this.visit(ctx._right).expression,
      loc,
    });
  }
  visitMultiplicationFloat(
    ctx: MultiplicationFloatContext,
  ): ExpressionStatement {
    const loc = contextToLocation(ctx);
    return this.wrapAsStatement({
      type: 'BinaryExpression',
      operator: '*.',
      left: this.visit(ctx._left).expression,
      right: this.visit(ctx._right).expression,
      loc,
    });
  }
  visitDivisionFloat(ctx: DivisionFloatContext): ExpressionStatement {
    const loc = contextToLocation(ctx);
    return this.wrapAsStatement({
      type: 'BinaryExpression',
      operator: '/.',
      left: this.visit(ctx._left).expression,
      right: this.visit(ctx._right).expression,
      loc,
    });
  }
  visitModulus(ctx: ModulusContext): ExpressionStatement {
    const loc = contextToLocation(ctx);
    return this.wrapAsStatement({
      type: 'BinaryExpression',
      operator: 'mod',
      left: this.visit(ctx._left).expression,
      right: this.visit(ctx._right).expression,
      loc,
    });
  }
  visitAddition(ctx: AdditionContext): ExpressionStatement {
    const loc = contextToLocation(ctx);
    return this.wrapAsStatement({
      type: 'BinaryExpression',
      operator: '+',
      left: this.visit(ctx._left).expression,
      right: this.visit(ctx._right).expression,
      loc,
    });
  }
  visitSubtraction(ctx: SubtractionContext): ExpressionStatement {
    const loc = contextToLocation(ctx);
    return this.wrapAsStatement({
      type: 'BinaryExpression',
      operator: '-',
      left: this.visit(ctx._left).expression,
      right: this.visit(ctx._right).expression,
      loc,
    });
  }
  visitAdditionFloat(ctx: AdditionFloatContext): ExpressionStatement {
    const loc = contextToLocation(ctx);
    return this.wrapAsStatement({
      type: 'BinaryExpression',
      operator: '+.',
      left: this.visit(ctx._left).expression,
      right: this.visit(ctx._right).expression,
      loc,
    });
  }
  visitSubtractionFloat(ctx: SubtractionFloatContext): ExpressionStatement {
    const loc = contextToLocation(ctx);
    return this.wrapAsStatement({
      type: 'BinaryExpression',
      operator: '-.',
      left: this.visit(ctx._left).expression,
      right: this.visit(ctx._right).expression,
      loc,
    });
  }
  visitLessThan(ctx: LessThanContext): ExpressionStatement {
    const loc = contextToLocation(ctx);
    return this.wrapAsStatement({
      type: 'BinaryExpression',
      operator: '<',
      left: this.visit(ctx._left).expression,
      right: this.visit(ctx._right).expression,
      loc,
    });
  }
  visitLessThanOrEqual(ctx: LessThanOrEqualContext): ExpressionStatement {
    const loc = contextToLocation(ctx);
    return this.wrapAsStatement({
      type: 'BinaryExpression',
      operator: '<=',
      left: this.visit(ctx._left).expression,
      right: this.visit(ctx._right).expression,
      loc,
    });
  }
  visitGreaterThan(ctx: GreaterThanContext): ExpressionStatement {
    const loc = contextToLocation(ctx);
    return this.wrapAsStatement({
      type: 'BinaryExpression',
      operator: '>',
      left: this.visit(ctx._left).expression,
      right: this.visit(ctx._right).expression,
      loc,
    });
  }
  visitGreaterThanOrEqual(ctx: GreaterThanOrEqualContext): ExpressionStatement {
    const loc = contextToLocation(ctx);
    return this.wrapAsStatement({
      type: 'BinaryExpression',
      operator: '>=',
      left: this.visit(ctx._left).expression,
      right: this.visit(ctx._right).expression,
      loc,
    });
  }
  visitEqualStructural(ctx: EqualStructuralContext): ExpressionStatement {
    const loc = contextToLocation(ctx);
    return this.wrapAsStatement({
      type: 'BinaryExpression',
      operator: '=',
      left: this.visit(ctx._left).expression,
      right: this.visit(ctx._right).expression,
      loc,
    });
  }
  visitNotEqualStructural(ctx: NotEqualStructuralContext): ExpressionStatement {
    const loc = contextToLocation(ctx);
    return this.wrapAsStatement({
      type: 'BinaryExpression',
      operator: '<>',
      left: this.visit(ctx._left).expression,
      right: this.visit(ctx._right).expression,
      loc,
    });
  }
  visitEqualPhysical(ctx: EqualPhysicalContext): ExpressionStatement {
    const loc = contextToLocation(ctx);
    return this.wrapAsStatement({
      type: 'BinaryExpression',
      operator: '==',
      left: this.visit(ctx._left).expression,
      right: this.visit(ctx._right).expression,
      loc,
    });
  }
  visitNotEqualPhysical(ctx: NotEqualPhysicalContext): ExpressionStatement {
    const loc = contextToLocation(ctx);
    return this.wrapAsStatement({
      type: 'BinaryExpression',
      operator: '!=',
      left: this.visit(ctx._left).expression,
      right: this.visit(ctx._right).expression,
      loc,
    });
  }
  visitConcatenation(ctx: ConcatenationContext): ExpressionStatement {
    const loc = contextToLocation(ctx);
    return this.wrapAsStatement({
      type: 'BinaryExpression',
      operator: '^',
      left: this.visit(ctx._left).expression,
      right: this.visit(ctx._right).expression,
      loc,
    });
  }
  visitNot(ctx: NotContext): ExpressionStatement {
    const loc = contextToLocation(ctx);
    return this.wrapAsStatement({
      type: 'UnaryExpression',
      operator: 'not',
      argument: this.visit(ctx._argument).expression,
      loc,
    });
  }
  visitAnd(ctx: AndContext): ExpressionStatement {
    const loc = contextToLocation(ctx);
    return this.wrapAsStatement({
      type: 'LogicalExpression',
      operator: '&&',
      left: this.visit(ctx._left).expression,
      right: this.visit(ctx._right).expression,
      loc,
    });
  }
  visitOr(ctx: OrContext): ExpressionStatement {
    const loc = contextToLocation(ctx);
    return this.wrapAsStatement({
      type: 'LogicalExpression',
      operator: '||',
      left: this.visit(ctx._left).expression,
      right: this.visit(ctx._right).expression,
      loc,
    });
  }
  visit(tree: ParseTree): ExpressionStatement {
    return tree.accept(this);
  }
  visitChildren(node: RuleNode): ExpressionStatement {
    const expressions: Expression[] = [];
    for (let i = 0; i < node.childCount; i++) {
      expressions.push(node.getChild(i).accept(this).expression);
    }
    return this.wrapAsStatement({
      type: 'SequenceExpression',
      expressions,
    });
  }
  visitTerminal(node: TerminalNode): ExpressionStatement {
    return node.accept(this);
  }
  visitErrorNode(_node: ErrorNode): ExpressionStatement {
    throw new Error();
  }
}

class StatementsParser implements GrammarVisitor<Statement[]> {
  private statementParser = new StatementParser();
  /**
   * Entry point of the program
   */
  visitChildren(node: RuleNode): Statement[] {
    const statements: Statement[] = [];
    for (let i = 0; i < node.childCount; i++) {
      statements.push(node.getChild(i).accept(this.statementParser));
    }
    return statements;
  }

  visit(tree: ParseTree): Statement[] {
    return [tree.accept(this.statementParser)];
  }

  visitTerminal(node: TerminalNode): Statement[] {
    return [node.accept(this.statementParser)];
  }

  visitErrorNode(_node: ErrorNode): Statement[] {
    // TODO: throw proper syntax error
    throw new Error();
  }
}

export function parse(source: string): Program {
  const inputStream = new ANTLRInputStream(source);
  const lexer = new GrammarLexer(inputStream);
  const tokenStream = new CommonTokenStream(lexer);
  const parser = new GrammarParser(tokenStream);
  parser.buildParseTree = true;
  const expression = parser.expression();
  const statementsParser = new StatementsParser();
  return {
    type: 'Program',
    body: expression.accept(statementsParser),
  };
}
