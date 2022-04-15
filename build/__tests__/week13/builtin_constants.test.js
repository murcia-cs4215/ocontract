"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../../types/utils");
const tests_1 = require("../../utils/tests");
test('infinity', () => {
    const res = (0, tests_1.runTest)('infinity;;');
    expect(res).toEqual({
        status: 'finished',
        value: Infinity,
        type: utils_1.floatType,
    });
});
test('neg_infinity', () => {
    const res = (0, tests_1.runTest)('neg_infinity;;');
    expect(res).toEqual({
        status: 'finished',
        value: -Infinity,
        type: utils_1.floatType,
    });
});
test('nan', () => {
    const res = (0, tests_1.runTest)('nan;;');
    expect(res).toEqual({
        status: 'finished',
        value: Number.NaN,
        type: utils_1.floatType,
    });
});
test('pi', () => {
    const res = (0, tests_1.runTest)('pi;;');
    expect(res).toEqual({
        status: 'finished',
        value: Math.PI,
        type: utils_1.floatType,
    });
});
test('empty', () => {
    const res = (0, tests_1.runTest)('empty;;');
    (0, tests_1.expectString)(res, '');
});
//# sourceMappingURL=builtin_constants.test.js.map