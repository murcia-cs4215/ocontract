// Generated from ./src/lang/Grammar.g4 by ANTLR 4.9.0-SNAPSHOT

import { ATN } from 'antlr4ts/atn/ATN';
import { ATNDeserializer } from 'antlr4ts/atn/ATNDeserializer';
import { ParserATNSimulator } from 'antlr4ts/atn/ParserATNSimulator';
import { FailedPredicateException } from 'antlr4ts/FailedPredicateException';
import * as Utils from 'antlr4ts/misc/Utils';
import { NoViableAltException } from 'antlr4ts/NoViableAltException';
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
  public static readonly T__2 = 3;
  public static readonly T__3 = 4;
  public static readonly POW = 5;
  public static readonly MUL = 6;
  public static readonly DIV = 7;
  public static readonly ADD = 8;
  public static readonly SUB = 9;
  public static readonly MOD = 10;
  public static readonly ADDFLOAT = 11;
  public static readonly SUBFLOAT = 12;
  public static readonly MULFLOAT = 13;
  public static readonly DIVFLOAT = 14;
  public static readonly LESSTHAN = 15;
  public static readonly LESSTHANOREQUAL = 16;
  public static readonly GREATERTHAN = 17;
  public static readonly GREATERTHANOREQUAL = 18;
  public static readonly EQUALSTRUC = 19;
  public static readonly NOTEQUALSTRUC = 20;
  public static readonly EQUALPHYS = 21;
  public static readonly NOTEQUALPHYS = 22;
  public static readonly CONCAT = 23;
  public static readonly AND = 24;
  public static readonly OR = 25;
  public static readonly NOT = 26;
  public static readonly NUMBER = 27;
  public static readonly TOSKIP = 28;
  public static readonly CHAR = 29;
  public static readonly STRING = 30;
  public static readonly FLOAT = 31;
  public static readonly BOOLEAN = 32;
  public static readonly IF = 33;
  public static readonly THEN = 34;
  public static readonly ELSE = 35;
  public static readonly FUN = 36;
  public static readonly ARROW = 37;
  public static readonly PIPE = 38;
  public static readonly LET = 39;
  public static readonly IN = 40;
  public static readonly REC = 41;
  public static readonly COLON = 42;
  public static readonly CONTRACT = 43;
  public static readonly DOUBLESEMICOLON = 44;
  public static readonly PRIMITIVETYPE = 45;
  public static readonly IDENTIFIER = 46;
  public static readonly RULE_type = 0;
  public static readonly RULE_atom = 1;
  public static readonly RULE_start = 2;
  public static readonly RULE_statement = 3;
  public static readonly RULE_expression = 4;
  public static readonly RULE_typeAnnotation = 5;
  public static readonly RULE_contractExpression = 6;
  public static readonly RULE_contractsList = 7;
  public static readonly RULE_contractDeclaration = 8;
  public static readonly RULE_identifierWithContextParen = 9;
  public static readonly RULE_identifierWithContext = 10;
  public static readonly RULE_condExp = 11;
  public static readonly RULE_parenthesesExpression = 12;
  public static readonly RULE_funcArgument = 13;
  public static readonly RULE_identifier = 14;
  public static readonly RULE_identifierListWithContext = 15;
  public static readonly RULE_identifierList = 16;
  public static readonly RULE_funcApplyArgumentList = 17;
  public static readonly RULE_funcApplication = 18;
  public static readonly RULE_lambda = 19;
  public static readonly RULE_letGlobalBinding = 20;
  public static readonly RULE_letLocalBinding = 21;
  // tslint:disable:no-trailing-whitespace
  public static readonly ruleNames: string[] = [
    'type',
    'atom',
    'start',
    'statement',
    'expression',
    'typeAnnotation',
    'contractExpression',
    'contractsList',
    'contractDeclaration',
    'identifierWithContextParen',
    'identifierWithContext',
    'condExp',
    'parenthesesExpression',
    'funcArgument',
    'identifier',
    'identifierListWithContext',
    'identifierList',
    'funcApplyArgumentList',
    'funcApplication',
    'lambda',
    'letGlobalBinding',
    'letLocalBinding',
  ];

  private static readonly _LITERAL_NAMES: Array<string | undefined> = [
    undefined,
    "'('",
    "')'",
    "'{'",
    "'}'",
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
    "'fun'",
    "'->'",
    "'|'",
    "'let'",
    "'in'",
    "'rec'",
    "':'",
    "'contract'",
    "';;'",
  ];
  private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
    undefined,
    undefined,
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
    'FUN',
    'ARROW',
    'PIPE',
    'LET',
    'IN',
    'REC',
    'COLON',
    'CONTRACT',
    'DOUBLESEMICOLON',
    'PRIMITIVETYPE',
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

  public type(): TypeContext;
  public type(_p: number): TypeContext;
  // @RuleVersion(0)
  public type(_p?: number): TypeContext {
    if (_p === undefined) {
      _p = 0;
    }

    const _parentctx: ParserRuleContext = this._ctx;
    const _parentState: number = this.state;
    let _localctx: TypeContext = new TypeContext(this._ctx, _parentState);
    const _startState = 0;
    this.enterRecursionRule(_localctx, 0, GrammarParser.RULE_type, _p);
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 50;
        this._errHandler.sync(this);
        switch (this._input.LA(1)) {
          case GrammarParser.PRIMITIVETYPE:
            {
              _localctx = new PrimTypeContext(_localctx);
              this._ctx = _localctx;

              this.state = 45;
              this.match(GrammarParser.PRIMITIVETYPE);
            }
            break;
          case GrammarParser.T__0:
            {
              _localctx = new ParenTypeContext(_localctx);
              this._ctx = _localctx;
              this.state = 46;
              this.match(GrammarParser.T__0);
              this.state = 47;
              this.type(0);
              this.state = 48;
              this.match(GrammarParser.T__1);
            }
            break;
          default:
            throw new NoViableAltException(this);
        }
        this._ctx._stop = this._input.tryLT(-1);
        this.state = 61;
        this._errHandler.sync(this);
        _alt = this.interpreter.adaptivePredict(this._input, 2, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            if (this._parseListeners != null) {
              this.triggerExitRuleEvent();
            }
            {
              {
                _localctx = new FunTypeContext(
                  new TypeContext(_parentctx, _parentState),
                );
                this.pushNewRecursionContext(
                  _localctx,
                  _startState,
                  GrammarParser.RULE_type,
                );
                this.state = 52;
                if (!this.precpred(this._ctx, 1)) {
                  throw this.createFailedPredicateException(
                    'this.precpred(this._ctx, 1)',
                  );
                }
                this.state = 55;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                  switch (_alt) {
                    case 1:
                      {
                        {
                          this.state = 53;
                          this.match(GrammarParser.ARROW);
                          this.state = 54;
                          this.type(0);
                        }
                      }
                      break;
                    default:
                      throw new NoViableAltException(this);
                  }
                  this.state = 57;
                  this._errHandler.sync(this);
                  _alt = this.interpreter.adaptivePredict(
                    this._input,
                    1,
                    this._ctx,
                  );
                } while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
              }
            }
          }
          this.state = 63;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 2, this._ctx);
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
  public atom(): AtomContext {
    let _localctx: AtomContext = new AtomContext(this._ctx, this.state);
    this.enterRule(_localctx, 2, GrammarParser.RULE_atom);
    try {
      this.state = 69;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case GrammarParser.NUMBER:
          _localctx = new NumberContext(_localctx);
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 64;
            this.match(GrammarParser.NUMBER);
          }
          break;
        case GrammarParser.FLOAT:
          _localctx = new FloatContext(_localctx);
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 65;
            this.match(GrammarParser.FLOAT);
          }
          break;
        case GrammarParser.BOOLEAN:
          _localctx = new BooleanContext(_localctx);
          this.enterOuterAlt(_localctx, 3);
          {
            this.state = 66;
            this.match(GrammarParser.BOOLEAN);
          }
          break;
        case GrammarParser.CHAR:
          _localctx = new CharContext(_localctx);
          this.enterOuterAlt(_localctx, 4);
          {
            this.state = 67;
            this.match(GrammarParser.CHAR);
          }
          break;
        case GrammarParser.STRING:
          _localctx = new StringContext(_localctx);
          this.enterOuterAlt(_localctx, 5);
          {
            this.state = 68;
            this.match(GrammarParser.STRING);
          }
          break;
        default:
          throw new NoViableAltException(this);
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
  public start(): StartContext {
    const _localctx: StartContext = new StartContext(this._ctx, this.state);
    this.enterRule(_localctx, 4, GrammarParser.RULE_start);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 76;
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
                (1 << GrammarParser.FLOAT))) !==
              0) ||
          (((_la - 32) & ~0x1f) === 0 &&
            ((1 << (_la - 32)) &
              ((1 << (GrammarParser.BOOLEAN - 32)) |
                (1 << (GrammarParser.IF - 32)) |
                (1 << (GrammarParser.FUN - 32)) |
                (1 << (GrammarParser.LET - 32)) |
                (1 << (GrammarParser.CONTRACT - 32)) |
                (1 << (GrammarParser.IDENTIFIER - 32)))) !==
              0)
        ) {
          {
            {
              this.state = 71;
              this.statement();
              this.state = 72;
              this.match(GrammarParser.DOUBLESEMICOLON);
            }
          }
          this.state = 78;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
        this.state = 79;
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
  public statement(): StatementContext {
    const _localctx: StatementContext = new StatementContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 6, GrammarParser.RULE_statement);
    try {
      this.state = 84;
      this._errHandler.sync(this);
      switch (this.interpreter.adaptivePredict(this._input, 5, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 81;
            this.expression(0);
          }
          break;

        case 2:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 82;
            this.letGlobalBinding();
          }
          break;

        case 3:
          this.enterOuterAlt(_localctx, 3);
          {
            this.state = 83;
            this.contractDeclaration();
          }
          break;
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
    const _startState = 8;
    this.enterRecursionRule(_localctx, 8, GrammarParser.RULE_expression, _p);
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 98;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 6, this._ctx)) {
          case 1:
            {
              _localctx = new AtomExpressionContext(_localctx);
              this._ctx = _localctx;
              _prevctx = _localctx;

              this.state = 87;
              this.atom();
            }
            break;

          case 2:
            {
              _localctx = new IdentifierExpressionContext(_localctx);
              this._ctx = _localctx;
              _prevctx = _localctx;
              this.state = 88;
              this.identifier();
            }
            break;

          case 3:
            {
              _localctx = new ParenthesesContext(_localctx);
              this._ctx = _localctx;
              _prevctx = _localctx;
              this.state = 89;
              this.parenthesesExpression();
            }
            break;

          case 4:
            {
              _localctx = new NegativeContext(_localctx);
              this._ctx = _localctx;
              _prevctx = _localctx;
              this.state = 90;
              (_localctx as NegativeContext)._operator = this.match(
                GrammarParser.SUB,
              );
              this.state = 91;
              (_localctx as NegativeContext)._argument = this.expression(8);
            }
            break;

          case 5:
            {
              _localctx = new NotContext(_localctx);
              this._ctx = _localctx;
              _prevctx = _localctx;
              this.state = 92;
              (_localctx as NotContext)._operator = this.match(
                GrammarParser.NOT,
              );
              this.state = 93;
              (_localctx as NotContext)._argument = this.expression(7);
            }
            break;

          case 6:
            {
              _localctx = new ConditionalExpressionContext(_localctx);
              this._ctx = _localctx;
              _prevctx = _localctx;
              this.state = 94;
              this.condExp();
            }
            break;

          case 7:
            {
              _localctx = new LetLocalBindingExpressionContext(_localctx);
              this._ctx = _localctx;
              _prevctx = _localctx;
              this.state = 95;
              this.letLocalBinding();
            }
            break;

          case 8:
            {
              _localctx = new LambdaExpressionContext(_localctx);
              this._ctx = _localctx;
              _prevctx = _localctx;
              this.state = 96;
              this.lambda();
            }
            break;

          case 9:
            {
              _localctx = new CallFunctionContext(_localctx);
              this._ctx = _localctx;
              _prevctx = _localctx;
              this.state = 97;
              this.funcApplication();
            }
            break;
        }
        this._ctx._stop = this._input.tryLT(-1);
        this.state = 165;
        this._errHandler.sync(this);
        _alt = this.interpreter.adaptivePredict(this._input, 8, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            if (this._parseListeners != null) {
              this.triggerExitRuleEvent();
            }
            _prevctx = _localctx;
            {
              this.state = 163;
              this._errHandler.sync(this);
              switch (
                this.interpreter.adaptivePredict(this._input, 7, this._ctx)
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
                    this.state = 100;
                    if (!this.precpred(this._ctx, 27)) {
                      throw this.createFailedPredicateException(
                        'this.precpred(this._ctx, 27)',
                      );
                    }
                    this.state = 101;
                    (_localctx as PowerContext)._operator = this.match(
                      GrammarParser.POW,
                    );
                    this.state = 102;
                    (_localctx as PowerContext)._right = this.expression(27);
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
                    this.state = 103;
                    if (!this.precpred(this._ctx, 26)) {
                      throw this.createFailedPredicateException(
                        'this.precpred(this._ctx, 26)',
                      );
                    }
                    this.state = 104;
                    (_localctx as MultiplicationContext)._operator = this.match(
                      GrammarParser.MUL,
                    );
                    this.state = 105;
                    (_localctx as MultiplicationContext)._right =
                      this.expression(27);
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
                    this.state = 106;
                    if (!this.precpred(this._ctx, 25)) {
                      throw this.createFailedPredicateException(
                        'this.precpred(this._ctx, 25)',
                      );
                    }
                    this.state = 107;
                    (_localctx as DivisionContext)._operator = this.match(
                      GrammarParser.DIV,
                    );
                    this.state = 108;
                    (_localctx as DivisionContext)._right = this.expression(26);
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
                    this.state = 109;
                    if (!this.precpred(this._ctx, 24)) {
                      throw this.createFailedPredicateException(
                        'this.precpred(this._ctx, 24)',
                      );
                    }
                    this.state = 110;
                    (_localctx as MultiplicationFloatContext)._operator =
                      this.match(GrammarParser.MULFLOAT);
                    this.state = 111;
                    (_localctx as MultiplicationFloatContext)._right =
                      this.expression(25);
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
                    this.state = 112;
                    if (!this.precpred(this._ctx, 23)) {
                      throw this.createFailedPredicateException(
                        'this.precpred(this._ctx, 23)',
                      );
                    }
                    this.state = 113;
                    (_localctx as DivisionFloatContext)._operator = this.match(
                      GrammarParser.DIVFLOAT,
                    );
                    this.state = 114;
                    (_localctx as DivisionFloatContext)._right =
                      this.expression(24);
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
                    this.state = 115;
                    if (!this.precpred(this._ctx, 22)) {
                      throw this.createFailedPredicateException(
                        'this.precpred(this._ctx, 22)',
                      );
                    }
                    this.state = 116;
                    (_localctx as ModulusContext)._operator = this.match(
                      GrammarParser.MOD,
                    );
                    this.state = 117;
                    (_localctx as ModulusContext)._right = this.expression(23);
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
                    this.state = 118;
                    if (!this.precpred(this._ctx, 21)) {
                      throw this.createFailedPredicateException(
                        'this.precpred(this._ctx, 21)',
                      );
                    }
                    this.state = 119;
                    (_localctx as AdditionContext)._operator = this.match(
                      GrammarParser.ADD,
                    );
                    this.state = 120;
                    (_localctx as AdditionContext)._right = this.expression(22);
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
                    this.state = 121;
                    if (!this.precpred(this._ctx, 20)) {
                      throw this.createFailedPredicateException(
                        'this.precpred(this._ctx, 20)',
                      );
                    }
                    this.state = 122;
                    (_localctx as SubtractionContext)._operator = this.match(
                      GrammarParser.SUB,
                    );
                    this.state = 123;
                    (_localctx as SubtractionContext)._right =
                      this.expression(21);
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
                    this.state = 124;
                    if (!this.precpred(this._ctx, 19)) {
                      throw this.createFailedPredicateException(
                        'this.precpred(this._ctx, 19)',
                      );
                    }
                    this.state = 125;
                    (_localctx as AdditionFloatContext)._operator = this.match(
                      GrammarParser.ADDFLOAT,
                    );
                    this.state = 126;
                    (_localctx as AdditionFloatContext)._right =
                      this.expression(20);
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
                    this.state = 127;
                    if (!this.precpred(this._ctx, 18)) {
                      throw this.createFailedPredicateException(
                        'this.precpred(this._ctx, 18)',
                      );
                    }
                    this.state = 128;
                    (_localctx as SubtractionFloatContext)._operator =
                      this.match(GrammarParser.SUBFLOAT);
                    this.state = 129;
                    (_localctx as SubtractionFloatContext)._right =
                      this.expression(19);
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
                    this.state = 130;
                    if (!this.precpred(this._ctx, 17)) {
                      throw this.createFailedPredicateException(
                        'this.precpred(this._ctx, 17)',
                      );
                    }
                    this.state = 131;
                    (_localctx as LessThanContext)._operator = this.match(
                      GrammarParser.LESSTHAN,
                    );
                    this.state = 132;
                    (_localctx as LessThanContext)._right = this.expression(18);
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
                    this.state = 133;
                    if (!this.precpred(this._ctx, 16)) {
                      throw this.createFailedPredicateException(
                        'this.precpred(this._ctx, 16)',
                      );
                    }
                    this.state = 134;
                    (_localctx as LessThanOrEqualContext)._operator =
                      this.match(GrammarParser.LESSTHANOREQUAL);
                    this.state = 135;
                    (_localctx as LessThanOrEqualContext)._right =
                      this.expression(17);
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
                    this.state = 136;
                    if (!this.precpred(this._ctx, 15)) {
                      throw this.createFailedPredicateException(
                        'this.precpred(this._ctx, 15)',
                      );
                    }
                    this.state = 137;
                    (_localctx as GreaterThanContext)._operator = this.match(
                      GrammarParser.GREATERTHAN,
                    );
                    this.state = 138;
                    (_localctx as GreaterThanContext)._right =
                      this.expression(16);
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
                    this.state = 139;
                    if (!this.precpred(this._ctx, 14)) {
                      throw this.createFailedPredicateException(
                        'this.precpred(this._ctx, 14)',
                      );
                    }
                    this.state = 140;
                    (_localctx as GreaterThanOrEqualContext)._operator =
                      this.match(GrammarParser.GREATERTHANOREQUAL);
                    this.state = 141;
                    (_localctx as GreaterThanOrEqualContext)._right =
                      this.expression(15);
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
                    this.state = 142;
                    if (!this.precpred(this._ctx, 13)) {
                      throw this.createFailedPredicateException(
                        'this.precpred(this._ctx, 13)',
                      );
                    }
                    this.state = 143;
                    (_localctx as EqualStructuralContext)._operator =
                      this.match(GrammarParser.EQUALSTRUC);
                    this.state = 144;
                    (_localctx as EqualStructuralContext)._right =
                      this.expression(14);
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
                    this.state = 145;
                    if (!this.precpred(this._ctx, 12)) {
                      throw this.createFailedPredicateException(
                        'this.precpred(this._ctx, 12)',
                      );
                    }
                    this.state = 146;
                    (_localctx as NotEqualStructuralContext)._operator =
                      this.match(GrammarParser.NOTEQUALSTRUC);
                    this.state = 147;
                    (_localctx as NotEqualStructuralContext)._right =
                      this.expression(13);
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
                    this.state = 148;
                    if (!this.precpred(this._ctx, 11)) {
                      throw this.createFailedPredicateException(
                        'this.precpred(this._ctx, 11)',
                      );
                    }
                    this.state = 149;
                    (_localctx as EqualPhysicalContext)._operator = this.match(
                      GrammarParser.EQUALPHYS,
                    );
                    this.state = 150;
                    (_localctx as EqualPhysicalContext)._right =
                      this.expression(12);
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
                    this.state = 151;
                    if (!this.precpred(this._ctx, 10)) {
                      throw this.createFailedPredicateException(
                        'this.precpred(this._ctx, 10)',
                      );
                    }
                    this.state = 152;
                    (_localctx as NotEqualPhysicalContext)._operator =
                      this.match(GrammarParser.NOTEQUALPHYS);
                    this.state = 153;
                    (_localctx as NotEqualPhysicalContext)._right =
                      this.expression(11);
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
                    this.state = 154;
                    if (!this.precpred(this._ctx, 9)) {
                      throw this.createFailedPredicateException(
                        'this.precpred(this._ctx, 9)',
                      );
                    }
                    this.state = 155;
                    (_localctx as ConcatenationContext)._operator = this.match(
                      GrammarParser.CONCAT,
                    );
                    this.state = 156;
                    (_localctx as ConcatenationContext)._right =
                      this.expression(10);
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
                    this.state = 157;
                    if (!this.precpred(this._ctx, 6)) {
                      throw this.createFailedPredicateException(
                        'this.precpred(this._ctx, 6)',
                      );
                    }
                    this.state = 158;
                    (_localctx as AndContext)._operator = this.match(
                      GrammarParser.AND,
                    );
                    this.state = 159;
                    (_localctx as AndContext)._right = this.expression(7);
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
                    this.state = 160;
                    if (!this.precpred(this._ctx, 5)) {
                      throw this.createFailedPredicateException(
                        'this.precpred(this._ctx, 5)',
                      );
                    }
                    this.state = 161;
                    (_localctx as OrContext)._operator = this.match(
                      GrammarParser.OR,
                    );
                    this.state = 162;
                    (_localctx as OrContext)._right = this.expression(6);
                  }
                  break;
              }
            }
          }
          this.state = 167;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 8, this._ctx);
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
  public typeAnnotation(): TypeAnnotationContext {
    const _localctx: TypeAnnotationContext = new TypeAnnotationContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 10, GrammarParser.RULE_typeAnnotation);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 168;
        this.match(GrammarParser.COLON);
        this.state = 169;
        this.type(0);
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

  public contractExpression(): ContractExpressionContext;
  public contractExpression(_p: number): ContractExpressionContext;
  // @RuleVersion(0)
  public contractExpression(_p?: number): ContractExpressionContext {
    if (_p === undefined) {
      _p = 0;
    }

    const _parentctx: ParserRuleContext = this._ctx;
    const _parentState: number = this.state;
    let _localctx: ContractExpressionContext = new ContractExpressionContext(
      this._ctx,
      _parentState,
    );
    const _startState = 12;
    this.enterRecursionRule(
      _localctx,
      12,
      GrammarParser.RULE_contractExpression,
      _p,
    );
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 183;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 9, this._ctx)) {
          case 1:
            {
              this.state = 172;
              this.expression(0);
            }
            break;

          case 2:
            {
              this.state = 173;
              this.match(GrammarParser.T__2);
              this.state = 174;
              this.identifier();
              this.state = 175;
              this.match(GrammarParser.PIPE);
              this.state = 176;
              this.expression(0);
              this.state = 177;
              this.match(GrammarParser.T__3);
            }
            break;

          case 3:
            {
              this.state = 179;
              this.match(GrammarParser.T__0);
              this.state = 180;
              this.contractExpression(0);
              this.state = 181;
              this.match(GrammarParser.T__1);
            }
            break;
        }
        this._ctx._stop = this._input.tryLT(-1);
        this.state = 190;
        this._errHandler.sync(this);
        _alt = this.interpreter.adaptivePredict(this._input, 10, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            if (this._parseListeners != null) {
              this.triggerExitRuleEvent();
            }
            {
              {
                _localctx = new ContractExpressionContext(
                  _parentctx,
                  _parentState,
                );
                this.pushNewRecursionContext(
                  _localctx,
                  _startState,
                  GrammarParser.RULE_contractExpression,
                );
                this.state = 185;
                if (!this.precpred(this._ctx, 2)) {
                  throw this.createFailedPredicateException(
                    'this.precpred(this._ctx, 2)',
                  );
                }
                this.state = 186;
                this.match(GrammarParser.ARROW);
                this.state = 187;
                this.contractExpression(3);
              }
            }
          }
          this.state = 192;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 10, this._ctx);
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
  public contractsList(): ContractsListContext {
    const _localctx: ContractsListContext = new ContractsListContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 14, GrammarParser.RULE_contractsList);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 193;
        this.contractExpression(0);
        this.state = 196;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
          {
            {
              this.state = 194;
              this.match(GrammarParser.ARROW);
              this.state = 195;
              this.contractExpression(0);
            }
          }
          this.state = 198;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        } while (_la === GrammarParser.ARROW);
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
  public contractDeclaration(): ContractDeclarationContext {
    const _localctx: ContractDeclarationContext =
      new ContractDeclarationContext(this._ctx, this.state);
    this.enterRule(_localctx, 16, GrammarParser.RULE_contractDeclaration);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 200;
        this.match(GrammarParser.CONTRACT);
        this.state = 201;
        this.identifier();
        this.state = 202;
        this.match(GrammarParser.EQUALSTRUC);
        this.state = 203;
        this.contractsList();
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
  public identifierWithContextParen(): IdentifierWithContextParenContext {
    const _localctx: IdentifierWithContextParenContext =
      new IdentifierWithContextParenContext(this._ctx, this.state);
    this.enterRule(
      _localctx,
      18,
      GrammarParser.RULE_identifierWithContextParen,
    );
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 205;
        this.match(GrammarParser.T__0);
        this.state = 206;
        this.identifierWithContext();
        this.state = 207;
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
  public identifierWithContext(): IdentifierWithContextContext {
    const _localctx: IdentifierWithContextContext =
      new IdentifierWithContextContext(this._ctx, this.state);
    this.enterRule(_localctx, 20, GrammarParser.RULE_identifierWithContext);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 209;
        this.identifier();
        {
          this.state = 211;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
          if (_la === GrammarParser.COLON) {
            {
              this.state = 210;
              this.typeAnnotation();
            }
          }
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
    this.enterRule(_localctx, 22, GrammarParser.RULE_condExp);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 213;
        this.match(GrammarParser.IF);
        this.state = 214;
        _localctx._test = this.expression(0);
        this.state = 215;
        this.match(GrammarParser.THEN);
        this.state = 216;
        _localctx._consequent = this.expression(0);
        this.state = 217;
        this.match(GrammarParser.ELSE);
        this.state = 218;
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
  public parenthesesExpression(): ParenthesesExpressionContext {
    const _localctx: ParenthesesExpressionContext =
      new ParenthesesExpressionContext(this._ctx, this.state);
    this.enterRule(_localctx, 24, GrammarParser.RULE_parenthesesExpression);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 220;
        this.match(GrammarParser.T__0);
        this.state = 221;
        _localctx._inner = this.expression(0);
        this.state = 222;
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
  public funcArgument(): FuncArgumentContext {
    const _localctx: FuncArgumentContext = new FuncArgumentContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 26, GrammarParser.RULE_funcArgument);
    try {
      this.state = 227;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case GrammarParser.NUMBER:
        case GrammarParser.CHAR:
        case GrammarParser.STRING:
        case GrammarParser.FLOAT:
        case GrammarParser.BOOLEAN:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 224;
            this.atom();
          }
          break;
        case GrammarParser.IDENTIFIER:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 225;
            this.identifier();
          }
          break;
        case GrammarParser.T__0:
          this.enterOuterAlt(_localctx, 3);
          {
            this.state = 226;
            this.parenthesesExpression();
          }
          break;
        default:
          throw new NoViableAltException(this);
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
  public identifier(): IdentifierContext {
    const _localctx: IdentifierContext = new IdentifierContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 28, GrammarParser.RULE_identifier);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 229;
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
  public identifierListWithContext(): IdentifierListWithContextContext {
    const _localctx: IdentifierListWithContextContext =
      new IdentifierListWithContextContext(this._ctx, this.state);
    this.enterRule(_localctx, 30, GrammarParser.RULE_identifierListWithContext);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 233;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
          {
            this.state = 233;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
              case GrammarParser.IDENTIFIER:
                {
                  this.state = 231;
                  this.identifier();
                }
                break;
              case GrammarParser.T__0:
                {
                  this.state = 232;
                  this.identifierWithContextParen();
                }
                break;
              default:
                throw new NoViableAltException(this);
            }
          }
          this.state = 235;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        } while (
          _la === GrammarParser.T__0 ||
          _la === GrammarParser.IDENTIFIER
        );
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
    this.enterRule(_localctx, 32, GrammarParser.RULE_identifierList);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 238;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
          {
            {
              this.state = 237;
              this.identifier();
            }
          }
          this.state = 240;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        } while (_la === GrammarParser.IDENTIFIER);
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
  public funcApplyArgumentList(): FuncApplyArgumentListContext {
    const _localctx: FuncApplyArgumentListContext =
      new FuncApplyArgumentListContext(this._ctx, this.state);
    this.enterRule(_localctx, 34, GrammarParser.RULE_funcApplyArgumentList);
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 242;
        this.funcArgument();
        this.state = 246;
        this._errHandler.sync(this);
        _alt = this.interpreter.adaptivePredict(this._input, 17, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            {
              {
                this.state = 243;
                this.funcArgument();
              }
            }
          }
          this.state = 248;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 17, this._ctx);
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
  public funcApplication(): FuncApplicationContext {
    const _localctx: FuncApplicationContext = new FuncApplicationContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 36, GrammarParser.RULE_funcApplication);
    try {
      this.state = 257;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case GrammarParser.IDENTIFIER:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 249;
            _localctx._func = this.identifier();
            this.state = 250;
            _localctx._args = this.funcApplyArgumentList();
          }
          break;
        case GrammarParser.T__0:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 252;
            this.match(GrammarParser.T__0);
            this.state = 253;
            _localctx._lambdaFunc = this.lambda();
            this.state = 254;
            this.match(GrammarParser.T__1);
            this.state = 255;
            _localctx._args = this.funcApplyArgumentList();
          }
          break;
        default:
          throw new NoViableAltException(this);
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
  public lambda(): LambdaContext {
    const _localctx: LambdaContext = new LambdaContext(this._ctx, this.state);
    this.enterRule(_localctx, 38, GrammarParser.RULE_lambda);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 259;
        this.match(GrammarParser.FUN);
        {
          this.state = 260;
          _localctx._params = this.identifierList();
        }
        this.state = 261;
        this.match(GrammarParser.ARROW);
        this.state = 262;
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
  // @RuleVersion(0)
  public letGlobalBinding(): LetGlobalBindingContext {
    const _localctx: LetGlobalBindingContext = new LetGlobalBindingContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 40, GrammarParser.RULE_letGlobalBinding);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 264;
        this.match(GrammarParser.LET);
        {
          this.state = 266;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
          if (_la === GrammarParser.REC) {
            {
              this.state = 265;
              this.match(GrammarParser.REC);
            }
          }
        }
        this.state = 268;
        _localctx._id = this.identifier();
        {
          this.state = 270;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
          if (_la === GrammarParser.T__0 || _la === GrammarParser.IDENTIFIER) {
            {
              this.state = 269;
              _localctx._params = this.identifierListWithContext();
            }
          }
        }
        {
          this.state = 273;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
          if (_la === GrammarParser.COLON) {
            {
              this.state = 272;
              _localctx._idType = this.typeAnnotation();
            }
          }
        }
        this.state = 275;
        this.match(GrammarParser.EQUALSTRUC);
        this.state = 276;
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
    this.enterRule(_localctx, 42, GrammarParser.RULE_letLocalBinding);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 278;
        this.letGlobalBinding();
        this.state = 279;
        this.match(GrammarParser.IN);
        this.state = 280;
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

  public sempred(
    _localctx: RuleContext,
    ruleIndex: number,
    predIndex: number,
  ): boolean {
    switch (ruleIndex) {
      case 0:
        return this.type_sempred(_localctx as TypeContext, predIndex);

      case 4:
        return this.expression_sempred(
          _localctx as ExpressionContext,
          predIndex,
        );

      case 6:
        return this.contractExpression_sempred(
          _localctx as ContractExpressionContext,
          predIndex,
        );
    }
    return true;
  }
  private type_sempred(_localctx: TypeContext, predIndex: number): boolean {
    switch (predIndex) {
      case 0:
        return this.precpred(this._ctx, 1);
    }
    return true;
  }
  private expression_sempred(
    _localctx: ExpressionContext,
    predIndex: number,
  ): boolean {
    switch (predIndex) {
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
        return this.precpred(this._ctx, 9);

      case 20:
        return this.precpred(this._ctx, 6);

      case 21:
        return this.precpred(this._ctx, 5);
    }
    return true;
  }
  private contractExpression_sempred(
    _localctx: ContractExpressionContext,
    predIndex: number,
  ): boolean {
    switch (predIndex) {
      case 22:
        return this.precpred(this._ctx, 2);
    }
    return true;
  }

  public static readonly _serializedATN: string =
    '\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x030\u011D\x04\x02' +
    '\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07' +
    '\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04' +
    '\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04' +
    '\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x03' +
    '\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x05\x025\n\x02\x03\x02\x03' +
    '\x02\x03\x02\x06\x02:\n\x02\r\x02\x0E\x02;\x07\x02>\n\x02\f\x02\x0E\x02' +
    'A\v\x02\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03H\n\x03\x03\x04' +
    '\x03\x04\x03\x04\x07\x04M\n\x04\f\x04\x0E\x04P\v\x04\x03\x04\x03\x04\x03' +
    '\x05\x03\x05\x03\x05\x05\x05W\n\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03' +
    '\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x05\x06e' +
    '\n\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06' +
    '\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06' +
    '\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06' +
    '\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06' +
    '\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06' +
    '\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06' +
    '\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06' +
    '\x03\x06\x07\x06\xA6\n\x06\f\x06\x0E\x06\xA9\v\x06\x03\x07\x03\x07\x03' +
    '\x07\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b' +
    '\x03\b\x05\b\xBA\n\b\x03\b\x03\b\x03\b\x07\b\xBF\n\b\f\b\x0E\b\xC2\v\b' +
    '\x03\t\x03\t\x03\t\x06\t\xC7\n\t\r\t\x0E\t\xC8\x03\n\x03\n\x03\n\x03\n' +
    '\x03\n\x03\v\x03\v\x03\v\x03\v\x03\f\x03\f\x05\f\xD6\n\f\x03\r\x03\r\x03' +
    '\r\x03\r\x03\r\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0F\x03' +
    '\x0F\x03\x0F\x05\x0F\xE6\n\x0F\x03\x10\x03\x10\x03\x11\x03\x11\x06\x11' +
    '\xEC\n\x11\r\x11\x0E\x11\xED\x03\x12\x06\x12\xF1\n\x12\r\x12\x0E\x12\xF2' +
    '\x03\x13\x03\x13\x07\x13\xF7\n\x13\f\x13\x0E\x13\xFA\v\x13\x03\x14\x03' +
    '\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x05\x14\u0104\n\x14' +
    '\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x16\x03\x16\x05\x16\u010D' +
    '\n\x16\x03\x16\x03\x16\x05\x16\u0111\n\x16\x03\x16\x05\x16\u0114\n\x16' +
    '\x03\x16\x03\x16\x03\x16\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x02\x02' +
    '\x05\x02\n\x0E\x18\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10' +
    '\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02"\x02' +
    '$\x02&\x02(\x02*\x02,\x02\x02\x02\x02\u013C\x024\x03\x02\x02\x02\x04G' +
    '\x03\x02\x02\x02\x06N\x03\x02\x02\x02\bV\x03\x02\x02\x02\nd\x03\x02\x02' +
    '\x02\f\xAA\x03\x02\x02\x02\x0E\xB9\x03\x02\x02\x02\x10\xC3\x03\x02\x02' +
    '\x02\x12\xCA\x03\x02\x02\x02\x14\xCF\x03\x02\x02\x02\x16\xD3\x03\x02\x02' +
    '\x02\x18\xD7\x03\x02\x02\x02\x1A\xDE\x03\x02\x02\x02\x1C\xE5\x03\x02\x02' +
    '\x02\x1E\xE7\x03\x02\x02\x02 \xEB\x03\x02\x02\x02"\xF0\x03\x02\x02\x02' +
    '$\xF4\x03\x02\x02\x02&\u0103\x03\x02\x02\x02(\u0105\x03\x02\x02\x02*\u010A' +
    '\x03\x02\x02\x02,\u0118\x03\x02\x02\x02./\b\x02\x01\x02/5\x07/\x02\x02' +
    '01\x07\x03\x02\x0212\x05\x02\x02\x0223\x07\x04\x02\x0235\x03\x02\x02\x02' +
    '4.\x03\x02\x02\x0240\x03\x02\x02\x025?\x03\x02\x02\x0269\f\x03\x02\x02' +
    "78\x07'\x02\x028:\x05\x02\x02\x0297\x03\x02\x02\x02:;\x03\x02\x02\x02" +
    ';9\x03\x02\x02\x02;<\x03\x02\x02\x02<>\x03\x02\x02\x02=6\x03\x02\x02\x02' +
    '>A\x03\x02\x02\x02?=\x03\x02\x02\x02?@\x03\x02\x02\x02@\x03\x03\x02\x02' +
    '\x02A?\x03\x02\x02\x02BH\x07\x1D\x02\x02CH\x07!\x02\x02DH\x07"\x02\x02' +
    'EH\x07\x1F\x02\x02FH\x07 \x02\x02GB\x03\x02\x02\x02GC\x03\x02\x02\x02' +
    'GD\x03\x02\x02\x02GE\x03\x02\x02\x02GF\x03\x02\x02\x02H\x05\x03\x02\x02' +
    '\x02IJ\x05\b\x05\x02JK\x07.\x02\x02KM\x03\x02\x02\x02LI\x03\x02\x02\x02' +
    'MP\x03\x02\x02\x02NL\x03\x02\x02\x02NO\x03\x02\x02\x02OQ\x03\x02\x02\x02' +
    'PN\x03\x02\x02\x02QR\x07\x02\x02\x03R\x07\x03\x02\x02\x02SW\x05\n\x06' +
    '\x02TW\x05*\x16\x02UW\x05\x12\n\x02VS\x03\x02\x02\x02VT\x03\x02\x02\x02' +
    'VU\x03\x02\x02\x02W\t\x03\x02\x02\x02XY\b\x06\x01\x02Ye\x05\x04\x03\x02' +
    'Ze\x05\x1E\x10\x02[e\x05\x1A\x0E\x02\\]\x07\v\x02\x02]e\x05\n\x06\n^_' +
    '\x07\x1C\x02\x02_e\x05\n\x06\t`e\x05\x18\r\x02ae\x05,\x17\x02be\x05(\x15' +
    '\x02ce\x05&\x14\x02dX\x03\x02\x02\x02dZ\x03\x02\x02\x02d[\x03\x02\x02' +
    '\x02d\\\x03\x02\x02\x02d^\x03\x02\x02\x02d`\x03\x02\x02\x02da\x03\x02' +
    '\x02\x02db\x03\x02\x02\x02dc\x03\x02\x02\x02e\xA7\x03\x02\x02\x02fg\f' +
    '\x1D\x02\x02gh\x07\x07\x02\x02h\xA6\x05\n\x06\x1Dij\f\x1C\x02\x02jk\x07' +
    '\b\x02\x02k\xA6\x05\n\x06\x1Dlm\f\x1B\x02\x02mn\x07\t\x02\x02n\xA6\x05' +
    '\n\x06\x1Cop\f\x1A\x02\x02pq\x07\x0F\x02\x02q\xA6\x05\n\x06\x1Brs\f\x19' +
    '\x02\x02st\x07\x10\x02\x02t\xA6\x05\n\x06\x1Auv\f\x18\x02\x02vw\x07\f' +
    '\x02\x02w\xA6\x05\n\x06\x19xy\f\x17\x02\x02yz\x07\n\x02\x02z\xA6\x05\n' +
    '\x06\x18{|\f\x16\x02\x02|}\x07\v\x02\x02}\xA6\x05\n\x06\x17~\x7F\f\x15' +
    '\x02\x02\x7F\x80\x07\r\x02\x02\x80\xA6\x05\n\x06\x16\x81\x82\f\x14\x02' +
    '\x02\x82\x83\x07\x0E\x02\x02\x83\xA6\x05\n\x06\x15\x84\x85\f\x13\x02\x02' +
    '\x85\x86\x07\x11\x02\x02\x86\xA6\x05\n\x06\x14\x87\x88\f\x12\x02\x02\x88' +
    '\x89\x07\x12\x02\x02\x89\xA6\x05\n\x06\x13\x8A\x8B\f\x11\x02\x02\x8B\x8C' +
    '\x07\x13\x02\x02\x8C\xA6\x05\n\x06\x12\x8D\x8E\f\x10\x02\x02\x8E\x8F\x07' +
    '\x14\x02\x02\x8F\xA6\x05\n\x06\x11\x90\x91\f\x0F\x02\x02\x91\x92\x07\x15' +
    '\x02\x02\x92\xA6\x05\n\x06\x10\x93\x94\f\x0E\x02\x02\x94\x95\x07\x16\x02' +
    '\x02\x95\xA6\x05\n\x06\x0F\x96\x97\f\r\x02\x02\x97\x98\x07\x17\x02\x02' +
    '\x98\xA6\x05\n\x06\x0E\x99\x9A\f\f\x02\x02\x9A\x9B\x07\x18\x02\x02\x9B' +
    '\xA6\x05\n\x06\r\x9C\x9D\f\v\x02\x02\x9D\x9E\x07\x19\x02\x02\x9E\xA6\x05' +
    '\n\x06\f\x9F\xA0\f\b\x02\x02\xA0\xA1\x07\x1A\x02\x02\xA1\xA6\x05\n\x06' +
    '\t\xA2\xA3\f\x07\x02\x02\xA3\xA4\x07\x1B\x02\x02\xA4\xA6\x05\n\x06\b\xA5' +
    'f\x03\x02\x02\x02\xA5i\x03\x02\x02\x02\xA5l\x03\x02\x02\x02\xA5o\x03\x02' +
    '\x02\x02\xA5r\x03\x02\x02\x02\xA5u\x03\x02\x02\x02\xA5x\x03\x02\x02\x02' +
    '\xA5{\x03\x02\x02\x02\xA5~\x03\x02\x02\x02\xA5\x81\x03\x02\x02\x02\xA5' +
    '\x84\x03\x02\x02\x02\xA5\x87\x03\x02\x02\x02\xA5\x8A\x03\x02\x02\x02\xA5' +
    '\x8D\x03\x02\x02\x02\xA5\x90\x03\x02\x02\x02\xA5\x93\x03\x02\x02\x02\xA5' +
    '\x96\x03\x02\x02\x02\xA5\x99\x03\x02\x02\x02\xA5\x9C\x03\x02\x02\x02\xA5' +
    '\x9F\x03\x02\x02\x02\xA5\xA2\x03\x02\x02\x02\xA6\xA9\x03\x02\x02\x02\xA7' +
    '\xA5\x03\x02\x02\x02\xA7\xA8\x03\x02\x02\x02\xA8\v\x03\x02\x02\x02\xA9' +
    '\xA7\x03\x02\x02\x02\xAA\xAB\x07,\x02\x02\xAB\xAC\x05\x02\x02\x02\xAC' +
    '\r\x03\x02\x02\x02\xAD\xAE\b\b\x01\x02\xAE\xBA\x05\n\x06\x02\xAF\xB0\x07' +
    '\x05\x02\x02\xB0\xB1\x05\x1E\x10\x02\xB1\xB2\x07(\x02\x02\xB2\xB3\x05' +
    '\n\x06\x02\xB3\xB4\x07\x06\x02\x02\xB4\xBA\x03\x02\x02\x02\xB5\xB6\x07' +
    '\x03\x02\x02\xB6\xB7\x05\x0E\b\x02\xB7\xB8\x07\x04\x02\x02\xB8\xBA\x03' +
    '\x02\x02\x02\xB9\xAD\x03\x02\x02\x02\xB9\xAF\x03\x02\x02\x02\xB9\xB5\x03' +
    '\x02\x02\x02\xBA\xC0\x03\x02\x02\x02\xBB\xBC\f\x04\x02\x02\xBC\xBD\x07' +
    "'\x02\x02\xBD\xBF\x05\x0E\b\x05\xBE\xBB\x03\x02\x02\x02\xBF\xC2\x03\x02" +
    '\x02\x02\xC0\xBE\x03\x02\x02\x02\xC0\xC1\x03\x02\x02\x02\xC1\x0F\x03\x02' +
    "\x02\x02\xC2\xC0\x03\x02\x02\x02\xC3\xC6\x05\x0E\b\x02\xC4\xC5\x07'\x02" +
    '\x02\xC5\xC7\x05\x0E\b\x02\xC6\xC4\x03\x02\x02\x02\xC7\xC8\x03\x02\x02' +
    '\x02\xC8\xC6\x03\x02\x02\x02\xC8\xC9\x03\x02\x02\x02\xC9\x11\x03\x02\x02' +
    '\x02\xCA\xCB\x07-\x02\x02\xCB\xCC\x05\x1E\x10\x02\xCC\xCD\x07\x15\x02' +
    '\x02\xCD\xCE\x05\x10\t\x02\xCE\x13\x03\x02\x02\x02\xCF\xD0\x07\x03\x02' +
    '\x02\xD0\xD1\x05\x16\f\x02\xD1\xD2\x07\x04\x02\x02\xD2\x15\x03\x02\x02' +
    '\x02\xD3\xD5\x05\x1E\x10\x02\xD4\xD6\x05\f\x07\x02\xD5\xD4\x03\x02\x02' +
    '\x02\xD5\xD6\x03\x02\x02\x02\xD6\x17\x03\x02\x02\x02\xD7\xD8\x07#\x02' +
    '\x02\xD8\xD9\x05\n\x06\x02\xD9\xDA\x07$\x02\x02\xDA\xDB\x05\n\x06\x02' +
    '\xDB\xDC\x07%\x02\x02\xDC\xDD\x05\n\x06\x02\xDD\x19\x03\x02\x02\x02\xDE' +
    '\xDF\x07\x03\x02\x02\xDF\xE0\x05\n\x06\x02\xE0\xE1\x07\x04\x02\x02\xE1' +
    '\x1B\x03\x02\x02\x02\xE2\xE6\x05\x04\x03\x02\xE3\xE6\x05\x1E\x10\x02\xE4' +
    '\xE6\x05\x1A\x0E\x02\xE5\xE2\x03\x02\x02\x02\xE5\xE3\x03\x02\x02\x02\xE5' +
    '\xE4\x03\x02\x02\x02\xE6\x1D\x03\x02\x02\x02\xE7\xE8\x070\x02\x02\xE8' +
    '\x1F\x03\x02\x02\x02\xE9\xEC\x05\x1E\x10\x02\xEA\xEC\x05\x14\v\x02\xEB' +
    '\xE9\x03\x02\x02\x02\xEB\xEA\x03\x02\x02\x02\xEC\xED\x03\x02\x02\x02\xED' +
    '\xEB\x03\x02\x02\x02\xED\xEE\x03\x02\x02\x02\xEE!\x03\x02\x02\x02\xEF' +
    '\xF1\x05\x1E\x10\x02\xF0\xEF\x03\x02\x02\x02\xF1\xF2\x03\x02\x02\x02\xF2' +
    '\xF0\x03\x02\x02\x02\xF2\xF3\x03\x02\x02\x02\xF3#\x03\x02\x02\x02\xF4' +
    '\xF8\x05\x1C\x0F\x02\xF5\xF7\x05\x1C\x0F\x02\xF6\xF5\x03\x02\x02\x02\xF7' +
    '\xFA\x03\x02\x02\x02\xF8\xF6\x03\x02\x02\x02\xF8\xF9\x03\x02\x02\x02\xF9' +
    '%\x03\x02\x02\x02\xFA\xF8\x03\x02\x02\x02\xFB\xFC\x05\x1E\x10\x02\xFC' +
    '\xFD\x05$\x13\x02\xFD\u0104\x03\x02\x02\x02\xFE\xFF\x07\x03\x02\x02\xFF' +
    '\u0100\x05(\x15\x02\u0100\u0101\x07\x04\x02\x02\u0101\u0102\x05$\x13\x02' +
    '\u0102\u0104\x03\x02\x02\x02\u0103\xFB\x03\x02\x02\x02\u0103\xFE\x03\x02' +
    "\x02\x02\u0104'\x03\x02\x02\x02\u0105\u0106\x07&\x02\x02\u0106\u0107" +
    '\x05"\x12\x02\u0107\u0108\x07\'\x02\x02\u0108\u0109\x05\n\x06\x02\u0109' +
    ')\x03\x02\x02\x02\u010A\u010C\x07)\x02\x02\u010B\u010D\x07+\x02\x02\u010C' +
    '\u010B\x03\x02\x02\x02\u010C\u010D\x03\x02\x02\x02\u010D\u010E\x03\x02' +
    '\x02\x02\u010E\u0110\x05\x1E\x10\x02\u010F\u0111\x05 \x11\x02\u0110\u010F' +
    '\x03\x02\x02\x02\u0110\u0111\x03\x02\x02\x02\u0111\u0113\x03\x02\x02\x02' +
    '\u0112\u0114\x05\f\x07\x02\u0113\u0112\x03\x02\x02\x02\u0113\u0114\x03' +
    '\x02\x02\x02\u0114\u0115\x03\x02\x02\x02\u0115\u0116\x07\x15\x02\x02\u0116' +
    '\u0117\x05\n\x06\x02\u0117+\x03\x02\x02\x02\u0118\u0119\x05*\x16\x02\u0119' +
    '\u011A\x07*\x02\x02\u011A\u011B\x05\n\x06\x02\u011B-\x03\x02\x02\x02\x18' +
    '4;?GNVd\xA5\xA7\xB9\xC0\xC8\xD5\xE5\xEB\xED\xF2\xF8\u0103\u010C\u0110' +
    '\u0113';
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

export class TypeContext extends ParserRuleContext {
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return GrammarParser.RULE_type;
  }
  public copyFrom(ctx: TypeContext): void {
    super.copyFrom(ctx);
  }
}
export class PrimTypeContext extends TypeContext {
  public PRIMITIVETYPE(): TerminalNode {
    return this.getToken(GrammarParser.PRIMITIVETYPE, 0);
  }
  constructor(ctx: TypeContext) {
    super(ctx.parent, ctx.invokingState);
    this.copyFrom(ctx);
  }
  // @Override
  public enterRule(listener: GrammarListener): void {
    if (listener.enterPrimType) {
      listener.enterPrimType(this);
    }
  }
  // @Override
  public exitRule(listener: GrammarListener): void {
    if (listener.exitPrimType) {
      listener.exitPrimType(this);
    }
  }
  // @Override
  public accept<Result>(visitor: GrammarVisitor<Result>): Result {
    if (visitor.visitPrimType) {
      return visitor.visitPrimType(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class ParenTypeContext extends TypeContext {
  public type(): TypeContext {
    return this.getRuleContext(0, TypeContext);
  }
  constructor(ctx: TypeContext) {
    super(ctx.parent, ctx.invokingState);
    this.copyFrom(ctx);
  }
  // @Override
  public enterRule(listener: GrammarListener): void {
    if (listener.enterParenType) {
      listener.enterParenType(this);
    }
  }
  // @Override
  public exitRule(listener: GrammarListener): void {
    if (listener.exitParenType) {
      listener.exitParenType(this);
    }
  }
  // @Override
  public accept<Result>(visitor: GrammarVisitor<Result>): Result {
    if (visitor.visitParenType) {
      return visitor.visitParenType(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class FunTypeContext extends TypeContext {
  public type(): TypeContext[];
  public type(i: number): TypeContext;
  public type(i?: number): TypeContext | TypeContext[] {
    if (i === undefined) {
      return this.getRuleContexts(TypeContext);
    } else {
      return this.getRuleContext(i, TypeContext);
    }
  }
  public ARROW(): TerminalNode[];
  public ARROW(i: number): TerminalNode;
  public ARROW(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(GrammarParser.ARROW);
    } else {
      return this.getToken(GrammarParser.ARROW, i);
    }
  }
  constructor(ctx: TypeContext) {
    super(ctx.parent, ctx.invokingState);
    this.copyFrom(ctx);
  }
  // @Override
  public enterRule(listener: GrammarListener): void {
    if (listener.enterFunType) {
      listener.enterFunType(this);
    }
  }
  // @Override
  public exitRule(listener: GrammarListener): void {
    if (listener.exitFunType) {
      listener.exitFunType(this);
    }
  }
  // @Override
  public accept<Result>(visitor: GrammarVisitor<Result>): Result {
    if (visitor.visitFunType) {
      return visitor.visitFunType(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class AtomContext extends ParserRuleContext {
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return GrammarParser.RULE_atom;
  }
  public copyFrom(ctx: AtomContext): void {
    super.copyFrom(ctx);
  }
}
export class NumberContext extends AtomContext {
  public NUMBER(): TerminalNode {
    return this.getToken(GrammarParser.NUMBER, 0);
  }
  constructor(ctx: AtomContext) {
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
export class FloatContext extends AtomContext {
  public FLOAT(): TerminalNode {
    return this.getToken(GrammarParser.FLOAT, 0);
  }
  constructor(ctx: AtomContext) {
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
export class BooleanContext extends AtomContext {
  public BOOLEAN(): TerminalNode {
    return this.getToken(GrammarParser.BOOLEAN, 0);
  }
  constructor(ctx: AtomContext) {
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
export class CharContext extends AtomContext {
  public CHAR(): TerminalNode {
    return this.getToken(GrammarParser.CHAR, 0);
  }
  constructor(ctx: AtomContext) {
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
export class StringContext extends AtomContext {
  public STRING(): TerminalNode {
    return this.getToken(GrammarParser.STRING, 0);
  }
  constructor(ctx: AtomContext) {
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

export class StartContext extends ParserRuleContext {
  public EOF(): TerminalNode {
    return this.getToken(GrammarParser.EOF, 0);
  }
  public statement(): StatementContext[];
  public statement(i: number): StatementContext;
  public statement(i?: number): StatementContext | StatementContext[] {
    if (i === undefined) {
      return this.getRuleContexts(StatementContext);
    } else {
      return this.getRuleContext(i, StatementContext);
    }
  }
  public DOUBLESEMICOLON(): TerminalNode[];
  public DOUBLESEMICOLON(i: number): TerminalNode;
  public DOUBLESEMICOLON(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(GrammarParser.DOUBLESEMICOLON);
    } else {
      return this.getToken(GrammarParser.DOUBLESEMICOLON, i);
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

export class StatementContext extends ParserRuleContext {
  public expression(): ExpressionContext | undefined {
    return this.tryGetRuleContext(0, ExpressionContext);
  }
  public letGlobalBinding(): LetGlobalBindingContext | undefined {
    return this.tryGetRuleContext(0, LetGlobalBindingContext);
  }
  public contractDeclaration(): ContractDeclarationContext | undefined {
    return this.tryGetRuleContext(0, ContractDeclarationContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return GrammarParser.RULE_statement;
  }
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
  public get ruleIndex(): number {
    return GrammarParser.RULE_expression;
  }
  public copyFrom(ctx: ExpressionContext): void {
    super.copyFrom(ctx);
  }
}
export class AtomExpressionContext extends ExpressionContext {
  public atom(): AtomContext {
    return this.getRuleContext(0, AtomContext);
  }
  constructor(ctx: ExpressionContext) {
    super(ctx.parent, ctx.invokingState);
    this.copyFrom(ctx);
  }
  // @Override
  public enterRule(listener: GrammarListener): void {
    if (listener.enterAtomExpression) {
      listener.enterAtomExpression(this);
    }
  }
  // @Override
  public exitRule(listener: GrammarListener): void {
    if (listener.exitAtomExpression) {
      listener.exitAtomExpression(this);
    }
  }
  // @Override
  public accept<Result>(visitor: GrammarVisitor<Result>): Result {
    if (visitor.visitAtomExpression) {
      return visitor.visitAtomExpression(this);
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
export class LambdaExpressionContext extends ExpressionContext {
  public lambda(): LambdaContext {
    return this.getRuleContext(0, LambdaContext);
  }
  constructor(ctx: ExpressionContext) {
    super(ctx.parent, ctx.invokingState);
    this.copyFrom(ctx);
  }
  // @Override
  public enterRule(listener: GrammarListener): void {
    if (listener.enterLambdaExpression) {
      listener.enterLambdaExpression(this);
    }
  }
  // @Override
  public exitRule(listener: GrammarListener): void {
    if (listener.exitLambdaExpression) {
      listener.exitLambdaExpression(this);
    }
  }
  // @Override
  public accept<Result>(visitor: GrammarVisitor<Result>): Result {
    if (visitor.visitLambdaExpression) {
      return visitor.visitLambdaExpression(this);
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

export class TypeAnnotationContext extends ParserRuleContext {
  public COLON(): TerminalNode {
    return this.getToken(GrammarParser.COLON, 0);
  }
  public type(): TypeContext {
    return this.getRuleContext(0, TypeContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return GrammarParser.RULE_typeAnnotation;
  }
  // @Override
  public enterRule(listener: GrammarListener): void {
    if (listener.enterTypeAnnotation) {
      listener.enterTypeAnnotation(this);
    }
  }
  // @Override
  public exitRule(listener: GrammarListener): void {
    if (listener.exitTypeAnnotation) {
      listener.exitTypeAnnotation(this);
    }
  }
  // @Override
  public accept<Result>(visitor: GrammarVisitor<Result>): Result {
    if (visitor.visitTypeAnnotation) {
      return visitor.visitTypeAnnotation(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class ContractExpressionContext extends ParserRuleContext {
  public expression(): ExpressionContext | undefined {
    return this.tryGetRuleContext(0, ExpressionContext);
  }
  public identifier(): IdentifierContext | undefined {
    return this.tryGetRuleContext(0, IdentifierContext);
  }
  public PIPE(): TerminalNode | undefined {
    return this.tryGetToken(GrammarParser.PIPE, 0);
  }
  public contractExpression(): ContractExpressionContext[];
  public contractExpression(i: number): ContractExpressionContext;
  public contractExpression(
    i?: number,
  ): ContractExpressionContext | ContractExpressionContext[] {
    if (i === undefined) {
      return this.getRuleContexts(ContractExpressionContext);
    } else {
      return this.getRuleContext(i, ContractExpressionContext);
    }
  }
  public ARROW(): TerminalNode | undefined {
    return this.tryGetToken(GrammarParser.ARROW, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return GrammarParser.RULE_contractExpression;
  }
  // @Override
  public enterRule(listener: GrammarListener): void {
    if (listener.enterContractExpression) {
      listener.enterContractExpression(this);
    }
  }
  // @Override
  public exitRule(listener: GrammarListener): void {
    if (listener.exitContractExpression) {
      listener.exitContractExpression(this);
    }
  }
  // @Override
  public accept<Result>(visitor: GrammarVisitor<Result>): Result {
    if (visitor.visitContractExpression) {
      return visitor.visitContractExpression(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class ContractsListContext extends ParserRuleContext {
  public contractExpression(): ContractExpressionContext[];
  public contractExpression(i: number): ContractExpressionContext;
  public contractExpression(
    i?: number,
  ): ContractExpressionContext | ContractExpressionContext[] {
    if (i === undefined) {
      return this.getRuleContexts(ContractExpressionContext);
    } else {
      return this.getRuleContext(i, ContractExpressionContext);
    }
  }
  public ARROW(): TerminalNode[];
  public ARROW(i: number): TerminalNode;
  public ARROW(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(GrammarParser.ARROW);
    } else {
      return this.getToken(GrammarParser.ARROW, i);
    }
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return GrammarParser.RULE_contractsList;
  }
  // @Override
  public enterRule(listener: GrammarListener): void {
    if (listener.enterContractsList) {
      listener.enterContractsList(this);
    }
  }
  // @Override
  public exitRule(listener: GrammarListener): void {
    if (listener.exitContractsList) {
      listener.exitContractsList(this);
    }
  }
  // @Override
  public accept<Result>(visitor: GrammarVisitor<Result>): Result {
    if (visitor.visitContractsList) {
      return visitor.visitContractsList(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class ContractDeclarationContext extends ParserRuleContext {
  public CONTRACT(): TerminalNode {
    return this.getToken(GrammarParser.CONTRACT, 0);
  }
  public identifier(): IdentifierContext {
    return this.getRuleContext(0, IdentifierContext);
  }
  public EQUALSTRUC(): TerminalNode {
    return this.getToken(GrammarParser.EQUALSTRUC, 0);
  }
  public contractsList(): ContractsListContext {
    return this.getRuleContext(0, ContractsListContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return GrammarParser.RULE_contractDeclaration;
  }
  // @Override
  public enterRule(listener: GrammarListener): void {
    if (listener.enterContractDeclaration) {
      listener.enterContractDeclaration(this);
    }
  }
  // @Override
  public exitRule(listener: GrammarListener): void {
    if (listener.exitContractDeclaration) {
      listener.exitContractDeclaration(this);
    }
  }
  // @Override
  public accept<Result>(visitor: GrammarVisitor<Result>): Result {
    if (visitor.visitContractDeclaration) {
      return visitor.visitContractDeclaration(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class IdentifierWithContextParenContext extends ParserRuleContext {
  public identifierWithContext(): IdentifierWithContextContext {
    return this.getRuleContext(0, IdentifierWithContextContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return GrammarParser.RULE_identifierWithContextParen;
  }
  // @Override
  public enterRule(listener: GrammarListener): void {
    if (listener.enterIdentifierWithContextParen) {
      listener.enterIdentifierWithContextParen(this);
    }
  }
  // @Override
  public exitRule(listener: GrammarListener): void {
    if (listener.exitIdentifierWithContextParen) {
      listener.exitIdentifierWithContextParen(this);
    }
  }
  // @Override
  public accept<Result>(visitor: GrammarVisitor<Result>): Result {
    if (visitor.visitIdentifierWithContextParen) {
      return visitor.visitIdentifierWithContextParen(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class IdentifierWithContextContext extends ParserRuleContext {
  public identifier(): IdentifierContext {
    return this.getRuleContext(0, IdentifierContext);
  }
  public typeAnnotation(): TypeAnnotationContext | undefined {
    return this.tryGetRuleContext(0, TypeAnnotationContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return GrammarParser.RULE_identifierWithContext;
  }
  // @Override
  public enterRule(listener: GrammarListener): void {
    if (listener.enterIdentifierWithContext) {
      listener.enterIdentifierWithContext(this);
    }
  }
  // @Override
  public exitRule(listener: GrammarListener): void {
    if (listener.exitIdentifierWithContext) {
      listener.exitIdentifierWithContext(this);
    }
  }
  // @Override
  public accept<Result>(visitor: GrammarVisitor<Result>): Result {
    if (visitor.visitIdentifierWithContext) {
      return visitor.visitIdentifierWithContext(this);
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

export class FuncArgumentContext extends ParserRuleContext {
  public atom(): AtomContext | undefined {
    return this.tryGetRuleContext(0, AtomContext);
  }
  public identifier(): IdentifierContext | undefined {
    return this.tryGetRuleContext(0, IdentifierContext);
  }
  public parenthesesExpression(): ParenthesesExpressionContext | undefined {
    return this.tryGetRuleContext(0, ParenthesesExpressionContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return GrammarParser.RULE_funcArgument;
  }
  // @Override
  public enterRule(listener: GrammarListener): void {
    if (listener.enterFuncArgument) {
      listener.enterFuncArgument(this);
    }
  }
  // @Override
  public exitRule(listener: GrammarListener): void {
    if (listener.exitFuncArgument) {
      listener.exitFuncArgument(this);
    }
  }
  // @Override
  public accept<Result>(visitor: GrammarVisitor<Result>): Result {
    if (visitor.visitFuncArgument) {
      return visitor.visitFuncArgument(this);
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

export class IdentifierListWithContextContext extends ParserRuleContext {
  public identifier(): IdentifierContext[];
  public identifier(i: number): IdentifierContext;
  public identifier(i?: number): IdentifierContext | IdentifierContext[] {
    if (i === undefined) {
      return this.getRuleContexts(IdentifierContext);
    } else {
      return this.getRuleContext(i, IdentifierContext);
    }
  }
  public identifierWithContextParen(): IdentifierWithContextParenContext[];
  public identifierWithContextParen(
    i: number,
  ): IdentifierWithContextParenContext;
  public identifierWithContextParen(
    i?: number,
  ): IdentifierWithContextParenContext | IdentifierWithContextParenContext[] {
    if (i === undefined) {
      return this.getRuleContexts(IdentifierWithContextParenContext);
    } else {
      return this.getRuleContext(i, IdentifierWithContextParenContext);
    }
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return GrammarParser.RULE_identifierListWithContext;
  }
  // @Override
  public enterRule(listener: GrammarListener): void {
    if (listener.enterIdentifierListWithContext) {
      listener.enterIdentifierListWithContext(this);
    }
  }
  // @Override
  public exitRule(listener: GrammarListener): void {
    if (listener.exitIdentifierListWithContext) {
      listener.exitIdentifierListWithContext(this);
    }
  }
  // @Override
  public accept<Result>(visitor: GrammarVisitor<Result>): Result {
    if (visitor.visitIdentifierListWithContext) {
      return visitor.visitIdentifierListWithContext(this);
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

export class FuncApplyArgumentListContext extends ParserRuleContext {
  public funcArgument(): FuncArgumentContext[];
  public funcArgument(i: number): FuncArgumentContext;
  public funcArgument(i?: number): FuncArgumentContext | FuncArgumentContext[] {
    if (i === undefined) {
      return this.getRuleContexts(FuncArgumentContext);
    } else {
      return this.getRuleContext(i, FuncArgumentContext);
    }
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return GrammarParser.RULE_funcApplyArgumentList;
  }
  // @Override
  public enterRule(listener: GrammarListener): void {
    if (listener.enterFuncApplyArgumentList) {
      listener.enterFuncApplyArgumentList(this);
    }
  }
  // @Override
  public exitRule(listener: GrammarListener): void {
    if (listener.exitFuncApplyArgumentList) {
      listener.exitFuncApplyArgumentList(this);
    }
  }
  // @Override
  public accept<Result>(visitor: GrammarVisitor<Result>): Result {
    if (visitor.visitFuncApplyArgumentList) {
      return visitor.visitFuncApplyArgumentList(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class FuncApplicationContext extends ParserRuleContext {
  public _func!: IdentifierContext;
  public _args!: FuncApplyArgumentListContext;
  public _lambdaFunc!: LambdaContext;
  public identifier(): IdentifierContext | undefined {
    return this.tryGetRuleContext(0, IdentifierContext);
  }
  public funcApplyArgumentList(): FuncApplyArgumentListContext {
    return this.getRuleContext(0, FuncApplyArgumentListContext);
  }
  public lambda(): LambdaContext | undefined {
    return this.tryGetRuleContext(0, LambdaContext);
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

export class LambdaContext extends ParserRuleContext {
  public _params!: IdentifierListContext;
  public _body!: ExpressionContext;
  public FUN(): TerminalNode {
    return this.getToken(GrammarParser.FUN, 0);
  }
  public ARROW(): TerminalNode {
    return this.getToken(GrammarParser.ARROW, 0);
  }
  public expression(): ExpressionContext {
    return this.getRuleContext(0, ExpressionContext);
  }
  public identifierList(): IdentifierListContext | undefined {
    return this.tryGetRuleContext(0, IdentifierListContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return GrammarParser.RULE_lambda;
  }
  // @Override
  public enterRule(listener: GrammarListener): void {
    if (listener.enterLambda) {
      listener.enterLambda(this);
    }
  }
  // @Override
  public exitRule(listener: GrammarListener): void {
    if (listener.exitLambda) {
      listener.exitLambda(this);
    }
  }
  // @Override
  public accept<Result>(visitor: GrammarVisitor<Result>): Result {
    if (visitor.visitLambda) {
      return visitor.visitLambda(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class LetGlobalBindingContext extends ParserRuleContext {
  public _id!: IdentifierContext;
  public _params!: IdentifierListWithContextContext;
  public _idType!: TypeAnnotationContext;
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
  public identifierListWithContext():
    | IdentifierListWithContextContext
    | undefined {
    return this.tryGetRuleContext(0, IdentifierListWithContextContext);
  }
  public typeAnnotation(): TypeAnnotationContext | undefined {
    return this.tryGetRuleContext(0, TypeAnnotationContext);
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
  public letGlobalBinding(): LetGlobalBindingContext {
    return this.getRuleContext(0, LetGlobalBindingContext);
  }
  public IN(): TerminalNode {
    return this.getToken(GrammarParser.IN, 0);
  }
  public expression(): ExpressionContext {
    return this.getRuleContext(0, ExpressionContext);
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
