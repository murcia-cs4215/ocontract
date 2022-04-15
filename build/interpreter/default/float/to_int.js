"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.to_int = void 0;
const utils_1 = require("../../../types/utils");
const closure_1 = require("../../closure");
exports.to_int = new closure_1.DefaultClosure((0, utils_1.makeFunctionType)(utils_1.floatType, utils_1.intType), 1, (args) => {
    if (Number.isNaN(args[0].value) ||
        args[0].value === Infinity ||
        args[0].value === -Infinity) {
        return { value: 0, type: utils_1.intType };
    }
    return { value: Math.trunc(args[0].value), type: utils_1.intType };
});
//# sourceMappingURL=to_int.js.map