"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mathDefaultFunctions = void 0;
const cbrt_1 = require("./cbrt");
const ceil_1 = require("./ceil");
const exp_1 = require("./exp");
const floor_1 = require("./floor");
const round_1 = require("./round");
const sqrt_1 = require("./sqrt");
const trigo_1 = require("./trigo");
exports.mathDefaultFunctions = Object.assign(Object.assign(Object.assign({}, exp_1.exponentDefaultFunctions), trigo_1.trigoDefaultFunctions), { sqrt: {
        value: sqrt_1.sqrt,
        type: sqrt_1.sqrt.getType(),
    }, cbrt: {
        value: cbrt_1.cbrt,
        type: cbrt_1.cbrt.getType(),
    }, ceil: {
        value: ceil_1.ceil,
        type: ceil_1.ceil.getType(),
    }, floor: {
        value: floor_1.floor,
        type: floor_1.floor.getType(),
    }, round: {
        value: round_1.round,
        type: round_1.round.getType(),
    } });
//# sourceMappingURL=index.js.map