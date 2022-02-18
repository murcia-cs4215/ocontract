// Generated from ./src/lang/Grammar.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { GrammarListener } from "./GrammarListener";
import { GrammarVisitor } from "./GrammarVisitor";


export class GrammarParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly POW = 3;
	public static readonly MUL = 4;
	public static readonly DIV = 5;
	public static readonly ADD = 6;
	public static readonly SUB = 7;
	public static readonly MOD = 8;
	public static readonly ADDFLOAT = 9;
	public static readonly SUBFLOAT = 10;
	public static readonly MULFLOAT = 11;
	public static readonly DIVFLOAT = 12;
	public static readonly LESSTHAN = 13;
	public static readonly LESSTHANOREQUAL = 14;
	public static readonly GREATERTHAN = 15;
	public static readonly GREATERTHANOREQUAL = 16;
	public static readonly EQUALSTRUC = 17;
	public static readonly NOTEQUALSTRUC = 18;
	public static readonly EQUALPHYS = 19;
	public static readonly NOTEQUALPHYS = 20;
	public static readonly CONCAT = 21;
	public static readonly AND = 22;
	public static readonly OR = 23;
	public static readonly NOT = 24;
	public static readonly NUMBER = 25;
	public static readonly TOSKIP = 26;
	public static readonly CHAR = 27;
	public static readonly STRING = 28;
	public static readonly FLOAT = 29;
	public static readonly BOOLEAN = 30;
	public static readonly IF = 31;
	public static readonly THEN = 32;
	public static readonly ELSE = 33;
	public static readonly DOUBLESEMICOLON = 34;
	public static readonly IDENTIFIER = 35;
	public static readonly RULE_start = 0;
	public static readonly RULE_statement = 1;
	public static readonly RULE_expression = 2;
	public static readonly RULE_parenthesesExpression = 3;
	public static readonly RULE_condExp = 4;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"start", "statement", "expression", "parenthesesExpression", "condExp",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'('", "')'", "'**'", "'*'", "'/'", "'+'", "'-'", "'mod'", 
		"'+.'", "'-.'", "'*.'", "'/.'", "'<'", "'<='", "'>'", "'>='", "'='", "'<>'", 
		"'=='", "'!='", "'^'", "'&&'", "'||'", "'not'", undefined, undefined, 
		undefined, undefined, undefined, undefined, "'if'", "'then'", "'else'", 
		"';;'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, "POW", "MUL", "DIV", "ADD", "SUB", "MOD", 
		"ADDFLOAT", "SUBFLOAT", "MULFLOAT", "DIVFLOAT", "LESSTHAN", "LESSTHANOREQUAL", 
		"GREATERTHAN", "GREATERTHANOREQUAL", "EQUALSTRUC", "NOTEQUALSTRUC", "EQUALPHYS", 
		"NOTEQUALPHYS", "CONCAT", "AND", "OR", "NOT", "NUMBER", "TOSKIP", "CHAR", 
		"STRING", "FLOAT", "BOOLEAN", "IF", "THEN", "ELSE", "DOUBLESEMICOLON", 
		"IDENTIFIER",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(GrammarParser._LITERAL_NAMES, GrammarParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return GrammarParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "Grammar.g4"; }

	// @Override
	public get ruleNames(): string[] { return GrammarParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return GrammarParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(GrammarParser._ATN, this);
	}
	// @RuleVersion(0)
	public start(): StartContext {
		let _localctx: StartContext = new StartContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, GrammarParser.RULE_start);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 13;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << GrammarParser.T__0) | (1 << GrammarParser.NOT) | (1 << GrammarParser.NUMBER) | (1 << GrammarParser.CHAR) | (1 << GrammarParser.STRING) | (1 << GrammarParser.FLOAT) | (1 << GrammarParser.BOOLEAN) | (1 << GrammarParser.IF))) !== 0)) {
				{
				{
				this.state = 10;
				this.statement();
				}
				}
				this.state = 15;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 16;
			this.match(GrammarParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public statement(): StatementContext {
		let _localctx: StatementContext = new StatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, GrammarParser.RULE_statement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 18;
			this.expression(0);
			this.state = 19;
			this.match(GrammarParser.DOUBLESEMICOLON);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public expression(): ExpressionContext;
	public expression(_p: number): ExpressionContext;
	// @RuleVersion(0)
	public expression(_p?: number): ExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ExpressionContext = new ExpressionContext(this._ctx, _parentState);
		let _prevctx: ExpressionContext = _localctx;
		let _startState: number = 4;
		this.enterRecursionRule(_localctx, 4, GrammarParser.RULE_expression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 31;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case GrammarParser.NUMBER:
				{
				_localctx = new NumberContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 22;
				this.match(GrammarParser.NUMBER);
				}
				break;
			case GrammarParser.FLOAT:
				{
				_localctx = new FloatContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 23;
				this.match(GrammarParser.FLOAT);
				}
				break;
			case GrammarParser.BOOLEAN:
				{
				_localctx = new BooleanContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 24;
				this.match(GrammarParser.BOOLEAN);
				}
				break;
			case GrammarParser.CHAR:
				{
				_localctx = new CharContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 25;
				this.match(GrammarParser.CHAR);
				}
				break;
			case GrammarParser.STRING:
				{
				_localctx = new StringContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 26;
				this.match(GrammarParser.STRING);
				}
				break;
			case GrammarParser.T__0:
				{
				_localctx = new ParenthesesContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 27;
				this.parenthesesExpression();
				}
				break;
			case GrammarParser.NOT:
				{
				_localctx = new NotContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 28;
				(_localctx as NotContext)._operator = this.match(GrammarParser.NOT);
				this.state = 29;
				(_localctx as NotContext)._argument = this.expression(4);
				}
				break;
			case GrammarParser.IF:
				{
				_localctx = new ConditionalExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 30;
				this.condExp();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 98;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 3, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 96;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 2, this._ctx) ) {
					case 1:
						{
						_localctx = new PowerContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as PowerContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, GrammarParser.RULE_expression);
						this.state = 33;
						if (!(this.precpred(this._ctx, 23))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 23)");
						}
						this.state = 34;
						(_localctx as PowerContext)._operator = this.match(GrammarParser.POW);
						this.state = 35;
						(_localctx as PowerContext)._right = this.expression(23);
						}
						break;

					case 2:
						{
						_localctx = new MultiplicationContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as MultiplicationContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, GrammarParser.RULE_expression);
						this.state = 36;
						if (!(this.precpred(this._ctx, 22))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 22)");
						}
						this.state = 37;
						(_localctx as MultiplicationContext)._operator = this.match(GrammarParser.MUL);
						this.state = 38;
						(_localctx as MultiplicationContext)._right = this.expression(23);
						}
						break;

					case 3:
						{
						_localctx = new DivisionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as DivisionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, GrammarParser.RULE_expression);
						this.state = 39;
						if (!(this.precpred(this._ctx, 21))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 21)");
						}
						this.state = 40;
						(_localctx as DivisionContext)._operator = this.match(GrammarParser.DIV);
						this.state = 41;
						(_localctx as DivisionContext)._right = this.expression(22);
						}
						break;

					case 4:
						{
						_localctx = new MultiplicationFloatContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as MultiplicationFloatContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, GrammarParser.RULE_expression);
						this.state = 42;
						if (!(this.precpred(this._ctx, 20))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 20)");
						}
						this.state = 43;
						(_localctx as MultiplicationFloatContext)._operator = this.match(GrammarParser.MULFLOAT);
						this.state = 44;
						(_localctx as MultiplicationFloatContext)._right = this.expression(21);
						}
						break;

					case 5:
						{
						_localctx = new DivisionFloatContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as DivisionFloatContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, GrammarParser.RULE_expression);
						this.state = 45;
						if (!(this.precpred(this._ctx, 19))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 19)");
						}
						this.state = 46;
						(_localctx as DivisionFloatContext)._operator = this.match(GrammarParser.DIVFLOAT);
						this.state = 47;
						(_localctx as DivisionFloatContext)._right = this.expression(20);
						}
						break;

					case 6:
						{
						_localctx = new ModulusContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as ModulusContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, GrammarParser.RULE_expression);
						this.state = 48;
						if (!(this.precpred(this._ctx, 18))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 18)");
						}
						this.state = 49;
						(_localctx as ModulusContext)._operator = this.match(GrammarParser.MOD);
						this.state = 50;
						(_localctx as ModulusContext)._right = this.expression(19);
						}
						break;

					case 7:
						{
						_localctx = new AdditionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as AdditionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, GrammarParser.RULE_expression);
						this.state = 51;
						if (!(this.precpred(this._ctx, 17))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 17)");
						}
						this.state = 52;
						(_localctx as AdditionContext)._operator = this.match(GrammarParser.ADD);
						this.state = 53;
						(_localctx as AdditionContext)._right = this.expression(18);
						}
						break;

					case 8:
						{
						_localctx = new SubtractionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as SubtractionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, GrammarParser.RULE_expression);
						this.state = 54;
						if (!(this.precpred(this._ctx, 16))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 16)");
						}
						this.state = 55;
						(_localctx as SubtractionContext)._operator = this.match(GrammarParser.SUB);
						this.state = 56;
						(_localctx as SubtractionContext)._right = this.expression(17);
						}
						break;

					case 9:
						{
						_localctx = new AdditionFloatContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as AdditionFloatContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, GrammarParser.RULE_expression);
						this.state = 57;
						if (!(this.precpred(this._ctx, 15))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 15)");
						}
						this.state = 58;
						(_localctx as AdditionFloatContext)._operator = this.match(GrammarParser.ADDFLOAT);
						this.state = 59;
						(_localctx as AdditionFloatContext)._right = this.expression(16);
						}
						break;

					case 10:
						{
						_localctx = new SubtractionFloatContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as SubtractionFloatContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, GrammarParser.RULE_expression);
						this.state = 60;
						if (!(this.precpred(this._ctx, 14))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 14)");
						}
						this.state = 61;
						(_localctx as SubtractionFloatContext)._operator = this.match(GrammarParser.SUBFLOAT);
						this.state = 62;
						(_localctx as SubtractionFloatContext)._right = this.expression(15);
						}
						break;

					case 11:
						{
						_localctx = new LessThanContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as LessThanContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, GrammarParser.RULE_expression);
						this.state = 63;
						if (!(this.precpred(this._ctx, 13))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 13)");
						}
						this.state = 64;
						(_localctx as LessThanContext)._operator = this.match(GrammarParser.LESSTHAN);
						this.state = 65;
						(_localctx as LessThanContext)._right = this.expression(14);
						}
						break;

					case 12:
						{
						_localctx = new LessThanOrEqualContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as LessThanOrEqualContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, GrammarParser.RULE_expression);
						this.state = 66;
						if (!(this.precpred(this._ctx, 12))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 12)");
						}
						this.state = 67;
						(_localctx as LessThanOrEqualContext)._operator = this.match(GrammarParser.LESSTHANOREQUAL);
						this.state = 68;
						(_localctx as LessThanOrEqualContext)._right = this.expression(13);
						}
						break;

					case 13:
						{
						_localctx = new GreaterThanContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as GreaterThanContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, GrammarParser.RULE_expression);
						this.state = 69;
						if (!(this.precpred(this._ctx, 11))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 11)");
						}
						this.state = 70;
						(_localctx as GreaterThanContext)._operator = this.match(GrammarParser.GREATERTHAN);
						this.state = 71;
						(_localctx as GreaterThanContext)._right = this.expression(12);
						}
						break;

					case 14:
						{
						_localctx = new GreaterThanOrEqualContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as GreaterThanOrEqualContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, GrammarParser.RULE_expression);
						this.state = 72;
						if (!(this.precpred(this._ctx, 10))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 10)");
						}
						this.state = 73;
						(_localctx as GreaterThanOrEqualContext)._operator = this.match(GrammarParser.GREATERTHANOREQUAL);
						this.state = 74;
						(_localctx as GreaterThanOrEqualContext)._right = this.expression(11);
						}
						break;

					case 15:
						{
						_localctx = new EqualStructuralContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as EqualStructuralContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, GrammarParser.RULE_expression);
						this.state = 75;
						if (!(this.precpred(this._ctx, 9))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 9)");
						}
						this.state = 76;
						(_localctx as EqualStructuralContext)._operator = this.match(GrammarParser.EQUALSTRUC);
						this.state = 77;
						(_localctx as EqualStructuralContext)._right = this.expression(10);
						}
						break;

					case 16:
						{
						_localctx = new NotEqualStructuralContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as NotEqualStructuralContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, GrammarParser.RULE_expression);
						this.state = 78;
						if (!(this.precpred(this._ctx, 8))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 8)");
						}
						this.state = 79;
						(_localctx as NotEqualStructuralContext)._operator = this.match(GrammarParser.NOTEQUALSTRUC);
						this.state = 80;
						(_localctx as NotEqualStructuralContext)._right = this.expression(9);
						}
						break;

					case 17:
						{
						_localctx = new EqualPhysicalContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as EqualPhysicalContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, GrammarParser.RULE_expression);
						this.state = 81;
						if (!(this.precpred(this._ctx, 7))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 7)");
						}
						this.state = 82;
						(_localctx as EqualPhysicalContext)._operator = this.match(GrammarParser.EQUALPHYS);
						this.state = 83;
						(_localctx as EqualPhysicalContext)._right = this.expression(8);
						}
						break;

					case 18:
						{
						_localctx = new NotEqualPhysicalContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as NotEqualPhysicalContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, GrammarParser.RULE_expression);
						this.state = 84;
						if (!(this.precpred(this._ctx, 6))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
						}
						this.state = 85;
						(_localctx as NotEqualPhysicalContext)._operator = this.match(GrammarParser.NOTEQUALPHYS);
						this.state = 86;
						(_localctx as NotEqualPhysicalContext)._right = this.expression(7);
						}
						break;

					case 19:
						{
						_localctx = new ConcatenationContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as ConcatenationContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, GrammarParser.RULE_expression);
						this.state = 87;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 88;
						(_localctx as ConcatenationContext)._operator = this.match(GrammarParser.CONCAT);
						this.state = 89;
						(_localctx as ConcatenationContext)._right = this.expression(6);
						}
						break;

					case 20:
						{
						_localctx = new AndContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as AndContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, GrammarParser.RULE_expression);
						this.state = 90;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 91;
						(_localctx as AndContext)._operator = this.match(GrammarParser.AND);
						this.state = 92;
						(_localctx as AndContext)._right = this.expression(4);
						}
						break;

					case 21:
						{
						_localctx = new OrContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as OrContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, GrammarParser.RULE_expression);
						this.state = 93;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 94;
						(_localctx as OrContext)._operator = this.match(GrammarParser.OR);
						this.state = 95;
						(_localctx as OrContext)._right = this.expression(3);
						}
						break;
					}
					}
				}
				this.state = 100;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 3, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public parenthesesExpression(): ParenthesesExpressionContext {
		let _localctx: ParenthesesExpressionContext = new ParenthesesExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, GrammarParser.RULE_parenthesesExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 101;
			this.match(GrammarParser.T__0);
			this.state = 102;
			_localctx._inner = this.expression(0);
			this.state = 103;
			this.match(GrammarParser.T__1);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public condExp(): CondExpContext {
		let _localctx: CondExpContext = new CondExpContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, GrammarParser.RULE_condExp);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 105;
			this.match(GrammarParser.IF);
			this.state = 106;
			_localctx._test = this.expression(0);
			this.state = 107;
			this.match(GrammarParser.THEN);
			this.state = 108;
			_localctx._consequent = this.expression(0);
			this.state = 109;
			this.match(GrammarParser.ELSE);
			this.state = 110;
			_localctx._alternate = this.expression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 2:
			return this.expression_sempred(_localctx as ExpressionContext, predIndex);
		}
		return true;
	}
	private expression_sempred(_localctx: ExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 23);

		case 1:
			return this.precpred(this._ctx, 22);

		case 2:
			return this.precpred(this._ctx, 21);

		case 3:
			return this.precpred(this._ctx, 20);

		case 4:
			return this.precpred(this._ctx, 19);

		case 5:
			return this.precpred(this._ctx, 18);

		case 6:
			return this.precpred(this._ctx, 17);

		case 7:
			return this.precpred(this._ctx, 16);

		case 8:
			return this.precpred(this._ctx, 15);

		case 9:
			return this.precpred(this._ctx, 14);

		case 10:
			return this.precpred(this._ctx, 13);

		case 11:
			return this.precpred(this._ctx, 12);

		case 12:
			return this.precpred(this._ctx, 11);

		case 13:
			return this.precpred(this._ctx, 10);

		case 14:
			return this.precpred(this._ctx, 9);

		case 15:
			return this.precpred(this._ctx, 8);

		case 16:
			return this.precpred(this._ctx, 7);

		case 17:
			return this.precpred(this._ctx, 6);

		case 18:
			return this.precpred(this._ctx, 5);

		case 19:
			return this.precpred(this._ctx, 3);

		case 20:
			return this.precpred(this._ctx, 2);
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03%s\x04\x02\t\x02" +
		"\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x03\x02\x07\x02" +
		"\x0E\n\x02\f\x02\x0E\x02\x11\v\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03" +
		"\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03" +
		"\x04\x03\x04\x05\x04\"\n\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03" +
		"\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03" +
		"\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03" +
		"\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03" +
		"\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03" +
		"\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03" +
		"\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03" +
		"\x04\x03\x04\x03\x04\x03\x04\x07\x04c\n\x04\f\x04\x0E\x04f\v\x04\x03\x05" +
		"\x03\x05\x03\x05\x03\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06" +
		"\x03\x06\x03\x06\x02\x02\x03\x06\x07\x02\x02\x04\x02\x06\x02\b\x02\n\x02" +
		"\x02\x02\x02\x8A\x02\x0F\x03\x02\x02\x02\x04\x14\x03\x02\x02\x02\x06!" +
		"\x03\x02\x02\x02\bg\x03\x02\x02\x02\nk\x03\x02\x02\x02\f\x0E\x05\x04\x03" +
		"\x02\r\f\x03\x02\x02\x02\x0E\x11\x03\x02\x02\x02\x0F\r\x03\x02\x02\x02" +
		"\x0F\x10\x03\x02\x02\x02\x10\x12\x03\x02\x02\x02\x11\x0F\x03\x02\x02\x02" +
		"\x12\x13\x07\x02\x02\x03\x13\x03\x03\x02\x02\x02\x14\x15\x05\x06\x04\x02" +
		"\x15\x16\x07$\x02\x02\x16\x05\x03\x02\x02\x02\x17\x18\b\x04\x01\x02\x18" +
		"\"\x07\x1B\x02\x02\x19\"\x07\x1F\x02\x02\x1A\"\x07 \x02\x02\x1B\"\x07" +
		"\x1D\x02\x02\x1C\"\x07\x1E\x02\x02\x1D\"\x05\b\x05\x02\x1E\x1F\x07\x1A" +
		"\x02\x02\x1F\"\x05\x06\x04\x06 \"\x05\n\x06\x02!\x17\x03\x02\x02\x02!" +
		"\x19\x03\x02\x02\x02!\x1A\x03\x02\x02\x02!\x1B\x03\x02\x02\x02!\x1C\x03" +
		"\x02\x02\x02!\x1D\x03\x02\x02\x02!\x1E\x03\x02\x02\x02! \x03\x02\x02\x02" +
		"\"d\x03\x02\x02\x02#$\f\x19\x02\x02$%\x07\x05\x02\x02%c\x05\x06\x04\x19" +
		"&\'\f\x18\x02\x02\'(\x07\x06\x02\x02(c\x05\x06\x04\x19)*\f\x17\x02\x02" +
		"*+\x07\x07\x02\x02+c\x05\x06\x04\x18,-\f\x16\x02\x02-.\x07\r\x02\x02." +
		"c\x05\x06\x04\x17/0\f\x15\x02\x0201\x07\x0E\x02\x021c\x05\x06\x04\x16" +
		"23\f\x14\x02\x0234\x07\n\x02\x024c\x05\x06\x04\x1556\f\x13\x02\x0267\x07" +
		"\b\x02\x027c\x05\x06\x04\x1489\f\x12\x02\x029:\x07\t\x02\x02:c\x05\x06" +
		"\x04\x13;<\f\x11\x02\x02<=\x07\v\x02\x02=c\x05\x06\x04\x12>?\f\x10\x02" +
		"\x02?@\x07\f\x02\x02@c\x05\x06\x04\x11AB\f\x0F\x02\x02BC\x07\x0F\x02\x02" +
		"Cc\x05\x06\x04\x10DE\f\x0E\x02\x02EF\x07\x10\x02\x02Fc\x05\x06\x04\x0F" +
		"GH\f\r\x02\x02HI\x07\x11\x02\x02Ic\x05\x06\x04\x0EJK\f\f\x02\x02KL\x07" +
		"\x12\x02\x02Lc\x05\x06\x04\rMN\f\v\x02\x02NO\x07\x13\x02\x02Oc\x05\x06" +
		"\x04\fPQ\f\n\x02\x02QR\x07\x14\x02\x02Rc\x05\x06\x04\vST\f\t\x02\x02T" +
		"U\x07\x15\x02\x02Uc\x05\x06\x04\nVW\f\b\x02\x02WX\x07\x16\x02\x02Xc\x05" +
		"\x06\x04\tYZ\f\x07\x02\x02Z[\x07\x17\x02\x02[c\x05\x06\x04\b\\]\f\x05" +
		"\x02\x02]^\x07\x18\x02\x02^c\x05\x06\x04\x06_`\f\x04\x02\x02`a\x07\x19" +
		"\x02\x02ac\x05\x06\x04\x05b#\x03\x02\x02\x02b&\x03\x02\x02\x02b)\x03\x02" +
		"\x02\x02b,\x03\x02\x02\x02b/\x03\x02\x02\x02b2\x03\x02\x02\x02b5\x03\x02" +
		"\x02\x02b8\x03\x02\x02\x02b;\x03\x02\x02\x02b>\x03\x02\x02\x02bA\x03\x02" +
		"\x02\x02bD\x03\x02\x02\x02bG\x03\x02\x02\x02bJ\x03\x02\x02\x02bM\x03\x02" +
		"\x02\x02bP\x03\x02\x02\x02bS\x03\x02\x02\x02bV\x03\x02\x02\x02bY\x03\x02" +
		"\x02\x02b\\\x03\x02\x02\x02b_\x03\x02\x02\x02cf\x03\x02\x02\x02db\x03" +
		"\x02\x02\x02de\x03\x02\x02\x02e\x07\x03\x02\x02\x02fd\x03\x02\x02\x02" +
		"gh\x07\x03\x02\x02hi\x05\x06\x04\x02ij\x07\x04\x02\x02j\t\x03\x02\x02" +
		"\x02kl\x07!\x02\x02lm\x05\x06\x04\x02mn\x07\"\x02\x02no\x05\x06\x04\x02" +
		"op\x07#\x02\x02pq\x05\x06\x04\x02q\v\x03\x02\x02\x02\x06\x0F!bd";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!GrammarParser.__ATN) {
			GrammarParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(GrammarParser._serializedATN));
		}

		return GrammarParser.__ATN;
	}

}

export class StartContext extends ParserRuleContext {
	public EOF(): TerminalNode { return this.getToken(GrammarParser.EOF, 0); }
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GrammarParser.RULE_start; }
	// @Override
	public enterRule(listener: GrammarListener): void {
		if (listener.enterStart) {
			listener.enterStart(this);
		}
	}
	// @Override
	public exitRule(listener: GrammarListener): void {
		if (listener.exitStart) {
			listener.exitStart(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GrammarVisitor<Result>): Result {
		if (visitor.visitStart) {
			return visitor.visitStart(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatementContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public DOUBLESEMICOLON(): TerminalNode { return this.getToken(GrammarParser.DOUBLESEMICOLON, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GrammarParser.RULE_statement; }
	// @Override
	public enterRule(listener: GrammarListener): void {
		if (listener.enterStatement) {
			listener.enterStatement(this);
		}
	}
	// @Override
	public exitRule(listener: GrammarListener): void {
		if (listener.exitStatement) {
			listener.exitStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GrammarVisitor<Result>): Result {
		if (visitor.visitStatement) {
			return visitor.visitStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GrammarParser.RULE_expression; }
	public copyFrom(ctx: ExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class NumberContext extends ExpressionContext {
	public NUMBER(): TerminalNode { return this.getToken(GrammarParser.NUMBER, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: GrammarListener): void {
		if (listener.enterNumber) {
			listener.enterNumber(this);
		}
	}
	// @Override
	public exitRule(listener: GrammarListener): void {
		if (listener.exitNumber) {
			listener.exitNumber(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GrammarVisitor<Result>): Result {
		if (visitor.visitNumber) {
			return visitor.visitNumber(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class FloatContext extends ExpressionContext {
	public FLOAT(): TerminalNode { return this.getToken(GrammarParser.FLOAT, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: GrammarListener): void {
		if (listener.enterFloat) {
			listener.enterFloat(this);
		}
	}
	// @Override
	public exitRule(listener: GrammarListener): void {
		if (listener.exitFloat) {
			listener.exitFloat(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GrammarVisitor<Result>): Result {
		if (visitor.visitFloat) {
			return visitor.visitFloat(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BooleanContext extends ExpressionContext {
	public BOOLEAN(): TerminalNode { return this.getToken(GrammarParser.BOOLEAN, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: GrammarListener): void {
		if (listener.enterBoolean) {
			listener.enterBoolean(this);
		}
	}
	// @Override
	public exitRule(listener: GrammarListener): void {
		if (listener.exitBoolean) {
			listener.exitBoolean(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GrammarVisitor<Result>): Result {
		if (visitor.visitBoolean) {
			return visitor.visitBoolean(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CharContext extends ExpressionContext {
	public CHAR(): TerminalNode { return this.getToken(GrammarParser.CHAR, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: GrammarListener): void {
		if (listener.enterChar) {
			listener.enterChar(this);
		}
	}
	// @Override
	public exitRule(listener: GrammarListener): void {
		if (listener.exitChar) {
			listener.exitChar(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GrammarVisitor<Result>): Result {
		if (visitor.visitChar) {
			return visitor.visitChar(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class StringContext extends ExpressionContext {
	public STRING(): TerminalNode { return this.getToken(GrammarParser.STRING, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: GrammarListener): void {
		if (listener.enterString) {
			listener.enterString(this);
		}
	}
	// @Override
	public exitRule(listener: GrammarListener): void {
		if (listener.exitString) {
			listener.exitString(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GrammarVisitor<Result>): Result {
		if (visitor.visitString) {
			return visitor.visitString(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ParenthesesContext extends ExpressionContext {
	public parenthesesExpression(): ParenthesesExpressionContext {
		return this.getRuleContext(0, ParenthesesExpressionContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: GrammarListener): void {
		if (listener.enterParentheses) {
			listener.enterParentheses(this);
		}
	}
	// @Override
	public exitRule(listener: GrammarListener): void {
		if (listener.exitParentheses) {
			listener.exitParentheses(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GrammarVisitor<Result>): Result {
		if (visitor.visitParentheses) {
			return visitor.visitParentheses(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PowerContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _operator!: Token;
	public _right!: ExpressionContext;
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public POW(): TerminalNode { return this.getToken(GrammarParser.POW, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: GrammarListener): void {
		if (listener.enterPower) {
			listener.enterPower(this);
		}
	}
	// @Override
	public exitRule(listener: GrammarListener): void {
		if (listener.exitPower) {
			listener.exitPower(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GrammarVisitor<Result>): Result {
		if (visitor.visitPower) {
			return visitor.visitPower(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class MultiplicationContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _operator!: Token;
	public _right!: ExpressionContext;
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public MUL(): TerminalNode { return this.getToken(GrammarParser.MUL, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: GrammarListener): void {
		if (listener.enterMultiplication) {
			listener.enterMultiplication(this);
		}
	}
	// @Override
	public exitRule(listener: GrammarListener): void {
		if (listener.exitMultiplication) {
			listener.exitMultiplication(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GrammarVisitor<Result>): Result {
		if (visitor.visitMultiplication) {
			return visitor.visitMultiplication(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DivisionContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _operator!: Token;
	public _right!: ExpressionContext;
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public DIV(): TerminalNode { return this.getToken(GrammarParser.DIV, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: GrammarListener): void {
		if (listener.enterDivision) {
			listener.enterDivision(this);
		}
	}
	// @Override
	public exitRule(listener: GrammarListener): void {
		if (listener.exitDivision) {
			listener.exitDivision(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GrammarVisitor<Result>): Result {
		if (visitor.visitDivision) {
			return visitor.visitDivision(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class MultiplicationFloatContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _operator!: Token;
	public _right!: ExpressionContext;
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public MULFLOAT(): TerminalNode { return this.getToken(GrammarParser.MULFLOAT, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: GrammarListener): void {
		if (listener.enterMultiplicationFloat) {
			listener.enterMultiplicationFloat(this);
		}
	}
	// @Override
	public exitRule(listener: GrammarListener): void {
		if (listener.exitMultiplicationFloat) {
			listener.exitMultiplicationFloat(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GrammarVisitor<Result>): Result {
		if (visitor.visitMultiplicationFloat) {
			return visitor.visitMultiplicationFloat(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DivisionFloatContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _operator!: Token;
	public _right!: ExpressionContext;
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public DIVFLOAT(): TerminalNode { return this.getToken(GrammarParser.DIVFLOAT, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: GrammarListener): void {
		if (listener.enterDivisionFloat) {
			listener.enterDivisionFloat(this);
		}
	}
	// @Override
	public exitRule(listener: GrammarListener): void {
		if (listener.exitDivisionFloat) {
			listener.exitDivisionFloat(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GrammarVisitor<Result>): Result {
		if (visitor.visitDivisionFloat) {
			return visitor.visitDivisionFloat(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ModulusContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _operator!: Token;
	public _right!: ExpressionContext;
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public MOD(): TerminalNode { return this.getToken(GrammarParser.MOD, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: GrammarListener): void {
		if (listener.enterModulus) {
			listener.enterModulus(this);
		}
	}
	// @Override
	public exitRule(listener: GrammarListener): void {
		if (listener.exitModulus) {
			listener.exitModulus(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GrammarVisitor<Result>): Result {
		if (visitor.visitModulus) {
			return visitor.visitModulus(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AdditionContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _operator!: Token;
	public _right!: ExpressionContext;
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public ADD(): TerminalNode { return this.getToken(GrammarParser.ADD, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: GrammarListener): void {
		if (listener.enterAddition) {
			listener.enterAddition(this);
		}
	}
	// @Override
	public exitRule(listener: GrammarListener): void {
		if (listener.exitAddition) {
			listener.exitAddition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GrammarVisitor<Result>): Result {
		if (visitor.visitAddition) {
			return visitor.visitAddition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SubtractionContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _operator!: Token;
	public _right!: ExpressionContext;
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public SUB(): TerminalNode { return this.getToken(GrammarParser.SUB, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: GrammarListener): void {
		if (listener.enterSubtraction) {
			listener.enterSubtraction(this);
		}
	}
	// @Override
	public exitRule(listener: GrammarListener): void {
		if (listener.exitSubtraction) {
			listener.exitSubtraction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GrammarVisitor<Result>): Result {
		if (visitor.visitSubtraction) {
			return visitor.visitSubtraction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AdditionFloatContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _operator!: Token;
	public _right!: ExpressionContext;
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public ADDFLOAT(): TerminalNode { return this.getToken(GrammarParser.ADDFLOAT, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: GrammarListener): void {
		if (listener.enterAdditionFloat) {
			listener.enterAdditionFloat(this);
		}
	}
	// @Override
	public exitRule(listener: GrammarListener): void {
		if (listener.exitAdditionFloat) {
			listener.exitAdditionFloat(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GrammarVisitor<Result>): Result {
		if (visitor.visitAdditionFloat) {
			return visitor.visitAdditionFloat(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SubtractionFloatContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _operator!: Token;
	public _right!: ExpressionContext;
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public SUBFLOAT(): TerminalNode { return this.getToken(GrammarParser.SUBFLOAT, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: GrammarListener): void {
		if (listener.enterSubtractionFloat) {
			listener.enterSubtractionFloat(this);
		}
	}
	// @Override
	public exitRule(listener: GrammarListener): void {
		if (listener.exitSubtractionFloat) {
			listener.exitSubtractionFloat(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GrammarVisitor<Result>): Result {
		if (visitor.visitSubtractionFloat) {
			return visitor.visitSubtractionFloat(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LessThanContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _operator!: Token;
	public _right!: ExpressionContext;
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public LESSTHAN(): TerminalNode { return this.getToken(GrammarParser.LESSTHAN, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: GrammarListener): void {
		if (listener.enterLessThan) {
			listener.enterLessThan(this);
		}
	}
	// @Override
	public exitRule(listener: GrammarListener): void {
		if (listener.exitLessThan) {
			listener.exitLessThan(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GrammarVisitor<Result>): Result {
		if (visitor.visitLessThan) {
			return visitor.visitLessThan(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LessThanOrEqualContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _operator!: Token;
	public _right!: ExpressionContext;
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public LESSTHANOREQUAL(): TerminalNode { return this.getToken(GrammarParser.LESSTHANOREQUAL, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: GrammarListener): void {
		if (listener.enterLessThanOrEqual) {
			listener.enterLessThanOrEqual(this);
		}
	}
	// @Override
	public exitRule(listener: GrammarListener): void {
		if (listener.exitLessThanOrEqual) {
			listener.exitLessThanOrEqual(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GrammarVisitor<Result>): Result {
		if (visitor.visitLessThanOrEqual) {
			return visitor.visitLessThanOrEqual(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class GreaterThanContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _operator!: Token;
	public _right!: ExpressionContext;
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public GREATERTHAN(): TerminalNode { return this.getToken(GrammarParser.GREATERTHAN, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: GrammarListener): void {
		if (listener.enterGreaterThan) {
			listener.enterGreaterThan(this);
		}
	}
	// @Override
	public exitRule(listener: GrammarListener): void {
		if (listener.exitGreaterThan) {
			listener.exitGreaterThan(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GrammarVisitor<Result>): Result {
		if (visitor.visitGreaterThan) {
			return visitor.visitGreaterThan(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class GreaterThanOrEqualContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _operator!: Token;
	public _right!: ExpressionContext;
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public GREATERTHANOREQUAL(): TerminalNode { return this.getToken(GrammarParser.GREATERTHANOREQUAL, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: GrammarListener): void {
		if (listener.enterGreaterThanOrEqual) {
			listener.enterGreaterThanOrEqual(this);
		}
	}
	// @Override
	public exitRule(listener: GrammarListener): void {
		if (listener.exitGreaterThanOrEqual) {
			listener.exitGreaterThanOrEqual(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GrammarVisitor<Result>): Result {
		if (visitor.visitGreaterThanOrEqual) {
			return visitor.visitGreaterThanOrEqual(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class EqualStructuralContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _operator!: Token;
	public _right!: ExpressionContext;
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public EQUALSTRUC(): TerminalNode { return this.getToken(GrammarParser.EQUALSTRUC, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: GrammarListener): void {
		if (listener.enterEqualStructural) {
			listener.enterEqualStructural(this);
		}
	}
	// @Override
	public exitRule(listener: GrammarListener): void {
		if (listener.exitEqualStructural) {
			listener.exitEqualStructural(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GrammarVisitor<Result>): Result {
		if (visitor.visitEqualStructural) {
			return visitor.visitEqualStructural(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class NotEqualStructuralContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _operator!: Token;
	public _right!: ExpressionContext;
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public NOTEQUALSTRUC(): TerminalNode { return this.getToken(GrammarParser.NOTEQUALSTRUC, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: GrammarListener): void {
		if (listener.enterNotEqualStructural) {
			listener.enterNotEqualStructural(this);
		}
	}
	// @Override
	public exitRule(listener: GrammarListener): void {
		if (listener.exitNotEqualStructural) {
			listener.exitNotEqualStructural(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GrammarVisitor<Result>): Result {
		if (visitor.visitNotEqualStructural) {
			return visitor.visitNotEqualStructural(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class EqualPhysicalContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _operator!: Token;
	public _right!: ExpressionContext;
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public EQUALPHYS(): TerminalNode { return this.getToken(GrammarParser.EQUALPHYS, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: GrammarListener): void {
		if (listener.enterEqualPhysical) {
			listener.enterEqualPhysical(this);
		}
	}
	// @Override
	public exitRule(listener: GrammarListener): void {
		if (listener.exitEqualPhysical) {
			listener.exitEqualPhysical(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GrammarVisitor<Result>): Result {
		if (visitor.visitEqualPhysical) {
			return visitor.visitEqualPhysical(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class NotEqualPhysicalContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _operator!: Token;
	public _right!: ExpressionContext;
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public NOTEQUALPHYS(): TerminalNode { return this.getToken(GrammarParser.NOTEQUALPHYS, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: GrammarListener): void {
		if (listener.enterNotEqualPhysical) {
			listener.enterNotEqualPhysical(this);
		}
	}
	// @Override
	public exitRule(listener: GrammarListener): void {
		if (listener.exitNotEqualPhysical) {
			listener.exitNotEqualPhysical(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GrammarVisitor<Result>): Result {
		if (visitor.visitNotEqualPhysical) {
			return visitor.visitNotEqualPhysical(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ConcatenationContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _operator!: Token;
	public _right!: ExpressionContext;
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public CONCAT(): TerminalNode { return this.getToken(GrammarParser.CONCAT, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: GrammarListener): void {
		if (listener.enterConcatenation) {
			listener.enterConcatenation(this);
		}
	}
	// @Override
	public exitRule(listener: GrammarListener): void {
		if (listener.exitConcatenation) {
			listener.exitConcatenation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GrammarVisitor<Result>): Result {
		if (visitor.visitConcatenation) {
			return visitor.visitConcatenation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class NotContext extends ExpressionContext {
	public _operator!: Token;
	public _argument!: ExpressionContext;
	public NOT(): TerminalNode { return this.getToken(GrammarParser.NOT, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: GrammarListener): void {
		if (listener.enterNot) {
			listener.enterNot(this);
		}
	}
	// @Override
	public exitRule(listener: GrammarListener): void {
		if (listener.exitNot) {
			listener.exitNot(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GrammarVisitor<Result>): Result {
		if (visitor.visitNot) {
			return visitor.visitNot(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AndContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _operator!: Token;
	public _right!: ExpressionContext;
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public AND(): TerminalNode { return this.getToken(GrammarParser.AND, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: GrammarListener): void {
		if (listener.enterAnd) {
			listener.enterAnd(this);
		}
	}
	// @Override
	public exitRule(listener: GrammarListener): void {
		if (listener.exitAnd) {
			listener.exitAnd(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GrammarVisitor<Result>): Result {
		if (visitor.visitAnd) {
			return visitor.visitAnd(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class OrContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _operator!: Token;
	public _right!: ExpressionContext;
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public OR(): TerminalNode { return this.getToken(GrammarParser.OR, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: GrammarListener): void {
		if (listener.enterOr) {
			listener.enterOr(this);
		}
	}
	// @Override
	public exitRule(listener: GrammarListener): void {
		if (listener.exitOr) {
			listener.exitOr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GrammarVisitor<Result>): Result {
		if (visitor.visitOr) {
			return visitor.visitOr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ConditionalExpressionContext extends ExpressionContext {
	public condExp(): CondExpContext {
		return this.getRuleContext(0, CondExpContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: GrammarListener): void {
		if (listener.enterConditionalExpression) {
			listener.enterConditionalExpression(this);
		}
	}
	// @Override
	public exitRule(listener: GrammarListener): void {
		if (listener.exitConditionalExpression) {
			listener.exitConditionalExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GrammarVisitor<Result>): Result {
		if (visitor.visitConditionalExpression) {
			return visitor.visitConditionalExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParenthesesExpressionContext extends ParserRuleContext {
	public _inner!: ExpressionContext;
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GrammarParser.RULE_parenthesesExpression; }
	// @Override
	public enterRule(listener: GrammarListener): void {
		if (listener.enterParenthesesExpression) {
			listener.enterParenthesesExpression(this);
		}
	}
	// @Override
	public exitRule(listener: GrammarListener): void {
		if (listener.exitParenthesesExpression) {
			listener.exitParenthesesExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GrammarVisitor<Result>): Result {
		if (visitor.visitParenthesesExpression) {
			return visitor.visitParenthesesExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CondExpContext extends ParserRuleContext {
	public _test!: ExpressionContext;
	public _consequent!: ExpressionContext;
	public _alternate!: ExpressionContext;
	public IF(): TerminalNode { return this.getToken(GrammarParser.IF, 0); }
	public THEN(): TerminalNode { return this.getToken(GrammarParser.THEN, 0); }
	public ELSE(): TerminalNode { return this.getToken(GrammarParser.ELSE, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GrammarParser.RULE_condExp; }
	// @Override
	public enterRule(listener: GrammarListener): void {
		if (listener.enterCondExp) {
			listener.enterCondExp(this);
		}
	}
	// @Override
	public exitRule(listener: GrammarListener): void {
		if (listener.exitCondExp) {
			listener.exitCondExp(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GrammarVisitor<Result>): Result {
		if (visitor.visitCondExp) {
			return visitor.visitCondExp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


