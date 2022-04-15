"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.atan2 = void 0;
const utils_1 = require("../../../../../../types/utils");
const closure_1 = require("../../../../../closure");
exports.atan2 = new closure_1.DefaultClosure((0, utils_1.makeFunctionType)(utils_1.floatType, utils_1.floatType, utils_1.floatType), 2, (args) => {
    return { value: Math.atan2(args[0].value, args[1].value), type: utils_1.floatType };
});
//# sourceMappingURL=atan2.js.map