"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.get = void 0;
const assert_1 = __importDefault(require("assert"));
const wrappers_1 = require("../../../parser/wrappers");
const utils_1 = require("../../../types/utils");
const closure_1 = require("../../closure");
// TODO: Guard against index out of bounds
exports.get = new closure_1.DefaultClosure((0, utils_1.makeFunctionType)(utils_1.stringType, utils_1.intType, utils_1.charType), 2, (args) => {
    (0, assert_1.default)(args[0].value instanceof wrappers_1.StringWrapper);
    const str = args[0].value.unwrap();
    const index = args[1].value;
    return { value: str.charAt(index), type: utils_1.charType };
});
//# sourceMappingURL=get.js.map