// Generated from ./src/lang/Grammar.g4 by ANTLR 4.9.0-SNAPSHOT

import { ATN } from 'antlr4ts/atn/ATN';
import { ATNDeserializer } from 'antlr4ts/atn/ATNDeserializer';
import { ParserATNSimulator } from 'antlr4ts/atn/ParserATNSimulator';
import { FailedPredicateException } from 'antlr4ts/FailedPredicateException';
import * as Utils from 'antlr4ts/misc/Utils';
import { Parser } from 'antlr4ts/Parser';
import { ParserRuleContext } from 'antlr4ts/ParserRuleContext';
import { RecognitionException } from 'antlr4ts/RecognitionException';
import { RuleContext } from 'antlr4ts/RuleContext';
import { Token } from 'antlr4ts/Token';
import { TokenStream } from 'antlr4ts/TokenStream';
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from 'antlr4ts/tree/TerminalNode';
import { Vocabulary } from 'antlr4ts/Vocabulary';
import { VocabularyImpl } from 'antlr4ts/VocabularyImpl';

import { GrammarListener } from './GrammarListener';
import { GrammarVisitor } from './GrammarVisitor';

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
  public static readonly LET = 34;
  public static readonly IN = 35;
  public static readonly REC = 36;
  public static readonly DOUBLESEMICOLON = 37;
  public static readonly TYPE = 38;
  public static readonly IDENTIFIER = 39;
  public static readonly RULE_start = 0;
  public static readonly RULE_statements = 1;
  public static readonly RULE_expression = 2;
  public static readonly RULE_identifier = 3;
  public static readonly RULE_funcApplication = 4;
  public static readonly RULE_parenthesesExpression = 5;
  public static readonly RULE_condExp = 6;
  public static readonly RULE_letGlobalBinding = 7;
  public static readonly RULE_letLocalBinding = 8;
  public static readonly RULE_identifierList = 9;
  public static readonly RULE_expressionLists = 10;
  public static readonly RULE_functionDeclaration = 11;
  // tslint:disable:no-trailing-whitespace
  public static readonly ruleNames: string[] = [
    'start',
    'statements',
    'expression',
    'identifier',
    'funcApplication',
    'parenthesesExpression',
    'condExp',
    'letGlobalBinding',
    'letLocalBinding',
    'identifierList',
    'expressionLists',
    'functionDeclaration',
  ];

  private static readonly _LITERAL_NAMES: Array<string | undefined> = [
    undefined,
    "'('",
    "')'",
    "'**'",
    "'*'",
    "'/'",
    "'+'",
    "'-'",
    "'mod'",
    "'+.'",
    "'-.'",
    "'*.'",
    "'/.'",
    "'<'",
    "'<='",
    "'>'",
    "'>='",
    "'='",
    "'<>'",
    "'=='",
    "'!='",
    "'^'",
    "'&&'",
    "'||'",
    "'not'",
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    "'if'",
    "'then'",
    "'else'",
    "'let'",
    "'in'",
    "'rec'",
    "';;'",
  ];
  private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
    undefined,
    undefined,
    undefined,
    'POW',
    'MUL',
    'DIV',
    'ADD',
    'SUB',
    'MOD',
    'ADDFLOAT',
    'SUBFLOAT',
    'MULFLOAT',
    'DIVFLOAT',
    'LESSTHAN',
    'LESSTHANOREQUAL',
    'GREATERTHAN',
    'GREATERTHANOREQUAL',
    'EQUALSTRUC',
    'NOTEQUALSTRUC',
    'EQUALPHYS',
    'NOTEQUALPHYS',
    'CONCAT',
    'AND',
    'OR',
    'NOT',
    'NUMBER',
    'TOSKIP',
    'CHAR',
    'STRING',
    'FLOAT',
    'BOOLEAN',
    'IF',
    'THEN',
    'ELSE',
    'LET',
    'IN',
    'REC',
    'DOUBLESEMICOLON',
    'TYPE',
    'IDENTIFIER',
  ];
  public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(
    GrammarParser._LITERAL_NAMES,
    GrammarParser._SYMBOLIC_NAMES,
    [],
  );

  // @Override
  // @NotNull
  public get vocabulary(): Vocabulary {
    return GrammarParser.VOCABULARY;
  }
  // tslint:enable:no-trailing-whitespace

  // @Override
  public get grammarFileName(): string {
    return 'Grammar.g4';
  }

  // @Override
  public get ruleNames(): string[] {
    return GrammarParser.ruleNames;
  }

  // @Override
  public get serializedATN(): string {
    return GrammarParser._serializedATN;
  }

  protected createFailedPredicateException(
    predicate?: string,
    message?: string,
  ): FailedPredicateException {
    return new FailedPredicateException(this, predicate, message);
  }

  constructor(input: TokenStream) {
    super(input);
    this._interp = new ParserATNSimulator(GrammarParser._ATN, this);
  }
  // @RuleVersion(0)
  public start(): StartContext {
    const _localctx: StartContext = new StartContext(this._ctx, this.state);
    this.enterRule(_localctx, 0, GrammarParser.RULE_start);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 27;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (
          ((_la & ~0x1f) === 0 &&
            ((1 << _la) &
              ((1 << GrammarParser.T__0) |
                (1 << GrammarParser.SUB) |
                (1 << GrammarParser.NOT) |
                (1 << GrammarParser.NUMBER) |
                (1 << GrammarParser.CHAR) |
                (1 << GrammarParser.STRING) |
                (1 << GrammarParser.FLOAT) |
                (1 << GrammarParser.BOOLEAN) |
                (1 << GrammarParser.IF))) !==
              0) ||
          _la === GrammarParser.LET ||
          _la === GrammarParser.IDENTIFIER
        ) {
          {
            {
              this.state = 24;
              this.statements();
            }
          }
          this.state = 29;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
        this.state = 30;
        this.match(GrammarParser.EOF);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public statements(): StatementsContext {
    const _localctx: StatementsContext = new StatementsContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 2, GrammarParser.RULE_statements);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 32;
        this.expression(0);
        this.state = 33;
        this.match(GrammarParser.DOUBLESEMICOLON);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
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

    const _parentctx: ParserRuleContext = this._ctx;
    const _parentState: number = this.state;
    let _localctx: ExpressionContext = new ExpressionContext(
      this._ctx,
      _parentState,
    );
    let _prevctx: ExpressionContext = _localctx;
    const _startState = 4;
    this.enterRecursionRule(_localctx, 4, GrammarParser.RULE_expression, _p);
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 52;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 1, this._ctx)) {
          case 1:
            {
              _localctx = new NumberContext(_localctx);
              this._ctx = _localctx;
              _prevctx = _localctx;

              this.state = 36;
              this.match(GrammarParser.NUMBER);
            }
            break;

          case 2:
            {
              _localctx = new FloatContext(_localctx);
              this._ctx = _localctx;
              _prevctx = _localctx;
              this.state = 37;
              this.match(GrammarParser.FLOAT);
            }
            break;

          case 3:
            {
              _localctx = new BooleanContext(_localctx);
              this._ctx = _localctx;
              _prevctx = _localctx;
              this.state = 38;
              this.match(GrammarParser.BOOLEAN);
            }
            break;

          case 4:
            {
              _localctx = new CharContext(_localctx);
              this._ctx = _localctx;
              _prevctx = _localctx;
              this.state = 39;
              this.match(GrammarParser.CHAR);
            }
            break;

          case 5:
            {
              _localctx = new StringContext(_localctx);
              this._ctx = _localctx;
              _prevctx = _localctx;
              this.state = 40;
              this.match(GrammarParser.STRING);
            }
            break;

          case 6:
            {
              _localctx = new IdentifierExpressionContext(_localctx);
              this._ctx = _localctx;
              _prevctx = _localctx;
              this.state = 41;
              this.identifier();
            }
            break;

          case 7:
            {
              _localctx = new ParenthesesContext(_localctx);
              this._ctx = _localctx;
              _prevctx = _localctx;
              this.state = 42;
              this.parenthesesExpression();
            }
            break;

          case 8:
            {
              _localctx = new NegativeContext(_localctx);
              this._ctx = _localctx;
              _prevctx = _localctx;
              this.state = 43;
              (_localctx as NegativeContext)._operator = this.match(
                GrammarParser.SUB,
              );
              this.state = 44;
              (_localctx as NegativeContext)._argument = this.expression(9);
            }
            break;

          case 9:
            {
              _localctx = new NotContext(_localctx);
              this._ctx = _localctx;
              _prevctx = _localctx;
              this.state = 45;
              (_localctx as NotContext)._operator = this.match(
                GrammarParser.NOT,
              );
              this.state = 46;
              (_localctx as NotContext)._argument = this.expression(8);
            }
            break;

          case 10:
            {
              _localctx = new LetGlobalBindingExpressionContext(_localctx);
              this._ctx = _localctx;
              _prevctx = _localctx;
              this.state = 47;
              this.letGlobalBinding();
            }
            break;

          case 11:
            {
              _localctx = new LetLocalBindingExpressionContext(_localctx);
              this._ctx = _localctx;
              _prevctx = _localctx;
              this.state = 48;
              this.letLocalBinding();
            }
            break;

          case 12:
            {
              _localctx = new FunctionDeclarationExpressionContext(_localctx);
              this._ctx = _localctx;
              _prevctx = _localctx;
              this.state = 49;
              this.functionDeclaration();
            }
            break;

          case 13:
            {
              _localctx = new ConditionalExpressionContext(_localctx);
              this._ctx = _localctx;
              _prevctx = _localctx;
              this.state = 50;
              this.condExp();
            }
            break;

          case 14:
            {
              _localctx = new CallFunctionContext(_localctx);
              this._ctx = _localctx;
              _prevctx = _localctx;
              this.state = 51;
              this.funcApplication();
            }
            break;
        }
        this._ctx._stop = this._input.tryLT(-1);
        this.state = 119;
        this._errHandler.sync(this);
        _alt = this.interpreter.adaptivePredict(this._input, 3, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            if (this._parseListeners != null) {
              this.triggerExitRuleEvent();
            }
            _prevctx = _localctx;
            {
              this.state = 117;
              this._errHandler.sync(this);
              switch (
                this.interpreter.adaptivePredict(this._input, 2, this._ctx)
              ) {
                case 1:
                  {
                    _localctx = new PowerContext(
                      new ExpressionContext(_parentctx, _parentState),
                    );
                    (_localctx as PowerContext)._left = _prevctx;
                    this.pushNewRecursionContext(
                      _localctx,
                      _startState,
                      GrammarParser.RULE_expression,
                    );
                    this.state = 54;
                    if (!this.precpred(this._ctx, 28)) {
                      throw this.createFailedPredicateException(
                        'this.precpred(this._ctx, 28)',
                      );
                    }
                    this.state = 55;
                    (_localctx as PowerContext)._operator = this.match(
                      GrammarParser.POW,
                    );
                    this.state = 56;
                    (_localctx as PowerContext)._right = this.expression(28);
                  }
                  break;

                case 2:
                  {
                    _localctx = new MultiplicationContext(
                      new ExpressionContext(_parentctx, _parentState),
                    );
                    (_localctx as MultiplicationContext)._left = _prevctx;
                    this.pushNewRecursionContext(
                      _localctx,
                      _startState,
                      GrammarParser.RULE_expression,
                    );
                    this.state = 57;
                    if (!this.precpred(this._ctx, 27)) {
                      throw this.createFailedPredicateException(
                        'this.precpred(this._ctx, 27)',
                      );
                    }
                    this.state = 58;
                    (_localctx as MultiplicationContext)._operator = this.match(
                      GrammarParser.MUL,
                    );
                    this.state = 59;
                    (_localctx as MultiplicationContext)._right =
                      this.expression(28);
                  }
                  break;

                case 3:
                  {
                    _localctx = new DivisionContext(
                      new ExpressionContext(_parentctx, _parentState),
                    );
                    (_localctx as DivisionContext)._left = _prevctx;
                    this.pushNewRecursionContext(
                      _localctx,
                      _startState,
                      GrammarParser.RULE_expression,
                    );
                    this.state = 60;
                    if (!this.precpred(this._ctx, 26)) {
                      throw this.createFailedPredicateException(
                        'this.precpred(this._ctx, 26)',
                      );
                    }
                    this.state = 61;
                    (_localctx as DivisionContext)._operator = this.match(
                      GrammarParser.DIV,
                    );
                    this.state = 62;
                    (_localctx as DivisionContext)._right = this.expression(27);
                  }
                  break;

                case 4:
                  {
                    _localctx = new MultiplicationFloatContext(
                      new ExpressionContext(_parentctx, _parentState),
                    );
                    (_localctx as MultiplicationFloatContext)._left = _prevctx;
                    this.pushNewRecursionContext(
                      _localctx,
                      _startState,
                      GrammarParser.RULE_expression,
                    );
                    this.state = 63;
                    if (!this.precpred(this._ctx, 25)) {
                      throw this.createFailedPredicateException(
                        'this.precpred(this._ctx, 25)',
                      );
                    }
                    this.state = 64;
                    (_localctx as MultiplicationFloatContext)._operator =
                      this.match(GrammarParser.MULFLOAT);
                    this.state = 65;
                    (_localctx as MultiplicationFloatContext)._right =
                      this.expression(26);
                  }
                  break;

                case 5:
                  {
                    _localctx = new DivisionFloatContext(
                      new ExpressionContext(_parentctx, _parentState),
                    );
                    (_localctx as DivisionFloatContext)._left = _prevctx;
                    this.pushNewRecursionContext(
                      _localctx,
                      _startState,
                      GrammarParser.RULE_expression,
                    );
                    this.state = 66;
                    if (!this.precpred(this._ctx, 24)) {
                      throw this.createFailedPredicateException(
                        'this.precpred(this._ctx, 24)',
                      );
                    }
                    this.state = 67;
                    (_localctx as DivisionFloatContext)._operator = this.match(
                      GrammarParser.DIVFLOAT,
                    );
                    this.state = 68;
                    (_localctx as DivisionFloatContext)._right =
                      this.expression(25);
                  }
                  break;

                case 6:
                  {
                    _localctx = new ModulusContext(
                      new ExpressionContext(_parentctx, _parentState),
                    );
                    (_localctx as ModulusContext)._left = _prevctx;
                    this.pushNewRecursionContext(
                      _localctx,
                      _startState,
                      GrammarParser.RULE_expression,
                    );
                    this.state = 69;
                    if (!this.precpred(this._ctx, 23)) {
                      throw this.createFailedPredicateException(
                        'this.precpred(this._ctx, 23)',
                      );
                    }
                    this.state = 70;
                    (_localctx as ModulusContext)._operator = this.match(
                      GrammarParser.MOD,
                    );
                    this.state = 71;
                    (_localctx as ModulusContext)._right = this.expression(24);
                  }
                  break;

                case 7:
                  {
                    _localctx = new AdditionContext(
                      new ExpressionContext(_parentctx, _parentState),
                    );
                    (_localctx as AdditionContext)._left = _prevctx;
                    this.pushNewRecursionContext(
                      _localctx,
                      _startState,
                      GrammarParser.RULE_expression,
                    );
                    this.state = 72;
                    if (!this.precpred(this._ctx, 22)) {
                      throw this.createFailedPredicateException(
                        'this.precpred(this._ctx, 22)',
                      );
                    }
                    this.state = 73;
                    (_localctx as AdditionContext)._operator = this.match(
                      GrammarParser.ADD,
                    );
                    this.state = 74;
                    (_localctx as AdditionContext)._right = this.expression(23);
                  }
                  break;

                case 8:
                  {
                    _localctx = new SubtractionContext(
                      new ExpressionContext(_parentctx, _parentState),
                    );
                    (_localctx as SubtractionContext)._left = _prevctx;
                    this.pushNewRecursionContext(
                      _localctx,
                      _startState,
                      GrammarParser.RULE_expression,
                    );
                    this.state = 75;
                    if (!this.precpred(this._ctx, 21)) {
                      throw this.createFailedPredicateException(
                        'this.precpred(this._ctx, 21)',
                      );
                    }
                    this.state = 76;
                    (_localctx as SubtractionContext)._operator = this.match(
                      GrammarParser.SUB,
                    );
                    this.state = 77;
                    (_localctx as SubtractionContext)._right =
                      this.expression(22);
                  }
                  break;

                case 9:
                  {
                    _localctx = new AdditionFloatContext(
                      new ExpressionContext(_parentctx, _parentState),
                    );
                    (_localctx as AdditionFloatContext)._left = _prevctx;
                    this.pushNewRecursionContext(
                      _localctx,
                      _startState,
                      GrammarParser.RULE_expression,
                    );
                    this.state = 78;
                    if (!this.precpred(this._ctx, 20)) {
                      throw this.createFailedPredicateException(
                        'this.precpred(this._ctx, 20)',
                      );
                    }
                    this.state = 79;
                    (_localctx as AdditionFloatContext)._operator = this.match(
                      GrammarParser.ADDFLOAT,
                    );
                    this.state = 80;
                    (_localctx as AdditionFloatContext)._right =
                      this.expression(21);
                  }
                  break;

                case 10:
                  {
                    _localctx = new SubtractionFloatContext(
                      new ExpressionContext(_parentctx, _parentState),
                    );
                    (_localctx as SubtractionFloatContext)._left = _prevctx;
                    this.pushNewRecursionContext(
                      _localctx,
                      _startState,
                      GrammarParser.RULE_expression,
                    );
                    this.state = 81;
                    if (!this.precpred(this._ctx, 19)) {
                      throw this.createFailedPredicateException(
                        'this.precpred(this._ctx, 19)',
                      );
                    }
                    this.state = 82;
                    (_localctx as SubtractionFloatContext)._operator =
                      this.match(GrammarParser.SUBFLOAT);
                    this.state = 83;
                    (_localctx as SubtractionFloatContext)._right =
                      this.expression(20);
                  }
                  break;

                case 11:
                  {
                    _localctx = new LessThanContext(
                      new ExpressionContext(_parentctx, _parentState),
                    );
                    (_localctx as LessThanContext)._left = _prevctx;
                    this.pushNewRecursionContext(
                      _localctx,
                      _startState,
                      GrammarParser.RULE_expression,
                    );
                    this.state = 84;
                    if (!this.precpred(this._ctx, 18)) {
                      throw this.createFailedPredicateException(
                        'this.precpred(this._ctx, 18)',
                      );
                    }
                    this.state = 85;
                    (_localctx as LessThanContext)._operator = this.match(
                      GrammarParser.LESSTHAN,
                    );
                    this.state = 86;
                    (_localctx as LessThanContext)._right = this.expression(19);
                  }
                  break;

                case 12:
                  {
                    _localctx = new LessThanOrEqualContext(
                      new ExpressionContext(_parentctx, _parentState),
                    );
                    (_localctx as LessThanOrEqualContext)._left = _prevctx;
                    this.pushNewRecursionContext(
                      _localctx,
                      _startState,
                      GrammarParser.RULE_expression,
                    );
                    this.state = 87;
                    if (!this.precpred(this._ctx, 17)) {
                      throw this.createFailedPredicateException(
                        'this.precpred(this._ctx, 17)',
                      );
                    }
                    this.state = 88;
                    (_localctx as LessThanOrEqualContext)._operator =
                      this.match(GrammarParser.LESSTHANOREQUAL);
                    this.state = 89;
                    (_localctx as LessThanOrEqualContext)._right =
                      this.expression(18);
                  }
                  break;

                case 13:
                  {
                    _localctx = new GreaterThanContext(
                      new ExpressionContext(_parentctx, _parentState),
                    );
                    (_localctx as GreaterThanContext)._left = _prevctx;
                    this.pushNewRecursionContext(
                      _localctx,
                      _startState,
                      GrammarParser.RULE_expression,
                    );
                    this.state = 90;
                    if (!this.precpred(this._ctx, 16)) {
                      throw this.createFailedPredicateException(
                        'this.precpred(this._ctx, 16)',
                      );
                    }
                    this.state = 91;
                    (_localctx as GreaterThanContext)._operator = this.match(
                      GrammarParser.GREATERTHAN,
                    );
                    this.state = 92;
                    (_localctx as GreaterThanContext)._right =
                      this.expression(17);
                  }
                  break;

                case 14:
                  {
                    _localctx = new GreaterThanOrEqualContext(
                      new ExpressionContext(_parentctx, _parentState),
                    );
                    (_localctx as GreaterThanOrEqualContext)._left = _prevctx;
                    this.pushNewRecursionContext(
                      _localctx,
                      _startState,
                      GrammarParser.RULE_expression,
                    );
                    this.state = 93;
                    if (!this.precpred(this._ctx, 15)) {
                      throw this.createFailedPredicateException(
                        'this.precpred(this._ctx, 15)',
                      );
                    }
                    this.state = 94;
                    (_localctx as GreaterThanOrEqualContext)._operator =
                      this.match(GrammarParser.GREATERTHANOREQUAL);
                    this.state = 95;
                    (_localctx as GreaterThanOrEqualContext)._right =
                      this.expression(16);
                  }
                  break;

                case 15:
                  {
                    _localctx = new EqualStructuralContext(
                      new ExpressionContext(_parentctx, _parentState),
                    );
                    (_localctx as EqualStructuralContext)._left = _prevctx;
                    this.pushNewRecursionContext(
                      _localctx,
                      _startState,
                      GrammarParser.RULE_expression,
                    );
                    this.state = 96;
                    if (!this.precpred(this._ctx, 14)) {
                      throw this.createFailedPredicateException(
                        'this.precpred(this._ctx, 14)',
                      );
                    }
                    this.state = 97;
                    (_localctx as EqualStructuralContext)._operator =
                      this.match(GrammarParser.EQUALSTRUC);
                    this.state = 98;
                    (_localctx as EqualStructuralContext)._right =
                      this.expression(15);
                  }
                  break;

                case 16:
                  {
                    _localctx = new NotEqualStructuralContext(
                      new ExpressionContext(_parentctx, _parentState),
                    );
                    (_localctx as NotEqualStructuralContext)._left = _prevctx;
                    this.pushNewRecursionContext(
                      _localctx,
                      _startState,
                      GrammarParser.RULE_expression,
                    );
                    this.state = 99;
                    if (!this.precpred(this._ctx, 13)) {
                      throw this.createFailedPredicateException(
                        'this.precpred(this._ctx, 13)',
                      );
                    }
                    this.state = 100;
                    (_localctx as NotEqualStructuralContext)._operator =
                      this.match(GrammarParser.NOTEQUALSTRUC);
                    this.state = 101;
                    (_localctx as NotEqualStructuralContext)._right =
                      this.expression(14);
                  }
                  break;

                case 17:
                  {
                    _localctx = new EqualPhysicalContext(
                      new ExpressionContext(_parentctx, _parentState),
                    );
                    (_localctx as EqualPhysicalContext)._left = _prevctx;
                    this.pushNewRecursionContext(
                      _localctx,
                      _startState,
                      GrammarParser.RULE_expression,
                    );
                    this.state = 102;
                    if (!this.precpred(this._ctx, 12)) {
                      throw this.createFailedPredicateException(
                        'this.precpred(this._ctx, 12)',
                      );
                    }
                    this.state = 103;
                    (_localctx as EqualPhysicalContext)._operator = this.match(
                      GrammarParser.EQUALPHYS,
                    );
                    this.state = 104;
                    (_localctx as EqualPhysicalContext)._right =
                      this.expression(13);
                  }
                  break;

                case 18:
                  {
                    _localctx = new NotEqualPhysicalContext(
                      new ExpressionContext(_parentctx, _parentState),
                    );
                    (_localctx as NotEqualPhysicalContext)._left = _prevctx;
                    this.pushNewRecursionContext(
                      _localctx,
                      _startState,
                      GrammarParser.RULE_expression,
                    );
                    this.state = 105;
                    if (!this.precpred(this._ctx, 11)) {
                      throw this.createFailedPredicateException(
                        'this.precpred(this._ctx, 11)',
                      );
                    }
                    this.state = 106;
                    (_localctx as NotEqualPhysicalContext)._operator =
                      this.match(GrammarParser.NOTEQUALPHYS);
                    this.state = 107;
                    (_localctx as NotEqualPhysicalContext)._right =
                      this.expression(12);
                  }
                  break;

                case 19:
                  {
                    _localctx = new ConcatenationContext(
                      new ExpressionContext(_parentctx, _parentState),
                    );
                    (_localctx as ConcatenationContext)._left = _prevctx;
                    this.pushNewRecursionContext(
                      _localctx,
                      _startState,
                      GrammarParser.RULE_expression,
                    );
                    this.state = 108;
                    if (!this.precpred(this._ctx, 10)) {
                      throw this.createFailedPredicateException(
                        'this.precpred(this._ctx, 10)',
                      );
                    }
                    this.state = 109;
                    (_localctx as ConcatenationContext)._operator = this.match(
                      GrammarParser.CONCAT,
                    );
                    this.state = 110;
                    (_localctx as ConcatenationContext)._right =
                      this.expression(11);
                  }
                  break;

                case 20:
                  {
                    _localctx = new AndContext(
                      new ExpressionContext(_parentctx, _parentState),
                    );
                    (_localctx as AndContext)._left = _prevctx;
                    this.pushNewRecursionContext(
                      _localctx,
                      _startState,
                      GrammarParser.RULE_expression,
                    );
                    this.state = 111;
                    if (!this.precpred(this._ctx, 7)) {
                      throw this.createFailedPredicateException(
                        'this.precpred(this._ctx, 7)',
                      );
                    }
                    this.state = 112;
                    (_localctx as AndContext)._operator = this.match(
                      GrammarParser.AND,
                    );
                    this.state = 113;
                    (_localctx as AndContext)._right = this.expression(8);
                  }
                  break;

                case 21:
                  {
                    _localctx = new OrContext(
                      new ExpressionContext(_parentctx, _parentState),
                    );
                    (_localctx as OrContext)._left = _prevctx;
                    this.pushNewRecursionContext(
                      _localctx,
                      _startState,
                      GrammarParser.RULE_expression,
                    );
                    this.state = 114;
                    if (!this.precpred(this._ctx, 6)) {
                      throw this.createFailedPredicateException(
                        'this.precpred(this._ctx, 6)',
                      );
                    }
                    this.state = 115;
                    (_localctx as OrContext)._operator = this.match(
                      GrammarParser.OR,
                    );
                    this.state = 116;
                    (_localctx as OrContext)._right = this.expression(7);
                  }
                  break;
              }
            }
          }
          this.state = 121;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 3, this._ctx);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.unrollRecursionContexts(_parentctx);
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public identifier(): IdentifierContext {
    const _localctx: IdentifierContext = new IdentifierContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 6, GrammarParser.RULE_identifier);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 122;
        this.match(GrammarParser.IDENTIFIER);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public funcApplication(): FuncApplicationContext {
    const _localctx: FuncApplicationContext = new FuncApplicationContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 8, GrammarParser.RULE_funcApplication);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 124;
        _localctx._func = this.identifier();
        this.state = 125;
        _localctx._args = this.expressionLists();
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public parenthesesExpression(): ParenthesesExpressionContext {
    const _localctx: ParenthesesExpressionContext =
      new ParenthesesExpressionContext(this._ctx, this.state);
    this.enterRule(_localctx, 10, GrammarParser.RULE_parenthesesExpression);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 127;
        this.match(GrammarParser.T__0);
        this.state = 128;
        _localctx._inner = this.expression(0);
        this.state = 129;
        this.match(GrammarParser.T__1);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public condExp(): CondExpContext {
    const _localctx: CondExpContext = new CondExpContext(this._ctx, this.state);
    this.enterRule(_localctx, 12, GrammarParser.RULE_condExp);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 131;
        this.match(GrammarParser.IF);
        this.state = 132;
        _localctx._test = this.expression(0);
        this.state = 133;
        this.match(GrammarParser.THEN);
        this.state = 134;
        _localctx._consequent = this.expression(0);
        this.state = 135;
        this.match(GrammarParser.ELSE);
        this.state = 136;
        _localctx._alternate = this.expression(0);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public letGlobalBinding(): LetGlobalBindingContext {
    const _localctx: LetGlobalBindingContext = new LetGlobalBindingContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 14, GrammarParser.RULE_letGlobalBinding);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 138;
        this.match(GrammarParser.LET);
        {
          this.state = 140;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
          if (_la === GrammarParser.REC) {
            {
              this.state = 139;
              this.match(GrammarParser.REC);
            }
          }
        }
        this.state = 142;
        _localctx._id = this.identifier();
        this.state = 143;
        this.match(GrammarParser.EQUALSTRUC);
        this.state = 144;
        _localctx._init = this.expression(0);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public letLocalBinding(): LetLocalBindingContext {
    const _localctx: LetLocalBindingContext = new LetLocalBindingContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 16, GrammarParser.RULE_letLocalBinding);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 148;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 5, this._ctx)) {
          case 1:
            {
              this.state = 146;
              this.letGlobalBinding();
            }
            break;

          case 2:
            {
              this.state = 147;
              this.functionDeclaration();
            }
            break;
        }
        this.state = 150;
        this.match(GrammarParser.IN);
        this.state = 151;
        _localctx._exp2 = this.expression(0);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public identifierList(): IdentifierListContext {
    const _localctx: IdentifierListContext = new IdentifierListContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 18, GrammarParser.RULE_identifierList);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 153;
        this.identifier();
        this.state = 157;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === GrammarParser.IDENTIFIER) {
          {
            {
              this.state = 154;
              this.identifier();
            }
          }
          this.state = 159;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public expressionLists(): ExpressionListsContext {
    const _localctx: ExpressionListsContext = new ExpressionListsContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 20, GrammarParser.RULE_expressionLists);
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 160;
        this.expression(0);
        this.state = 164;
        this._errHandler.sync(this);
        _alt = this.interpreter.adaptivePredict(this._input, 7, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            {
              {
                this.state = 161;
                this.expression(0);
              }
            }
          }
          this.state = 166;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 7, this._ctx);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public functionDeclaration(): FunctionDeclarationContext {
    const _localctx: FunctionDeclarationContext = new FunctionDeclarationContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 22, GrammarParser.RULE_functionDeclaration);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 167;
        this.match(GrammarParser.LET);
        {
          this.state = 169;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
          if (_la === GrammarParser.REC) {
            {
              this.state = 168;
              this.match(GrammarParser.REC);
            }
          }
        }
        this.state = 171;
        _localctx._ids = this.identifierList();
        this.state = 172;
        this.match(GrammarParser.EQUALSTRUC);
        this.state = 173;
        _localctx._body = this.expression(0);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }

  public sempred(
    _localctx: RuleContext,
    ruleIndex: number,
    predIndex: number,
  ): boolean {
    switch (ruleIndex) {
      case 2:
        return this.expression_sempred(
          _localctx as ExpressionContext,
          predIndex,
        );
    }
    return true;
  }
  private expression_sempred(
    _localctx: ExpressionContext,
    predIndex: number,
  ): boolean {
    switch (predIndex) {
      case 0:
        return this.precpred(this._ctx, 28);

      case 1:
        return this.precpred(this._ctx, 27);

      case 2:
        return this.precpred(this._ctx, 26);

      case 3:
        return this.precpred(this._ctx, 25);

      case 4:
        return this.precpred(this._ctx, 24);

      case 5:
        return this.precpred(this._ctx, 23);

      case 6:
        return this.precpred(this._ctx, 22);

      case 7:
        return this.precpred(this._ctx, 21);

      case 8:
        return this.precpred(this._ctx, 20);

      case 9:
        return this.precpred(this._ctx, 19);

      case 10:
        return this.precpred(this._ctx, 18);

      case 11:
        return this.precpred(this._ctx, 17);

      case 12:
        return this.precpred(this._ctx, 16);

      case 13:
        return this.precpred(this._ctx, 15);

      case 14:
        return this.precpred(this._ctx, 14);

      case 15:
        return this.precpred(this._ctx, 13);

      case 16:
        return this.precpred(this._ctx, 12);

      case 17:
        return this.precpred(this._ctx, 11);

      case 18:
        return this.precpred(this._ctx, 10);

      case 19:
        return this.precpred(this._ctx, 7);

      case 20:
        return this.precpred(this._ctx, 6);
    }
    return true;
  }

  public static readonly _serializedATN: string =
    '\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03)\xB2\x04\x02' +
    '\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07' +
    '\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x03' +
    '\x02\x07\x02\x1C\n\x02\f\x02\x0E\x02\x1F\v\x02\x03\x02\x03\x02\x03\x03' +
    '\x03\x03\x03\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04' +
    '\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04' +
    '\x03\x04\x05\x047\n\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04' +
    '\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04' +
    '\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04' +
    '\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04' +
    '\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04' +
    '\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04' +
    '\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04' +
    '\x03\x04\x03\x04\x03\x04\x07\x04x\n\x04\f\x04\x0E\x04{\v\x04\x03\x05\x03' +
    '\x05\x03\x06\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07\x03\x07\x03\b\x03' +
    '\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\t\x03\t\x05\t\x8F\n\t\x03\t\x03\t' +
    '\x03\t\x03\t\x03\n\x03\n\x05\n\x97\n\n\x03\n\x03\n\x03\n\x03\v\x03\v\x07' +
    '\v\x9E\n\v\f\v\x0E\v\xA1\v\v\x03\f\x03\f\x07\f\xA5\n\f\f\f\x0E\f\xA8\v' +
    '\f\x03\r\x03\r\x05\r\xAC\n\r\x03\r\x03\r\x03\r\x03\r\x03\r\x02\x02\x03' +
    '\x06\x0E\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12' +
    '\x02\x14\x02\x16\x02\x18\x02\x02\x02\x02\xCD\x02\x1D\x03\x02\x02\x02\x04' +
    '"\x03\x02\x02\x02\x066\x03\x02\x02\x02\b|\x03\x02\x02\x02\n~\x03\x02' +
    '\x02\x02\f\x81\x03\x02\x02\x02\x0E\x85\x03\x02\x02\x02\x10\x8C\x03\x02' +
    '\x02\x02\x12\x96\x03\x02\x02\x02\x14\x9B\x03\x02\x02\x02\x16\xA2\x03\x02' +
    '\x02\x02\x18\xA9\x03\x02\x02\x02\x1A\x1C\x05\x04\x03\x02\x1B\x1A\x03\x02' +
    '\x02\x02\x1C\x1F\x03\x02\x02\x02\x1D\x1B\x03\x02\x02\x02\x1D\x1E\x03\x02' +
    '\x02\x02\x1E \x03\x02\x02\x02\x1F\x1D\x03\x02\x02\x02 !\x07\x02\x02\x03' +
    '!\x03\x03\x02\x02\x02"#\x05\x06\x04\x02#$\x07\'\x02\x02$\x05\x03\x02' +
    "\x02\x02%&\b\x04\x01\x02&7\x07\x1B\x02\x02'7\x07\x1F\x02\x02(7\x07 \x02" +
    '\x02)7\x07\x1D\x02\x02*7\x07\x1E\x02\x02+7\x05\b\x05\x02,7\x05\f\x07\x02' +
    '-.\x07\t\x02\x02.7\x05\x06\x04\v/0\x07\x1A\x02\x0207\x05\x06\x04\n17\x05' +
    '\x10\t\x0227\x05\x12\n\x0237\x05\x18\r\x0247\x05\x0E\b\x0257\x05\n\x06' +
    "\x026%\x03\x02\x02\x026'\x03\x02\x02\x026(\x03\x02\x02\x026)\x03\x02" +
    '\x02\x026*\x03\x02\x02\x026+\x03\x02\x02\x026,\x03\x02\x02\x026-\x03\x02' +
    '\x02\x026/\x03\x02\x02\x0261\x03\x02\x02\x0262\x03\x02\x02\x0263\x03\x02' +
    '\x02\x0264\x03\x02\x02\x0265\x03\x02\x02\x027y\x03\x02\x02\x0289\f\x1E' +
    '\x02\x029:\x07\x05\x02\x02:x\x05\x06\x04\x1E;<\f\x1D\x02\x02<=\x07\x06' +
    '\x02\x02=x\x05\x06\x04\x1E>?\f\x1C\x02\x02?@\x07\x07\x02\x02@x\x05\x06' +
    '\x04\x1DAB\f\x1B\x02\x02BC\x07\r\x02\x02Cx\x05\x06\x04\x1CDE\f\x1A\x02' +
    '\x02EF\x07\x0E\x02\x02Fx\x05\x06\x04\x1BGH\f\x19\x02\x02HI\x07\n\x02\x02' +
    'Ix\x05\x06\x04\x1AJK\f\x18\x02\x02KL\x07\b\x02\x02Lx\x05\x06\x04\x19M' +
    'N\f\x17\x02\x02NO\x07\t\x02\x02Ox\x05\x06\x04\x18PQ\f\x16\x02\x02QR\x07' +
    '\v\x02\x02Rx\x05\x06\x04\x17ST\f\x15\x02\x02TU\x07\f\x02\x02Ux\x05\x06' +
    '\x04\x16VW\f\x14\x02\x02WX\x07\x0F\x02\x02Xx\x05\x06\x04\x15YZ\f\x13\x02' +
    '\x02Z[\x07\x10\x02\x02[x\x05\x06\x04\x14\\]\f\x12\x02\x02]^\x07\x11\x02' +
    '\x02^x\x05\x06\x04\x13_`\f\x11\x02\x02`a\x07\x12\x02\x02ax\x05\x06\x04' +
    '\x12bc\f\x10\x02\x02cd\x07\x13\x02\x02dx\x05\x06\x04\x11ef\f\x0F\x02\x02' +
    'fg\x07\x14\x02\x02gx\x05\x06\x04\x10hi\f\x0E\x02\x02ij\x07\x15\x02\x02' +
    'jx\x05\x06\x04\x0Fkl\f\r\x02\x02lm\x07\x16\x02\x02mx\x05\x06\x04\x0En' +
    'o\f\f\x02\x02op\x07\x17\x02\x02px\x05\x06\x04\rqr\f\t\x02\x02rs\x07\x18' +
    '\x02\x02sx\x05\x06\x04\ntu\f\b\x02\x02uv\x07\x19\x02\x02vx\x05\x06\x04' +
    '\tw8\x03\x02\x02\x02w;\x03\x02\x02\x02w>\x03\x02\x02\x02wA\x03\x02\x02' +
    '\x02wD\x03\x02\x02\x02wG\x03\x02\x02\x02wJ\x03\x02\x02\x02wM\x03\x02\x02' +
    '\x02wP\x03\x02\x02\x02wS\x03\x02\x02\x02wV\x03\x02\x02\x02wY\x03\x02\x02' +
    '\x02w\\\x03\x02\x02\x02w_\x03\x02\x02\x02wb\x03\x02\x02\x02we\x03\x02' +
    '\x02\x02wh\x03\x02\x02\x02wk\x03\x02\x02\x02wn\x03\x02\x02\x02wq\x03\x02' +
    '\x02\x02wt\x03\x02\x02\x02x{\x03\x02\x02\x02yw\x03\x02\x02\x02yz\x03\x02' +
    '\x02\x02z\x07\x03\x02\x02\x02{y\x03\x02\x02\x02|}\x07)\x02\x02}\t\x03' +
    '\x02\x02\x02~\x7F\x05\b\x05\x02\x7F\x80\x05\x16\f\x02\x80\v\x03\x02\x02' +
    '\x02\x81\x82\x07\x03\x02\x02\x82\x83\x05\x06\x04\x02\x83\x84\x07\x04\x02' +
    '\x02\x84\r\x03\x02\x02\x02\x85\x86\x07!\x02\x02\x86\x87\x05\x06\x04\x02' +
    '\x87\x88\x07"\x02\x02\x88\x89\x05\x06\x04\x02\x89\x8A\x07#\x02\x02\x8A' +
    '\x8B\x05\x06\x04\x02\x8B\x0F\x03\x02\x02\x02\x8C\x8E\x07$\x02\x02\x8D' +
    '\x8F\x07&\x02\x02\x8E\x8D\x03\x02\x02\x02\x8E\x8F\x03\x02\x02\x02\x8F' +
    '\x90\x03\x02\x02\x02\x90\x91\x05\b\x05\x02\x91\x92\x07\x13\x02\x02\x92' +
    '\x93\x05\x06\x04\x02\x93\x11\x03\x02\x02\x02\x94\x97\x05\x10\t\x02\x95' +
    '\x97\x05\x18\r\x02\x96\x94\x03\x02\x02\x02\x96\x95\x03\x02\x02\x02\x97' +
    '\x98\x03\x02\x02\x02\x98\x99\x07%\x02\x02\x99\x9A\x05\x06\x04\x02\x9A' +
    '\x13\x03\x02\x02\x02\x9B\x9F\x05\b\x05\x02\x9C\x9E\x05\b\x05\x02\x9D\x9C' +
    '\x03\x02\x02\x02\x9E\xA1\x03\x02\x02\x02\x9F\x9D\x03\x02\x02\x02\x9F\xA0' +
    '\x03\x02\x02\x02\xA0\x15\x03\x02\x02\x02\xA1\x9F\x03\x02\x02\x02\xA2\xA6' +
    '\x05\x06\x04\x02\xA3\xA5\x05\x06\x04\x02\xA4\xA3\x03\x02\x02\x02\xA5\xA8' +
    '\x03\x02\x02\x02\xA6\xA4\x03\x02\x02\x02\xA6\xA7\x03\x02\x02\x02\xA7\x17' +
    '\x03\x02\x02\x02\xA8\xA6\x03\x02\x02\x02\xA9\xAB\x07$\x02\x02\xAA\xAC' +
    '\x07&\x02\x02\xAB\xAA\x03\x02\x02\x02\xAB\xAC\x03\x02\x02\x02\xAC\xAD' +
    '\x03\x02\x02\x02\xAD\xAE\x05\x14\v\x02\xAE\xAF\x07\x13\x02\x02\xAF\xB0' +
    '\x05\x06\x04\x02\xB0\x19\x03\x02\x02\x02\v\x1D6wy\x8E\x96\x9F\xA6\xAB';
  public static __ATN: ATN;
  public static get _ATN(): ATN {
    if (!GrammarParser.__ATN) {
      GrammarParser.__ATN = new ATNDeserializer().deserialize(
        Utils.toCharArray(GrammarParser._serializedATN),
      );
    }

    return GrammarParser.__ATN;
  }
}

export class StartContext extends ParserRuleContext {
  public EOF(): TerminalNode {
    return this.getToken(GrammarParser.EOF, 0);
  }
  public statements(): StatementsContext[];
  public statements(i: number): StatementsContext;
  public statements(i?: number): StatementsContext | StatementsContext[] {
    if (i === undefined) {
      return this.getRuleContexts(StatementsContext);
    } else {
      return this.getRuleContext(i, StatementsContext);
    }
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return GrammarParser.RULE_start;
  }
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

export class StatementsContext extends ParserRuleContext {
  public expression(): ExpressionContext {
    return this.getRuleContext(0, ExpressionContext);
  }
  public DOUBLESEMICOLON(): TerminalNode {
    return this.getToken(GrammarParser.DOUBLESEMICOLON, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return GrammarParser.RULE_statements;
  }
  // @Override
  public enterRule(listener: GrammarListener): void {
    if (listener.enterStatements) {
      listener.enterStatements(this);
    }
  }
  // @Override
  public exitRule(listener: GrammarListener): void {
    if (listener.exitStatements) {
      listener.exitStatements(this);
    }
  }
  // @Override
  public accept<Result>(visitor: GrammarVisitor<Result>): Result {
    if (visitor.visitStatements) {
      return visitor.visitStatements(this);
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
  public get ruleIndex(): number {
    return GrammarParser.RULE_expression;
  }
  public copyFrom(ctx: ExpressionContext): void {
    super.copyFrom(ctx);
  }
}
export class NumberContext extends ExpressionContext {
  public NUMBER(): TerminalNode {
    return this.getToken(GrammarParser.NUMBER, 0);
  }
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
  public FLOAT(): TerminalNode {
    return this.getToken(GrammarParser.FLOAT, 0);
  }
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
  public BOOLEAN(): TerminalNode {
    return this.getToken(GrammarParser.BOOLEAN, 0);
  }
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
  public CHAR(): TerminalNode {
    return this.getToken(GrammarParser.CHAR, 0);
  }
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
  public STRING(): TerminalNode {
    return this.getToken(GrammarParser.STRING, 0);
  }
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
export class IdentifierExpressionContext extends ExpressionContext {
  public identifier(): IdentifierContext {
    return this.getRuleContext(0, IdentifierContext);
  }
  constructor(ctx: ExpressionContext) {
    super(ctx.parent, ctx.invokingState);
    this.copyFrom(ctx);
  }
  // @Override
  public enterRule(listener: GrammarListener): void {
    if (listener.enterIdentifierExpression) {
      listener.enterIdentifierExpression(this);
    }
  }
  // @Override
  public exitRule(listener: GrammarListener): void {
    if (listener.exitIdentifierExpression) {
      listener.exitIdentifierExpression(this);
    }
  }
  // @Override
  public accept<Result>(visitor: GrammarVisitor<Result>): Result {
    if (visitor.visitIdentifierExpression) {
      return visitor.visitIdentifierExpression(this);
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
  public POW(): TerminalNode {
    return this.getToken(GrammarParser.POW, 0);
  }
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
  public MUL(): TerminalNode {
    return this.getToken(GrammarParser.MUL, 0);
  }
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
  public DIV(): TerminalNode {
    return this.getToken(GrammarParser.DIV, 0);
  }
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
  public MULFLOAT(): TerminalNode {
    return this.getToken(GrammarParser.MULFLOAT, 0);
  }
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
  public DIVFLOAT(): TerminalNode {
    return this.getToken(GrammarParser.DIVFLOAT, 0);
  }
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
  public MOD(): TerminalNode {
    return this.getToken(GrammarParser.MOD, 0);
  }
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
  public ADD(): TerminalNode {
    return this.getToken(GrammarParser.ADD, 0);
  }
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
  public SUB(): TerminalNode {
    return this.getToken(GrammarParser.SUB, 0);
  }
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
  public ADDFLOAT(): TerminalNode {
    return this.getToken(GrammarParser.ADDFLOAT, 0);
  }
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
  public SUBFLOAT(): TerminalNode {
    return this.getToken(GrammarParser.SUBFLOAT, 0);
  }
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
  public LESSTHAN(): TerminalNode {
    return this.getToken(GrammarParser.LESSTHAN, 0);
  }
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
  public LESSTHANOREQUAL(): TerminalNode {
    return this.getToken(GrammarParser.LESSTHANOREQUAL, 0);
  }
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
  public GREATERTHAN(): TerminalNode {
    return this.getToken(GrammarParser.GREATERTHAN, 0);
  }
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
  public GREATERTHANOREQUAL(): TerminalNode {
    return this.getToken(GrammarParser.GREATERTHANOREQUAL, 0);
  }
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
  public EQUALSTRUC(): TerminalNode {
    return this.getToken(GrammarParser.EQUALSTRUC, 0);
  }
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
  public NOTEQUALSTRUC(): TerminalNode {
    return this.getToken(GrammarParser.NOTEQUALSTRUC, 0);
  }
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
  public EQUALPHYS(): TerminalNode {
    return this.getToken(GrammarParser.EQUALPHYS, 0);
  }
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
  public NOTEQUALPHYS(): TerminalNode {
    return this.getToken(GrammarParser.NOTEQUALPHYS, 0);
  }
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
  public CONCAT(): TerminalNode {
    return this.getToken(GrammarParser.CONCAT, 0);
  }
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
export class NegativeContext extends ExpressionContext {
  public _operator!: Token;
  public _argument!: ExpressionContext;
  public SUB(): TerminalNode {
    return this.getToken(GrammarParser.SUB, 0);
  }
  public expression(): ExpressionContext {
    return this.getRuleContext(0, ExpressionContext);
  }
  constructor(ctx: ExpressionContext) {
    super(ctx.parent, ctx.invokingState);
    this.copyFrom(ctx);
  }
  // @Override
  public enterRule(listener: GrammarListener): void {
    if (listener.enterNegative) {
      listener.enterNegative(this);
    }
  }
  // @Override
  public exitRule(listener: GrammarListener): void {
    if (listener.exitNegative) {
      listener.exitNegative(this);
    }
  }
  // @Override
  public accept<Result>(visitor: GrammarVisitor<Result>): Result {
    if (visitor.visitNegative) {
      return visitor.visitNegative(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class NotContext extends ExpressionContext {
  public _operator!: Token;
  public _argument!: ExpressionContext;
  public NOT(): TerminalNode {
    return this.getToken(GrammarParser.NOT, 0);
  }
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
  public AND(): TerminalNode {
    return this.getToken(GrammarParser.AND, 0);
  }
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
  public OR(): TerminalNode {
    return this.getToken(GrammarParser.OR, 0);
  }
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
export class LetGlobalBindingExpressionContext extends ExpressionContext {
  public letGlobalBinding(): LetGlobalBindingContext {
    return this.getRuleContext(0, LetGlobalBindingContext);
  }
  constructor(ctx: ExpressionContext) {
    super(ctx.parent, ctx.invokingState);
    this.copyFrom(ctx);
  }
  // @Override
  public enterRule(listener: GrammarListener): void {
    if (listener.enterLetGlobalBindingExpression) {
      listener.enterLetGlobalBindingExpression(this);
    }
  }
  // @Override
  public exitRule(listener: GrammarListener): void {
    if (listener.exitLetGlobalBindingExpression) {
      listener.exitLetGlobalBindingExpression(this);
    }
  }
  // @Override
  public accept<Result>(visitor: GrammarVisitor<Result>): Result {
    if (visitor.visitLetGlobalBindingExpression) {
      return visitor.visitLetGlobalBindingExpression(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class LetLocalBindingExpressionContext extends ExpressionContext {
  public letLocalBinding(): LetLocalBindingContext {
    return this.getRuleContext(0, LetLocalBindingContext);
  }
  constructor(ctx: ExpressionContext) {
    super(ctx.parent, ctx.invokingState);
    this.copyFrom(ctx);
  }
  // @Override
  public enterRule(listener: GrammarListener): void {
    if (listener.enterLetLocalBindingExpression) {
      listener.enterLetLocalBindingExpression(this);
    }
  }
  // @Override
  public exitRule(listener: GrammarListener): void {
    if (listener.exitLetLocalBindingExpression) {
      listener.exitLetLocalBindingExpression(this);
    }
  }
  // @Override
  public accept<Result>(visitor: GrammarVisitor<Result>): Result {
    if (visitor.visitLetLocalBindingExpression) {
      return visitor.visitLetLocalBindingExpression(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class FunctionDeclarationExpressionContext extends ExpressionContext {
  public functionDeclaration(): FunctionDeclarationContext {
    return this.getRuleContext(0, FunctionDeclarationContext);
  }
  constructor(ctx: ExpressionContext) {
    super(ctx.parent, ctx.invokingState);
    this.copyFrom(ctx);
  }
  // @Override
  public enterRule(listener: GrammarListener): void {
    if (listener.enterFunctionDeclarationExpression) {
      listener.enterFunctionDeclarationExpression(this);
    }
  }
  // @Override
  public exitRule(listener: GrammarListener): void {
    if (listener.exitFunctionDeclarationExpression) {
      listener.exitFunctionDeclarationExpression(this);
    }
  }
  // @Override
  public accept<Result>(visitor: GrammarVisitor<Result>): Result {
    if (visitor.visitFunctionDeclarationExpression) {
      return visitor.visitFunctionDeclarationExpression(this);
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
export class CallFunctionContext extends ExpressionContext {
  public funcApplication(): FuncApplicationContext {
    return this.getRuleContext(0, FuncApplicationContext);
  }
  constructor(ctx: ExpressionContext) {
    super(ctx.parent, ctx.invokingState);
    this.copyFrom(ctx);
  }
  // @Override
  public enterRule(listener: GrammarListener): void {
    if (listener.enterCallFunction) {
      listener.enterCallFunction(this);
    }
  }
  // @Override
  public exitRule(listener: GrammarListener): void {
    if (listener.exitCallFunction) {
      listener.exitCallFunction(this);
    }
  }
  // @Override
  public accept<Result>(visitor: GrammarVisitor<Result>): Result {
    if (visitor.visitCallFunction) {
      return visitor.visitCallFunction(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class IdentifierContext extends ParserRuleContext {
  public IDENTIFIER(): TerminalNode {
    return this.getToken(GrammarParser.IDENTIFIER, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return GrammarParser.RULE_identifier;
  }
  // @Override
  public enterRule(listener: GrammarListener): void {
    if (listener.enterIdentifier) {
      listener.enterIdentifier(this);
    }
  }
  // @Override
  public exitRule(listener: GrammarListener): void {
    if (listener.exitIdentifier) {
      listener.exitIdentifier(this);
    }
  }
  // @Override
  public accept<Result>(visitor: GrammarVisitor<Result>): Result {
    if (visitor.visitIdentifier) {
      return visitor.visitIdentifier(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class FuncApplicationContext extends ParserRuleContext {
  public _func!: IdentifierContext;
  public _args!: ExpressionListsContext;
  public identifier(): IdentifierContext {
    return this.getRuleContext(0, IdentifierContext);
  }
  public expressionLists(): ExpressionListsContext {
    return this.getRuleContext(0, ExpressionListsContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return GrammarParser.RULE_funcApplication;
  }
  // @Override
  public enterRule(listener: GrammarListener): void {
    if (listener.enterFuncApplication) {
      listener.enterFuncApplication(this);
    }
  }
  // @Override
  public exitRule(listener: GrammarListener): void {
    if (listener.exitFuncApplication) {
      listener.exitFuncApplication(this);
    }
  }
  // @Override
  public accept<Result>(visitor: GrammarVisitor<Result>): Result {
    if (visitor.visitFuncApplication) {
      return visitor.visitFuncApplication(this);
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
  public get ruleIndex(): number {
    return GrammarParser.RULE_parenthesesExpression;
  }
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
  public IF(): TerminalNode {
    return this.getToken(GrammarParser.IF, 0);
  }
  public THEN(): TerminalNode {
    return this.getToken(GrammarParser.THEN, 0);
  }
  public ELSE(): TerminalNode {
    return this.getToken(GrammarParser.ELSE, 0);
  }
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
  public get ruleIndex(): number {
    return GrammarParser.RULE_condExp;
  }
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

export class LetGlobalBindingContext extends ParserRuleContext {
  public _id!: IdentifierContext;
  public _init!: ExpressionContext;
  public LET(): TerminalNode {
    return this.getToken(GrammarParser.LET, 0);
  }
  public EQUALSTRUC(): TerminalNode {
    return this.getToken(GrammarParser.EQUALSTRUC, 0);
  }
  public identifier(): IdentifierContext {
    return this.getRuleContext(0, IdentifierContext);
  }
  public expression(): ExpressionContext {
    return this.getRuleContext(0, ExpressionContext);
  }
  public REC(): TerminalNode | undefined {
    return this.tryGetToken(GrammarParser.REC, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return GrammarParser.RULE_letGlobalBinding;
  }
  // @Override
  public enterRule(listener: GrammarListener): void {
    if (listener.enterLetGlobalBinding) {
      listener.enterLetGlobalBinding(this);
    }
  }
  // @Override
  public exitRule(listener: GrammarListener): void {
    if (listener.exitLetGlobalBinding) {
      listener.exitLetGlobalBinding(this);
    }
  }
  // @Override
  public accept<Result>(visitor: GrammarVisitor<Result>): Result {
    if (visitor.visitLetGlobalBinding) {
      return visitor.visitLetGlobalBinding(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class LetLocalBindingContext extends ParserRuleContext {
  public _exp2!: ExpressionContext;
  public IN(): TerminalNode {
    return this.getToken(GrammarParser.IN, 0);
  }
  public expression(): ExpressionContext {
    return this.getRuleContext(0, ExpressionContext);
  }
  public letGlobalBinding(): LetGlobalBindingContext | undefined {
    return this.tryGetRuleContext(0, LetGlobalBindingContext);
  }
  public functionDeclaration(): FunctionDeclarationContext | undefined {
    return this.tryGetRuleContext(0, FunctionDeclarationContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return GrammarParser.RULE_letLocalBinding;
  }
  // @Override
  public enterRule(listener: GrammarListener): void {
    if (listener.enterLetLocalBinding) {
      listener.enterLetLocalBinding(this);
    }
  }
  // @Override
  public exitRule(listener: GrammarListener): void {
    if (listener.exitLetLocalBinding) {
      listener.exitLetLocalBinding(this);
    }
  }
  // @Override
  public accept<Result>(visitor: GrammarVisitor<Result>): Result {
    if (visitor.visitLetLocalBinding) {
      return visitor.visitLetLocalBinding(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class IdentifierListContext extends ParserRuleContext {
  public identifier(): IdentifierContext[];
  public identifier(i: number): IdentifierContext;
  public identifier(i?: number): IdentifierContext | IdentifierContext[] {
    if (i === undefined) {
      return this.getRuleContexts(IdentifierContext);
    } else {
      return this.getRuleContext(i, IdentifierContext);
    }
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return GrammarParser.RULE_identifierList;
  }
  // @Override
  public enterRule(listener: GrammarListener): void {
    if (listener.enterIdentifierList) {
      listener.enterIdentifierList(this);
    }
  }
  // @Override
  public exitRule(listener: GrammarListener): void {
    if (listener.exitIdentifierList) {
      listener.exitIdentifierList(this);
    }
  }
  // @Override
  public accept<Result>(visitor: GrammarVisitor<Result>): Result {
    if (visitor.visitIdentifierList) {
      return visitor.visitIdentifierList(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class ExpressionListsContext extends ParserRuleContext {
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
  public get ruleIndex(): number {
    return GrammarParser.RULE_expressionLists;
  }
  // @Override
  public enterRule(listener: GrammarListener): void {
    if (listener.enterExpressionLists) {
      listener.enterExpressionLists(this);
    }
  }
  // @Override
  public exitRule(listener: GrammarListener): void {
    if (listener.exitExpressionLists) {
      listener.exitExpressionLists(this);
    }
  }
  // @Override
  public accept<Result>(visitor: GrammarVisitor<Result>): Result {
    if (visitor.visitExpressionLists) {
      return visitor.visitExpressionLists(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class FunctionDeclarationContext extends ParserRuleContext {
  public _ids!: IdentifierListContext;
  public _body!: ExpressionContext;
  public LET(): TerminalNode {
    return this.getToken(GrammarParser.LET, 0);
  }
  public EQUALSTRUC(): TerminalNode {
    return this.getToken(GrammarParser.EQUALSTRUC, 0);
  }
  public identifierList(): IdentifierListContext {
    return this.getRuleContext(0, IdentifierListContext);
  }
  public expression(): ExpressionContext {
    return this.getRuleContext(0, ExpressionContext);
  }
  public REC(): TerminalNode | undefined {
    return this.tryGetToken(GrammarParser.REC, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return GrammarParser.RULE_functionDeclaration;
  }
  // @Override
  public enterRule(listener: GrammarListener): void {
    if (listener.enterFunctionDeclaration) {
      listener.enterFunctionDeclaration(this);
    }
  }
  // @Override
  public exitRule(listener: GrammarListener): void {
    if (listener.exitFunctionDeclaration) {
      listener.exitFunctionDeclaration(this);
    }
  }
  // @Override
  public accept<Result>(visitor: GrammarVisitor<Result>): Result {
    if (visitor.visitFunctionDeclaration) {
      return visitor.visitFunctionDeclaration(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
