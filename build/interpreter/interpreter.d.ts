import { Node } from '../parser/types';
import { Context, RuntimeResult } from '../runtimeTypes';
import { Closure, DefaultClosure } from './closure';
export declare function evaluate(node: Node, context: Context): RuntimeResult;
export declare function apply(closure: Closure | DefaultClosure, arg: RuntimeResult, context: Context): RuntimeResult;
//# sourceMappingURL=interpreter.d.ts.map