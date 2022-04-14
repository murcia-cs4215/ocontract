"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.wrapExpressionInFirstLevelMonitor = exports.wrapExpressionInMonitor = void 0;
function wrapExpressionInMonitor(exp, contract, pos, neg) {
    if (exp.contracts.length === 0) {
        exp.contracts.push({
            contract,
            pos,
            neg,
        });
        return;
    }
    if (exp.contracts[0].contract == null) {
        exp.contracts[0].contract = contract;
        exp.contracts[0].pos = pos;
        exp.contracts[0].neg = neg;
        return;
    }
    exp.contracts = [
        {
            contract,
            pos,
            neg,
        },
        ...exp.contracts,
    ];
}
exports.wrapExpressionInMonitor = wrapExpressionInMonitor;
function wrapExpressionInFirstLevelMonitor(exp, pos, neg) {
    if (exp.contracts.length > 0) {
        exp.contracts[0].pos = pos;
        exp.contracts[0].neg = neg;
        return;
    }
    exp.contracts.push({
        pos,
        neg,
    });
}
exports.wrapExpressionInFirstLevelMonitor = wrapExpressionInFirstLevelMonitor;
//# sourceMappingURL=utils.js.map