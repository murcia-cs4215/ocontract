"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.make = void 0;
const wrappers_1 = require("../../../parser/wrappers");
const utils_1 = require("../../../types/utils");
const closure_1 = require("../../closure");
// TODO: Guard against index out of bounds
exports.make = new closure_1.DefaultClosure((0, utils_1.makeFunctionType)(utils_1.intType, utils_1.charType, utils_1.stringType), 2, (args) => {
    const length = args[0].value;
    const char = args[1].value;
    return { value: new wrappers_1.StringWrapper(char.repeat(length)), type: utils_1.stringType };
});
//# sourceMappingURL=make.js.map