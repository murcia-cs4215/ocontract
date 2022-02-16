// Generated from /Users/hanming/Repositories/cs4215-murcia/src/lang/Grammar.g4 by ANTLR 4.8
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class GrammarParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.8", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		T__0=1, T__1=2, POW=3, MUL=4, DIV=5, ADD=6, SUB=7, MOD=8, ADDFLOAT=9, 
		SUBFLOAT=10, MULFLOAT=11, DIVFLOAT=12, LESSTHAN=13, LESSTHANOREQUAL=14, 
		GREATERTHAN=15, GREATERTHANOREQUAL=16, EQUALSTRUC=17, NOTEQUALSTRUC=18, 
		EQUALPHYS=19, NOTEQUALPHYS=20, CONCAT=21, AND=22, OR=23, NOT=24, NUMBER=25, 
		WS=26, TOSKIP=27, CHAR=28, STRING=29, FLOAT=30, BOOLEAN=31, IF=32, THEN=33, 
		ELSE=34, SEMICOLON=35, IDENTIFIER=36;
	public static final int
		RULE_start = 0, RULE_expression = 1, RULE_parenthesesExpression = 2, RULE_condExp = 3;
	private static String[] makeRuleNames() {
		return new String[] {
			"start", "expression", "parenthesesExpression", "condExp"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'('", "')'", "'**'", "'*'", "'/'", "'+'", "'-'", "'mod'", "'+.'", 
			"'-.'", "'*.'", "'/.'", "'<'", "'<='", "'>'", "'>='", "'='", "'<>'", 
			"'=='", "'!='", "'^'", "'&&'", "'||'", "'not'", null, null, null, null, 
			null, null, null, "'if'", "'then'", "'else'", "';'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, null, null, "POW", "MUL", "DIV", "ADD", "SUB", "MOD", "ADDFLOAT", 
			"SUBFLOAT", "MULFLOAT", "DIVFLOAT", "LESSTHAN", "LESSTHANOREQUAL", "GREATERTHAN", 
			"GREATERTHANOREQUAL", "EQUALSTRUC", "NOTEQUALSTRUC", "EQUALPHYS", "NOTEQUALPHYS", 
			"CONCAT", "AND", "OR", "NOT", "NUMBER", "WS", "TOSKIP", "CHAR", "STRING", 
			"FLOAT", "BOOLEAN", "IF", "THEN", "ELSE", "SEMICOLON", "IDENTIFIER"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}

	@Override
	public String getGrammarFileName() { return "Grammar.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public GrammarParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	public static class StartContext extends ParserRuleContext {
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public StartContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_start; }
	}

	public final StartContext start() throws RecognitionException {
		StartContext _localctx = new StartContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_start);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(8);
			expression(0);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ExpressionContext extends ParserRuleContext {
		public ExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_expression; }
	 
		public ExpressionContext() { }
		public void copyFrom(ExpressionContext ctx) {
			super.copyFrom(ctx);
		}
	}
	public static class EqualStructuralContext extends ExpressionContext {
		public ExpressionContext left;
		public Token operator;
		public ExpressionContext right;
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public TerminalNode EQUALSTRUC() { return getToken(GrammarParser.EQUALSTRUC, 0); }
		public List<TerminalNode> WS() { return getTokens(GrammarParser.WS); }
		public TerminalNode WS(int i) {
			return getToken(GrammarParser.WS, i);
		}
		public EqualStructuralContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class MultiplicationContext extends ExpressionContext {
		public ExpressionContext left;
		public Token operator;
		public ExpressionContext right;
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public TerminalNode MUL() { return getToken(GrammarParser.MUL, 0); }
		public List<TerminalNode> WS() { return getTokens(GrammarParser.WS); }
		public TerminalNode WS(int i) {
			return getToken(GrammarParser.WS, i);
		}
		public MultiplicationContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class OrContext extends ExpressionContext {
		public ExpressionContext left;
		public Token operator;
		public ExpressionContext right;
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public TerminalNode OR() { return getToken(GrammarParser.OR, 0); }
		public List<TerminalNode> WS() { return getTokens(GrammarParser.WS); }
		public TerminalNode WS(int i) {
			return getToken(GrammarParser.WS, i);
		}
		public OrContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class LessThanOrEqualContext extends ExpressionContext {
		public ExpressionContext left;
		public Token operator;
		public ExpressionContext right;
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public TerminalNode LESSTHANOREQUAL() { return getToken(GrammarParser.LESSTHANOREQUAL, 0); }
		public List<TerminalNode> WS() { return getTokens(GrammarParser.WS); }
		public TerminalNode WS(int i) {
			return getToken(GrammarParser.WS, i);
		}
		public LessThanOrEqualContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class MultiplicationFloatContext extends ExpressionContext {
		public ExpressionContext left;
		public Token operator;
		public ExpressionContext right;
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public TerminalNode MULFLOAT() { return getToken(GrammarParser.MULFLOAT, 0); }
		public List<TerminalNode> WS() { return getTokens(GrammarParser.WS); }
		public TerminalNode WS(int i) {
			return getToken(GrammarParser.WS, i);
		}
		public MultiplicationFloatContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class StringContext extends ExpressionContext {
		public TerminalNode STRING() { return getToken(GrammarParser.STRING, 0); }
		public List<TerminalNode> WS() { return getTokens(GrammarParser.WS); }
		public TerminalNode WS(int i) {
			return getToken(GrammarParser.WS, i);
		}
		public StringContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class GreaterThanOrEqualContext extends ExpressionContext {
		public ExpressionContext left;
		public Token operator;
		public ExpressionContext right;
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public TerminalNode GREATERTHANOREQUAL() { return getToken(GrammarParser.GREATERTHANOREQUAL, 0); }
		public List<TerminalNode> WS() { return getTokens(GrammarParser.WS); }
		public TerminalNode WS(int i) {
			return getToken(GrammarParser.WS, i);
		}
		public GreaterThanOrEqualContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class LessThanContext extends ExpressionContext {
		public ExpressionContext left;
		public Token operator;
		public ExpressionContext right;
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public TerminalNode LESSTHAN() { return getToken(GrammarParser.LESSTHAN, 0); }
		public List<TerminalNode> WS() { return getTokens(GrammarParser.WS); }
		public TerminalNode WS(int i) {
			return getToken(GrammarParser.WS, i);
		}
		public LessThanContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class EqualPhysicalContext extends ExpressionContext {
		public ExpressionContext left;
		public Token operator;
		public ExpressionContext right;
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public TerminalNode EQUALPHYS() { return getToken(GrammarParser.EQUALPHYS, 0); }
		public List<TerminalNode> WS() { return getTokens(GrammarParser.WS); }
		public TerminalNode WS(int i) {
			return getToken(GrammarParser.WS, i);
		}
		public EqualPhysicalContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class NumberContext extends ExpressionContext {
		public TerminalNode NUMBER() { return getToken(GrammarParser.NUMBER, 0); }
		public List<TerminalNode> WS() { return getTokens(GrammarParser.WS); }
		public TerminalNode WS(int i) {
			return getToken(GrammarParser.WS, i);
		}
		public NumberContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class GreaterThanContext extends ExpressionContext {
		public ExpressionContext left;
		public Token operator;
		public ExpressionContext right;
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public TerminalNode GREATERTHAN() { return getToken(GrammarParser.GREATERTHAN, 0); }
		public List<TerminalNode> WS() { return getTokens(GrammarParser.WS); }
		public TerminalNode WS(int i) {
			return getToken(GrammarParser.WS, i);
		}
		public GreaterThanContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class NotEqualPhysicalContext extends ExpressionContext {
		public ExpressionContext left;
		public Token operator;
		public ExpressionContext right;
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public TerminalNode NOTEQUALPHYS() { return getToken(GrammarParser.NOTEQUALPHYS, 0); }
		public List<TerminalNode> WS() { return getTokens(GrammarParser.WS); }
		public TerminalNode WS(int i) {
			return getToken(GrammarParser.WS, i);
		}
		public NotEqualPhysicalContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class CharContext extends ExpressionContext {
		public TerminalNode CHAR() { return getToken(GrammarParser.CHAR, 0); }
		public List<TerminalNode> WS() { return getTokens(GrammarParser.WS); }
		public TerminalNode WS(int i) {
			return getToken(GrammarParser.WS, i);
		}
		public CharContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class DivisionContext extends ExpressionContext {
		public ExpressionContext left;
		public Token operator;
		public ExpressionContext right;
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public TerminalNode DIV() { return getToken(GrammarParser.DIV, 0); }
		public List<TerminalNode> WS() { return getTokens(GrammarParser.WS); }
		public TerminalNode WS(int i) {
			return getToken(GrammarParser.WS, i);
		}
		public DivisionContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class BooleanContext extends ExpressionContext {
		public TerminalNode BOOLEAN() { return getToken(GrammarParser.BOOLEAN, 0); }
		public List<TerminalNode> WS() { return getTokens(GrammarParser.WS); }
		public TerminalNode WS(int i) {
			return getToken(GrammarParser.WS, i);
		}
		public BooleanContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class ParenthesesContext extends ExpressionContext {
		public ParenthesesExpressionContext parenthesesExpression() {
			return getRuleContext(ParenthesesExpressionContext.class,0);
		}
		public ParenthesesContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class SubtractionFloatContext extends ExpressionContext {
		public ExpressionContext left;
		public Token operator;
		public ExpressionContext right;
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public TerminalNode SUBFLOAT() { return getToken(GrammarParser.SUBFLOAT, 0); }
		public List<TerminalNode> WS() { return getTokens(GrammarParser.WS); }
		public TerminalNode WS(int i) {
			return getToken(GrammarParser.WS, i);
		}
		public SubtractionFloatContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class AdditionContext extends ExpressionContext {
		public ExpressionContext left;
		public Token operator;
		public ExpressionContext right;
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public TerminalNode ADD() { return getToken(GrammarParser.ADD, 0); }
		public List<TerminalNode> WS() { return getTokens(GrammarParser.WS); }
		public TerminalNode WS(int i) {
			return getToken(GrammarParser.WS, i);
		}
		public AdditionContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class ConditionalExpressionContext extends ExpressionContext {
		public CondExpContext condExp() {
			return getRuleContext(CondExpContext.class,0);
		}
		public ConditionalExpressionContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class DivisionFloatContext extends ExpressionContext {
		public ExpressionContext left;
		public Token operator;
		public ExpressionContext right;
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public TerminalNode DIVFLOAT() { return getToken(GrammarParser.DIVFLOAT, 0); }
		public List<TerminalNode> WS() { return getTokens(GrammarParser.WS); }
		public TerminalNode WS(int i) {
			return getToken(GrammarParser.WS, i);
		}
		public DivisionFloatContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class FloatContext extends ExpressionContext {
		public TerminalNode FLOAT() { return getToken(GrammarParser.FLOAT, 0); }
		public List<TerminalNode> WS() { return getTokens(GrammarParser.WS); }
		public TerminalNode WS(int i) {
			return getToken(GrammarParser.WS, i);
		}
		public FloatContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class NotContext extends ExpressionContext {
		public Token operator;
		public ExpressionContext argument;
		public TerminalNode NOT() { return getToken(GrammarParser.NOT, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public TerminalNode WS() { return getToken(GrammarParser.WS, 0); }
		public NotContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class AdditionFloatContext extends ExpressionContext {
		public ExpressionContext left;
		public Token operator;
		public ExpressionContext right;
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public TerminalNode ADDFLOAT() { return getToken(GrammarParser.ADDFLOAT, 0); }
		public List<TerminalNode> WS() { return getTokens(GrammarParser.WS); }
		public TerminalNode WS(int i) {
			return getToken(GrammarParser.WS, i);
		}
		public AdditionFloatContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class SubtractionContext extends ExpressionContext {
		public ExpressionContext left;
		public Token operator;
		public ExpressionContext right;
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public TerminalNode SUB() { return getToken(GrammarParser.SUB, 0); }
		public List<TerminalNode> WS() { return getTokens(GrammarParser.WS); }
		public TerminalNode WS(int i) {
			return getToken(GrammarParser.WS, i);
		}
		public SubtractionContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class ConcatenationContext extends ExpressionContext {
		public ExpressionContext left;
		public Token operator;
		public ExpressionContext right;
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public TerminalNode CONCAT() { return getToken(GrammarParser.CONCAT, 0); }
		public List<TerminalNode> WS() { return getTokens(GrammarParser.WS); }
		public TerminalNode WS(int i) {
			return getToken(GrammarParser.WS, i);
		}
		public ConcatenationContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class ModulusContext extends ExpressionContext {
		public ExpressionContext left;
		public Token operator;
		public ExpressionContext right;
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public TerminalNode MOD() { return getToken(GrammarParser.MOD, 0); }
		public List<TerminalNode> WS() { return getTokens(GrammarParser.WS); }
		public TerminalNode WS(int i) {
			return getToken(GrammarParser.WS, i);
		}
		public ModulusContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class AndContext extends ExpressionContext {
		public ExpressionContext left;
		public Token operator;
		public ExpressionContext right;
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public TerminalNode AND() { return getToken(GrammarParser.AND, 0); }
		public List<TerminalNode> WS() { return getTokens(GrammarParser.WS); }
		public TerminalNode WS(int i) {
			return getToken(GrammarParser.WS, i);
		}
		public AndContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class NotEqualStructuralContext extends ExpressionContext {
		public ExpressionContext left;
		public Token operator;
		public ExpressionContext right;
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public TerminalNode NOTEQUALSTRUC() { return getToken(GrammarParser.NOTEQUALSTRUC, 0); }
		public List<TerminalNode> WS() { return getTokens(GrammarParser.WS); }
		public TerminalNode WS(int i) {
			return getToken(GrammarParser.WS, i);
		}
		public NotEqualStructuralContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class PowerContext extends ExpressionContext {
		public ExpressionContext left;
		public Token operator;
		public ExpressionContext right;
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public TerminalNode POW() { return getToken(GrammarParser.POW, 0); }
		public List<TerminalNode> WS() { return getTokens(GrammarParser.WS); }
		public TerminalNode WS(int i) {
			return getToken(GrammarParser.WS, i);
		}
		public PowerContext(ExpressionContext ctx) { copyFrom(ctx); }
	}

	public final ExpressionContext expression() throws RecognitionException {
		return expression(0);
	}

	private ExpressionContext expression(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		ExpressionContext _localctx = new ExpressionContext(_ctx, _parentState);
		ExpressionContext _prevctx = _localctx;
		int _startState = 2;
		enterRecursionRule(_localctx, 2, RULE_expression, _p);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(53);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,11,_ctx) ) {
			case 1:
				{
				_localctx = new NumberContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;

				setState(12);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==WS) {
					{
					setState(11);
					match(WS);
					}
				}

				setState(14);
				match(NUMBER);
				setState(16);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,1,_ctx) ) {
				case 1:
					{
					setState(15);
					match(WS);
					}
					break;
				}
				}
				break;
			case 2:
				{
				_localctx = new FloatContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(19);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==WS) {
					{
					setState(18);
					match(WS);
					}
				}

				setState(21);
				match(FLOAT);
				setState(23);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,3,_ctx) ) {
				case 1:
					{
					setState(22);
					match(WS);
					}
					break;
				}
				}
				break;
			case 3:
				{
				_localctx = new BooleanContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(26);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==WS) {
					{
					setState(25);
					match(WS);
					}
				}

				setState(28);
				match(BOOLEAN);
				setState(30);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,5,_ctx) ) {
				case 1:
					{
					setState(29);
					match(WS);
					}
					break;
				}
				}
				break;
			case 4:
				{
				_localctx = new CharContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(33);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==WS) {
					{
					setState(32);
					match(WS);
					}
				}

				setState(35);
				match(CHAR);
				setState(37);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,7,_ctx) ) {
				case 1:
					{
					setState(36);
					match(WS);
					}
					break;
				}
				}
				break;
			case 5:
				{
				_localctx = new StringContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(40);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==WS) {
					{
					setState(39);
					match(WS);
					}
				}

				setState(42);
				match(STRING);
				setState(44);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,9,_ctx) ) {
				case 1:
					{
					setState(43);
					match(WS);
					}
					break;
				}
				}
				break;
			case 6:
				{
				_localctx = new ParenthesesContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(46);
				parenthesesExpression();
				}
				break;
			case 7:
				{
				_localctx = new NotContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(47);
				((NotContext)_localctx).operator = match(NOT);
				setState(49);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,10,_ctx) ) {
				case 1:
					{
					setState(48);
					match(WS);
					}
					break;
				}
				setState(51);
				((NotContext)_localctx).argument = expression(4);
				}
				break;
			case 8:
				{
				_localctx = new ConditionalExpressionContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(52);
				condExp();
				}
				break;
			}
			_ctx.stop = _input.LT(-1);
			setState(246);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,55,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					setState(244);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,54,_ctx) ) {
					case 1:
						{
						_localctx = new PowerContext(new ExpressionContext(_parentctx, _parentState));
						((PowerContext)_localctx).left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(55);
						if (!(precpred(_ctx, 23))) throw new FailedPredicateException(this, "precpred(_ctx, 23)");
						setState(57);
						_errHandler.sync(this);
						_la = _input.LA(1);
						if (_la==WS) {
							{
							setState(56);
							match(WS);
							}
						}

						setState(59);
						((PowerContext)_localctx).operator = match(POW);
						setState(61);
						_errHandler.sync(this);
						switch ( getInterpreter().adaptivePredict(_input,13,_ctx) ) {
						case 1:
							{
							setState(60);
							match(WS);
							}
							break;
						}
						setState(63);
						((PowerContext)_localctx).right = expression(23);
						}
						break;
					case 2:
						{
						_localctx = new MultiplicationContext(new ExpressionContext(_parentctx, _parentState));
						((MultiplicationContext)_localctx).left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(64);
						if (!(precpred(_ctx, 22))) throw new FailedPredicateException(this, "precpred(_ctx, 22)");
						setState(66);
						_errHandler.sync(this);
						_la = _input.LA(1);
						if (_la==WS) {
							{
							setState(65);
							match(WS);
							}
						}

						setState(68);
						((MultiplicationContext)_localctx).operator = match(MUL);
						setState(70);
						_errHandler.sync(this);
						switch ( getInterpreter().adaptivePredict(_input,15,_ctx) ) {
						case 1:
							{
							setState(69);
							match(WS);
							}
							break;
						}
						setState(72);
						((MultiplicationContext)_localctx).right = expression(23);
						}
						break;
					case 3:
						{
						_localctx = new DivisionContext(new ExpressionContext(_parentctx, _parentState));
						((DivisionContext)_localctx).left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(73);
						if (!(precpred(_ctx, 21))) throw new FailedPredicateException(this, "precpred(_ctx, 21)");
						setState(75);
						_errHandler.sync(this);
						_la = _input.LA(1);
						if (_la==WS) {
							{
							setState(74);
							match(WS);
							}
						}

						setState(77);
						((DivisionContext)_localctx).operator = match(DIV);
						setState(79);
						_errHandler.sync(this);
						switch ( getInterpreter().adaptivePredict(_input,17,_ctx) ) {
						case 1:
							{
							setState(78);
							match(WS);
							}
							break;
						}
						setState(81);
						((DivisionContext)_localctx).right = expression(22);
						}
						break;
					case 4:
						{
						_localctx = new MultiplicationFloatContext(new ExpressionContext(_parentctx, _parentState));
						((MultiplicationFloatContext)_localctx).left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(82);
						if (!(precpred(_ctx, 20))) throw new FailedPredicateException(this, "precpred(_ctx, 20)");
						setState(84);
						_errHandler.sync(this);
						_la = _input.LA(1);
						if (_la==WS) {
							{
							setState(83);
							match(WS);
							}
						}

						setState(86);
						((MultiplicationFloatContext)_localctx).operator = match(MULFLOAT);
						setState(88);
						_errHandler.sync(this);
						switch ( getInterpreter().adaptivePredict(_input,19,_ctx) ) {
						case 1:
							{
							setState(87);
							match(WS);
							}
							break;
						}
						setState(90);
						((MultiplicationFloatContext)_localctx).right = expression(21);
						}
						break;
					case 5:
						{
						_localctx = new DivisionFloatContext(new ExpressionContext(_parentctx, _parentState));
						((DivisionFloatContext)_localctx).left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(91);
						if (!(precpred(_ctx, 19))) throw new FailedPredicateException(this, "precpred(_ctx, 19)");
						setState(93);
						_errHandler.sync(this);
						_la = _input.LA(1);
						if (_la==WS) {
							{
							setState(92);
							match(WS);
							}
						}

						setState(95);
						((DivisionFloatContext)_localctx).operator = match(DIVFLOAT);
						setState(97);
						_errHandler.sync(this);
						switch ( getInterpreter().adaptivePredict(_input,21,_ctx) ) {
						case 1:
							{
							setState(96);
							match(WS);
							}
							break;
						}
						setState(99);
						((DivisionFloatContext)_localctx).right = expression(20);
						}
						break;
					case 6:
						{
						_localctx = new ModulusContext(new ExpressionContext(_parentctx, _parentState));
						((ModulusContext)_localctx).left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(100);
						if (!(precpred(_ctx, 18))) throw new FailedPredicateException(this, "precpred(_ctx, 18)");
						setState(102);
						_errHandler.sync(this);
						_la = _input.LA(1);
						if (_la==WS) {
							{
							setState(101);
							match(WS);
							}
						}

						setState(104);
						((ModulusContext)_localctx).operator = match(MOD);
						setState(106);
						_errHandler.sync(this);
						switch ( getInterpreter().adaptivePredict(_input,23,_ctx) ) {
						case 1:
							{
							setState(105);
							match(WS);
							}
							break;
						}
						setState(108);
						((ModulusContext)_localctx).right = expression(19);
						}
						break;
					case 7:
						{
						_localctx = new AdditionContext(new ExpressionContext(_parentctx, _parentState));
						((AdditionContext)_localctx).left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(109);
						if (!(precpred(_ctx, 17))) throw new FailedPredicateException(this, "precpred(_ctx, 17)");
						setState(111);
						_errHandler.sync(this);
						_la = _input.LA(1);
						if (_la==WS) {
							{
							setState(110);
							match(WS);
							}
						}

						setState(113);
						((AdditionContext)_localctx).operator = match(ADD);
						setState(115);
						_errHandler.sync(this);
						switch ( getInterpreter().adaptivePredict(_input,25,_ctx) ) {
						case 1:
							{
							setState(114);
							match(WS);
							}
							break;
						}
						setState(117);
						((AdditionContext)_localctx).right = expression(18);
						}
						break;
					case 8:
						{
						_localctx = new SubtractionContext(new ExpressionContext(_parentctx, _parentState));
						((SubtractionContext)_localctx).left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(118);
						if (!(precpred(_ctx, 16))) throw new FailedPredicateException(this, "precpred(_ctx, 16)");
						setState(120);
						_errHandler.sync(this);
						_la = _input.LA(1);
						if (_la==WS) {
							{
							setState(119);
							match(WS);
							}
						}

						setState(122);
						((SubtractionContext)_localctx).operator = match(SUB);
						setState(124);
						_errHandler.sync(this);
						switch ( getInterpreter().adaptivePredict(_input,27,_ctx) ) {
						case 1:
							{
							setState(123);
							match(WS);
							}
							break;
						}
						setState(126);
						((SubtractionContext)_localctx).right = expression(17);
						}
						break;
					case 9:
						{
						_localctx = new AdditionFloatContext(new ExpressionContext(_parentctx, _parentState));
						((AdditionFloatContext)_localctx).left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(127);
						if (!(precpred(_ctx, 15))) throw new FailedPredicateException(this, "precpred(_ctx, 15)");
						setState(129);
						_errHandler.sync(this);
						_la = _input.LA(1);
						if (_la==WS) {
							{
							setState(128);
							match(WS);
							}
						}

						setState(131);
						((AdditionFloatContext)_localctx).operator = match(ADDFLOAT);
						setState(133);
						_errHandler.sync(this);
						switch ( getInterpreter().adaptivePredict(_input,29,_ctx) ) {
						case 1:
							{
							setState(132);
							match(WS);
							}
							break;
						}
						setState(135);
						((AdditionFloatContext)_localctx).right = expression(16);
						}
						break;
					case 10:
						{
						_localctx = new SubtractionFloatContext(new ExpressionContext(_parentctx, _parentState));
						((SubtractionFloatContext)_localctx).left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(136);
						if (!(precpred(_ctx, 14))) throw new FailedPredicateException(this, "precpred(_ctx, 14)");
						setState(138);
						_errHandler.sync(this);
						_la = _input.LA(1);
						if (_la==WS) {
							{
							setState(137);
							match(WS);
							}
						}

						setState(140);
						((SubtractionFloatContext)_localctx).operator = match(SUBFLOAT);
						setState(142);
						_errHandler.sync(this);
						switch ( getInterpreter().adaptivePredict(_input,31,_ctx) ) {
						case 1:
							{
							setState(141);
							match(WS);
							}
							break;
						}
						setState(144);
						((SubtractionFloatContext)_localctx).right = expression(15);
						}
						break;
					case 11:
						{
						_localctx = new LessThanContext(new ExpressionContext(_parentctx, _parentState));
						((LessThanContext)_localctx).left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(145);
						if (!(precpred(_ctx, 13))) throw new FailedPredicateException(this, "precpred(_ctx, 13)");
						setState(147);
						_errHandler.sync(this);
						_la = _input.LA(1);
						if (_la==WS) {
							{
							setState(146);
							match(WS);
							}
						}

						setState(149);
						((LessThanContext)_localctx).operator = match(LESSTHAN);
						setState(151);
						_errHandler.sync(this);
						switch ( getInterpreter().adaptivePredict(_input,33,_ctx) ) {
						case 1:
							{
							setState(150);
							match(WS);
							}
							break;
						}
						setState(153);
						((LessThanContext)_localctx).right = expression(14);
						}
						break;
					case 12:
						{
						_localctx = new LessThanOrEqualContext(new ExpressionContext(_parentctx, _parentState));
						((LessThanOrEqualContext)_localctx).left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(154);
						if (!(precpred(_ctx, 12))) throw new FailedPredicateException(this, "precpred(_ctx, 12)");
						setState(156);
						_errHandler.sync(this);
						_la = _input.LA(1);
						if (_la==WS) {
							{
							setState(155);
							match(WS);
							}
						}

						setState(158);
						((LessThanOrEqualContext)_localctx).operator = match(LESSTHANOREQUAL);
						setState(160);
						_errHandler.sync(this);
						switch ( getInterpreter().adaptivePredict(_input,35,_ctx) ) {
						case 1:
							{
							setState(159);
							match(WS);
							}
							break;
						}
						setState(162);
						((LessThanOrEqualContext)_localctx).right = expression(13);
						}
						break;
					case 13:
						{
						_localctx = new GreaterThanContext(new ExpressionContext(_parentctx, _parentState));
						((GreaterThanContext)_localctx).left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(163);
						if (!(precpred(_ctx, 11))) throw new FailedPredicateException(this, "precpred(_ctx, 11)");
						setState(165);
						_errHandler.sync(this);
						_la = _input.LA(1);
						if (_la==WS) {
							{
							setState(164);
							match(WS);
							}
						}

						setState(167);
						((GreaterThanContext)_localctx).operator = match(GREATERTHAN);
						setState(169);
						_errHandler.sync(this);
						switch ( getInterpreter().adaptivePredict(_input,37,_ctx) ) {
						case 1:
							{
							setState(168);
							match(WS);
							}
							break;
						}
						setState(171);
						((GreaterThanContext)_localctx).right = expression(12);
						}
						break;
					case 14:
						{
						_localctx = new GreaterThanOrEqualContext(new ExpressionContext(_parentctx, _parentState));
						((GreaterThanOrEqualContext)_localctx).left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(172);
						if (!(precpred(_ctx, 10))) throw new FailedPredicateException(this, "precpred(_ctx, 10)");
						setState(174);
						_errHandler.sync(this);
						_la = _input.LA(1);
						if (_la==WS) {
							{
							setState(173);
							match(WS);
							}
						}

						setState(176);
						((GreaterThanOrEqualContext)_localctx).operator = match(GREATERTHANOREQUAL);
						setState(178);
						_errHandler.sync(this);
						switch ( getInterpreter().adaptivePredict(_input,39,_ctx) ) {
						case 1:
							{
							setState(177);
							match(WS);
							}
							break;
						}
						setState(180);
						((GreaterThanOrEqualContext)_localctx).right = expression(11);
						}
						break;
					case 15:
						{
						_localctx = new EqualStructuralContext(new ExpressionContext(_parentctx, _parentState));
						((EqualStructuralContext)_localctx).left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(181);
						if (!(precpred(_ctx, 9))) throw new FailedPredicateException(this, "precpred(_ctx, 9)");
						setState(183);
						_errHandler.sync(this);
						_la = _input.LA(1);
						if (_la==WS) {
							{
							setState(182);
							match(WS);
							}
						}

						setState(185);
						((EqualStructuralContext)_localctx).operator = match(EQUALSTRUC);
						setState(187);
						_errHandler.sync(this);
						switch ( getInterpreter().adaptivePredict(_input,41,_ctx) ) {
						case 1:
							{
							setState(186);
							match(WS);
							}
							break;
						}
						setState(189);
						((EqualStructuralContext)_localctx).right = expression(10);
						}
						break;
					case 16:
						{
						_localctx = new NotEqualStructuralContext(new ExpressionContext(_parentctx, _parentState));
						((NotEqualStructuralContext)_localctx).left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(190);
						if (!(precpred(_ctx, 8))) throw new FailedPredicateException(this, "precpred(_ctx, 8)");
						setState(192);
						_errHandler.sync(this);
						_la = _input.LA(1);
						if (_la==WS) {
							{
							setState(191);
							match(WS);
							}
						}

						setState(194);
						((NotEqualStructuralContext)_localctx).operator = match(NOTEQUALSTRUC);
						setState(196);
						_errHandler.sync(this);
						switch ( getInterpreter().adaptivePredict(_input,43,_ctx) ) {
						case 1:
							{
							setState(195);
							match(WS);
							}
							break;
						}
						setState(198);
						((NotEqualStructuralContext)_localctx).right = expression(9);
						}
						break;
					case 17:
						{
						_localctx = new EqualPhysicalContext(new ExpressionContext(_parentctx, _parentState));
						((EqualPhysicalContext)_localctx).left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(199);
						if (!(precpred(_ctx, 7))) throw new FailedPredicateException(this, "precpred(_ctx, 7)");
						setState(201);
						_errHandler.sync(this);
						_la = _input.LA(1);
						if (_la==WS) {
							{
							setState(200);
							match(WS);
							}
						}

						setState(203);
						((EqualPhysicalContext)_localctx).operator = match(EQUALPHYS);
						setState(205);
						_errHandler.sync(this);
						switch ( getInterpreter().adaptivePredict(_input,45,_ctx) ) {
						case 1:
							{
							setState(204);
							match(WS);
							}
							break;
						}
						setState(207);
						((EqualPhysicalContext)_localctx).right = expression(8);
						}
						break;
					case 18:
						{
						_localctx = new NotEqualPhysicalContext(new ExpressionContext(_parentctx, _parentState));
						((NotEqualPhysicalContext)_localctx).left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(208);
						if (!(precpred(_ctx, 6))) throw new FailedPredicateException(this, "precpred(_ctx, 6)");
						setState(210);
						_errHandler.sync(this);
						_la = _input.LA(1);
						if (_la==WS) {
							{
							setState(209);
							match(WS);
							}
						}

						setState(212);
						((NotEqualPhysicalContext)_localctx).operator = match(NOTEQUALPHYS);
						setState(214);
						_errHandler.sync(this);
						switch ( getInterpreter().adaptivePredict(_input,47,_ctx) ) {
						case 1:
							{
							setState(213);
							match(WS);
							}
							break;
						}
						setState(216);
						((NotEqualPhysicalContext)_localctx).right = expression(7);
						}
						break;
					case 19:
						{
						_localctx = new ConcatenationContext(new ExpressionContext(_parentctx, _parentState));
						((ConcatenationContext)_localctx).left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(217);
						if (!(precpred(_ctx, 5))) throw new FailedPredicateException(this, "precpred(_ctx, 5)");
						setState(219);
						_errHandler.sync(this);
						_la = _input.LA(1);
						if (_la==WS) {
							{
							setState(218);
							match(WS);
							}
						}

						setState(221);
						((ConcatenationContext)_localctx).operator = match(CONCAT);
						setState(223);
						_errHandler.sync(this);
						switch ( getInterpreter().adaptivePredict(_input,49,_ctx) ) {
						case 1:
							{
							setState(222);
							match(WS);
							}
							break;
						}
						setState(225);
						((ConcatenationContext)_localctx).right = expression(6);
						}
						break;
					case 20:
						{
						_localctx = new AndContext(new ExpressionContext(_parentctx, _parentState));
						((AndContext)_localctx).left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(226);
						if (!(precpred(_ctx, 3))) throw new FailedPredicateException(this, "precpred(_ctx, 3)");
						setState(228);
						_errHandler.sync(this);
						_la = _input.LA(1);
						if (_la==WS) {
							{
							setState(227);
							match(WS);
							}
						}

						setState(230);
						((AndContext)_localctx).operator = match(AND);
						setState(232);
						_errHandler.sync(this);
						switch ( getInterpreter().adaptivePredict(_input,51,_ctx) ) {
						case 1:
							{
							setState(231);
							match(WS);
							}
							break;
						}
						setState(234);
						((AndContext)_localctx).right = expression(4);
						}
						break;
					case 21:
						{
						_localctx = new OrContext(new ExpressionContext(_parentctx, _parentState));
						((OrContext)_localctx).left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(235);
						if (!(precpred(_ctx, 2))) throw new FailedPredicateException(this, "precpred(_ctx, 2)");
						setState(237);
						_errHandler.sync(this);
						_la = _input.LA(1);
						if (_la==WS) {
							{
							setState(236);
							match(WS);
							}
						}

						setState(239);
						((OrContext)_localctx).operator = match(OR);
						setState(241);
						_errHandler.sync(this);
						switch ( getInterpreter().adaptivePredict(_input,53,_ctx) ) {
						case 1:
							{
							setState(240);
							match(WS);
							}
							break;
						}
						setState(243);
						((OrContext)_localctx).right = expression(3);
						}
						break;
					}
					} 
				}
				setState(248);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,55,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public static class ParenthesesExpressionContext extends ParserRuleContext {
		public ExpressionContext inner;
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public List<TerminalNode> WS() { return getTokens(GrammarParser.WS); }
		public TerminalNode WS(int i) {
			return getToken(GrammarParser.WS, i);
		}
		public ParenthesesExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_parenthesesExpression; }
	}

	public final ParenthesesExpressionContext parenthesesExpression() throws RecognitionException {
		ParenthesesExpressionContext _localctx = new ParenthesesExpressionContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_parenthesesExpression);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(250);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==WS) {
				{
				setState(249);
				match(WS);
				}
			}

			setState(252);
			match(T__0);
			setState(254);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,57,_ctx) ) {
			case 1:
				{
				setState(253);
				match(WS);
				}
				break;
			}
			setState(256);
			((ParenthesesExpressionContext)_localctx).inner = expression(0);
			setState(258);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==WS) {
				{
				setState(257);
				match(WS);
				}
			}

			setState(260);
			match(T__1);
			setState(262);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,59,_ctx) ) {
			case 1:
				{
				setState(261);
				match(WS);
				}
				break;
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class CondExpContext extends ParserRuleContext {
		public ExpressionContext test;
		public ExpressionContext consequent;
		public ExpressionContext alternate;
		public TerminalNode IF() { return getToken(GrammarParser.IF, 0); }
		public List<TerminalNode> WS() { return getTokens(GrammarParser.WS); }
		public TerminalNode WS(int i) {
			return getToken(GrammarParser.WS, i);
		}
		public TerminalNode THEN() { return getToken(GrammarParser.THEN, 0); }
		public TerminalNode ELSE() { return getToken(GrammarParser.ELSE, 0); }
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public CondExpContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_condExp; }
	}

	public final CondExpContext condExp() throws RecognitionException {
		CondExpContext _localctx = new CondExpContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_condExp);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(265);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==WS) {
				{
				setState(264);
				match(WS);
				}
			}

			setState(267);
			match(IF);
			setState(268);
			match(WS);
			setState(269);
			((CondExpContext)_localctx).test = expression(0);
			setState(270);
			match(WS);
			setState(271);
			match(THEN);
			setState(272);
			match(WS);
			setState(273);
			((CondExpContext)_localctx).consequent = expression(0);
			setState(274);
			match(WS);
			setState(275);
			match(ELSE);
			setState(276);
			match(WS);
			setState(277);
			((CondExpContext)_localctx).alternate = expression(0);
			setState(279);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,61,_ctx) ) {
			case 1:
				{
				setState(278);
				match(WS);
				}
				break;
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public boolean sempred(RuleContext _localctx, int ruleIndex, int predIndex) {
		switch (ruleIndex) {
		case 1:
			return expression_sempred((ExpressionContext)_localctx, predIndex);
		}
		return true;
	}
	private boolean expression_sempred(ExpressionContext _localctx, int predIndex) {
		switch (predIndex) {
		case 0:
			return precpred(_ctx, 23);
		case 1:
			return precpred(_ctx, 22);
		case 2:
			return precpred(_ctx, 21);
		case 3:
			return precpred(_ctx, 20);
		case 4:
			return precpred(_ctx, 19);
		case 5:
			return precpred(_ctx, 18);
		case 6:
			return precpred(_ctx, 17);
		case 7:
			return precpred(_ctx, 16);
		case 8:
			return precpred(_ctx, 15);
		case 9:
			return precpred(_ctx, 14);
		case 10:
			return precpred(_ctx, 13);
		case 11:
			return precpred(_ctx, 12);
		case 12:
			return precpred(_ctx, 11);
		case 13:
			return precpred(_ctx, 10);
		case 14:
			return precpred(_ctx, 9);
		case 15:
			return precpred(_ctx, 8);
		case 16:
			return precpred(_ctx, 7);
		case 17:
			return precpred(_ctx, 6);
		case 18:
			return precpred(_ctx, 5);
		case 19:
			return precpred(_ctx, 3);
		case 20:
			return precpred(_ctx, 2);
		}
		return true;
	}

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\3&\u011c\4\2\t\2\4"+
		"\3\t\3\4\4\t\4\4\5\t\5\3\2\3\2\3\3\3\3\5\3\17\n\3\3\3\3\3\5\3\23\n\3\3"+
		"\3\5\3\26\n\3\3\3\3\3\5\3\32\n\3\3\3\5\3\35\n\3\3\3\3\3\5\3!\n\3\3\3\5"+
		"\3$\n\3\3\3\3\3\5\3(\n\3\3\3\5\3+\n\3\3\3\3\3\5\3/\n\3\3\3\3\3\3\3\5\3"+
		"\64\n\3\3\3\3\3\5\38\n\3\3\3\3\3\5\3<\n\3\3\3\3\3\5\3@\n\3\3\3\3\3\3\3"+
		"\5\3E\n\3\3\3\3\3\5\3I\n\3\3\3\3\3\3\3\5\3N\n\3\3\3\3\3\5\3R\n\3\3\3\3"+
		"\3\3\3\5\3W\n\3\3\3\3\3\5\3[\n\3\3\3\3\3\3\3\5\3`\n\3\3\3\3\3\5\3d\n\3"+
		"\3\3\3\3\3\3\5\3i\n\3\3\3\3\3\5\3m\n\3\3\3\3\3\3\3\5\3r\n\3\3\3\3\3\5"+
		"\3v\n\3\3\3\3\3\3\3\5\3{\n\3\3\3\3\3\5\3\177\n\3\3\3\3\3\3\3\5\3\u0084"+
		"\n\3\3\3\3\3\5\3\u0088\n\3\3\3\3\3\3\3\5\3\u008d\n\3\3\3\3\3\5\3\u0091"+
		"\n\3\3\3\3\3\3\3\5\3\u0096\n\3\3\3\3\3\5\3\u009a\n\3\3\3\3\3\3\3\5\3\u009f"+
		"\n\3\3\3\3\3\5\3\u00a3\n\3\3\3\3\3\3\3\5\3\u00a8\n\3\3\3\3\3\5\3\u00ac"+
		"\n\3\3\3\3\3\3\3\5\3\u00b1\n\3\3\3\3\3\5\3\u00b5\n\3\3\3\3\3\3\3\5\3\u00ba"+
		"\n\3\3\3\3\3\5\3\u00be\n\3\3\3\3\3\3\3\5\3\u00c3\n\3\3\3\3\3\5\3\u00c7"+
		"\n\3\3\3\3\3\3\3\5\3\u00cc\n\3\3\3\3\3\5\3\u00d0\n\3\3\3\3\3\3\3\5\3\u00d5"+
		"\n\3\3\3\3\3\5\3\u00d9\n\3\3\3\3\3\3\3\5\3\u00de\n\3\3\3\3\3\5\3\u00e2"+
		"\n\3\3\3\3\3\3\3\5\3\u00e7\n\3\3\3\3\3\5\3\u00eb\n\3\3\3\3\3\3\3\5\3\u00f0"+
		"\n\3\3\3\3\3\5\3\u00f4\n\3\3\3\7\3\u00f7\n\3\f\3\16\3\u00fa\13\3\3\4\5"+
		"\4\u00fd\n\4\3\4\3\4\5\4\u0101\n\4\3\4\3\4\5\4\u0105\n\4\3\4\3\4\5\4\u0109"+
		"\n\4\3\5\5\5\u010c\n\5\3\5\3\5\3\5\3\5\3\5\3\5\3\5\3\5\3\5\3\5\3\5\3\5"+
		"\5\5\u011a\n\5\3\5\2\3\4\6\2\4\6\b\2\2\2\u016e\2\n\3\2\2\2\4\67\3\2\2"+
		"\2\6\u00fc\3\2\2\2\b\u010b\3\2\2\2\n\13\5\4\3\2\13\3\3\2\2\2\f\16\b\3"+
		"\1\2\r\17\7\34\2\2\16\r\3\2\2\2\16\17\3\2\2\2\17\20\3\2\2\2\20\22\7\33"+
		"\2\2\21\23\7\34\2\2\22\21\3\2\2\2\22\23\3\2\2\2\238\3\2\2\2\24\26\7\34"+
		"\2\2\25\24\3\2\2\2\25\26\3\2\2\2\26\27\3\2\2\2\27\31\7 \2\2\30\32\7\34"+
		"\2\2\31\30\3\2\2\2\31\32\3\2\2\2\328\3\2\2\2\33\35\7\34\2\2\34\33\3\2"+
		"\2\2\34\35\3\2\2\2\35\36\3\2\2\2\36 \7!\2\2\37!\7\34\2\2 \37\3\2\2\2 "+
		"!\3\2\2\2!8\3\2\2\2\"$\7\34\2\2#\"\3\2\2\2#$\3\2\2\2$%\3\2\2\2%\'\7\36"+
		"\2\2&(\7\34\2\2\'&\3\2\2\2\'(\3\2\2\2(8\3\2\2\2)+\7\34\2\2*)\3\2\2\2*"+
		"+\3\2\2\2+,\3\2\2\2,.\7\37\2\2-/\7\34\2\2.-\3\2\2\2./\3\2\2\2/8\3\2\2"+
		"\2\608\5\6\4\2\61\63\7\32\2\2\62\64\7\34\2\2\63\62\3\2\2\2\63\64\3\2\2"+
		"\2\64\65\3\2\2\2\658\5\4\3\6\668\5\b\5\2\67\f\3\2\2\2\67\25\3\2\2\2\67"+
		"\34\3\2\2\2\67#\3\2\2\2\67*\3\2\2\2\67\60\3\2\2\2\67\61\3\2\2\2\67\66"+
		"\3\2\2\28\u00f8\3\2\2\29;\f\31\2\2:<\7\34\2\2;:\3\2\2\2;<\3\2\2\2<=\3"+
		"\2\2\2=?\7\5\2\2>@\7\34\2\2?>\3\2\2\2?@\3\2\2\2@A\3\2\2\2A\u00f7\5\4\3"+
		"\31BD\f\30\2\2CE\7\34\2\2DC\3\2\2\2DE\3\2\2\2EF\3\2\2\2FH\7\6\2\2GI\7"+
		"\34\2\2HG\3\2\2\2HI\3\2\2\2IJ\3\2\2\2J\u00f7\5\4\3\31KM\f\27\2\2LN\7\34"+
		"\2\2ML\3\2\2\2MN\3\2\2\2NO\3\2\2\2OQ\7\7\2\2PR\7\34\2\2QP\3\2\2\2QR\3"+
		"\2\2\2RS\3\2\2\2S\u00f7\5\4\3\30TV\f\26\2\2UW\7\34\2\2VU\3\2\2\2VW\3\2"+
		"\2\2WX\3\2\2\2XZ\7\r\2\2Y[\7\34\2\2ZY\3\2\2\2Z[\3\2\2\2[\\\3\2\2\2\\\u00f7"+
		"\5\4\3\27]_\f\25\2\2^`\7\34\2\2_^\3\2\2\2_`\3\2\2\2`a\3\2\2\2ac\7\16\2"+
		"\2bd\7\34\2\2cb\3\2\2\2cd\3\2\2\2de\3\2\2\2e\u00f7\5\4\3\26fh\f\24\2\2"+
		"gi\7\34\2\2hg\3\2\2\2hi\3\2\2\2ij\3\2\2\2jl\7\n\2\2km\7\34\2\2lk\3\2\2"+
		"\2lm\3\2\2\2mn\3\2\2\2n\u00f7\5\4\3\25oq\f\23\2\2pr\7\34\2\2qp\3\2\2\2"+
		"qr\3\2\2\2rs\3\2\2\2su\7\b\2\2tv\7\34\2\2ut\3\2\2\2uv\3\2\2\2vw\3\2\2"+
		"\2w\u00f7\5\4\3\24xz\f\22\2\2y{\7\34\2\2zy\3\2\2\2z{\3\2\2\2{|\3\2\2\2"+
		"|~\7\t\2\2}\177\7\34\2\2~}\3\2\2\2~\177\3\2\2\2\177\u0080\3\2\2\2\u0080"+
		"\u00f7\5\4\3\23\u0081\u0083\f\21\2\2\u0082\u0084\7\34\2\2\u0083\u0082"+
		"\3\2\2\2\u0083\u0084\3\2\2\2\u0084\u0085\3\2\2\2\u0085\u0087\7\13\2\2"+
		"\u0086\u0088\7\34\2\2\u0087\u0086\3\2\2\2\u0087\u0088\3\2\2\2\u0088\u0089"+
		"\3\2\2\2\u0089\u00f7\5\4\3\22\u008a\u008c\f\20\2\2\u008b\u008d\7\34\2"+
		"\2\u008c\u008b\3\2\2\2\u008c\u008d\3\2\2\2\u008d\u008e\3\2\2\2\u008e\u0090"+
		"\7\f\2\2\u008f\u0091\7\34\2\2\u0090\u008f\3\2\2\2\u0090\u0091\3\2\2\2"+
		"\u0091\u0092\3\2\2\2\u0092\u00f7\5\4\3\21\u0093\u0095\f\17\2\2\u0094\u0096"+
		"\7\34\2\2\u0095\u0094\3\2\2\2\u0095\u0096\3\2\2\2\u0096\u0097\3\2\2\2"+
		"\u0097\u0099\7\17\2\2\u0098\u009a\7\34\2\2\u0099\u0098\3\2\2\2\u0099\u009a"+
		"\3\2\2\2\u009a\u009b\3\2\2\2\u009b\u00f7\5\4\3\20\u009c\u009e\f\16\2\2"+
		"\u009d\u009f\7\34\2\2\u009e\u009d\3\2\2\2\u009e\u009f\3\2\2\2\u009f\u00a0"+
		"\3\2\2\2\u00a0\u00a2\7\20\2\2\u00a1\u00a3\7\34\2\2\u00a2\u00a1\3\2\2\2"+
		"\u00a2\u00a3\3\2\2\2\u00a3\u00a4\3\2\2\2\u00a4\u00f7\5\4\3\17\u00a5\u00a7"+
		"\f\r\2\2\u00a6\u00a8\7\34\2\2\u00a7\u00a6\3\2\2\2\u00a7\u00a8\3\2\2\2"+
		"\u00a8\u00a9\3\2\2\2\u00a9\u00ab\7\21\2\2\u00aa\u00ac\7\34\2\2\u00ab\u00aa"+
		"\3\2\2\2\u00ab\u00ac\3\2\2\2\u00ac\u00ad\3\2\2\2\u00ad\u00f7\5\4\3\16"+
		"\u00ae\u00b0\f\f\2\2\u00af\u00b1\7\34\2\2\u00b0\u00af\3\2\2\2\u00b0\u00b1"+
		"\3\2\2\2\u00b1\u00b2\3\2\2\2\u00b2\u00b4\7\22\2\2\u00b3\u00b5\7\34\2\2"+
		"\u00b4\u00b3\3\2\2\2\u00b4\u00b5\3\2\2\2\u00b5\u00b6\3\2\2\2\u00b6\u00f7"+
		"\5\4\3\r\u00b7\u00b9\f\13\2\2\u00b8\u00ba\7\34\2\2\u00b9\u00b8\3\2\2\2"+
		"\u00b9\u00ba\3\2\2\2\u00ba\u00bb\3\2\2\2\u00bb\u00bd\7\23\2\2\u00bc\u00be"+
		"\7\34\2\2\u00bd\u00bc\3\2\2\2\u00bd\u00be\3\2\2\2\u00be\u00bf\3\2\2\2"+
		"\u00bf\u00f7\5\4\3\f\u00c0\u00c2\f\n\2\2\u00c1\u00c3\7\34\2\2\u00c2\u00c1"+
		"\3\2\2\2\u00c2\u00c3\3\2\2\2\u00c3\u00c4\3\2\2\2\u00c4\u00c6\7\24\2\2"+
		"\u00c5\u00c7\7\34\2\2\u00c6\u00c5\3\2\2\2\u00c6\u00c7\3\2\2\2\u00c7\u00c8"+
		"\3\2\2\2\u00c8\u00f7\5\4\3\13\u00c9\u00cb\f\t\2\2\u00ca\u00cc\7\34\2\2"+
		"\u00cb\u00ca\3\2\2\2\u00cb\u00cc\3\2\2\2\u00cc\u00cd\3\2\2\2\u00cd\u00cf"+
		"\7\25\2\2\u00ce\u00d0\7\34\2\2\u00cf\u00ce\3\2\2\2\u00cf\u00d0\3\2\2\2"+
		"\u00d0\u00d1\3\2\2\2\u00d1\u00f7\5\4\3\n\u00d2\u00d4\f\b\2\2\u00d3\u00d5"+
		"\7\34\2\2\u00d4\u00d3\3\2\2\2\u00d4\u00d5\3\2\2\2\u00d5\u00d6\3\2\2\2"+
		"\u00d6\u00d8\7\26\2\2\u00d7\u00d9\7\34\2\2\u00d8\u00d7\3\2\2\2\u00d8\u00d9"+
		"\3\2\2\2\u00d9\u00da\3\2\2\2\u00da\u00f7\5\4\3\t\u00db\u00dd\f\7\2\2\u00dc"+
		"\u00de\7\34\2\2\u00dd\u00dc\3\2\2\2\u00dd\u00de\3\2\2\2\u00de\u00df\3"+
		"\2\2\2\u00df\u00e1\7\27\2\2\u00e0\u00e2\7\34\2\2\u00e1\u00e0\3\2\2\2\u00e1"+
		"\u00e2\3\2\2\2\u00e2\u00e3\3\2\2\2\u00e3\u00f7\5\4\3\b\u00e4\u00e6\f\5"+
		"\2\2\u00e5\u00e7\7\34\2\2\u00e6\u00e5\3\2\2\2\u00e6\u00e7\3\2\2\2\u00e7"+
		"\u00e8\3\2\2\2\u00e8\u00ea\7\30\2\2\u00e9\u00eb\7\34\2\2\u00ea\u00e9\3"+
		"\2\2\2\u00ea\u00eb\3\2\2\2\u00eb\u00ec\3\2\2\2\u00ec\u00f7\5\4\3\6\u00ed"+
		"\u00ef\f\4\2\2\u00ee\u00f0\7\34\2\2\u00ef\u00ee\3\2\2\2\u00ef\u00f0\3"+
		"\2\2\2\u00f0\u00f1\3\2\2\2\u00f1\u00f3\7\31\2\2\u00f2\u00f4\7\34\2\2\u00f3"+
		"\u00f2\3\2\2\2\u00f3\u00f4\3\2\2\2\u00f4\u00f5\3\2\2\2\u00f5\u00f7\5\4"+
		"\3\5\u00f69\3\2\2\2\u00f6B\3\2\2\2\u00f6K\3\2\2\2\u00f6T\3\2\2\2\u00f6"+
		"]\3\2\2\2\u00f6f\3\2\2\2\u00f6o\3\2\2\2\u00f6x\3\2\2\2\u00f6\u0081\3\2"+
		"\2\2\u00f6\u008a\3\2\2\2\u00f6\u0093\3\2\2\2\u00f6\u009c\3\2\2\2\u00f6"+
		"\u00a5\3\2\2\2\u00f6\u00ae\3\2\2\2\u00f6\u00b7\3\2\2\2\u00f6\u00c0\3\2"+
		"\2\2\u00f6\u00c9\3\2\2\2\u00f6\u00d2\3\2\2\2\u00f6\u00db\3\2\2\2\u00f6"+
		"\u00e4\3\2\2\2\u00f6\u00ed\3\2\2\2\u00f7\u00fa\3\2\2\2\u00f8\u00f6\3\2"+
		"\2\2\u00f8\u00f9\3\2\2\2\u00f9\5\3\2\2\2\u00fa\u00f8\3\2\2\2\u00fb\u00fd"+
		"\7\34\2\2\u00fc\u00fb\3\2\2\2\u00fc\u00fd\3\2\2\2\u00fd\u00fe\3\2\2\2"+
		"\u00fe\u0100\7\3\2\2\u00ff\u0101\7\34\2\2\u0100\u00ff\3\2\2\2\u0100\u0101"+
		"\3\2\2\2\u0101\u0102\3\2\2\2\u0102\u0104\5\4\3\2\u0103\u0105\7\34\2\2"+
		"\u0104\u0103\3\2\2\2\u0104\u0105\3\2\2\2\u0105\u0106\3\2\2\2\u0106\u0108"+
		"\7\4\2\2\u0107\u0109\7\34\2\2\u0108\u0107\3\2\2\2\u0108\u0109\3\2\2\2"+
		"\u0109\7\3\2\2\2\u010a\u010c\7\34\2\2\u010b\u010a\3\2\2\2\u010b\u010c"+
		"\3\2\2\2\u010c\u010d\3\2\2\2\u010d\u010e\7\"\2\2\u010e\u010f\7\34\2\2"+
		"\u010f\u0110\5\4\3\2\u0110\u0111\7\34\2\2\u0111\u0112\7#\2\2\u0112\u0113"+
		"\7\34\2\2\u0113\u0114\5\4\3\2\u0114\u0115\7\34\2\2\u0115\u0116\7$\2\2"+
		"\u0116\u0117\7\34\2\2\u0117\u0119\5\4\3\2\u0118\u011a\7\34\2\2\u0119\u0118"+
		"\3\2\2\2\u0119\u011a\3\2\2\2\u011a\t\3\2\2\2@\16\22\25\31\34 #\'*.\63"+
		"\67;?DHMQVZ_chlquz~\u0083\u0087\u008c\u0090\u0095\u0099\u009e\u00a2\u00a7"+
		"\u00ab\u00b0\u00b4\u00b9\u00bd\u00c2\u00c6\u00cb\u00cf\u00d4\u00d8\u00dd"+
		"\u00e1\u00e6\u00ea\u00ef\u00f3\u00f6\u00f8\u00fc\u0100\u0104\u0108\u010b"+
		"\u0119";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}