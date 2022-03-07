// Generated from ./src/lang/Grammar.g4 by ANTLR 4.9.0-SNAPSHOT

import { ParseTreeListener } from 'antlr4ts/tree/ParseTreeListener';

import { CallFunctionContext } from './GrammarParser';
import { NumberContext } from './GrammarParser';
import { FloatContext } from './GrammarParser';
import { BooleanContext } from './GrammarParser';
import { CharContext } from './GrammarParser';
import { StringContext } from './GrammarParser';
import { ParenthesesContext } from './GrammarParser';
import { PowerContext } from './GrammarParser';
import { MultiplicationContext } from './GrammarParser';
import { DivisionContext } from './GrammarParser';
import { MultiplicationFloatContext } from './GrammarParser';
import { DivisionFloatContext } from './GrammarParser';
import { ModulusContext } from './GrammarParser';
import { AdditionContext } from './GrammarParser';
import { SubtractionContext } from './GrammarParser';
import { AdditionFloatContext } from './GrammarParser';
import { SubtractionFloatContext } from './GrammarParser';
import { LessThanContext } from './GrammarParser';
import { LessThanOrEqualContext } from './GrammarParser';
import { GreaterThanContext } from './GrammarParser';
import { GreaterThanOrEqualContext } from './GrammarParser';
import { EqualStructuralContext } from './GrammarParser';
import { NotEqualStructuralContext } from './GrammarParser';
import { EqualPhysicalContext } from './GrammarParser';
import { NotEqualPhysicalContext } from './GrammarParser';
import { ConcatenationContext } from './GrammarParser';
import { NegativeContext } from './GrammarParser';
import { NotContext } from './GrammarParser';
import { AndContext } from './GrammarParser';
import { OrContext } from './GrammarParser';
import { LetGlobalBindingExpressionContext } from './GrammarParser';
import { LetLocalBindingExpressionContext } from './GrammarParser';
import { FunctionDeclarationExpressionContext } from './GrammarParser';
import { ConditionalExpressionContext } from './GrammarParser';
import { IdentifierExpressionContext } from './GrammarParser';
import { StartContext } from './GrammarParser';
import { StatementsContext } from './GrammarParser';
import { ExpressionContext } from './GrammarParser';
import { IdentifierContext } from './GrammarParser';
import { FuncApplicationContext } from './GrammarParser';
import { ParenthesesExpressionContext } from './GrammarParser';
import { CondExpContext } from './GrammarParser';
import { LetGlobalBindingContext } from './GrammarParser';
import { LetLocalBindingContext } from './GrammarParser';
import { IdentifierListContext } from './GrammarParser';
import { ExpressionListsContext } from './GrammarParser';
import { FunctionDeclarationContext } from './GrammarParser';

/**
 * This interface defines a complete listener for a parse tree produced by
 * `GrammarParser`.
 */
export interface GrammarListener extends ParseTreeListener {
  /**
   * Enter a parse tree produced by the `CallFunction`
   * labeled alternative in `GrammarParser.expression`.
   * @param ctx the parse tree
   */
  enterCallFunction?: (ctx: CallFunctionContext) => void;
  /**
   * Exit a parse tree produced by the `CallFunction`
   * labeled alternative in `GrammarParser.expression`.
   * @param ctx the parse tree
   */
  exitCallFunction?: (ctx: CallFunctionContext) => void;

  /**
   * Enter a parse tree produced by the `Number`
   * labeled alternative in `GrammarParser.expression`.
   * @param ctx the parse tree
   */
  enterNumber?: (ctx: NumberContext) => void;
  /**
   * Exit a parse tree produced by the `Number`
   * labeled alternative in `GrammarParser.expression`.
   * @param ctx the parse tree
   */
  exitNumber?: (ctx: NumberContext) => void;

  /**
   * Enter a parse tree produced by the `Float`
   * labeled alternative in `GrammarParser.expression`.
   * @param ctx the parse tree
   */
  enterFloat?: (ctx: FloatContext) => void;
  /**
   * Exit a parse tree produced by the `Float`
   * labeled alternative in `GrammarParser.expression`.
   * @param ctx the parse tree
   */
  exitFloat?: (ctx: FloatContext) => void;

  /**
   * Enter a parse tree produced by the `Boolean`
   * labeled alternative in `GrammarParser.expression`.
   * @param ctx the parse tree
   */
  enterBoolean?: (ctx: BooleanContext) => void;
  /**
   * Exit a parse tree produced by the `Boolean`
   * labeled alternative in `GrammarParser.expression`.
   * @param ctx the parse tree
   */
  exitBoolean?: (ctx: BooleanContext) => void;

  /**
   * Enter a parse tree produced by the `Char`
   * labeled alternative in `GrammarParser.expression`.
   * @param ctx the parse tree
   */
  enterChar?: (ctx: CharContext) => void;
  /**
   * Exit a parse tree produced by the `Char`
   * labeled alternative in `GrammarParser.expression`.
   * @param ctx the parse tree
   */
  exitChar?: (ctx: CharContext) => void;

  /**
   * Enter a parse tree produced by the `String`
   * labeled alternative in `GrammarParser.expression`.
   * @param ctx the parse tree
   */
  enterString?: (ctx: StringContext) => void;
  /**
   * Exit a parse tree produced by the `String`
   * labeled alternative in `GrammarParser.expression`.
   * @param ctx the parse tree
   */
  exitString?: (ctx: StringContext) => void;

  /**
   * Enter a parse tree produced by the `Parentheses`
   * labeled alternative in `GrammarParser.expression`.
   * @param ctx the parse tree
   */
  enterParentheses?: (ctx: ParenthesesContext) => void;
  /**
   * Exit a parse tree produced by the `Parentheses`
   * labeled alternative in `GrammarParser.expression`.
   * @param ctx the parse tree
   */
  exitParentheses?: (ctx: ParenthesesContext) => void;

  /**
   * Enter a parse tree produced by the `Power`
   * labeled alternative in `GrammarParser.expression`.
   * @param ctx the parse tree
   */
  enterPower?: (ctx: PowerContext) => void;
  /**
   * Exit a parse tree produced by the `Power`
   * labeled alternative in `GrammarParser.expression`.
   * @param ctx the parse tree
   */
  exitPower?: (ctx: PowerContext) => void;

  /**
   * Enter a parse tree produced by the `Multiplication`
   * labeled alternative in `GrammarParser.expression`.
   * @param ctx the parse tree
   */
  enterMultiplication?: (ctx: MultiplicationContext) => void;
  /**
   * Exit a parse tree produced by the `Multiplication`
   * labeled alternative in `GrammarParser.expression`.
   * @param ctx the parse tree
   */
  exitMultiplication?: (ctx: MultiplicationContext) => void;

  /**
   * Enter a parse tree produced by the `Division`
   * labeled alternative in `GrammarParser.expression`.
   * @param ctx the parse tree
   */
  enterDivision?: (ctx: DivisionContext) => void;
  /**
   * Exit a parse tree produced by the `Division`
   * labeled alternative in `GrammarParser.expression`.
   * @param ctx the parse tree
   */
  exitDivision?: (ctx: DivisionContext) => void;

  /**
   * Enter a parse tree produced by the `MultiplicationFloat`
   * labeled alternative in `GrammarParser.expression`.
   * @param ctx the parse tree
   */
  enterMultiplicationFloat?: (ctx: MultiplicationFloatContext) => void;
  /**
   * Exit a parse tree produced by the `MultiplicationFloat`
   * labeled alternative in `GrammarParser.expression`.
   * @param ctx the parse tree
   */
  exitMultiplicationFloat?: (ctx: MultiplicationFloatContext) => void;

  /**
   * Enter a parse tree produced by the `DivisionFloat`
   * labeled alternative in `GrammarParser.expression`.
   * @param ctx the parse tree
   */
  enterDivisionFloat?: (ctx: DivisionFloatContext) => void;
  /**
   * Exit a parse tree produced by the `DivisionFloat`
   * labeled alternative in `GrammarParser.expression`.
   * @param ctx the parse tree
   */
  exitDivisionFloat?: (ctx: DivisionFloatContext) => void;

  /**
   * Enter a parse tree produced by the `Modulus`
   * labeled alternative in `GrammarParser.expression`.
   * @param ctx the parse tree
   */
  enterModulus?: (ctx: ModulusContext) => void;
  /**
   * Exit a parse tree produced by the `Modulus`
   * labeled alternative in `GrammarParser.expression`.
   * @param ctx the parse tree
   */
  exitModulus?: (ctx: ModulusContext) => void;

  /**
   * Enter a parse tree produced by the `Addition`
   * labeled alternative in `GrammarParser.expression`.
   * @param ctx the parse tree
   */
  enterAddition?: (ctx: AdditionContext) => void;
  /**
   * Exit a parse tree produced by the `Addition`
   * labeled alternative in `GrammarParser.expression`.
   * @param ctx the parse tree
   */
  exitAddition?: (ctx: AdditionContext) => void;

  /**
   * Enter a parse tree produced by the `Subtraction`
   * labeled alternative in `GrammarParser.expression`.
   * @param ctx the parse tree
   */
  enterSubtraction?: (ctx: SubtractionContext) => void;
  /**
   * Exit a parse tree produced by the `Subtraction`
   * labeled alternative in `GrammarParser.expression`.
   * @param ctx the parse tree
   */
  exitSubtraction?: (ctx: SubtractionContext) => void;

  /**
   * Enter a parse tree produced by the `AdditionFloat`
   * labeled alternative in `GrammarParser.expression`.
   * @param ctx the parse tree
   */
  enterAdditionFloat?: (ctx: AdditionFloatContext) => void;
  /**
   * Exit a parse tree produced by the `AdditionFloat`
   * labeled alternative in `GrammarParser.expression`.
   * @param ctx the parse tree
   */
  exitAdditionFloat?: (ctx: AdditionFloatContext) => void;

  /**
   * Enter a parse tree produced by the `SubtractionFloat`
   * labeled alternative in `GrammarParser.expression`.
   * @param ctx the parse tree
   */
  enterSubtractionFloat?: (ctx: SubtractionFloatContext) => void;
  /**
   * Exit a parse tree produced by the `SubtractionFloat`
   * labeled alternative in `GrammarParser.expression`.
   * @param ctx the parse tree
   */
  exitSubtractionFloat?: (ctx: SubtractionFloatContext) => void;

  /**
   * Enter a parse tree produced by the `LessThan`
   * labeled alternative in `GrammarParser.expression`.
   * @param ctx the parse tree
   */
  enterLessThan?: (ctx: LessThanContext) => void;
  /**
   * Exit a parse tree produced by the `LessThan`
   * labeled alternative in `GrammarParser.expression`.
   * @param ctx the parse tree
   */
  exitLessThan?: (ctx: LessThanContext) => void;

  /**
   * Enter a parse tree produced by the `LessThanOrEqual`
   * labeled alternative in `GrammarParser.expression`.
   * @param ctx the parse tree
   */
  enterLessThanOrEqual?: (ctx: LessThanOrEqualContext) => void;
  /**
   * Exit a parse tree produced by the `LessThanOrEqual`
   * labeled alternative in `GrammarParser.expression`.
   * @param ctx the parse tree
   */
  exitLessThanOrEqual?: (ctx: LessThanOrEqualContext) => void;

  /**
   * Enter a parse tree produced by the `GreaterThan`
   * labeled alternative in `GrammarParser.expression`.
   * @param ctx the parse tree
   */
  enterGreaterThan?: (ctx: GreaterThanContext) => void;
  /**
   * Exit a parse tree produced by the `GreaterThan`
   * labeled alternative in `GrammarParser.expression`.
   * @param ctx the parse tree
   */
  exitGreaterThan?: (ctx: GreaterThanContext) => void;

  /**
   * Enter a parse tree produced by the `GreaterThanOrEqual`
   * labeled alternative in `GrammarParser.expression`.
   * @param ctx the parse tree
   */
  enterGreaterThanOrEqual?: (ctx: GreaterThanOrEqualContext) => void;
  /**
   * Exit a parse tree produced by the `GreaterThanOrEqual`
   * labeled alternative in `GrammarParser.expression`.
   * @param ctx the parse tree
   */
  exitGreaterThanOrEqual?: (ctx: GreaterThanOrEqualContext) => void;

  /**
   * Enter a parse tree produced by the `EqualStructural`
   * labeled alternative in `GrammarParser.expression`.
   * @param ctx the parse tree
   */
  enterEqualStructural?: (ctx: EqualStructuralContext) => void;
  /**
   * Exit a parse tree produced by the `EqualStructural`
   * labeled alternative in `GrammarParser.expression`.
   * @param ctx the parse tree
   */
  exitEqualStructural?: (ctx: EqualStructuralContext) => void;

  /**
   * Enter a parse tree produced by the `NotEqualStructural`
   * labeled alternative in `GrammarParser.expression`.
   * @param ctx the parse tree
   */
  enterNotEqualStructural?: (ctx: NotEqualStructuralContext) => void;
  /**
   * Exit a parse tree produced by the `NotEqualStructural`
   * labeled alternative in `GrammarParser.expression`.
   * @param ctx the parse tree
   */
  exitNotEqualStructural?: (ctx: NotEqualStructuralContext) => void;

  /**
   * Enter a parse tree produced by the `EqualPhysical`
   * labeled alternative in `GrammarParser.expression`.
   * @param ctx the parse tree
   */
  enterEqualPhysical?: (ctx: EqualPhysicalContext) => void;
  /**
   * Exit a parse tree produced by the `EqualPhysical`
   * labeled alternative in `GrammarParser.expression`.
   * @param ctx the parse tree
   */
  exitEqualPhysical?: (ctx: EqualPhysicalContext) => void;

  /**
   * Enter a parse tree produced by the `NotEqualPhysical`
   * labeled alternative in `GrammarParser.expression`.
   * @param ctx the parse tree
   */
  enterNotEqualPhysical?: (ctx: NotEqualPhysicalContext) => void;
  /**
   * Exit a parse tree produced by the `NotEqualPhysical`
   * labeled alternative in `GrammarParser.expression`.
   * @param ctx the parse tree
   */
  exitNotEqualPhysical?: (ctx: NotEqualPhysicalContext) => void;

  /**
   * Enter a parse tree produced by the `Concatenation`
   * labeled alternative in `GrammarParser.expression`.
   * @param ctx the parse tree
   */
  enterConcatenation?: (ctx: ConcatenationContext) => void;
  /**
   * Exit a parse tree produced by the `Concatenation`
   * labeled alternative in `GrammarParser.expression`.
   * @param ctx the parse tree
   */
  exitConcatenation?: (ctx: ConcatenationContext) => void;

  /**
   * Enter a parse tree produced by the `Negative`
   * labeled alternative in `GrammarParser.expression`.
   * @param ctx the parse tree
   */
  enterNegative?: (ctx: NegativeContext) => void;
  /**
   * Exit a parse tree produced by the `Negative`
   * labeled alternative in `GrammarParser.expression`.
   * @param ctx the parse tree
   */
  exitNegative?: (ctx: NegativeContext) => void;

  /**
   * Enter a parse tree produced by the `Not`
   * labeled alternative in `GrammarParser.expression`.
   * @param ctx the parse tree
   */
  enterNot?: (ctx: NotContext) => void;
  /**
   * Exit a parse tree produced by the `Not`
   * labeled alternative in `GrammarParser.expression`.
   * @param ctx the parse tree
   */
  exitNot?: (ctx: NotContext) => void;

  /**
   * Enter a parse tree produced by the `And`
   * labeled alternative in `GrammarParser.expression`.
   * @param ctx the parse tree
   */
  enterAnd?: (ctx: AndContext) => void;
  /**
   * Exit a parse tree produced by the `And`
   * labeled alternative in `GrammarParser.expression`.
   * @param ctx the parse tree
   */
  exitAnd?: (ctx: AndContext) => void;

  /**
   * Enter a parse tree produced by the `Or`
   * labeled alternative in `GrammarParser.expression`.
   * @param ctx the parse tree
   */
  enterOr?: (ctx: OrContext) => void;
  /**
   * Exit a parse tree produced by the `Or`
   * labeled alternative in `GrammarParser.expression`.
   * @param ctx the parse tree
   */
  exitOr?: (ctx: OrContext) => void;

  /**
   * Enter a parse tree produced by the `LetGlobalBindingExpression`
   * labeled alternative in `GrammarParser.expression`.
   * @param ctx the parse tree
   */
  enterLetGlobalBindingExpression?: (
    ctx: LetGlobalBindingExpressionContext,
  ) => void;
  /**
   * Exit a parse tree produced by the `LetGlobalBindingExpression`
   * labeled alternative in `GrammarParser.expression`.
   * @param ctx the parse tree
   */
  exitLetGlobalBindingExpression?: (
    ctx: LetGlobalBindingExpressionContext,
  ) => void;

  /**
   * Enter a parse tree produced by the `LetLocalBindingExpression`
   * labeled alternative in `GrammarParser.expression`.
   * @param ctx the parse tree
   */
  enterLetLocalBindingExpression?: (
    ctx: LetLocalBindingExpressionContext,
  ) => void;
  /**
   * Exit a parse tree produced by the `LetLocalBindingExpression`
   * labeled alternative in `GrammarParser.expression`.
   * @param ctx the parse tree
   */
  exitLetLocalBindingExpression?: (
    ctx: LetLocalBindingExpressionContext,
  ) => void;

  /**
   * Enter a parse tree produced by the `FunctionDeclarationExpression`
   * labeled alternative in `GrammarParser.expression`.
   * @param ctx the parse tree
   */
  enterFunctionDeclarationExpression?: (
    ctx: FunctionDeclarationExpressionContext,
  ) => void;
  /**
   * Exit a parse tree produced by the `FunctionDeclarationExpression`
   * labeled alternative in `GrammarParser.expression`.
   * @param ctx the parse tree
   */
  exitFunctionDeclarationExpression?: (
    ctx: FunctionDeclarationExpressionContext,
  ) => void;

  /**
   * Enter a parse tree produced by the `ConditionalExpression`
   * labeled alternative in `GrammarParser.expression`.
   * @param ctx the parse tree
   */
  enterConditionalExpression?: (ctx: ConditionalExpressionContext) => void;
  /**
   * Exit a parse tree produced by the `ConditionalExpression`
   * labeled alternative in `GrammarParser.expression`.
   * @param ctx the parse tree
   */
  exitConditionalExpression?: (ctx: ConditionalExpressionContext) => void;

  /**
   * Enter a parse tree produced by the `IdentifierExpression`
   * labeled alternative in `GrammarParser.expression`.
   * @param ctx the parse tree
   */
  enterIdentifierExpression?: (ctx: IdentifierExpressionContext) => void;
  /**
   * Exit a parse tree produced by the `IdentifierExpression`
   * labeled alternative in `GrammarParser.expression`.
   * @param ctx the parse tree
   */
  exitIdentifierExpression?: (ctx: IdentifierExpressionContext) => void;

  /**
   * Enter a parse tree produced by `GrammarParser.start`.
   * @param ctx the parse tree
   */
  enterStart?: (ctx: StartContext) => void;
  /**
   * Exit a parse tree produced by `GrammarParser.start`.
   * @param ctx the parse tree
   */
  exitStart?: (ctx: StartContext) => void;

  /**
   * Enter a parse tree produced by `GrammarParser.statements`.
   * @param ctx the parse tree
   */
  enterStatements?: (ctx: StatementsContext) => void;
  /**
   * Exit a parse tree produced by `GrammarParser.statements`.
   * @param ctx the parse tree
   */
  exitStatements?: (ctx: StatementsContext) => void;

  /**
   * Enter a parse tree produced by `GrammarParser.expression`.
   * @param ctx the parse tree
   */
  enterExpression?: (ctx: ExpressionContext) => void;
  /**
   * Exit a parse tree produced by `GrammarParser.expression`.
   * @param ctx the parse tree
   */
  exitExpression?: (ctx: ExpressionContext) => void;

  /**
   * Enter a parse tree produced by `GrammarParser.identifier`.
   * @param ctx the parse tree
   */
  enterIdentifier?: (ctx: IdentifierContext) => void;
  /**
   * Exit a parse tree produced by `GrammarParser.identifier`.
   * @param ctx the parse tree
   */
  exitIdentifier?: (ctx: IdentifierContext) => void;

  /**
   * Enter a parse tree produced by `GrammarParser.funcApplication`.
   * @param ctx the parse tree
   */
  enterFuncApplication?: (ctx: FuncApplicationContext) => void;
  /**
   * Exit a parse tree produced by `GrammarParser.funcApplication`.
   * @param ctx the parse tree
   */
  exitFuncApplication?: (ctx: FuncApplicationContext) => void;

  /**
   * Enter a parse tree produced by `GrammarParser.parenthesesExpression`.
   * @param ctx the parse tree
   */
  enterParenthesesExpression?: (ctx: ParenthesesExpressionContext) => void;
  /**
   * Exit a parse tree produced by `GrammarParser.parenthesesExpression`.
   * @param ctx the parse tree
   */
  exitParenthesesExpression?: (ctx: ParenthesesExpressionContext) => void;

  /**
   * Enter a parse tree produced by `GrammarParser.condExp`.
   * @param ctx the parse tree
   */
  enterCondExp?: (ctx: CondExpContext) => void;
  /**
   * Exit a parse tree produced by `GrammarParser.condExp`.
   * @param ctx the parse tree
   */
  exitCondExp?: (ctx: CondExpContext) => void;

  /**
   * Enter a parse tree produced by `GrammarParser.letGlobalBinding`.
   * @param ctx the parse tree
   */
  enterLetGlobalBinding?: (ctx: LetGlobalBindingContext) => void;
  /**
   * Exit a parse tree produced by `GrammarParser.letGlobalBinding`.
   * @param ctx the parse tree
   */
  exitLetGlobalBinding?: (ctx: LetGlobalBindingContext) => void;

  /**
   * Enter a parse tree produced by `GrammarParser.letLocalBinding`.
   * @param ctx the parse tree
   */
  enterLetLocalBinding?: (ctx: LetLocalBindingContext) => void;
  /**
   * Exit a parse tree produced by `GrammarParser.letLocalBinding`.
   * @param ctx the parse tree
   */
  exitLetLocalBinding?: (ctx: LetLocalBindingContext) => void;

  /**
   * Enter a parse tree produced by `GrammarParser.identifierList`.
   * @param ctx the parse tree
   */
  enterIdentifierList?: (ctx: IdentifierListContext) => void;
  /**
   * Exit a parse tree produced by `GrammarParser.identifierList`.
   * @param ctx the parse tree
   */
  exitIdentifierList?: (ctx: IdentifierListContext) => void;

  /**
   * Enter a parse tree produced by `GrammarParser.expressionLists`.
   * @param ctx the parse tree
   */
  enterExpressionLists?: (ctx: ExpressionListsContext) => void;
  /**
   * Exit a parse tree produced by `GrammarParser.expressionLists`.
   * @param ctx the parse tree
   */
  exitExpressionLists?: (ctx: ExpressionListsContext) => void;

  /**
   * Enter a parse tree produced by `GrammarParser.functionDeclaration`.
   * @param ctx the parse tree
   */
  enterFunctionDeclaration?: (ctx: FunctionDeclarationContext) => void;
  /**
   * Exit a parse tree produced by `GrammarParser.functionDeclaration`.
   * @param ctx the parse tree
   */
  exitFunctionDeclaration?: (ctx: FunctionDeclarationContext) => void;
}
