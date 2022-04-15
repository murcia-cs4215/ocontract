"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.round = void 0;
const utils_1 = require("../../../../types/utils");
const closure_1 = require("../../../closure");
exports.round = new closure_1.DefaultClosure((0, utils_1.makeFunctionType)(utils_1.floatType, utils_1.floatType), 1, (args) => {
    if (Number.isNaN(args[0].value) ||
        args[0].value === Infinity ||
        args[0].value === -Infinity) {
        return args[0].value;
    }
    return { value: Math.round(args[0].value), type: utils_1.floatType };
});
//# sourceMappingURL=round.js.map