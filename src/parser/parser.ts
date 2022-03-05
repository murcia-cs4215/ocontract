import {
  ANTLRInputStream,
  CommonTokenStream,
  ConsoleErrorListener,
  RecognitionException,
  Recognizer,
  Token,
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
  FunctionDeclarationContext,
  FunctionDeclarationExpressionContext,
  GrammarParser,
  GreaterThanContext,
  GreaterThanOrEqualContext,
  IdentifierContext,
  IdentifierExpressionContext,
  LessThanContext,
  LessThanOrEqualContext,
  LetGlobalBindingContext,
  LetGlobalBindingExpressionContext,
  LetLocalBindingContext,
  LetLocalBindingExpressionContext,
  ModulusContext,
  MultiplicationContext,
  MultiplicationFloatContext,
  NegativeContext,
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

import { ErrorSeverity } from '../errors/types';
import { Context } from '../types';

import { FatalSyntaxError } from './errors';
import {
  Expression,
  ExpressionStatement,
  GlobalLetExpression,
  Identifier,
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
  visitNegative(ctx: NegativeContext): ExpressionStatement {
    return this.wrapAsStatement({
      type: 'UnaryExpression',
      operator: '-',
      argument: this.visit(ctx._argument).expression,
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
  visitLetGlobalBindingExpression(
    ctx: LetGlobalBindingExpressionContext,
  ): ExpressionStatement {
    return this.visit(ctx.letGlobalBinding());
  }
  visitLetLocalBindingExpression(
    ctx: LetLocalBindingExpressionContext,
  ): ExpressionStatement {
    return this.visit(ctx.letLocalBinding());
  }
  visitFunctionDeclarationExpression(
    ctx: FunctionDeclarationExpressionContext,
  ): ExpressionStatement {
    return this.visit(ctx.functionDeclaration());
  }
  visitConditionalExpression(
    ctx: ConditionalExpressionContext,
  ): ExpressionStatement {
    return this.visit(ctx.condExp());
  }
  visitIdentifierExpression(
    ctx: IdentifierExpressionContext,
  ): ExpressionStatement {
    return this.visit(ctx.identifier());
  }
  visitIdentifier(ctx: IdentifierContext): ExpressionStatement {
    return this.wrapAsStatement({
      type: 'Identifier',
      name: ctx.IDENTIFIER().text,
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
  visitLetGlobalBinding(ctx: LetGlobalBindingContext): ExpressionStatement {
    return this.wrapAsStatement({
      type: 'GlobalLetExpression',
      recursive: ctx.REC() != null,
      left: this.visit(ctx._id).expression as Identifier,
      right: this.visit(ctx._init).expression,
      loc: contextToLocation(ctx),
    });
  }
  visitLetLocalBinding(ctx: LetLocalBindingContext): ExpressionStatement {
    const left = ctx.letGlobalBinding() ?? ctx.functionDeclaration();
    return this.wrapAsStatement({
      type: 'LocalLetExpression',
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      left: this.visit(left!).expression as GlobalLetExpression,
      right: this.visit(ctx._exp2).expression,
      loc: contextToLocation(ctx),
    });
  }
  visitFunctionDeclaration(
    ctx: FunctionDeclarationContext,
  ): ExpressionStatement {
    const identifiers = ctx._ids.identifier();
    return this.wrapAsStatement({
      type: 'FunctionExpression',
      recursive: ctx.REC() !== undefined,
      id: this.visit(identifiers[0]).expression as Identifier,
      params: identifiers
        .slice(1)
        .map((id) => this.visit(id).expression) as Identifier[],
      body: this.visit(ctx._body).expression,
      loc: contextToLocation(ctx),
    });
  }
  visitErrorNode(node: ErrorNode): ExpressionStatement {
    throw new FatalSyntaxError(nodeToErrorLocation(node), 'Syntax error');
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
    throw new FatalSyntaxError(nodeToErrorLocation(node), 'Syntax error');
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
  visitNegative(ctx: NegativeContext): Statement[] {
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
  visitLetGlobalBindingExpression(
    ctx: LetGlobalBindingExpressionContext,
  ): Statement[] {
    return [ctx.accept(this.statementParser)];
  }
  visitLetLocalBindingExpression(
    ctx: LetLocalBindingExpressionContext,
  ): Statement[] {
    return [ctx.accept(this.statementParser)];
  }
  visitFunctionDeclarationExpression(
    ctx: FunctionDeclarationExpressionContext,
  ): Statement[] {
    return [ctx.accept(this.statementParser)];
  }
  visitConditionalExpression(ctx: ConditionalExpressionContext): Statement[] {
    return [ctx.accept(this.statementParser)];
  }
  visitIdentifierExpression(ctx: IdentifierExpressionContext): Statement[] {
    return [ctx.accept(this.statementParser)];
  }
  visitIdentifier(ctx: IdentifierContext): Statement[] {
    return [ctx.accept(this.statementParser)];
  }
  visitParenthesesExpression(ctx: ParenthesesExpressionContext): Statement[] {
    return [ctx.accept(this.statementParser)];
  }
  visitCondExp(ctx: CondExpContext): Statement[] {
    return [ctx.accept(this.statementParser)];
  }
  visitLetGlobalBinding(ctx: LetGlobalBindingContext): Statement[] {
    return [ctx.accept(this.statementParser)];
  }
  visitLetLocalBinding(ctx: LetLocalBindingContext): Statement[] {
    return [ctx.accept(this.statementParser)];
  }
  visitFunctionDeclaration(ctx: FunctionDeclarationContext): Statement[] {
    return [ctx.accept(this.statementParser)];
  }
}

const syntaxErrorListener = <T extends number | Token>(
  _recognizer: Recognizer<T, any>,
  _offendingSymbol: T | undefined,
  line: number,
  charPositionInLine: number,
  _msg: string,
  _e: RecognitionException | undefined,
): undefined => {
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
    'Syntax error',
  );
};

function addCustomErrorListeners(
  lexer: GrammarLexer,
  parser: GrammarParser,
): void {
  lexer.removeErrorListener(ConsoleErrorListener.INSTANCE);
  lexer.addErrorListener({
    syntaxError: syntaxErrorListener,
  });
  parser.removeErrorListener(ConsoleErrorListener.INSTANCE);
  parser.addErrorListener({
    syntaxError: syntaxErrorListener,
  });
}

export function parse(source: string, context: Context): Program {
  const inputStream = new ANTLRInputStream(source);
  const lexer = new GrammarLexer(inputStream);
  const tokenStream = new CommonTokenStream(lexer);
  const parser = new GrammarParser(tokenStream);
  parser.buildParseTree = true;
  addCustomErrorListeners(lexer, parser);
  const statementsParser = new StatementsParser();
  let body;
  try {
    const expression = parser.start();
    body = expression.accept(statementsParser);
  } catch (error) {
    if (error instanceof FatalSyntaxError) {
      context.errors.push(error);
    } else {
      throw error;
    }
  }
  const hasErrors = context.errors.find(
    (m) => m.severity === ErrorSeverity.ERROR,
  );
  if (body && !hasErrors) {
    return {
      type: 'Program',
      body,
    };
  } else {
    throw new Error(); // Just to trigger exception
  }
}
