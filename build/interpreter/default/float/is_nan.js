"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.is_nan = void 0;
const utils_1 = require("../../../types/utils");
const closure_1 = require("../../closure");
exports.is_nan = new closure_1.DefaultClosure((0, utils_1.makeFunctionType)(utils_1.floatType, utils_1.boolType), 1, (args) => {
    return { value: Number.isNaN(args[0].value), type: utils_1.boolType };
});
//# sourceMappingURL=is_nan.js.map