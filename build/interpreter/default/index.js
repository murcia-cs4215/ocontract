"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.globalEnvironmentDefaultFunctionTypes = exports.globalEnvironmentDefaultFunctions = void 0;
const any_1 = require("./any");
const float_1 = require("./float");
const numeric_1 = require("./numeric");
const string_1 = require("./string");
const to_string_1 = require("./to_string");
exports.globalEnvironmentDefaultFunctions = Object.assign(Object.assign(Object.assign(Object.assign({}, float_1.floatDefaultFunctions), numeric_1.numericDefaultFunctions), string_1.stringDefaultFunctions), { any: {
        value: any_1.anyFunction,
        type: any_1.anyFunction.getType(),
    }, to_string: {
        value: to_string_1.to_string,
        type: to_string_1.to_string.getType(),
    } });
exports.globalEnvironmentDefaultFunctionTypes = Object.entries(exports.globalEnvironmentDefaultFunctions).map(([key, value]) => {
    return [key, value.type];
});
//# sourceMappingURL=index.js.map