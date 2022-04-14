"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkIdentifierContract = void 0;
const environment_1 = require("../environment");
const closure_1 = require("../../interpreter/closure");
const utils_1 = require("../utils");
// Note: An identifier can have at most one contract attached to it.
// This is also why we can confidently index [0] on it.
function checkIdentifierContract(node, context, result) {
    const contract = (0, environment_1.lookupContract)(node.name, context);
    if (node.contracts.length === 0 || contract == null) {
        return;
    }
    if (node.contracts[0].contract == null) {
        node.contracts[0].contract = contract;
    }
    if (!(result.value instanceof closure_1.Closure)) {
        return;
    }
    // Check if the closure already has the current contract - if so, we don't propagate it
    if (result.value.originalNode.contracts.some((c) => c.contract === contract)) {
        return;
    }
    (0, utils_1.wrapExpressionInMonitor)(result.value.originalNode, contract, node.contracts[0].pos, node.contracts[0].neg);
}
exports.checkIdentifierContract = checkIdentifierContract;
//# sourceMappingURL=checkIdentifierContract.js.map