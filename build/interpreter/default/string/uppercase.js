"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.uppercase = void 0;
const assert_1 = __importDefault(require("assert"));
const wrappers_1 = require("../../../parser/wrappers");
const utils_1 = require("../../../types/utils");
const closure_1 = require("../../closure");
exports.uppercase = new closure_1.DefaultClosure((0, utils_1.makeFunctionType)(utils_1.stringType, utils_1.stringType), 1, (args) => {
    (0, assert_1.default)(args[0].value instanceof wrappers_1.StringWrapper);
    const value = args[0].value.unwrap();
    return {
        value: new wrappers_1.StringWrapper(value.toLocaleUpperCase()),
        type: utils_1.stringType,
    };
});
//# sourceMappingURL=uppercase.js.map