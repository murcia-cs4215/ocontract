"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.starts_with = void 0;
const assert_1 = __importDefault(require("assert"));
const wrappers_1 = require("../../../parser/wrappers");
const utils_1 = require("../../../types/utils");
const closure_1 = require("../../closure");
// NOTE: starts_with A B checks if B starts with A.
exports.starts_with = new closure_1.DefaultClosure((0, utils_1.makeFunctionType)(utils_1.stringType, utils_1.stringType, utils_1.boolType), 2, (args) => {
    (0, assert_1.default)(args[0].value instanceof wrappers_1.StringWrapper);
    (0, assert_1.default)(args[1].value instanceof wrappers_1.StringWrapper);
    const prefix = args[0].value.unwrap();
    const str = args[1].value.unwrap();
    return { value: str.startsWith(prefix), type: utils_1.boolType };
});
//# sourceMappingURL=starts_with.js.map