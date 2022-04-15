"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.numericDefaultFunctions = void 0;
const negative_1 = require("./negative");
const positive_1 = require("./positive");
const zero_1 = require("./zero");
exports.numericDefaultFunctions = {
    positive: {
        value: positive_1.positive,
        type: positive_1.positive.getType(),
    },
    negative: {
        value: negative_1.negative,
        type: negative_1.negative.getType(),
    },
    zero: {
        value: zero_1.zero,
        type: zero_1.zero.getType(),
    },
};
//# sourceMappingURL=index.js.map