"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.trigoDefaultFunctions = void 0;
const acos_1 = require("./cos/acos");
const acosh_1 = require("./cos/acosh");
const cos_1 = require("./cos/cos");
const cosh_1 = require("./cos/cosh");
const asin_1 = require("./sin/asin");
const asinh_1 = require("./sin/asinh");
const sin_1 = require("./sin/sin");
const sinh_1 = require("./sin/sinh");
const atan_1 = require("./tan/atan");
const atan2_1 = require("./tan/atan2");
const atanh_1 = require("./tan/atanh");
const tan_1 = require("./tan/tan");
const tanh_1 = require("./tan/tanh");
const hypot_1 = require("./hypot");
exports.trigoDefaultFunctions = {
    // cos functions
    acos: {
        value: acos_1.acos,
        type: acos_1.acos.getType(),
    },
    acosh: {
        value: acosh_1.acosh,
        type: acosh_1.acosh.getType(),
    },
    cos: {
        value: cos_1.cos,
        type: cos_1.cos.getType(),
    },
    cosh: {
        value: cosh_1.cosh,
        type: cosh_1.cosh.getType(),
    },
    // sin functions
    asin: {
        value: asin_1.asin,
        type: asin_1.asin.getType(),
    },
    asinh: {
        value: asinh_1.asinh,
        type: asinh_1.asinh.getType(),
    },
    sin: {
        value: sin_1.sin,
        type: sin_1.sin.getType(),
    },
    sinh: {
        value: sinh_1.sinh,
        type: sinh_1.sinh.getType(),
    },
    // tan functions
    atan: {
        value: atan_1.atan,
        type: atan_1.atan.getType(),
    },
    atan2: {
        value: atan2_1.atan2,
        type: atan2_1.atan2.getType(),
    },
    atanh: {
        value: atanh_1.atanh,
        type: atanh_1.atanh.getType(),
    },
    tan: {
        value: tan_1.tan,
        type: tan_1.tan.getType(),
    },
    tanh: {
        value: tanh_1.tanh,
        type: tanh_1.tanh.getType(),
    },
    // General
    hypot: {
        value: hypot_1.hypot,
        type: hypot_1.hypot.getType(),
    },
};
//# sourceMappingURL=index.js.map