"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.anyFunction = void 0;
const utils_1 = require("../../types/utils");
const closure_1 = require("../closure");
exports.anyFunction = new closure_1.DefaultClosure((0, utils_1.makeFunctionType)(utils_1.anyType, utils_1.boolType), 1, (_args) => {
    return { value: true, type: utils_1.boolType };
});
//# sourceMappingURL=any.js.map