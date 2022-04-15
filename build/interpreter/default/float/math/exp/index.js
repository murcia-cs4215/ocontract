"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.exponentDefaultFunctions = void 0;
const exp_1 = require("./exp");
const exp2_1 = require("./exp2");
const expm1_1 = require("./expm1");
const log_1 = require("./log");
const log1p_1 = require("./log1p");
const log2_1 = require("./log2");
const log10_1 = require("./log10");
exports.exponentDefaultFunctions = {
    exp: {
        value: exp_1.exp,
        type: exp_1.exp.getType(),
    },
    exp2: {
        value: exp2_1.exp2,
        type: exp2_1.exp2.getType(),
    },
    expm1: {
        value: expm1_1.expm1,
        type: expm1_1.expm1.getType(),
    },
    log: {
        value: log_1.log,
        type: log_1.log.getType(),
    },
    log1p: {
        value: log1p_1.log1p,
        type: log1p_1.log1p.getType(),
    },
    log2: {
        value: log2_1.log2,
        type: log2_1.log2.getType(),
    },
    log10: {
        value: log10_1.log10,
        type: log10_1.log10.getType(),
    },
};
//# sourceMappingURL=index.js.map