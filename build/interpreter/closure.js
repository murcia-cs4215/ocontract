"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DefaultClosure = exports.Closure = exports.cloneDeepWithClosure = void 0;
const assert_1 = __importDefault(require("assert"));
const lodash_clonedeep_1 = __importDefault(require("lodash.clonedeep"));
const errors_1 = require("./errors");
function cloneDeepWithClosure(item) {
    if (Array.isArray(item)) {
        return item.map((i) => cloneDeepWithClosure(i));
    }
    if (item == null) {
        return item;
    }
    if (item instanceof Closure) {
        return Closure.createFromClosure(item);
    }
    if (item instanceof DefaultClosure) {
        return DefaultClosure.createFromDefaultClosure(item);
    }
    if (typeof item === 'object') {
        const result = {};
        for (const [key, value] of Object.entries(item)) {
            result[key] = cloneDeepWithClosure(value);
        }
        return result;
    }
    return (0, lodash_clonedeep_1.default)(item);
}
exports.cloneDeepWithClosure = cloneDeepWithClosure;
class Closure {
    constructor(node, environments) {
        this.originalNode = node;
        this.clonedEnvironments = environments;
    }
    static createFromLambdaExpression(node, context) {
        return new Closure(node, cloneDeepWithClosure(context.runtime.environments));
    }
    static createFromClosure(closure) {
        return new Closure(closure.originalNode, closure.clonedEnvironments);
    }
    getType() {
        return this.originalNode.typeDeclaration;
    }
}
exports.Closure = Closure;
// Default in-built functions, must be standalone functions that work solely with
// the provided arguments. Will not support contracts on these functions.
class DefaultClosure {
    constructor(type, numberOfArguments, func, args = []) {
        this.type = type;
        this.numberOfArguments = numberOfArguments;
        this.func = func;
        this.args = args;
    }
    static createFromDefaultClosure(closure) {
        return new DefaultClosure(closure.type, closure.numberOfArguments, closure.func, closure.args);
    }
    // Assumes that the argument type and argument length has been checked before.
    addArg(argument) {
        (0, assert_1.default)(this.args.length < this.numberOfArguments);
        const newArgs = [...this.args, argument];
        const newType = this.type.returnType;
        return new DefaultClosure(newType, this.numberOfArguments, this.func, newArgs);
    }
    canCompute() {
        return this.args.length === this.numberOfArguments;
    }
    compute(context) {
        if (this.args.length !== this.numberOfArguments) {
            return (0, errors_1.handleRuntimeError)(context, new errors_1.InterpreterError(context.runtime.nodes[0]));
        }
        return this.func(this.args);
    }
    getType() {
        return this.type;
    }
}
exports.DefaultClosure = DefaultClosure;
//# sourceMappingURL=closure.js.map