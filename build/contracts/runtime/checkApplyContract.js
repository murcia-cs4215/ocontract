"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkReturnValueContract = exports.checkArgumentContract = void 0;
const utils_1 = require("../../types/utils");
const utils_2 = require("../utils");
const utils_3 = require("./utils");
function checkArgumentContract(closure, arg, // Should be cloned
context) {
    if ((0, utils_3.verifyContractExists)(closure.originalNode)) {
        for (let i = 0; i < closure.originalNode.contracts.length; i += 1) {
            const contractDetails = closure.originalNode.contracts[i];
            if (contractDetails.contract == null) {
                return;
            }
            const contract = contractDetails.contract;
            if ((0, utils_1.isPrimitiveType)(arg.type)) {
                (0, utils_3.checkFlatContract)(closure.originalNode, arg, contract.parameterContract, context, contractDetails.neg);
            }
            else {
                // higher order function
                (0, utils_2.wrapExpressionInMonitor)(arg.value.originalNode, contract.parameterContract, contractDetails.neg, contractDetails.pos);
            }
        }
    }
}
exports.checkArgumentContract = checkArgumentContract;
function checkReturnValueContract(closure, result, context) {
    if ((0, utils_3.verifyContractExists)(closure.originalNode)) {
        for (let i = 0; i < closure.originalNode.contracts.length; i += 1) {
            const contractDetails = closure.originalNode.contracts[i];
            if (contractDetails.contract == null) {
                return;
            }
            const contract = contractDetails.contract;
            if ((0, utils_1.isPrimitiveType)(result.type)) {
                (0, utils_3.checkFlatContract)(closure.originalNode, result, contract.returnContract, context, contractDetails.pos);
            }
            else {
                (0, utils_2.wrapExpressionInMonitor)(result.value.originalNode, contract.returnContract, contractDetails.pos, contractDetails.neg);
            }
        }
    }
}
exports.checkReturnValueContract = checkReturnValueContract;
//# sourceMappingURL=checkApplyContract.js.map