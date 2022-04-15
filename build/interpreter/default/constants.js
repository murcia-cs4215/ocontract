"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.globalEnvironmentDefaultConstantTypes = exports.globalEnvironmentDefaultConstants = void 0;
const wrappers_1 = require("../../parser/wrappers");
const utils_1 = require("../../types/utils");
exports.globalEnvironmentDefaultConstants = {
    infinity: {
        value: Infinity,
        type: utils_1.floatType,
    },
    neg_infinity: {
        value: -Infinity,
        type: utils_1.floatType,
    },
    nan: {
        value: Number.NaN,
        type: utils_1.floatType,
    },
    pi: {
        value: Math.PI,
        type: utils_1.floatType,
    },
    empty: {
        value: new wrappers_1.StringWrapper(''),
        type: utils_1.stringType,
    },
};
exports.globalEnvironmentDefaultConstantTypes = Object.entries(exports.globalEnvironmentDefaultConstants).map(([key, value]) => {
    return [key, value.type];
});
//# sourceMappingURL=constants.js.map