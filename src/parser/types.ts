/**
 * GENERAL TYPES
 */

import { StringWrapper } from './wrappers';

export interface Position {
  /** >= 1 */
  line: number;
  /** >= 0 */
  column: number;
}

export interface SourceLocation {
  source?: string | null;
  start: Position;
  end: Position;
}

interface BaseNode {
  type: string;
  loc?: SourceLocation;
}

export interface Program extends BaseNode {
  type: 'Program';
  body: Array<Statement>;
}

export type Statement =
  | ExpressionStatement
  | GlobalLetStatement
  | ContractDeclarationStatement
  | EmptyStatement;

export type Expression =
  | Literal
  | Identifier
  | UnaryExpression
  | BinaryExpression
  | LogicalExpression
  | ConditionalExpression
  | LocalLetExpression
  | LambdaExpression
  | CallExpression
  | EmptyExpression;

export type Node = Program | Statement | Expression | ContractExpression;

/**
 * STATEMENT TYPES
 */

type BaseStatement = BaseNode;

export interface ExpressionStatement extends BaseStatement {
  type: 'ExpressionStatement';
  expression: Expression;
}

export interface GlobalLetStatement extends BaseStatement {
  type: 'GlobalLetStatement';
  recursive: boolean;
  left: Identifier;
  params: Array<Identifier>;
  right: Expression;
}

export interface ContractDeclarationStatement extends BaseStatement {
  type: 'ContractDeclarationStatement';
  id: Identifier;
  contract: ContractExpression;
}

export interface EmptyStatement extends BaseStatement {
  type: 'EmptyStatement';
}

/**
 * PRIMITIVE LITERAL TYPES
 */

interface BaseLiteral extends BaseNode, BaseContractMonitor {
  type: 'Literal';
  valueType: string;
}

export interface Integer extends BaseLiteral {
  valueType: 'int';
  value: number;
}

export interface Float extends BaseLiteral {
  valueType: 'float';
  value: number;
}

// Cannot name this as String due to name conflict
export interface Str extends BaseLiteral {
  valueType: 'string';
  value: StringWrapper;
}

export interface Character extends BaseLiteral {
  valueType: 'char';
  value: string;
}

// Cannot name this as Boolean due to name conflict
export interface Bool extends BaseLiteral {
  valueType: 'bool';
  value: boolean;
}

export type Literal = Integer | Float | Str | Character | Bool;

/**
 * PRIMITIVE OPERATIONS
 */
export type UnaryOperator = '-' | 'not';

export type BinaryOperator =
  | '**'
  | '*'
  | '/'
  | '+'
  | '-'
  | 'mod'
  | '+.'
  | '-.'
  | '*.'
  | '/.'
  | '<'
  | '<='
  | '>'
  | '>='
  | '='
  | '<>'
  | '=='
  | '!='
  | '^';

export type LogicalOperator = '||' | '&&';

export type BaseExpression = BaseNode & BaseContractMonitor;

export interface UnaryExpression extends BaseExpression {
  type: 'UnaryExpression';
  operator: UnaryOperator;
  argument: Expression;
}

export interface BinaryExpression extends BaseExpression {
  type: 'BinaryExpression';
  operator: BinaryOperator;
  left: Expression;
  right: Expression;
}

export interface LogicalExpression extends BaseExpression {
  type: 'LogicalExpression';
  operator: LogicalOperator;
  left: Expression;
  right: Expression;
}

/**
 * BINDINGS
 */

export interface LocalLetExpression extends BaseExpression {
  type: 'LocalLetExpression';
  left: GlobalLetStatement;
  right: Expression;
}

/**
 * OTHER EXPRESSIONS
 */

export interface ConditionalExpression extends BaseExpression {
  type: 'ConditionalExpression';
  test: Expression;
  consequent: Expression;
  alternate: Expression;
}

export interface EmptyExpression extends BaseExpression {
  type: 'EmptyExpression';
}

// Identifier is also a node in itself
export interface Identifier extends BaseExpression {
  type: 'Identifier';
  name: string;
}

/**
 * FUNCTIONS
 */

interface BaseFunction extends BaseNode {
  params: Array<Identifier>;
  body: Expression;
}

export interface LambdaExpression extends BaseFunction, BaseExpression {
  type: 'LambdaExpression';
}

interface BaseCallExpression extends BaseExpression {
  callee: Expression;
  arguments: Array<Expression>;
}

export interface CallExpression extends BaseCallExpression {
  type: 'CallExpression';
}

/**
 * CONTRACTS
 */

interface BaseContractMonitor {
  contract?: ContractType;
  pos?: string;
  neg?: string;
}

export type ContractType =
  | FlatContractExpression
  | Array<ContractType>
  | EmptyContractExpression;

export interface ContractExpression extends BaseNode {
  type: 'ContractExpression';
  contract: Array<ContractType>;
}

export interface FlatContractExpression extends BaseNode {
  type: 'FlatContractExpression';
  contract: Expression;
}

export interface EmptyContractExpression extends BaseNode {
  type: 'EmptyContractExpression';
}
