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
import { GrammarParser } from 'lang/GrammarParser';
import { GrammarVisitor } from 'lang/GrammarVisitor';

import { ErrorSeverity } from '../errors/types';
import { Context } from '../types';

import { FatalSyntaxError } from './errors';
import { StatementParser } from './statementParser';
import { Program, Statement } from './types';
import { nodeToErrorLocation } from './utils';

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
