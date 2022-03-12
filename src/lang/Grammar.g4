grammar Grammar;

/*
 * Tokens (terminal)
 */
POW: '**';
MUL: '*';
DIV: '/';
ADD: '+';
SUB: '-';
MOD: 'mod';
ADDFLOAT: '+.';
SUBFLOAT: '-.';
MULFLOAT: '*.';
DIVFLOAT: '/.';
LESSTHAN: '<';
LESSTHANOREQUAL: '<=';
GREATERTHAN: '>';
GREATERTHANOREQUAL: '>=';
EQUALSTRUC: '=';
NOTEQUALSTRUC: '<>';
EQUALPHYS: '==';
NOTEQUALPHYS: '!=';
CONCAT: '^';
AND: '&&';
OR: '||';
NOT: 'not';

NUMBER: [0-9]+;
TOSKIP: [ \r\n\t]+ -> skip;
CHAR: '\'' ~[\])] '\'';
STRING: '"' ~[\r\n"]* '"';
FLOAT: ('0'..'9')+ '.' ('0'..'9')*;
BOOLEAN: 'true' | 'false';

IF: 'if';
THEN: 'then';
ELSE: 'else';
FUN: 'fun';
ARROW: '->';
PIPE: '|';
LET: 'let';
IN: 'in';
REC: 'rec';
COLON: ':';
CONTRACT: 'contract';

// LISTSTART: '[';
// LISTEND: ']';
DOUBLESEMICOLON: ';;';

PRIMITIVETYPE
   : 'int'
   | 'float'
   | 'char'
   | 'string'
   | 'bool'
   | 'unit'
   ;

type
   : PRIMITIVETYPE                                                   # PrimType
   | '(' type ')'                                                    # ParenType
   | type (ARROW type)+                                              # FunType
   ;

// pattern matching related tokens
// MATCH: 'match';
// WITH: 'with';

// match the last
IDENTIFIER: [a-z_] [a-zA-Z0-9_]*;

atom
   : NUMBER                                                          # Number
   | FLOAT                                                           # Float
   | BOOLEAN                                                         # Boolean
   | CHAR                                                            # Char
   | STRING                                                          # String
   ;
/*
 * Productions
 */
start : (statement DOUBLESEMICOLON)* EOF;

statement
   : expression
   | letGlobalBinding
   | contractDeclaration
   ;

// TODO: how to define letGlobalBinding as not an expression so that (let x = 1) + 1 and let x = let y = 1 will not pass the parser

// TODO: add support let parser trim leading and trailing whitespaces so that it does not return console error when parsing
expression
   // : patternMatching # PatternMatchingExpression
   // | arrowFunction   # ArrowFunctionExpression 
   // | arg=expression  PIPE  caller=expression    #PipedCallExpression
   // | LISTSTART listContent  LISTEND                       # ListDeclaration
   : atom                                                            # AtomExpression
   | identifier                                                      # IdentifierExpression
   | parenthesesExpression                                           # Parentheses
   | <assoc=right> left=expression  operator=POW  right=expression   # Power
   | left=expression  operator=MUL  right=expression                 # Multiplication
   | left=expression  operator=DIV  right=expression                 # Division
   | left=expression  operator=MULFLOAT  right=expression            # MultiplicationFloat
   | left=expression  operator=DIVFLOAT  right=expression            # DivisionFloat
   | left=expression  operator=MOD right=expression                  # Modulus
   | left=expression  operator=ADD  right=expression                 # Addition
   | left=expression  operator=SUB  right=expression                 # Subtraction
   | left=expression  operator=ADDFLOAT  right=expression            # AdditionFloat
   | left=expression  operator=SUBFLOAT  right=expression            # SubtractionFloat
   | left=expression  operator=LESSTHAN  right=expression            # LessThan
   | left=expression  operator=LESSTHANOREQUAL  right=expression     # LessThanOrEqual
   | left=expression  operator=GREATERTHAN  right=expression         # GreaterThan
   | left=expression  operator=GREATERTHANOREQUAL  right=expression  # GreaterThanOrEqual
   | left=expression  operator=EQUALSTRUC  right=expression          # EqualStructural
   | left=expression  operator=NOTEQUALSTRUC  right=expression       # NotEqualStructural
   | left=expression  operator=EQUALPHYS  right=expression           # EqualPhysical
   | left=expression  operator=NOTEQUALPHYS  right=expression        # NotEqualPhysical
   | left=expression  operator=CONCAT  right=expression              # Concatenation
   | operator=SUB  argument=expression                               # Negative
   | operator=NOT  argument=expression                               # Not
   | left=expression  operator=AND  right=expression                 # And
   | left=expression  operator=OR  right=expression                  # Or
   | condExp                                                         # ConditionalExpression
   | letLocalBinding                                                 # LetLocalBindingExpression
   | lambda                                                          # LambdaExpression
   | funcApplication                                                 # CallFunction
   // | expression  '::'  expression ( '::'  expression)*  #DeconstructionExpression
   ;

typeAnnotation
   : COLON type
   ;

contractExpression // need to write a helper method to properly form the correct contract
   : expression
   | '{' identifier PIPE expression '}'
   | contractExpression ARROW contractExpression
   | '(' contractExpression ')'
   ;

contractsList
   : contractExpression (ARROW contractExpression)+
   ;

contractDeclaration
   : CONTRACT identifier EQUALSTRUC contractsList 
   ;

identifierWithContextParen // enforce having parenthesis to disambiguate
   :  '(' identifierWithContext ')'
   ;

identifierWithContext
   : identifier (typeAnnotation?)
   ;

condExp
   :  IF  test=expression  THEN  consequent=expression  ELSE  alternate=expression 
   ;

parenthesesExpression
   :  '('  inner=expression  ')'  
   ;

funcArgument
   :  atom
   |  identifier
   |  parenthesesExpression
   ; 

identifier: IDENTIFIER;

identifierListWithContext
 	:  ( identifier | identifierWithContextParen)+
   ;

identifierList
   :  ( identifier)+
   ;

funcApplyArgumentList
   : funcArgument ( funcArgument)*
   ;

funcApplication
   : func=identifier  args=funcApplyArgumentList
   | '(' lambdaFunc=lambda ')'  args=funcApplyArgumentList
   ;

lambda
   :  FUN  (params=identifierList) ARROW  body=expression 
   ;

letGlobalBinding
	: LET (REC?) id=identifier (params=identifierListWithContext?) (idType=typeAnnotation?) EQUALSTRUC  init=expression
   ;

letLocalBinding
   : letGlobalBinding IN  exp2=expression
   ;

// listElement
//    :  value=expression  SEMICOLON
//    ;

// listContent
//    : listElement*
//    ;

// patternMatching
//    : MATCH  subject=expression  WITH patternBranch+
//    ;

// patternBranch
//    :  '|'  pattern=expression  ARROW  result=expression 
//    ;
