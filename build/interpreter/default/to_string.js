"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.to_string = void 0;
const wrappers_1 = require("../../parser/wrappers");
const utils_1 = require("../../types/utils");
const closure_1 = require("../closure");
exports.to_string = new closure_1.DefaultClosure((0, utils_1.makeFunctionType)(utils_1.anyType, utils_1.stringType), 1, (args) => {
    const value = args[0].value;
    if (value instanceof wrappers_1.StringWrapper) {
        return args[0];
    }
    return { value: new wrappers_1.StringWrapper(value.toString()), type: utils_1.stringType };
});
//# sourceMappingURL=to_string.js.map