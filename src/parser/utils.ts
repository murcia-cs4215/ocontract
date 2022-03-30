import { ParserRuleContext } from 'antlr4ts';
import { ErrorNode } from 'antlr4ts/tree/ErrorNode';

import { SourceLocation } from './types';

export function contextToLocation(ctx: ParserRuleContext): SourceLocation {
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

export function nodeToErrorLocation(node: ErrorNode): SourceLocation {
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

// Interface that helps with class composition
export interface Constructable {
  new (...args: any[]): any;
}
