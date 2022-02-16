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
  public static readonly WS = 26;
  public static readonly TOSKIP = 27;
  public static readonly CHAR = 28;
  public static readonly STRING = 29;
  public static readonly FLOAT = 30;
  public static readonly BOOLEAN = 31;
  public static readonly IF = 32;
  public static readonly THEN = 33;
  public static readonly ELSE = 34;
  public static readonly SEMICOLON = 35;
  public static readonly IDENTIFIER = 36;
  public static readonly RULE_start = 0;
  public static readonly RULE_expression = 1;
  public static readonly RULE_parenthesesExpression = 2;
  public static readonly RULE_condExp = 3;
  // tslint:disable:no-trailing-whitespace
  public static readonly ruleNames: string[] = [
    'start',
    'expression',
    'parenthesesExpression',
    'condExp',
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
    undefined,
    "'if'",
    "'then'",
    "'else'",
    "';'",
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
    'WS',
    'TOSKIP',
    'CHAR',
    'STRING',
    'FLOAT',
    'BOOLEAN',
    'IF',
    'THEN',
    'ELSE',
    'SEMICOLON',
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
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 8;
        this.expression(0);
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
    const _startState = 2;
    this.enterRecursionRule(_localctx, 2, GrammarParser.RULE_expression, _p);
    let _la: number;
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 53;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 11, this._ctx)) {
          case 1:
            {
              _localctx = new NumberContext(_localctx);
              this._ctx = _localctx;
              _prevctx = _localctx;

              this.state = 12;
              this._errHandler.sync(this);
              _la = this._input.LA(1);
              if (_la === GrammarParser.WS) {
                {
                  this.state = 11;
                  this.match(GrammarParser.WS);
                }
              }

              this.state = 14;
              this.match(GrammarParser.NUMBER);
              this.state = 16;
              this._errHandler.sync(this);
              switch (
                this.interpreter.adaptivePredict(this._input, 1, this._ctx)
              ) {
                case 1:
                  {
                    this.state = 15;
                    this.match(GrammarParser.WS);
                  }
                  break;
              }
            }
            break;

          case 2:
            {
              _localctx = new FloatContext(_localctx);
              this._ctx = _localctx;
              _prevctx = _localctx;
              this.state = 19;
              this._errHandler.sync(this);
              _la = this._input.LA(1);
              if (_la === GrammarParser.WS) {
                {
                  this.state = 18;
                  this.match(GrammarParser.WS);
                }
              }

              this.state = 21;
              this.match(GrammarParser.FLOAT);
              this.state = 23;
              this._errHandler.sync(this);
              switch (
                this.interpreter.adaptivePredict(this._input, 3, this._ctx)
              ) {
                case 1:
                  {
                    this.state = 22;
                    this.match(GrammarParser.WS);
                  }
                  break;
              }
            }
            break;

          case 3:
            {
              _localctx = new BooleanContext(_localctx);
              this._ctx = _localctx;
              _prevctx = _localctx;
              this.state = 26;
              this._errHandler.sync(this);
              _la = this._input.LA(1);
              if (_la === GrammarParser.WS) {
                {
                  this.state = 25;
                  this.match(GrammarParser.WS);
                }
              }

              this.state = 28;
              this.match(GrammarParser.BOOLEAN);
              this.state = 30;
              this._errHandler.sync(this);
              switch (
                this.interpreter.adaptivePredict(this._input, 5, this._ctx)
              ) {
                case 1:
                  {
                    this.state = 29;
                    this.match(GrammarParser.WS);
                  }
                  break;
              }
            }
            break;

          case 4:
            {
              _localctx = new CharContext(_localctx);
              this._ctx = _localctx;
              _prevctx = _localctx;
              this.state = 33;
              this._errHandler.sync(this);
              _la = this._input.LA(1);
              if (_la === GrammarParser.WS) {
                {
                  this.state = 32;
                  this.match(GrammarParser.WS);
                }
              }

              this.state = 35;
              this.match(GrammarParser.CHAR);
              this.state = 37;
              this._errHandler.sync(this);
              switch (
                this.interpreter.adaptivePredict(this._input, 7, this._ctx)
              ) {
                case 1:
                  {
                    this.state = 36;
                    this.match(GrammarParser.WS);
                  }
                  break;
              }
            }
            break;

          case 5:
            {
              _localctx = new StringContext(_localctx);
              this._ctx = _localctx;
              _prevctx = _localctx;
              this.state = 40;
              this._errHandler.sync(this);
              _la = this._input.LA(1);
              if (_la === GrammarParser.WS) {
                {
                  this.state = 39;
                  this.match(GrammarParser.WS);
                }
              }

              this.state = 42;
              this.match(GrammarParser.STRING);
              this.state = 44;
              this._errHandler.sync(this);
              switch (
                this.interpreter.adaptivePredict(this._input, 9, this._ctx)
              ) {
                case 1:
                  {
                    this.state = 43;
                    this.match(GrammarParser.WS);
                  }
                  break;
              }
            }
            break;

          case 6:
            {
              _localctx = new ParenthesesContext(_localctx);
              this._ctx = _localctx;
              _prevctx = _localctx;
              this.state = 46;
              this.parenthesesExpression();
            }
            break;

          case 7:
            {
              _localctx = new NotContext(_localctx);
              this._ctx = _localctx;
              _prevctx = _localctx;
              this.state = 47;
              (_localctx as NotContext)._operator = this.match(
                GrammarParser.NOT,
              );
              this.state = 49;
              this._errHandler.sync(this);
              switch (
                this.interpreter.adaptivePredict(this._input, 10, this._ctx)
              ) {
                case 1:
                  {
                    this.state = 48;
                    this.match(GrammarParser.WS);
                  }
                  break;
              }
              this.state = 51;
              (_localctx as NotContext)._argument = this.expression(4);
            }
            break;

          case 8:
            {
              _localctx = new ConditionalExpressionContext(_localctx);
              this._ctx = _localctx;
              _prevctx = _localctx;
              this.state = 52;
              this.condExp();
            }
            break;
        }
        this._ctx._stop = this._input.tryLT(-1);
        this.state = 246;
        this._errHandler.sync(this);
        _alt = this.interpreter.adaptivePredict(this._input, 55, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            if (this._parseListeners != null) {
              this.triggerExitRuleEvent();
            }
            _prevctx = _localctx;
            {
              this.state = 244;
              this._errHandler.sync(this);
              switch (
                this.interpreter.adaptivePredict(this._input, 54, this._ctx)
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
                    this.state = 55;
                    if (!this.precpred(this._ctx, 23)) {
                      throw this.createFailedPredicateException(
                        'this.precpred(this._ctx, 23)',
                      );
                    }
                    this.state = 57;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la === GrammarParser.WS) {
                      {
                        this.state = 56;
                        this.match(GrammarParser.WS);
                      }
                    }

                    this.state = 59;
                    (_localctx as PowerContext)._operator = this.match(
                      GrammarParser.POW,
                    );
                    this.state = 61;
                    this._errHandler.sync(this);
                    switch (
                      this.interpreter.adaptivePredict(
                        this._input,
                        13,
                        this._ctx,
                      )
                    ) {
                      case 1:
                        {
                          this.state = 60;
                          this.match(GrammarParser.WS);
                        }
                        break;
                    }
                    this.state = 63;
                    (_localctx as PowerContext)._right = this.expression(23);
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
                    this.state = 64;
                    if (!this.precpred(this._ctx, 22)) {
                      throw this.createFailedPredicateException(
                        'this.precpred(this._ctx, 22)',
                      );
                    }
                    this.state = 66;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la === GrammarParser.WS) {
                      {
                        this.state = 65;
                        this.match(GrammarParser.WS);
                      }
                    }

                    this.state = 68;
                    (_localctx as MultiplicationContext)._operator = this.match(
                      GrammarParser.MUL,
                    );
                    this.state = 70;
                    this._errHandler.sync(this);
                    switch (
                      this.interpreter.adaptivePredict(
                        this._input,
                        15,
                        this._ctx,
                      )
                    ) {
                      case 1:
                        {
                          this.state = 69;
                          this.match(GrammarParser.WS);
                        }
                        break;
                    }
                    this.state = 72;
                    (_localctx as MultiplicationContext)._right =
                      this.expression(23);
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
                    this.state = 73;
                    if (!this.precpred(this._ctx, 21)) {
                      throw this.createFailedPredicateException(
                        'this.precpred(this._ctx, 21)',
                      );
                    }
                    this.state = 75;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la === GrammarParser.WS) {
                      {
                        this.state = 74;
                        this.match(GrammarParser.WS);
                      }
                    }

                    this.state = 77;
                    (_localctx as DivisionContext)._operator = this.match(
                      GrammarParser.DIV,
                    );
                    this.state = 79;
                    this._errHandler.sync(this);
                    switch (
                      this.interpreter.adaptivePredict(
                        this._input,
                        17,
                        this._ctx,
                      )
                    ) {
                      case 1:
                        {
                          this.state = 78;
                          this.match(GrammarParser.WS);
                        }
                        break;
                    }
                    this.state = 81;
                    (_localctx as DivisionContext)._right = this.expression(22);
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
                    this.state = 82;
                    if (!this.precpred(this._ctx, 20)) {
                      throw this.createFailedPredicateException(
                        'this.precpred(this._ctx, 20)',
                      );
                    }
                    this.state = 84;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la === GrammarParser.WS) {
                      {
                        this.state = 83;
                        this.match(GrammarParser.WS);
                      }
                    }

                    this.state = 86;
                    (_localctx as MultiplicationFloatContext)._operator =
                      this.match(GrammarParser.MULFLOAT);
                    this.state = 88;
                    this._errHandler.sync(this);
                    switch (
                      this.interpreter.adaptivePredict(
                        this._input,
                        19,
                        this._ctx,
                      )
                    ) {
                      case 1:
                        {
                          this.state = 87;
                          this.match(GrammarParser.WS);
                        }
                        break;
                    }
                    this.state = 90;
                    (_localctx as MultiplicationFloatContext)._right =
                      this.expression(21);
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
                    this.state = 91;
                    if (!this.precpred(this._ctx, 19)) {
                      throw this.createFailedPredicateException(
                        'this.precpred(this._ctx, 19)',
                      );
                    }
                    this.state = 93;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la === GrammarParser.WS) {
                      {
                        this.state = 92;
                        this.match(GrammarParser.WS);
                      }
                    }

                    this.state = 95;
                    (_localctx as DivisionFloatContext)._operator = this.match(
                      GrammarParser.DIVFLOAT,
                    );
                    this.state = 97;
                    this._errHandler.sync(this);
                    switch (
                      this.interpreter.adaptivePredict(
                        this._input,
                        21,
                        this._ctx,
                      )
                    ) {
                      case 1:
                        {
                          this.state = 96;
                          this.match(GrammarParser.WS);
                        }
                        break;
                    }
                    this.state = 99;
                    (_localctx as DivisionFloatContext)._right =
                      this.expression(20);
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
                    this.state = 100;
                    if (!this.precpred(this._ctx, 18)) {
                      throw this.createFailedPredicateException(
                        'this.precpred(this._ctx, 18)',
                      );
                    }
                    this.state = 102;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la === GrammarParser.WS) {
                      {
                        this.state = 101;
                        this.match(GrammarParser.WS);
                      }
                    }

                    this.state = 104;
                    (_localctx as ModulusContext)._operator = this.match(
                      GrammarParser.MOD,
                    );
                    this.state = 106;
                    this._errHandler.sync(this);
                    switch (
                      this.interpreter.adaptivePredict(
                        this._input,
                        23,
                        this._ctx,
                      )
                    ) {
                      case 1:
                        {
                          this.state = 105;
                          this.match(GrammarParser.WS);
                        }
                        break;
                    }
                    this.state = 108;
                    (_localctx as ModulusContext)._right = this.expression(19);
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
                    this.state = 109;
                    if (!this.precpred(this._ctx, 17)) {
                      throw this.createFailedPredicateException(
                        'this.precpred(this._ctx, 17)',
                      );
                    }
                    this.state = 111;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la === GrammarParser.WS) {
                      {
                        this.state = 110;
                        this.match(GrammarParser.WS);
                      }
                    }

                    this.state = 113;
                    (_localctx as AdditionContext)._operator = this.match(
                      GrammarParser.ADD,
                    );
                    this.state = 115;
                    this._errHandler.sync(this);
                    switch (
                      this.interpreter.adaptivePredict(
                        this._input,
                        25,
                        this._ctx,
                      )
                    ) {
                      case 1:
                        {
                          this.state = 114;
                          this.match(GrammarParser.WS);
                        }
                        break;
                    }
                    this.state = 117;
                    (_localctx as AdditionContext)._right = this.expression(18);
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
                    this.state = 118;
                    if (!this.precpred(this._ctx, 16)) {
                      throw this.createFailedPredicateException(
                        'this.precpred(this._ctx, 16)',
                      );
                    }
                    this.state = 120;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la === GrammarParser.WS) {
                      {
                        this.state = 119;
                        this.match(GrammarParser.WS);
                      }
                    }

                    this.state = 122;
                    (_localctx as SubtractionContext)._operator = this.match(
                      GrammarParser.SUB,
                    );
                    this.state = 124;
                    this._errHandler.sync(this);
                    switch (
                      this.interpreter.adaptivePredict(
                        this._input,
                        27,
                        this._ctx,
                      )
                    ) {
                      case 1:
                        {
                          this.state = 123;
                          this.match(GrammarParser.WS);
                        }
                        break;
                    }
                    this.state = 126;
                    (_localctx as SubtractionContext)._right =
                      this.expression(17);
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
                    this.state = 127;
                    if (!this.precpred(this._ctx, 15)) {
                      throw this.createFailedPredicateException(
                        'this.precpred(this._ctx, 15)',
                      );
                    }
                    this.state = 129;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la === GrammarParser.WS) {
                      {
                        this.state = 128;
                        this.match(GrammarParser.WS);
                      }
                    }

                    this.state = 131;
                    (_localctx as AdditionFloatContext)._operator = this.match(
                      GrammarParser.ADDFLOAT,
                    );
                    this.state = 133;
                    this._errHandler.sync(this);
                    switch (
                      this.interpreter.adaptivePredict(
                        this._input,
                        29,
                        this._ctx,
                      )
                    ) {
                      case 1:
                        {
                          this.state = 132;
                          this.match(GrammarParser.WS);
                        }
                        break;
                    }
                    this.state = 135;
                    (_localctx as AdditionFloatContext)._right =
                      this.expression(16);
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
                    this.state = 136;
                    if (!this.precpred(this._ctx, 14)) {
                      throw this.createFailedPredicateException(
                        'this.precpred(this._ctx, 14)',
                      );
                    }
                    this.state = 138;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la === GrammarParser.WS) {
                      {
                        this.state = 137;
                        this.match(GrammarParser.WS);
                      }
                    }

                    this.state = 140;
                    (_localctx as SubtractionFloatContext)._operator =
                      this.match(GrammarParser.SUBFLOAT);
                    this.state = 142;
                    this._errHandler.sync(this);
                    switch (
                      this.interpreter.adaptivePredict(
                        this._input,
                        31,
                        this._ctx,
                      )
                    ) {
                      case 1:
                        {
                          this.state = 141;
                          this.match(GrammarParser.WS);
                        }
                        break;
                    }
                    this.state = 144;
                    (_localctx as SubtractionFloatContext)._right =
                      this.expression(15);
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
                    this.state = 145;
                    if (!this.precpred(this._ctx, 13)) {
                      throw this.createFailedPredicateException(
                        'this.precpred(this._ctx, 13)',
                      );
                    }
                    this.state = 147;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la === GrammarParser.WS) {
                      {
                        this.state = 146;
                        this.match(GrammarParser.WS);
                      }
                    }

                    this.state = 149;
                    (_localctx as LessThanContext)._operator = this.match(
                      GrammarParser.LESSTHAN,
                    );
                    this.state = 151;
                    this._errHandler.sync(this);
                    switch (
                      this.interpreter.adaptivePredict(
                        this._input,
                        33,
                        this._ctx,
                      )
                    ) {
                      case 1:
                        {
                          this.state = 150;
                          this.match(GrammarParser.WS);
                        }
                        break;
                    }
                    this.state = 153;
                    (_localctx as LessThanContext)._right = this.expression(14);
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
                    this.state = 154;
                    if (!this.precpred(this._ctx, 12)) {
                      throw this.createFailedPredicateException(
                        'this.precpred(this._ctx, 12)',
                      );
                    }
                    this.state = 156;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la === GrammarParser.WS) {
                      {
                        this.state = 155;
                        this.match(GrammarParser.WS);
                      }
                    }

                    this.state = 158;
                    (_localctx as LessThanOrEqualContext)._operator =
                      this.match(GrammarParser.LESSTHANOREQUAL);
                    this.state = 160;
                    this._errHandler.sync(this);
                    switch (
                      this.interpreter.adaptivePredict(
                        this._input,
                        35,
                        this._ctx,
                      )
                    ) {
                      case 1:
                        {
                          this.state = 159;
                          this.match(GrammarParser.WS);
                        }
                        break;
                    }
                    this.state = 162;
                    (_localctx as LessThanOrEqualContext)._right =
                      this.expression(13);
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
                    this.state = 163;
                    if (!this.precpred(this._ctx, 11)) {
                      throw this.createFailedPredicateException(
                        'this.precpred(this._ctx, 11)',
                      );
                    }
                    this.state = 165;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la === GrammarParser.WS) {
                      {
                        this.state = 164;
                        this.match(GrammarParser.WS);
                      }
                    }

                    this.state = 167;
                    (_localctx as GreaterThanContext)._operator = this.match(
                      GrammarParser.GREATERTHAN,
                    );
                    this.state = 169;
                    this._errHandler.sync(this);
                    switch (
                      this.interpreter.adaptivePredict(
                        this._input,
                        37,
                        this._ctx,
                      )
                    ) {
                      case 1:
                        {
                          this.state = 168;
                          this.match(GrammarParser.WS);
                        }
                        break;
                    }
                    this.state = 171;
                    (_localctx as GreaterThanContext)._right =
                      this.expression(12);
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
                    this.state = 172;
                    if (!this.precpred(this._ctx, 10)) {
                      throw this.createFailedPredicateException(
                        'this.precpred(this._ctx, 10)',
                      );
                    }
                    this.state = 174;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la === GrammarParser.WS) {
                      {
                        this.state = 173;
                        this.match(GrammarParser.WS);
                      }
                    }

                    this.state = 176;
                    (_localctx as GreaterThanOrEqualContext)._operator =
                      this.match(GrammarParser.GREATERTHANOREQUAL);
                    this.state = 178;
                    this._errHandler.sync(this);
                    switch (
                      this.interpreter.adaptivePredict(
                        this._input,
                        39,
                        this._ctx,
                      )
                    ) {
                      case 1:
                        {
                          this.state = 177;
                          this.match(GrammarParser.WS);
                        }
                        break;
                    }
                    this.state = 180;
                    (_localctx as GreaterThanOrEqualContext)._right =
                      this.expression(11);
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
                    this.state = 181;
                    if (!this.precpred(this._ctx, 9)) {
                      throw this.createFailedPredicateException(
                        'this.precpred(this._ctx, 9)',
                      );
                    }
                    this.state = 183;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la === GrammarParser.WS) {
                      {
                        this.state = 182;
                        this.match(GrammarParser.WS);
                      }
                    }

                    this.state = 185;
                    (_localctx as EqualStructuralContext)._operator =
                      this.match(GrammarParser.EQUALSTRUC);
                    this.state = 187;
                    this._errHandler.sync(this);
                    switch (
                      this.interpreter.adaptivePredict(
                        this._input,
                        41,
                        this._ctx,
                      )
                    ) {
                      case 1:
                        {
                          this.state = 186;
                          this.match(GrammarParser.WS);
                        }
                        break;
                    }
                    this.state = 189;
                    (_localctx as EqualStructuralContext)._right =
                      this.expression(10);
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
                    this.state = 190;
                    if (!this.precpred(this._ctx, 8)) {
                      throw this.createFailedPredicateException(
                        'this.precpred(this._ctx, 8)',
                      );
                    }
                    this.state = 192;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la === GrammarParser.WS) {
                      {
                        this.state = 191;
                        this.match(GrammarParser.WS);
                      }
                    }

                    this.state = 194;
                    (_localctx as NotEqualStructuralContext)._operator =
                      this.match(GrammarParser.NOTEQUALSTRUC);
                    this.state = 196;
                    this._errHandler.sync(this);
                    switch (
                      this.interpreter.adaptivePredict(
                        this._input,
                        43,
                        this._ctx,
                      )
                    ) {
                      case 1:
                        {
                          this.state = 195;
                          this.match(GrammarParser.WS);
                        }
                        break;
                    }
                    this.state = 198;
                    (_localctx as NotEqualStructuralContext)._right =
                      this.expression(9);
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
                    this.state = 199;
                    if (!this.precpred(this._ctx, 7)) {
                      throw this.createFailedPredicateException(
                        'this.precpred(this._ctx, 7)',
                      );
                    }
                    this.state = 201;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la === GrammarParser.WS) {
                      {
                        this.state = 200;
                        this.match(GrammarParser.WS);
                      }
                    }

                    this.state = 203;
                    (_localctx as EqualPhysicalContext)._operator = this.match(
                      GrammarParser.EQUALPHYS,
                    );
                    this.state = 205;
                    this._errHandler.sync(this);
                    switch (
                      this.interpreter.adaptivePredict(
                        this._input,
                        45,
                        this._ctx,
                      )
                    ) {
                      case 1:
                        {
                          this.state = 204;
                          this.match(GrammarParser.WS);
                        }
                        break;
                    }
                    this.state = 207;
                    (_localctx as EqualPhysicalContext)._right =
                      this.expression(8);
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
                    this.state = 208;
                    if (!this.precpred(this._ctx, 6)) {
                      throw this.createFailedPredicateException(
                        'this.precpred(this._ctx, 6)',
                      );
                    }
                    this.state = 210;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la === GrammarParser.WS) {
                      {
                        this.state = 209;
                        this.match(GrammarParser.WS);
                      }
                    }

                    this.state = 212;
                    (_localctx as NotEqualPhysicalContext)._operator =
                      this.match(GrammarParser.NOTEQUALPHYS);
                    this.state = 214;
                    this._errHandler.sync(this);
                    switch (
                      this.interpreter.adaptivePredict(
                        this._input,
                        47,
                        this._ctx,
                      )
                    ) {
                      case 1:
                        {
                          this.state = 213;
                          this.match(GrammarParser.WS);
                        }
                        break;
                    }
                    this.state = 216;
                    (_localctx as NotEqualPhysicalContext)._right =
                      this.expression(7);
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
                    this.state = 217;
                    if (!this.precpred(this._ctx, 5)) {
                      throw this.createFailedPredicateException(
                        'this.precpred(this._ctx, 5)',
                      );
                    }
                    this.state = 219;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la === GrammarParser.WS) {
                      {
                        this.state = 218;
                        this.match(GrammarParser.WS);
                      }
                    }

                    this.state = 221;
                    (_localctx as ConcatenationContext)._operator = this.match(
                      GrammarParser.CONCAT,
                    );
                    this.state = 223;
                    this._errHandler.sync(this);
                    switch (
                      this.interpreter.adaptivePredict(
                        this._input,
                        49,
                        this._ctx,
                      )
                    ) {
                      case 1:
                        {
                          this.state = 222;
                          this.match(GrammarParser.WS);
                        }
                        break;
                    }
                    this.state = 225;
                    (_localctx as ConcatenationContext)._right =
                      this.expression(6);
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
                    this.state = 226;
                    if (!this.precpred(this._ctx, 3)) {
                      throw this.createFailedPredicateException(
                        'this.precpred(this._ctx, 3)',
                      );
                    }
                    this.state = 228;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la === GrammarParser.WS) {
                      {
                        this.state = 227;
                        this.match(GrammarParser.WS);
                      }
                    }

                    this.state = 230;
                    (_localctx as AndContext)._operator = this.match(
                      GrammarParser.AND,
                    );
                    this.state = 232;
                    this._errHandler.sync(this);
                    switch (
                      this.interpreter.adaptivePredict(
                        this._input,
                        51,
                        this._ctx,
                      )
                    ) {
                      case 1:
                        {
                          this.state = 231;
                          this.match(GrammarParser.WS);
                        }
                        break;
                    }
                    this.state = 234;
                    (_localctx as AndContext)._right = this.expression(4);
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
                    this.state = 235;
                    if (!this.precpred(this._ctx, 2)) {
                      throw this.createFailedPredicateException(
                        'this.precpred(this._ctx, 2)',
                      );
                    }
                    this.state = 237;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la === GrammarParser.WS) {
                      {
                        this.state = 236;
                        this.match(GrammarParser.WS);
                      }
                    }

                    this.state = 239;
                    (_localctx as OrContext)._operator = this.match(
                      GrammarParser.OR,
                    );
                    this.state = 241;
                    this._errHandler.sync(this);
                    switch (
                      this.interpreter.adaptivePredict(
                        this._input,
                        53,
                        this._ctx,
                      )
                    ) {
                      case 1:
                        {
                          this.state = 240;
                          this.match(GrammarParser.WS);
                        }
                        break;
                    }
                    this.state = 243;
                    (_localctx as OrContext)._right = this.expression(3);
                  }
                  break;
              }
            }
          }
          this.state = 248;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 55, this._ctx);
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
  public parenthesesExpression(): ParenthesesExpressionContext {
    const _localctx: ParenthesesExpressionContext =
      new ParenthesesExpressionContext(this._ctx, this.state);
    this.enterRule(_localctx, 4, GrammarParser.RULE_parenthesesExpression);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 250;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === GrammarParser.WS) {
          {
            this.state = 249;
            this.match(GrammarParser.WS);
          }
        }

        this.state = 252;
        this.match(GrammarParser.T__0);
        this.state = 254;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 57, this._ctx)) {
          case 1:
            {
              this.state = 253;
              this.match(GrammarParser.WS);
            }
            break;
        }
        this.state = 256;
        _localctx._inner = this.expression(0);
        this.state = 258;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === GrammarParser.WS) {
          {
            this.state = 257;
            this.match(GrammarParser.WS);
          }
        }

        this.state = 260;
        this.match(GrammarParser.T__1);
        this.state = 262;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 59, this._ctx)) {
          case 1:
            {
              this.state = 261;
              this.match(GrammarParser.WS);
            }
            break;
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
  public condExp(): CondExpContext {
    const _localctx: CondExpContext = new CondExpContext(this._ctx, this.state);
    this.enterRule(_localctx, 6, GrammarParser.RULE_condExp);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 265;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === GrammarParser.WS) {
          {
            this.state = 264;
            this.match(GrammarParser.WS);
          }
        }

        this.state = 267;
        this.match(GrammarParser.IF);
        this.state = 268;
        this.match(GrammarParser.WS);
        this.state = 269;
        _localctx._test = this.expression(0);
        this.state = 270;
        this.match(GrammarParser.WS);
        this.state = 271;
        this.match(GrammarParser.THEN);
        this.state = 272;
        this.match(GrammarParser.WS);
        this.state = 273;
        _localctx._consequent = this.expression(0);
        this.state = 274;
        this.match(GrammarParser.WS);
        this.state = 275;
        this.match(GrammarParser.ELSE);
        this.state = 276;
        this.match(GrammarParser.WS);
        this.state = 277;
        _localctx._alternate = this.expression(0);
        this.state = 279;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 61, this._ctx)) {
          case 1:
            {
              this.state = 278;
              this.match(GrammarParser.WS);
            }
            break;
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

  public sempred(
    _localctx: RuleContext,
    ruleIndex: number,
    predIndex: number,
  ): boolean {
    switch (ruleIndex) {
      case 1:
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
    '\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03&\u011C\x04\x02' +
    '\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x03\x02\x03\x02\x03\x03' +
    '\x03\x03\x05\x03\x0F\n\x03\x03\x03\x03\x03\x05\x03\x13\n\x03\x03\x03\x05' +
    '\x03\x16\n\x03\x03\x03\x03\x03\x05\x03\x1A\n\x03\x03\x03\x05\x03\x1D\n' +
    '\x03\x03\x03\x03\x03\x05\x03!\n\x03\x03\x03\x05\x03$\n\x03\x03\x03\x03' +
    '\x03\x05\x03(\n\x03\x03\x03\x05\x03+\n\x03\x03\x03\x03\x03\x05\x03/\n' +
    '\x03\x03\x03\x03\x03\x03\x03\x05\x034\n\x03\x03\x03\x03\x03\x05\x038\n' +
    '\x03\x03\x03\x03\x03\x05\x03<\n\x03\x03\x03\x03\x03\x05\x03@\n\x03\x03' +
    '\x03\x03\x03\x03\x03\x05\x03E\n\x03\x03\x03\x03\x03\x05\x03I\n\x03\x03' +
    '\x03\x03\x03\x03\x03\x05\x03N\n\x03\x03\x03\x03\x03\x05\x03R\n\x03\x03' +
    '\x03\x03\x03\x03\x03\x05\x03W\n\x03\x03\x03\x03\x03\x05\x03[\n\x03\x03' +
    '\x03\x03\x03\x03\x03\x05\x03`\n\x03\x03\x03\x03\x03\x05\x03d\n\x03\x03' +
    '\x03\x03\x03\x03\x03\x05\x03i\n\x03\x03\x03\x03\x03\x05\x03m\n\x03\x03' +
    '\x03\x03\x03\x03\x03\x05\x03r\n\x03\x03\x03\x03\x03\x05\x03v\n\x03\x03' +
    '\x03\x03\x03\x03\x03\x05\x03{\n\x03\x03\x03\x03\x03\x05\x03\x7F\n\x03' +
    '\x03\x03\x03\x03\x03\x03\x05\x03\x84\n\x03\x03\x03\x03\x03\x05\x03\x88' +
    '\n\x03\x03\x03\x03\x03\x03\x03\x05\x03\x8D\n\x03\x03\x03\x03\x03\x05\x03' +
    '\x91\n\x03\x03\x03\x03\x03\x03\x03\x05\x03\x96\n\x03\x03\x03\x03\x03\x05' +
    '\x03\x9A\n\x03\x03\x03\x03\x03\x03\x03\x05\x03\x9F\n\x03\x03\x03\x03\x03' +
    '\x05\x03\xA3\n\x03\x03\x03\x03\x03\x03\x03\x05\x03\xA8\n\x03\x03\x03\x03' +
    '\x03\x05\x03\xAC\n\x03\x03\x03\x03\x03\x03\x03\x05\x03\xB1\n\x03\x03\x03' +
    '\x03\x03\x05\x03\xB5\n\x03\x03\x03\x03\x03\x03\x03\x05\x03\xBA\n\x03\x03' +
    '\x03\x03\x03\x05\x03\xBE\n\x03\x03\x03\x03\x03\x03\x03\x05\x03\xC3\n\x03' +
    '\x03\x03\x03\x03\x05\x03\xC7\n\x03\x03\x03\x03\x03\x03\x03\x05\x03\xCC' +
    '\n\x03\x03\x03\x03\x03\x05\x03\xD0\n\x03\x03\x03\x03\x03\x03\x03\x05\x03' +
    '\xD5\n\x03\x03\x03\x03\x03\x05\x03\xD9\n\x03\x03\x03\x03\x03\x03\x03\x05' +
    '\x03\xDE\n\x03\x03\x03\x03\x03\x05\x03\xE2\n\x03\x03\x03\x03\x03\x03\x03' +
    '\x05\x03\xE7\n\x03\x03\x03\x03\x03\x05\x03\xEB\n\x03\x03\x03\x03\x03\x03' +
    '\x03\x05\x03\xF0\n\x03\x03\x03\x03\x03\x05\x03\xF4\n\x03\x03\x03\x07\x03' +
    '\xF7\n\x03\f\x03\x0E\x03\xFA\v\x03\x03\x04\x05\x04\xFD\n\x04\x03\x04\x03' +
    '\x04\x05\x04\u0101\n\x04\x03\x04\x03\x04\x05\x04\u0105\n\x04\x03\x04\x03' +
    '\x04\x05\x04\u0109\n\x04\x03\x05\x05\x05\u010C\n\x05\x03\x05\x03\x05\x03' +
    '\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03' +
    '\x05\x05\x05\u011A\n\x05\x03\x05\x02\x02\x03\x04\x06\x02\x02\x04\x02\x06' +
    '\x02\b\x02\x02\x02\x02\u016E\x02\n\x03\x02\x02\x02\x047\x03\x02\x02\x02' +
    '\x06\xFC\x03\x02\x02\x02\b\u010B\x03\x02\x02\x02\n\v\x05\x04\x03\x02\v' +
    '\x03\x03\x02\x02\x02\f\x0E\b\x03\x01\x02\r\x0F\x07\x1C\x02\x02\x0E\r\x03' +
    '\x02\x02\x02\x0E\x0F\x03\x02\x02\x02\x0F\x10\x03\x02\x02\x02\x10\x12\x07' +
    '\x1B\x02\x02\x11\x13\x07\x1C\x02\x02\x12\x11\x03\x02\x02\x02\x12\x13\x03' +
    '\x02\x02\x02\x138\x03\x02\x02\x02\x14\x16\x07\x1C\x02\x02\x15\x14\x03' +
    '\x02\x02\x02\x15\x16\x03\x02\x02\x02\x16\x17\x03\x02\x02\x02\x17\x19\x07' +
    ' \x02\x02\x18\x1A\x07\x1C\x02\x02\x19\x18\x03\x02\x02\x02\x19\x1A\x03' +
    '\x02\x02\x02\x1A8\x03\x02\x02\x02\x1B\x1D\x07\x1C\x02\x02\x1C\x1B\x03' +
    '\x02\x02\x02\x1C\x1D\x03\x02\x02\x02\x1D\x1E\x03\x02\x02\x02\x1E \x07' +
    '!\x02\x02\x1F!\x07\x1C\x02\x02 \x1F\x03\x02\x02\x02 !\x03\x02\x02\x02' +
    '!8\x03\x02\x02\x02"$\x07\x1C\x02\x02#"\x03\x02\x02\x02#$\x03\x02\x02' +
    "\x02$%\x03\x02\x02\x02%'\x07\x1E\x02\x02&(\x07\x1C\x02\x02'&\x03\x02" +
    "\x02\x02'(\x03\x02\x02\x02(8\x03\x02\x02\x02)+\x07\x1C\x02\x02*)\x03" +
    '\x02\x02\x02*+\x03\x02\x02\x02+,\x03\x02\x02\x02,.\x07\x1F\x02\x02-/\x07' +
    '\x1C\x02\x02.-\x03\x02\x02\x02./\x03\x02\x02\x02/8\x03\x02\x02\x0208\x05' +
    '\x06\x04\x0213\x07\x1A\x02\x0224\x07\x1C\x02\x0232\x03\x02\x02\x0234\x03' +
    '\x02\x02\x0245\x03\x02\x02\x0258\x05\x04\x03\x0668\x05\b\x05\x027\f\x03' +
    '\x02\x02\x027\x15\x03\x02\x02\x027\x1C\x03\x02\x02\x027#\x03\x02\x02\x02' +
    '7*\x03\x02\x02\x0270\x03\x02\x02\x0271\x03\x02\x02\x0276\x03\x02\x02\x02' +
    '8\xF8\x03\x02\x02\x029;\f\x19\x02\x02:<\x07\x1C\x02\x02;:\x03\x02\x02' +
    '\x02;<\x03\x02\x02\x02<=\x03\x02\x02\x02=?\x07\x05\x02\x02>@\x07\x1C\x02' +
    '\x02?>\x03\x02\x02\x02?@\x03\x02\x02\x02@A\x03\x02\x02\x02A\xF7\x05\x04' +
    '\x03\x19BD\f\x18\x02\x02CE\x07\x1C\x02\x02DC\x03\x02\x02\x02DE\x03\x02' +
    '\x02\x02EF\x03\x02\x02\x02FH\x07\x06\x02\x02GI\x07\x1C\x02\x02HG\x03\x02' +
    '\x02\x02HI\x03\x02\x02\x02IJ\x03\x02\x02\x02J\xF7\x05\x04\x03\x19KM\f' +
    '\x17\x02\x02LN\x07\x1C\x02\x02ML\x03\x02\x02\x02MN\x03\x02\x02\x02NO\x03' +
    '\x02\x02\x02OQ\x07\x07\x02\x02PR\x07\x1C\x02\x02QP\x03\x02\x02\x02QR\x03' +
    '\x02\x02\x02RS\x03\x02\x02\x02S\xF7\x05\x04\x03\x18TV\f\x16\x02\x02UW' +
    '\x07\x1C\x02\x02VU\x03\x02\x02\x02VW\x03\x02\x02\x02WX\x03\x02\x02\x02' +
    'XZ\x07\r\x02\x02Y[\x07\x1C\x02\x02ZY\x03\x02\x02\x02Z[\x03\x02\x02\x02' +
    '[\\\x03\x02\x02\x02\\\xF7\x05\x04\x03\x17]_\f\x15\x02\x02^`\x07\x1C\x02' +
    '\x02_^\x03\x02\x02\x02_`\x03\x02\x02\x02`a\x03\x02\x02\x02ac\x07\x0E\x02' +
    '\x02bd\x07\x1C\x02\x02cb\x03\x02\x02\x02cd\x03\x02\x02\x02de\x03\x02\x02' +
    '\x02e\xF7\x05\x04\x03\x16fh\f\x14\x02\x02gi\x07\x1C\x02\x02hg\x03\x02' +
    '\x02\x02hi\x03\x02\x02\x02ij\x03\x02\x02\x02jl\x07\n\x02\x02km\x07\x1C' +
    '\x02\x02lk\x03\x02\x02\x02lm\x03\x02\x02\x02mn\x03\x02\x02\x02n\xF7\x05' +
    '\x04\x03\x15oq\f\x13\x02\x02pr\x07\x1C\x02\x02qp\x03\x02\x02\x02qr\x03' +
    '\x02\x02\x02rs\x03\x02\x02\x02su\x07\b\x02\x02tv\x07\x1C\x02\x02ut\x03' +
    '\x02\x02\x02uv\x03\x02\x02\x02vw\x03\x02\x02\x02w\xF7\x05\x04\x03\x14' +
    'xz\f\x12\x02\x02y{\x07\x1C\x02\x02zy\x03\x02\x02\x02z{\x03\x02\x02\x02' +
    '{|\x03\x02\x02\x02|~\x07\t\x02\x02}\x7F\x07\x1C\x02\x02~}\x03\x02\x02' +
    '\x02~\x7F\x03\x02\x02\x02\x7F\x80\x03\x02\x02\x02\x80\xF7\x05\x04\x03' +
    '\x13\x81\x83\f\x11\x02\x02\x82\x84\x07\x1C\x02\x02\x83\x82\x03\x02\x02' +
    '\x02\x83\x84\x03\x02\x02\x02\x84\x85\x03\x02\x02\x02\x85\x87\x07\v\x02' +
    '\x02\x86\x88\x07\x1C\x02\x02\x87\x86\x03\x02\x02\x02\x87\x88\x03\x02\x02' +
    '\x02\x88\x89\x03\x02\x02\x02\x89\xF7\x05\x04\x03\x12\x8A\x8C\f\x10\x02' +
    '\x02\x8B\x8D\x07\x1C\x02\x02\x8C\x8B\x03\x02\x02\x02\x8C\x8D\x03\x02\x02' +
    '\x02\x8D\x8E\x03\x02\x02\x02\x8E\x90\x07\f\x02\x02\x8F\x91\x07\x1C\x02' +
    '\x02\x90\x8F\x03\x02\x02\x02\x90\x91\x03\x02\x02\x02\x91\x92\x03\x02\x02' +
    '\x02\x92\xF7\x05\x04\x03\x11\x93\x95\f\x0F\x02\x02\x94\x96\x07\x1C\x02' +
    '\x02\x95\x94\x03\x02\x02\x02\x95\x96\x03\x02\x02\x02\x96\x97\x03\x02\x02' +
    '\x02\x97\x99\x07\x0F\x02\x02\x98\x9A\x07\x1C\x02\x02\x99\x98\x03\x02\x02' +
    '\x02\x99\x9A\x03\x02\x02\x02\x9A\x9B\x03\x02\x02\x02\x9B\xF7\x05\x04\x03' +
    '\x10\x9C\x9E\f\x0E\x02\x02\x9D\x9F\x07\x1C\x02\x02\x9E\x9D\x03\x02\x02' +
    '\x02\x9E\x9F\x03\x02\x02\x02\x9F\xA0\x03\x02\x02\x02\xA0\xA2\x07\x10\x02' +
    '\x02\xA1\xA3\x07\x1C\x02\x02\xA2\xA1\x03\x02\x02\x02\xA2\xA3\x03\x02\x02' +
    '\x02\xA3\xA4\x03\x02\x02\x02\xA4\xF7\x05\x04\x03\x0F\xA5\xA7\f\r\x02\x02' +
    '\xA6\xA8\x07\x1C\x02\x02\xA7\xA6\x03\x02\x02\x02\xA7\xA8\x03\x02\x02\x02' +
    '\xA8\xA9\x03\x02\x02\x02\xA9\xAB\x07\x11\x02\x02\xAA\xAC\x07\x1C\x02\x02' +
    '\xAB\xAA\x03\x02\x02\x02\xAB\xAC\x03\x02\x02\x02\xAC\xAD\x03\x02\x02\x02' +
    '\xAD\xF7\x05\x04\x03\x0E\xAE\xB0\f\f\x02\x02\xAF\xB1\x07\x1C\x02\x02\xB0' +
    '\xAF\x03\x02\x02\x02\xB0\xB1\x03\x02\x02\x02\xB1\xB2\x03\x02\x02\x02\xB2' +
    '\xB4\x07\x12\x02\x02\xB3\xB5\x07\x1C\x02\x02\xB4\xB3\x03\x02\x02\x02\xB4' +
    '\xB5\x03\x02\x02\x02\xB5\xB6\x03\x02\x02\x02\xB6\xF7\x05\x04\x03\r\xB7' +
    '\xB9\f\v\x02\x02\xB8\xBA\x07\x1C\x02\x02\xB9\xB8\x03\x02\x02\x02\xB9\xBA' +
    '\x03\x02\x02\x02\xBA\xBB\x03\x02\x02\x02\xBB\xBD\x07\x13\x02\x02\xBC\xBE' +
    '\x07\x1C\x02\x02\xBD\xBC\x03\x02\x02\x02\xBD\xBE\x03\x02\x02\x02\xBE\xBF' +
    '\x03\x02\x02\x02\xBF\xF7\x05\x04\x03\f\xC0\xC2\f\n\x02\x02\xC1\xC3\x07' +
    '\x1C\x02\x02\xC2\xC1\x03\x02\x02\x02\xC2\xC3\x03\x02\x02\x02\xC3\xC4\x03' +
    '\x02\x02\x02\xC4\xC6\x07\x14\x02\x02\xC5\xC7\x07\x1C\x02\x02\xC6\xC5\x03' +
    '\x02\x02\x02\xC6\xC7\x03\x02\x02\x02\xC7\xC8\x03\x02\x02\x02\xC8\xF7\x05' +
    '\x04\x03\v\xC9\xCB\f\t\x02\x02\xCA\xCC\x07\x1C\x02\x02\xCB\xCA\x03\x02' +
    '\x02\x02\xCB\xCC\x03\x02\x02\x02\xCC\xCD\x03\x02\x02\x02\xCD\xCF\x07\x15' +
    '\x02\x02\xCE\xD0\x07\x1C\x02\x02\xCF\xCE\x03\x02\x02\x02\xCF\xD0\x03\x02' +
    '\x02\x02\xD0\xD1\x03\x02\x02\x02\xD1\xF7\x05\x04\x03\n\xD2\xD4\f\b\x02' +
    '\x02\xD3\xD5\x07\x1C\x02\x02\xD4\xD3\x03\x02\x02\x02\xD4\xD5\x03\x02\x02' +
    '\x02\xD5\xD6\x03\x02\x02\x02\xD6\xD8\x07\x16\x02\x02\xD7\xD9\x07\x1C\x02' +
    '\x02\xD8\xD7\x03\x02\x02\x02\xD8\xD9\x03\x02\x02\x02\xD9\xDA\x03\x02\x02' +
    '\x02\xDA\xF7\x05\x04\x03\t\xDB\xDD\f\x07\x02\x02\xDC\xDE\x07\x1C\x02\x02' +
    '\xDD\xDC\x03\x02\x02\x02\xDD\xDE\x03\x02\x02\x02\xDE\xDF\x03\x02\x02\x02' +
    '\xDF\xE1\x07\x17\x02\x02\xE0\xE2\x07\x1C\x02\x02\xE1\xE0\x03\x02\x02\x02' +
    '\xE1\xE2\x03\x02\x02\x02\xE2\xE3\x03\x02\x02\x02\xE3\xF7\x05\x04\x03\b' +
    '\xE4\xE6\f\x05\x02\x02\xE5\xE7\x07\x1C\x02\x02\xE6\xE5\x03\x02\x02\x02' +
    '\xE6\xE7\x03\x02\x02\x02\xE7\xE8\x03\x02\x02\x02\xE8\xEA\x07\x18\x02\x02' +
    '\xE9\xEB\x07\x1C\x02\x02\xEA\xE9\x03\x02\x02\x02\xEA\xEB\x03\x02\x02\x02' +
    '\xEB\xEC\x03\x02\x02\x02\xEC\xF7\x05\x04\x03\x06\xED\xEF\f\x04\x02\x02' +
    '\xEE\xF0\x07\x1C\x02\x02\xEF\xEE\x03\x02\x02\x02\xEF\xF0\x03\x02\x02\x02' +
    '\xF0\xF1\x03\x02\x02\x02\xF1\xF3\x07\x19\x02\x02\xF2\xF4\x07\x1C\x02\x02' +
    '\xF3\xF2\x03\x02\x02\x02\xF3\xF4\x03\x02\x02\x02\xF4\xF5\x03\x02\x02\x02' +
    '\xF5\xF7\x05\x04\x03\x05\xF69\x03\x02\x02\x02\xF6B\x03\x02\x02\x02\xF6' +
    'K\x03\x02\x02\x02\xF6T\x03\x02\x02\x02\xF6]\x03\x02\x02\x02\xF6f\x03\x02' +
    '\x02\x02\xF6o\x03\x02\x02\x02\xF6x\x03\x02\x02\x02\xF6\x81\x03\x02\x02' +
    '\x02\xF6\x8A\x03\x02\x02\x02\xF6\x93\x03\x02\x02\x02\xF6\x9C\x03\x02\x02' +
    '\x02\xF6\xA5\x03\x02\x02\x02\xF6\xAE\x03\x02\x02\x02\xF6\xB7\x03\x02\x02' +
    '\x02\xF6\xC0\x03\x02\x02\x02\xF6\xC9\x03\x02\x02\x02\xF6\xD2\x03\x02\x02' +
    '\x02\xF6\xDB\x03\x02\x02\x02\xF6\xE4\x03\x02\x02\x02\xF6\xED\x03\x02\x02' +
    '\x02\xF7\xFA\x03\x02\x02\x02\xF8\xF6\x03\x02\x02\x02\xF8\xF9\x03\x02\x02' +
    '\x02\xF9\x05\x03\x02\x02\x02\xFA\xF8\x03\x02\x02\x02\xFB\xFD\x07\x1C\x02' +
    '\x02\xFC\xFB\x03\x02\x02\x02\xFC\xFD\x03\x02\x02\x02\xFD\xFE\x03\x02\x02' +
    '\x02\xFE\u0100\x07\x03\x02\x02\xFF\u0101\x07\x1C\x02\x02\u0100\xFF\x03' +
    '\x02\x02\x02\u0100\u0101\x03\x02\x02\x02\u0101\u0102\x03\x02\x02\x02\u0102' +
    '\u0104\x05\x04\x03\x02\u0103\u0105\x07\x1C\x02\x02\u0104\u0103\x03\x02' +
    '\x02\x02\u0104\u0105\x03\x02\x02\x02\u0105\u0106\x03\x02\x02\x02\u0106' +
    '\u0108\x07\x04\x02\x02\u0107\u0109\x07\x1C\x02\x02\u0108\u0107\x03\x02' +
    '\x02\x02\u0108\u0109\x03\x02\x02\x02\u0109\x07\x03\x02\x02\x02\u010A\u010C' +
    '\x07\x1C\x02\x02\u010B\u010A\x03\x02\x02\x02\u010B\u010C\x03\x02\x02\x02' +
    '\u010C\u010D\x03\x02\x02\x02\u010D\u010E\x07"\x02\x02\u010E\u010F\x07' +
    '\x1C\x02\x02\u010F\u0110\x05\x04\x03\x02\u0110\u0111\x07\x1C\x02\x02\u0111' +
    '\u0112\x07#\x02\x02\u0112\u0113\x07\x1C\x02\x02\u0113\u0114\x05\x04\x03' +
    '\x02\u0114\u0115\x07\x1C\x02\x02\u0115\u0116\x07$\x02\x02\u0116\u0117' +
    '\x07\x1C\x02\x02\u0117\u0119\x05\x04\x03\x02\u0118\u011A\x07\x1C\x02\x02' +
    '\u0119\u0118\x03\x02\x02\x02\u0119\u011A\x03\x02\x02\x02\u011A\t\x03\x02' +
    "\x02\x02@\x0E\x12\x15\x19\x1C #'*.37;?DHMQVZ_chlquz~\x83\x87\x8C\x90" +
    '\x95\x99\x9E\xA2\xA7\xAB\xB0\xB4\xB9\xBD\xC2\xC6\xCB\xCF\xD4\xD8\xDD\xE1' +
    '\xE6\xEA\xEF\xF3\xF6\xF8\xFC\u0100\u0104\u0108\u010B\u0119';
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
  public expression(): ExpressionContext {
    return this.getRuleContext(0, ExpressionContext);
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
  public WS(): TerminalNode[];
  public WS(i: number): TerminalNode;
  public WS(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(GrammarParser.WS);
    } else {
      return this.getToken(GrammarParser.WS, i);
    }
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
  public WS(): TerminalNode[];
  public WS(i: number): TerminalNode;
  public WS(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(GrammarParser.WS);
    } else {
      return this.getToken(GrammarParser.WS, i);
    }
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
  public WS(): TerminalNode[];
  public WS(i: number): TerminalNode;
  public WS(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(GrammarParser.WS);
    } else {
      return this.getToken(GrammarParser.WS, i);
    }
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
  public WS(): TerminalNode[];
  public WS(i: number): TerminalNode;
  public WS(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(GrammarParser.WS);
    } else {
      return this.getToken(GrammarParser.WS, i);
    }
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
  public WS(): TerminalNode[];
  public WS(i: number): TerminalNode;
  public WS(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(GrammarParser.WS);
    } else {
      return this.getToken(GrammarParser.WS, i);
    }
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
  public WS(): TerminalNode[];
  public WS(i: number): TerminalNode;
  public WS(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(GrammarParser.WS);
    } else {
      return this.getToken(GrammarParser.WS, i);
    }
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
  public WS(): TerminalNode[];
  public WS(i: number): TerminalNode;
  public WS(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(GrammarParser.WS);
    } else {
      return this.getToken(GrammarParser.WS, i);
    }
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
  public WS(): TerminalNode[];
  public WS(i: number): TerminalNode;
  public WS(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(GrammarParser.WS);
    } else {
      return this.getToken(GrammarParser.WS, i);
    }
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
  public WS(): TerminalNode[];
  public WS(i: number): TerminalNode;
  public WS(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(GrammarParser.WS);
    } else {
      return this.getToken(GrammarParser.WS, i);
    }
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
  public WS(): TerminalNode[];
  public WS(i: number): TerminalNode;
  public WS(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(GrammarParser.WS);
    } else {
      return this.getToken(GrammarParser.WS, i);
    }
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
  public WS(): TerminalNode[];
  public WS(i: number): TerminalNode;
  public WS(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(GrammarParser.WS);
    } else {
      return this.getToken(GrammarParser.WS, i);
    }
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
  public WS(): TerminalNode[];
  public WS(i: number): TerminalNode;
  public WS(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(GrammarParser.WS);
    } else {
      return this.getToken(GrammarParser.WS, i);
    }
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
  public WS(): TerminalNode[];
  public WS(i: number): TerminalNode;
  public WS(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(GrammarParser.WS);
    } else {
      return this.getToken(GrammarParser.WS, i);
    }
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
  public WS(): TerminalNode[];
  public WS(i: number): TerminalNode;
  public WS(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(GrammarParser.WS);
    } else {
      return this.getToken(GrammarParser.WS, i);
    }
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
  public WS(): TerminalNode[];
  public WS(i: number): TerminalNode;
  public WS(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(GrammarParser.WS);
    } else {
      return this.getToken(GrammarParser.WS, i);
    }
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
  public WS(): TerminalNode[];
  public WS(i: number): TerminalNode;
  public WS(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(GrammarParser.WS);
    } else {
      return this.getToken(GrammarParser.WS, i);
    }
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
  public WS(): TerminalNode[];
  public WS(i: number): TerminalNode;
  public WS(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(GrammarParser.WS);
    } else {
      return this.getToken(GrammarParser.WS, i);
    }
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
  public WS(): TerminalNode[];
  public WS(i: number): TerminalNode;
  public WS(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(GrammarParser.WS);
    } else {
      return this.getToken(GrammarParser.WS, i);
    }
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
  public WS(): TerminalNode[];
  public WS(i: number): TerminalNode;
  public WS(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(GrammarParser.WS);
    } else {
      return this.getToken(GrammarParser.WS, i);
    }
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
  public WS(): TerminalNode[];
  public WS(i: number): TerminalNode;
  public WS(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(GrammarParser.WS);
    } else {
      return this.getToken(GrammarParser.WS, i);
    }
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
  public WS(): TerminalNode[];
  public WS(i: number): TerminalNode;
  public WS(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(GrammarParser.WS);
    } else {
      return this.getToken(GrammarParser.WS, i);
    }
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
  public WS(): TerminalNode[];
  public WS(i: number): TerminalNode;
  public WS(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(GrammarParser.WS);
    } else {
      return this.getToken(GrammarParser.WS, i);
    }
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
  public WS(): TerminalNode[];
  public WS(i: number): TerminalNode;
  public WS(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(GrammarParser.WS);
    } else {
      return this.getToken(GrammarParser.WS, i);
    }
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
  public WS(): TerminalNode[];
  public WS(i: number): TerminalNode;
  public WS(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(GrammarParser.WS);
    } else {
      return this.getToken(GrammarParser.WS, i);
    }
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
export class NotContext extends ExpressionContext {
  public _operator!: Token;
  public _argument!: ExpressionContext;
  public NOT(): TerminalNode {
    return this.getToken(GrammarParser.NOT, 0);
  }
  public expression(): ExpressionContext {
    return this.getRuleContext(0, ExpressionContext);
  }
  public WS(): TerminalNode | undefined {
    return this.tryGetToken(GrammarParser.WS, 0);
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
  public WS(): TerminalNode[];
  public WS(i: number): TerminalNode;
  public WS(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(GrammarParser.WS);
    } else {
      return this.getToken(GrammarParser.WS, i);
    }
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
  public WS(): TerminalNode[];
  public WS(i: number): TerminalNode;
  public WS(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(GrammarParser.WS);
    } else {
      return this.getToken(GrammarParser.WS, i);
    }
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
  public WS(): TerminalNode[];
  public WS(i: number): TerminalNode;
  public WS(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(GrammarParser.WS);
    } else {
      return this.getToken(GrammarParser.WS, i);
    }
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
  public WS(): TerminalNode[];
  public WS(i: number): TerminalNode;
  public WS(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(GrammarParser.WS);
    } else {
      return this.getToken(GrammarParser.WS, i);
    }
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
