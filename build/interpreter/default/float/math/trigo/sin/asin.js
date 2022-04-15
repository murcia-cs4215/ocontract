"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.asin = void 0;
const utils_1 = require("../../../../../../types/utils");
const closure_1 = require("../../../../../closure");
exports.asin = new closure_1.DefaultClosure((0, utils_1.makeFunctionType)(utils_1.floatType, utils_1.floatType), 1, (args) => {
    return { value: Math.asin(args[0].value), type: utils_1.floatType };
});
//# sourceMappingURL=asin.js.map