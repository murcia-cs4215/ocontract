"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.negative = void 0;
const utils_1 = require("../../../types/utils");
const closure_1 = require("../../closure");
exports.negative = new closure_1.DefaultClosure((0, utils_1.makeFunctionType)(utils_1.numericType, utils_1.boolType), 1, (args) => {
    return { value: args[0].value < 0, type: utils_1.boolType };
});
//# sourceMappingURL=negative.js.map