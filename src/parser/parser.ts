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
  DivisionContext,
  DivisionFloatContext,
  EqualPhysicalContext,
  EqualStructuralContext,
  ExpressionContext,
  FloatContext,
  FuncApplicationContext,
  GrammarParser,
  GreaterThanContext,
  GreaterThanOrEqualContext,
  IdentifierContext,
  IdentifierWithContextParenContext,
  LambdaContext,
  LessThanContext,
  LessThanOrEqualContext,
  LetGlobalBindingContext,
  LetLocalBindingContext,
  ModulusContext,
  MultiplicationContext,
  MultiplicationFloatContext,
  NegativeContext,
  NotContext,
  NotEqualPhysicalContext,
  NotEqualStructuralContext,
  NumberContext,
  OrContext,
  ParenthesesExpressionContext,
  PowerContext,
  StatementContext,
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
  GlobalLetStatement,
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
class ExpressionParser
  extends AbstractParseTreeVisitor<Expression>
  implements GrammarVisitor<Expression>
{
  protected defaultResult(): Expression {
    return {
      type: 'EmptyExpression',
    };
  }
  visitNumber(ctx: NumberContext): Expression {
    return {
      type: 'Literal',
      valueType: 'int',
      value: parseInt(ctx.text),
      loc: contextToLocation(ctx),
    };
  }
  visitFloat(ctx: FloatContext): Expression {
    return {
      type: 'Literal',
      valueType: 'float',
      value: parseFloat(ctx.text),
      loc: contextToLocation(ctx),
    };
  }
  visitBoolean(ctx: BooleanContext): Expression {
    return {
      type: 'Literal',
      valueType: 'bool',
      value: ctx.text.trim().toLowerCase() === 'true',
      loc: contextToLocation(ctx),
    };
  }
  visitChar(ctx: CharContext): Expression {
    return {
      type: 'Literal',
      valueType: 'char',
      value: ctx.text.trim().charAt(1),
      loc: contextToLocation(ctx),
    };
  }
  visitString(ctx: StringContext): Expression {
    const value = ctx.text.trim();
    const wrappedValue = new StringWrapper(
      value.substring(1, value.length - 1),
    );
    return {
      type: 'Literal',
      valueType: 'string',
      value: wrappedValue,
      loc: contextToLocation(ctx),
    };
  }
  visitIdentifier(ctx: IdentifierContext): Expression {
    return {
      type: 'Identifier',
      name: ctx.IDENTIFIER().text,
      loc: contextToLocation(ctx),
    };
  }
  visitIdentifierWithContextParen(
    ctx: IdentifierWithContextParenContext,
  ): Expression {
    return {
      type: 'Identifier',
      name: ctx.identifierWithContext().identifier().IDENTIFIER().text,
      loc: contextToLocation(ctx),
    };
  }
  visitPower(ctx: PowerContext): Expression {
    return {
      type: 'BinaryExpression',
      operator: '**',
      left: this.visit(ctx._left),
      right: this.visit(ctx._right),
      loc: contextToLocation(ctx),
    };
  }
  visitMultiplication(ctx: MultiplicationContext): Expression {
    return {
      type: 'BinaryExpression',
      operator: '*',
      left: this.visit(ctx._left),
      right: this.visit(ctx._right),
      loc: contextToLocation(ctx),
    };
  }
  visitDivision(ctx: DivisionContext): Expression {
    return {
      type: 'BinaryExpression',
      operator: '/',
      left: this.visit(ctx._left),
      right: this.visit(ctx._right),
      loc: contextToLocation(ctx),
    };
  }
  visitMultiplicationFloat(ctx: MultiplicationFloatContext): Expression {
    return {
      type: 'BinaryExpression',
      operator: '*.',
      left: this.visit(ctx._left),
      right: this.visit(ctx._right),
      loc: contextToLocation(ctx),
    };
  }
  visitDivisionFloat(ctx: DivisionFloatContext): Expression {
    return {
      type: 'BinaryExpression',
      operator: '/.',
      left: this.visit(ctx._left),
      right: this.visit(ctx._right),
      loc: contextToLocation(ctx),
    };
  }
  visitModulus(ctx: ModulusContext): Expression {
    return {
      type: 'BinaryExpression',
      operator: 'mod',
      left: this.visit(ctx._left),
      right: this.visit(ctx._right),
      loc: contextToLocation(ctx),
    };
  }
  visitAddition(ctx: AdditionContext): Expression {
    return {
      type: 'BinaryExpression',
      operator: '+',
      left: this.visit(ctx._left),
      right: this.visit(ctx._right),
      loc: contextToLocation(ctx),
    };
  }
  visitSubtraction(ctx: SubtractionContext): Expression {
    return {
      type: 'BinaryExpression',
      operator: '-',
      left: this.visit(ctx._left),
      right: this.visit(ctx._right),
      loc: contextToLocation(ctx),
    };
  }
  visitAdditionFloat(ctx: AdditionFloatContext): Expression {
    return {
      type: 'BinaryExpression',
      operator: '+.',
      left: this.visit(ctx._left),
      right: this.visit(ctx._right),
      loc: contextToLocation(ctx),
    };
  }
  visitSubtractionFloat(ctx: SubtractionFloatContext): Expression {
    return {
      type: 'BinaryExpression',
      operator: '-.',
      left: this.visit(ctx._left),
      right: this.visit(ctx._right),
      loc: contextToLocation(ctx),
    };
  }
  visitLessThan(ctx: LessThanContext): Expression {
    return {
      type: 'BinaryExpression',
      operator: '<',
      left: this.visit(ctx._left),
      right: this.visit(ctx._right),
      loc: contextToLocation(ctx),
    };
  }
  visitLessThanOrEqual(ctx: LessThanOrEqualContext): Expression {
    return {
      type: 'BinaryExpression',
      operator: '<=',
      left: this.visit(ctx._left),
      right: this.visit(ctx._right),
      loc: contextToLocation(ctx),
    };
  }
  visitGreaterThan(ctx: GreaterThanContext): Expression {
    return {
      type: 'BinaryExpression',
      operator: '>',
      left: this.visit(ctx._left),
      right: this.visit(ctx._right),
      loc: contextToLocation(ctx),
    };
  }
  visitGreaterThanOrEqual(ctx: GreaterThanOrEqualContext): Expression {
    return {
      type: 'BinaryExpression',
      operator: '>=',
      left: this.visit(ctx._left),
      right: this.visit(ctx._right),
      loc: contextToLocation(ctx),
    };
  }
  visitEqualStructural(ctx: EqualStructuralContext): Expression {
    return {
      type: 'BinaryExpression',
      operator: '=',
      left: this.visit(ctx._left),
      right: this.visit(ctx._right),
      loc: contextToLocation(ctx),
    };
  }
  visitNotEqualStructural(ctx: NotEqualStructuralContext): Expression {
    return {
      type: 'BinaryExpression',
      operator: '<>',
      left: this.visit(ctx._left),
      right: this.visit(ctx._right),
      loc: contextToLocation(ctx),
    };
  }
  visitEqualPhysical(ctx: EqualPhysicalContext): Expression {
    return {
      type: 'BinaryExpression',
      operator: '==',
      left: this.visit(ctx._left),
      right: this.visit(ctx._right),
      loc: contextToLocation(ctx),
    };
  }
  visitNotEqualPhysical(ctx: NotEqualPhysicalContext): Expression {
    return {
      type: 'BinaryExpression',
      operator: '!=',
      left: this.visit(ctx._left),
      right: this.visit(ctx._right),
      loc: contextToLocation(ctx),
    };
  }
  visitConcatenation(ctx: ConcatenationContext): Expression {
    return {
      type: 'BinaryExpression',
      operator: '^',
      left: this.visit(ctx._left),
      right: this.visit(ctx._right),
      loc: contextToLocation(ctx),
    };
  }
  visitNegative(ctx: NegativeContext): Expression {
    return {
      type: 'UnaryExpression',
      operator: '-',
      argument: this.visit(ctx._argument),
      loc: contextToLocation(ctx),
    };
  }
  visitNot(ctx: NotContext): Expression {
    return {
      type: 'UnaryExpression',
      operator: 'not',
      argument: this.visit(ctx._argument),
      loc: contextToLocation(ctx),
    };
  }
  visitAnd(ctx: AndContext): Expression {
    return {
      type: 'LogicalExpression',
      operator: '&&',
      left: this.visit(ctx._left),
      right: this.visit(ctx._right),
      loc: contextToLocation(ctx),
    };
  }
  visitOr(ctx: OrContext): Expression {
    return {
      type: 'LogicalExpression',
      operator: '||',
      left: this.visit(ctx._left),
      right: this.visit(ctx._right),
      loc: contextToLocation(ctx),
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
    };
  }
  visitLetLocalBinding(ctx: LetLocalBindingContext): Expression {
    return {
      type: 'LocalLetExpression',
      left: new StatementParser().visitLetGlobalBinding(ctx.letGlobalBinding()),
      right: this.visit(ctx._exp2),
      loc: contextToLocation(ctx),
    };
  }
  visitFuncApplication(ctx: FuncApplicationContext): Expression {
    const args = ctx._args.funcArgument();
    return {
      type: 'CallExpression',
      callee: this.visit(ctx._func),
      arguments: args.map((arg) => this.visit(arg)),
      loc: contextToLocation(ctx),
    };
  }
  visitLambda(ctx: LambdaContext): Expression {
    let params: any[] = [];
    if (ctx._params != undefined) {
      for (let i = 0; i < ctx._params.childCount; i++) {
        const exp = ctx._params.getChild(i).accept(this);
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
  visitErrorNode(node: ErrorNode): Expression {
    throw new FatalSyntaxError(nodeToErrorLocation(node), 'Syntax error');
  }
}

class StatementParser
  extends AbstractParseTreeVisitor<Statement>
  implements GrammarVisitor<Statement>
{
  private expressionParser = new ExpressionParser();
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
    if (exp != undefined) {
      return this.visitExpression(exp);
    } else if (letGlob != undefined) {
      return this.visitLetGlobalBinding(letGlob);
    }
    return this.defaultResult();
  }

  visitLetGlobalBinding(ctx: LetGlobalBindingContext): GlobalLetStatement {
    let params: any[] = [];
    if (ctx._params != undefined) {
      for (let i = 0; i < ctx._params.childCount; i++) {
        const exp = ctx._params.getChild(i).accept(this.expressionParser);
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

  visitExpression(ctx: ExpressionContext): Statement {
    return this.wrapAsExpressionStatement(this.expressionParser.visit(ctx));
  }

  visitErrorNode(node: ErrorNode): Statement {
    throw new FatalSyntaxError(nodeToErrorLocation(node), 'Syntax error');
  }
}

class StatementsParser
  extends AbstractParseTreeVisitor<Statement[]>
  implements GrammarVisitor<Statement[]>
{
  private statementParser = new StatementParser();
  protected defaultResult(): Statement[] {
    return [];
  }
  visitChildren(node: RuleNode): Statement[] {
    let statements: Statement[] = [];
    for (let i = 0; i < node.childCount; i++) {
      const stmt = node.getChild(i).accept(this.statementParser);
      if (stmt.type === 'EmptyStatement') {
        continue;
      }
      statements = [...statements, stmt];
    }
    return statements;
  }
  visitErrorNode(node: ErrorNode): Statement[] {
    throw new FatalSyntaxError(nodeToErrorLocation(node), 'Syntax error');
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
