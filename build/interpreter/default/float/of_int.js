"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.of_int = void 0;
const utils_1 = require("../../../types/utils");
const closure_1 = require("../../closure");
exports.of_int = new closure_1.DefaultClosure((0, utils_1.makeFunctionType)(utils_1.intType, utils_1.floatType), 1, (args) => {
    return { value: args[0].value, type: utils_1.intType };
});
//# sourceMappingURL=of_int.js.map