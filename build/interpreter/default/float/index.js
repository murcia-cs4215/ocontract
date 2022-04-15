"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.floatDefaultFunctions = void 0;
const is_nan_1 = require("./is_nan");
const math_1 = require("./math");
const of_int_1 = require("./of_int");
const to_int_1 = require("./to_int");
exports.floatDefaultFunctions = Object.assign(Object.assign({}, math_1.mathDefaultFunctions), { is_nan: {
        value: is_nan_1.is_nan,
        type: is_nan_1.is_nan.getType(),
    }, of_int: {
        value: of_int_1.of_int,
        type: of_int_1.of_int.getType(),
    }, to_int: {
        value: to_int_1.to_int,
        type: to_int_1.to_int.getType(),
    } });
//# sourceMappingURL=index.js.map