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

export type Statement = ExpressionStatement;

export type Expression =
  | Literal
  | UnaryExpression
  | BinaryExpression
  | LogicalExpression
  | SequenceExpression
  | ConditionalExpression
  | EmptyExpression;

export interface Program extends BaseNode {
  type: 'Program';
  body: Array<Statement>;
}

export type Node = Program | Statement | Expression | Literal;

/**
 * STATEMENT TYPES
 */

type BaseStatement = BaseNode;

export interface ExpressionStatement extends BaseStatement {
  type: 'ExpressionStatement';
  expression: Expression;
}

/**
 * PRIMITIVE LITERAL TYPES
 */

interface BaseLiteral extends BaseNode {
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

export type AssignmentOperator = '=';

export type BaseExpression = BaseNode;

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

export interface ConditionalExpression extends BaseExpression {
  type: 'ConditionalExpression';
  test: Expression;
  consequent: Expression;
  alternate: Expression;
}

export interface EmptyExpression extends BaseExpression {
  type: 'EmptyExpression';
}

/**
 * OTHER EXPRESSIONS
 */

export interface SequenceExpression extends BaseExpression {
  type: 'SequenceExpression';
  expressions: Array<Expression>;
}
