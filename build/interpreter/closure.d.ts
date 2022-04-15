import { LambdaExpression } from '../parser/types';
import { FunctionType, Type } from '../types/types';
import { Context, Environment, RuntimeResult } from '../runtimeTypes';
export declare function cloneDeepWithClosure<T>(item: T): T;
export declare class Closure {
    originalNode: LambdaExpression;
    clonedEnvironments: Environment[];
    private constructor();
    static createFromLambdaExpression(node: LambdaExpression, context: Context): Closure;
    static createFromClosure(closure: Closure): Closure;
    getType(): FunctionType;
}
export declare class DefaultClosure {
    type: Type;
    numberOfArguments: number;
    args: RuntimeResult[];
    func: (args: RuntimeResult[]) => RuntimeResult;
    constructor(type: Type, numberOfArguments: number, func: (args: RuntimeResult[]) => RuntimeResult, args?: RuntimeResult[]);
    static createFromDefaultClosure(closure: DefaultClosure): DefaultClosure;
    addArg(argument: RuntimeResult): DefaultClosure;
    canCompute(): boolean;
    compute(context: Context): RuntimeResult;
    getType(): Type;
}
//# sourceMappingURL=closure.d.ts.map