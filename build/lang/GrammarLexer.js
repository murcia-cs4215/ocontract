"use strict";
// Generated from ./src/lang/Grammar.g4 by ANTLR 4.9.0-SNAPSHOT
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GrammarLexer = void 0;
const ATNDeserializer_1 = require("antlr4ts/atn/ATNDeserializer");
const LexerATNSimulator_1 = require("antlr4ts/atn/LexerATNSimulator");
const Lexer_1 = require("antlr4ts/Lexer");
const Utils = __importStar(require("antlr4ts/misc/Utils"));
const VocabularyImpl_1 = require("antlr4ts/VocabularyImpl");
class GrammarLexer extends Lexer_1.Lexer {
    // tslint:enable:no-trailing-whitespace
    constructor(input) {
        super(input);
        this._interp = new LexerATNSimulator_1.LexerATNSimulator(GrammarLexer._ATN, this);
    }
    // @Override
    // @NotNull
    get vocabulary() {
        return GrammarLexer.VOCABULARY;
    }
    // @Override
    get grammarFileName() {
        return 'Grammar.g4';
    }
    // @Override
    get ruleNames() {
        return GrammarLexer.ruleNames;
    }
    // @Override
    get serializedATN() {
        return GrammarLexer._serializedATN;
    }
    // @Override
    get channelNames() {
        return GrammarLexer.channelNames;
    }
    // @Override
    get modeNames() {
        return GrammarLexer.modeNames;
    }
    static get _ATN() {
        if (!GrammarLexer.__ATN) {
            GrammarLexer.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(GrammarLexer._serializedATN));
        }
        return GrammarLexer.__ATN;
    }
}
exports.GrammarLexer = GrammarLexer;
GrammarLexer.T__0 = 1;
GrammarLexer.T__1 = 2;
GrammarLexer.T__2 = 3;
GrammarLexer.T__3 = 4;
GrammarLexer.POW = 5;
GrammarLexer.MUL = 6;
GrammarLexer.DIV = 7;
GrammarLexer.ADD = 8;
GrammarLexer.SUB = 9;
GrammarLexer.MOD = 10;
GrammarLexer.ADDFLOAT = 11;
GrammarLexer.SUBFLOAT = 12;
GrammarLexer.MULFLOAT = 13;
GrammarLexer.DIVFLOAT = 14;
GrammarLexer.LESSTHAN = 15;
GrammarLexer.LESSTHANOREQUAL = 16;
GrammarLexer.GREATERTHAN = 17;
GrammarLexer.GREATERTHANOREQUAL = 18;
GrammarLexer.EQUALSTRUC = 19;
GrammarLexer.NOTEQUALSTRUC = 20;
GrammarLexer.EQUALPHYS = 21;
GrammarLexer.NOTEQUALPHYS = 22;
GrammarLexer.CONCAT = 23;
GrammarLexer.AND = 24;
GrammarLexer.OR = 25;
GrammarLexer.NOT = 26;
GrammarLexer.NUMBER = 27;
GrammarLexer.TOSKIP = 28;
GrammarLexer.CHAR = 29;
GrammarLexer.STRING = 30;
GrammarLexer.FLOAT = 31;
GrammarLexer.BOOLEAN = 32;
GrammarLexer.IF = 33;
GrammarLexer.THEN = 34;
GrammarLexer.ELSE = 35;
GrammarLexer.FUN = 36;
GrammarLexer.ARROW = 37;
GrammarLexer.PIPE = 38;
GrammarLexer.LET = 39;
GrammarLexer.IN = 40;
GrammarLexer.REC = 41;
GrammarLexer.COLON = 42;
GrammarLexer.CONTRACT = 43;
GrammarLexer.DOUBLESEMICOLON = 44;
GrammarLexer.PRIMITIVETYPE = 45;
GrammarLexer.IDENTIFIER = 46;
// tslint:disable:no-trailing-whitespace
GrammarLexer.channelNames = [
    'DEFAULT_TOKEN_CHANNEL',
    'HIDDEN',
];
// tslint:disable:no-trailing-whitespace
GrammarLexer.modeNames = ['DEFAULT_MODE'];
GrammarLexer.ruleNames = [
    'T__0',
    'T__1',
    'T__2',
    'T__3',
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
GrammarLexer._LITERAL_NAMES = [
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
GrammarLexer._SYMBOLIC_NAMES = [
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
GrammarLexer.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(GrammarLexer._LITERAL_NAMES, GrammarLexer._SYMBOLIC_NAMES, []);
GrammarLexer._serializedATN = '\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x020\u0125\b\x01' +
    '\x04\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06' +
    '\x04\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r' +
    '\t\r\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t' +
    '\x12\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t' +
    '\x17\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t' +
    '\x1C\x04\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04"\t' +
    "\"\x04#\t#\x04$\t$\x04%\t%\x04&\t&\x04'\t'\x04(\t(\x04)\t)\x04*\t*\x04" +
    '+\t+\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x03\x02\x03\x02\x03\x03\x03\x03\x03' +
    '\x04\x03\x04\x03\x05\x03\x05\x03\x06\x03\x06\x03\x06\x03\x07\x03\x07\x03' +
    '\b\x03\b\x03\t\x03\t\x03\n\x03\n\x03\v\x03\v\x03\v\x03\v\x03\f\x03\f\x03' +
    '\f\x03\r\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x0F\x03' +
    '\x10\x03\x10\x03\x11\x03\x11\x03\x11\x03\x12\x03\x12\x03\x13\x03\x13\x03' +
    '\x13\x03\x14\x03\x14\x03\x15\x03\x15\x03\x15\x03\x16\x03\x16\x03\x16\x03' +
    '\x17\x03\x17\x03\x17\x03\x18\x03\x18\x03\x19\x03\x19\x03\x19\x03\x1A\x03' +
    '\x1A\x03\x1A\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1C\x06\x1C\xA5\n\x1C' +
    '\r\x1C\x0E\x1C\xA6\x03\x1D\x06\x1D\xAA\n\x1D\r\x1D\x0E\x1D\xAB\x03\x1D' +
    '\x03\x1D\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1F\x03\x1F\x07\x1F\xB6\n' +
    '\x1F\f\x1F\x0E\x1F\xB9\v\x1F\x03\x1F\x03\x1F\x03 \x06 \xBE\n \r \x0E ' +
    '\xBF\x03 \x03 \x07 \xC4\n \f \x0E \xC7\v \x03!\x03!\x03!\x03!\x03!\x03' +
    '!\x03!\x03!\x03!\x05!\xD2\n!\x03"\x03"\x03"\x03#\x03#\x03#\x03#\x03' +
    "#\x03$\x03$\x03$\x03$\x03$\x03%\x03%\x03%\x03%\x03&\x03&\x03&\x03'\x03" +
    "'\x03(\x03(\x03(\x03(\x03)\x03)\x03)\x03*\x03*\x03*\x03*\x03+\x03+\x03" +
    ',\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03-\x03-\x03-\x03.\x03.\x03' +
    '.\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x03' +
    '.\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x05.\u011D\n.\x03/\x03' +
    '/\x07/\u0121\n/\f/\x0E/\u0124\v/\x02\x02\x020\x03\x02\x03\x05\x02\x04' +
    '\x07\x02\x05\t\x02\x06\v\x02\x07\r\x02\b\x0F\x02\t\x11\x02\n\x13\x02\v' +
    '\x15\x02\f\x17\x02\r\x19\x02\x0E\x1B\x02\x0F\x1D\x02\x10\x1F\x02\x11!' +
    "\x02\x12#\x02\x13%\x02\x14'\x02\x15)\x02\x16+\x02\x17-\x02\x18/\x02\x19" +
    '1\x02\x1A3\x02\x1B5\x02\x1C7\x02\x1D9\x02\x1E;\x02\x1F=\x02 ?\x02!A\x02' +
    '"C\x02#E\x02$G\x02%I\x02&K\x02\'M\x02(O\x02)Q\x02*S\x02+U\x02,W\x02-' +
    'Y\x02.[\x02/]\x020\x03\x02\b\x03\x022;\x05\x02\v\f\x0F\x0F""\x04\x02' +
    '++__\x05\x02\f\f\x0F\x0F$$\x04\x02aac|\x06\x022;C\\aac|\x02\u0130\x02' +
    '\x03\x03\x02\x02\x02\x02\x05\x03\x02\x02\x02\x02\x07\x03\x02\x02\x02\x02' +
    '\t\x03\x02\x02\x02\x02\v\x03\x02\x02\x02\x02\r\x03\x02\x02\x02\x02\x0F' +
    '\x03\x02\x02\x02\x02\x11\x03\x02\x02\x02\x02\x13\x03\x02\x02\x02\x02\x15' +
    '\x03\x02\x02\x02\x02\x17\x03\x02\x02\x02\x02\x19\x03\x02\x02\x02\x02\x1B' +
    '\x03\x02\x02\x02\x02\x1D\x03\x02\x02\x02\x02\x1F\x03\x02\x02\x02\x02!' +
    "\x03\x02\x02\x02\x02#\x03\x02\x02\x02\x02%\x03\x02\x02\x02\x02'\x03\x02" +
    '\x02\x02\x02)\x03\x02\x02\x02\x02+\x03\x02\x02\x02\x02-\x03\x02\x02\x02' +
    '\x02/\x03\x02\x02\x02\x021\x03\x02\x02\x02\x023\x03\x02\x02\x02\x025\x03' +
    '\x02\x02\x02\x027\x03\x02\x02\x02\x029\x03\x02\x02\x02\x02;\x03\x02\x02' +
    '\x02\x02=\x03\x02\x02\x02\x02?\x03\x02\x02\x02\x02A\x03\x02\x02\x02\x02' +
    'C\x03\x02\x02\x02\x02E\x03\x02\x02\x02\x02G\x03\x02\x02\x02\x02I\x03\x02' +
    '\x02\x02\x02K\x03\x02\x02\x02\x02M\x03\x02\x02\x02\x02O\x03\x02\x02\x02' +
    '\x02Q\x03\x02\x02\x02\x02S\x03\x02\x02\x02\x02U\x03\x02\x02\x02\x02W\x03' +
    '\x02\x02\x02\x02Y\x03\x02\x02\x02\x02[\x03\x02\x02\x02\x02]\x03\x02\x02' +
    '\x02\x03_\x03\x02\x02\x02\x05a\x03\x02\x02\x02\x07c\x03\x02\x02\x02\t' +
    'e\x03\x02\x02\x02\vg\x03\x02\x02\x02\rj\x03\x02\x02\x02\x0Fl\x03\x02\x02' +
    '\x02\x11n\x03\x02\x02\x02\x13p\x03\x02\x02\x02\x15r\x03\x02\x02\x02\x17' +
    'v\x03\x02\x02\x02\x19y\x03\x02\x02\x02\x1B|\x03\x02\x02\x02\x1D\x7F\x03' +
    '\x02\x02\x02\x1F\x82\x03\x02\x02\x02!\x84\x03\x02\x02\x02#\x87\x03\x02' +
    "\x02\x02%\x89\x03\x02\x02\x02'\x8C\x03\x02\x02\x02)\x8E\x03\x02\x02\x02" +
    '+\x91\x03\x02\x02\x02-\x94\x03\x02\x02\x02/\x97\x03\x02\x02\x021\x99\x03' +
    '\x02\x02\x023\x9C\x03\x02\x02\x025\x9F\x03\x02\x02\x027\xA4\x03\x02\x02' +
    '\x029\xA9\x03\x02\x02\x02;\xAF\x03\x02\x02\x02=\xB3\x03\x02\x02\x02?\xBD' +
    '\x03\x02\x02\x02A\xD1\x03\x02\x02\x02C\xD3\x03\x02\x02\x02E\xD6\x03\x02' +
    '\x02\x02G\xDB\x03\x02\x02\x02I\xE0\x03\x02\x02\x02K\xE4\x03\x02\x02\x02' +
    'M\xE7\x03\x02\x02\x02O\xE9\x03\x02\x02\x02Q\xED\x03\x02\x02\x02S\xF0\x03' +
    '\x02\x02\x02U\xF4\x03\x02\x02\x02W\xF6\x03\x02\x02\x02Y\xFF\x03\x02\x02' +
    '\x02[\u011C\x03\x02\x02\x02]\u011E\x03\x02\x02\x02_`\x07*\x02\x02`\x04' +
    '\x03\x02\x02\x02ab\x07+\x02\x02b\x06\x03\x02\x02\x02cd\x07}\x02\x02d\b' +
    '\x03\x02\x02\x02ef\x07\x7F\x02\x02f\n\x03\x02\x02\x02gh\x07,\x02\x02h' +
    'i\x07,\x02\x02i\f\x03\x02\x02\x02jk\x07,\x02\x02k\x0E\x03\x02\x02\x02' +
    'lm\x071\x02\x02m\x10\x03\x02\x02\x02no\x07-\x02\x02o\x12\x03\x02\x02\x02' +
    'pq\x07/\x02\x02q\x14\x03\x02\x02\x02rs\x07o\x02\x02st\x07q\x02\x02tu\x07' +
    'f\x02\x02u\x16\x03\x02\x02\x02vw\x07-\x02\x02wx\x070\x02\x02x\x18\x03' +
    '\x02\x02\x02yz\x07/\x02\x02z{\x070\x02\x02{\x1A\x03\x02\x02\x02|}\x07' +
    ',\x02\x02}~\x070\x02\x02~\x1C\x03\x02\x02\x02\x7F\x80\x071\x02\x02\x80' +
    '\x81\x070\x02\x02\x81\x1E\x03\x02\x02\x02\x82\x83\x07>\x02\x02\x83 \x03' +
    '\x02\x02\x02\x84\x85\x07>\x02\x02\x85\x86\x07?\x02\x02\x86"\x03\x02\x02' +
    '\x02\x87\x88\x07@\x02\x02\x88$\x03\x02\x02\x02\x89\x8A\x07@\x02\x02\x8A' +
    '\x8B\x07?\x02\x02\x8B&\x03\x02\x02\x02\x8C\x8D\x07?\x02\x02\x8D(\x03\x02' +
    '\x02\x02\x8E\x8F\x07>\x02\x02\x8F\x90\x07@\x02\x02\x90*\x03\x02\x02\x02' +
    '\x91\x92\x07?\x02\x02\x92\x93\x07?\x02\x02\x93,\x03\x02\x02\x02\x94\x95' +
    '\x07#\x02\x02\x95\x96\x07?\x02\x02\x96.\x03\x02\x02\x02\x97\x98\x07`\x02' +
    '\x02\x980\x03\x02\x02\x02\x99\x9A\x07(\x02\x02\x9A\x9B\x07(\x02\x02\x9B' +
    '2\x03\x02\x02\x02\x9C\x9D\x07~\x02\x02\x9D\x9E\x07~\x02\x02\x9E4\x03\x02' +
    '\x02\x02\x9F\xA0\x07p\x02\x02\xA0\xA1\x07q\x02\x02\xA1\xA2\x07v\x02\x02' +
    '\xA26\x03\x02\x02\x02\xA3\xA5\t\x02\x02\x02\xA4\xA3\x03\x02\x02\x02\xA5' +
    '\xA6\x03\x02\x02\x02\xA6\xA4\x03\x02\x02\x02\xA6\xA7\x03\x02\x02\x02\xA7' +
    '8\x03\x02\x02\x02\xA8\xAA\t\x03\x02\x02\xA9\xA8\x03\x02\x02\x02\xAA\xAB' +
    '\x03\x02\x02\x02\xAB\xA9\x03\x02\x02\x02\xAB\xAC\x03\x02\x02\x02\xAC\xAD' +
    '\x03\x02\x02\x02\xAD\xAE\b\x1D\x02\x02\xAE:\x03\x02\x02\x02\xAF\xB0\x07' +
    ')\x02\x02\xB0\xB1\n\x04\x02\x02\xB1\xB2\x07)\x02\x02\xB2<\x03\x02\x02' +
    '\x02\xB3\xB7\x07$\x02\x02\xB4\xB6\n\x05\x02\x02\xB5\xB4\x03\x02\x02\x02' +
    '\xB6\xB9\x03\x02\x02\x02\xB7\xB5\x03\x02\x02\x02\xB7\xB8\x03\x02\x02\x02' +
    '\xB8\xBA\x03\x02\x02\x02\xB9\xB7\x03\x02\x02\x02\xBA\xBB\x07$\x02\x02' +
    '\xBB>\x03\x02\x02\x02\xBC\xBE\x042;\x02\xBD\xBC\x03\x02\x02\x02\xBE\xBF' +
    '\x03\x02\x02\x02\xBF\xBD\x03\x02\x02\x02\xBF\xC0\x03\x02\x02\x02\xC0\xC1' +
    '\x03\x02\x02\x02\xC1\xC5\x070\x02\x02\xC2\xC4\x042;\x02\xC3\xC2\x03\x02' +
    '\x02\x02\xC4\xC7\x03\x02\x02\x02\xC5\xC3\x03\x02\x02\x02\xC5\xC6\x03\x02' +
    '\x02\x02\xC6@\x03\x02\x02\x02\xC7\xC5\x03\x02\x02\x02\xC8\xC9\x07v\x02' +
    '\x02\xC9\xCA\x07t\x02\x02\xCA\xCB\x07w\x02\x02\xCB\xD2\x07g\x02\x02\xCC' +
    '\xCD\x07h\x02\x02\xCD\xCE\x07c\x02\x02\xCE\xCF\x07n\x02\x02\xCF\xD0\x07' +
    'u\x02\x02\xD0\xD2\x07g\x02\x02\xD1\xC8\x03\x02\x02\x02\xD1\xCC\x03\x02' +
    '\x02\x02\xD2B\x03\x02\x02\x02\xD3\xD4\x07k\x02\x02\xD4\xD5\x07h\x02\x02' +
    '\xD5D\x03\x02\x02\x02\xD6\xD7\x07v\x02\x02\xD7\xD8\x07j\x02\x02\xD8\xD9' +
    '\x07g\x02\x02\xD9\xDA\x07p\x02\x02\xDAF\x03\x02\x02\x02\xDB\xDC\x07g\x02' +
    '\x02\xDC\xDD\x07n\x02\x02\xDD\xDE\x07u\x02\x02\xDE\xDF\x07g\x02\x02\xDF' +
    'H\x03\x02\x02\x02\xE0\xE1\x07h\x02\x02\xE1\xE2\x07w\x02\x02\xE2\xE3\x07' +
    'p\x02\x02\xE3J\x03\x02\x02\x02\xE4\xE5\x07/\x02\x02\xE5\xE6\x07@\x02\x02' +
    '\xE6L\x03\x02\x02\x02\xE7\xE8\x07~\x02\x02\xE8N\x03\x02\x02\x02\xE9\xEA' +
    '\x07n\x02\x02\xEA\xEB\x07g\x02\x02\xEB\xEC\x07v\x02\x02\xECP\x03\x02\x02' +
    '\x02\xED\xEE\x07k\x02\x02\xEE\xEF\x07p\x02\x02\xEFR\x03\x02\x02\x02\xF0' +
    '\xF1\x07t\x02\x02\xF1\xF2\x07g\x02\x02\xF2\xF3\x07e\x02\x02\xF3T\x03\x02' +
    '\x02\x02\xF4\xF5\x07<\x02\x02\xF5V\x03\x02\x02\x02\xF6\xF7\x07e\x02\x02' +
    '\xF7\xF8\x07q\x02\x02\xF8\xF9\x07p\x02\x02\xF9\xFA\x07v\x02\x02\xFA\xFB' +
    '\x07t\x02\x02\xFB\xFC\x07c\x02\x02\xFC\xFD\x07e\x02\x02\xFD\xFE\x07v\x02' +
    '\x02\xFEX\x03\x02\x02\x02\xFF\u0100\x07=\x02\x02\u0100\u0101\x07=\x02' +
    '\x02\u0101Z\x03\x02\x02\x02\u0102\u0103\x07k\x02\x02\u0103\u0104\x07p' +
    '\x02\x02\u0104\u011D\x07v\x02\x02\u0105\u0106\x07h\x02\x02\u0106\u0107' +
    '\x07n\x02\x02\u0107\u0108\x07q\x02\x02\u0108\u0109\x07c\x02\x02\u0109' +
    '\u011D\x07v\x02\x02\u010A\u010B\x07e\x02\x02\u010B\u010C\x07j\x02\x02' +
    '\u010C\u010D\x07c\x02\x02\u010D\u011D\x07t\x02\x02\u010E\u010F\x07u\x02' +
    '\x02\u010F\u0110\x07v\x02\x02\u0110\u0111\x07t\x02\x02\u0111\u0112\x07' +
    'k\x02\x02\u0112\u0113\x07p\x02\x02\u0113\u011D\x07i\x02\x02\u0114\u0115' +
    '\x07d\x02\x02\u0115\u0116\x07q\x02\x02\u0116\u0117\x07q\x02\x02\u0117' +
    '\u011D\x07n\x02\x02\u0118\u0119\x07w\x02\x02\u0119\u011A\x07p\x02\x02' +
    '\u011A\u011B\x07k\x02\x02\u011B\u011D\x07v\x02\x02\u011C\u0102\x03\x02' +
    '\x02\x02\u011C\u0105\x03\x02\x02\x02\u011C\u010A\x03\x02\x02\x02\u011C' +
    '\u010E\x03\x02\x02\x02\u011C\u0114\x03\x02\x02\x02\u011C\u0118\x03\x02' +
    '\x02\x02\u011D\\\x03\x02\x02\x02\u011E\u0122\t\x06\x02\x02\u011F\u0121' +
    '\t\x07\x02\x02\u0120\u011F\x03\x02\x02\x02\u0121\u0124\x03\x02\x02\x02' +
    '\u0122\u0120\x03\x02\x02\x02\u0122\u0123\x03\x02\x02\x02\u0123^\x03\x02' +
    '\x02\x02\u0124\u0122\x03\x02\x02\x02\v\x02\xA6\xAB\xB7\xBF\xC5\xD1\u011C' +
    '\u0122\x03\b\x02\x02';
//# sourceMappingURL=GrammarLexer.js.map