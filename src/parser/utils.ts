import { ErrorNode } from 'antlr4ts/tree/ErrorNode';

import { ExpressionContext } from 'lang/GrammarParser';

import { FunctionType, SourceLocation, Type } from './types';

export function contextToLocation(ctx: ExpressionContext): SourceLocation {
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

export function curryParamTypes(
  paramTypes: Type[],
  returnType: Type,
): FunctionType {
  let finalType = returnType;
  for (let i = paramTypes.length - 1; i >= 0; i--) {
    finalType = {
      type: 'FunctionType',
      parameterType: paramTypes[i],
      returnType: finalType,
    };
  }
  return finalType as FunctionType;
}
