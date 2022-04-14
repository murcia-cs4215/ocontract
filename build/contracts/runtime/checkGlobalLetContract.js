"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkGlobalLetContract = void 0;
const assert_1 = __importDefault(require("assert"));
const environment_1 = require("../environment");
const utils_1 = require("./utils");
/**
 * Should only be called when the global let binding is working with
 * non-functions. This function will do a flat contract check.
 */
function checkGlobalLetContract(node, context, result) {
    const contract = (0, environment_1.lookupContract)(node.left.name, context);
    if (contract == null || contract.type !== 'FlatContract') {
        return;
    }
    (0, assert_1.default)(node.left.contracts.length > 0);
    (0, utils_1.checkFlatContract)(node, result, contract, context, node.left.contracts[0].neg);
}
exports.checkGlobalLetContract = checkGlobalLetContract;
//# sourceMappingURL=checkGlobalLetContract.js.map