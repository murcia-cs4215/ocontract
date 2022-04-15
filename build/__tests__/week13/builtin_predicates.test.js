"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../../types/utils");
const tests_1 = require("../../utils/tests");
test('positive with int', () => {
    let res = (0, tests_1.runTest)('positive 10;;');
    expect(res).toEqual({
        status: 'finished',
        value: true,
        type: utils_1.boolType,
    });
    res = (0, tests_1.runTest)('positive (-10);;');
    expect(res).toEqual({
        status: 'finished',
        value: false,
        type: utils_1.boolType,
    });
});
test('positive with float', () => {
    let res = (0, tests_1.runTest)('positive 5.4;;');
    expect(res).toEqual({
        status: 'finished',
        value: true,
        type: utils_1.boolType,
    });
    res = (0, tests_1.runTest)('positive (-5.4);;');
    expect(res).toEqual({
        status: 'finished',
        value: false,
        type: utils_1.boolType,
    });
});
test('negative with int', () => {
    let res = (0, tests_1.runTest)('negative 10;;');
    expect(res).toEqual({
        status: 'finished',
        value: false,
        type: utils_1.boolType,
    });
    res = (0, tests_1.runTest)('negative (-10);;');
    expect(res).toEqual({
        status: 'finished',
        value: true,
        type: utils_1.boolType,
    });
});
test('negative with float', () => {
    let res = (0, tests_1.runTest)('negative 5.4;;');
    expect(res).toEqual({
        status: 'finished',
        value: false,
        type: utils_1.boolType,
    });
    res = (0, tests_1.runTest)('negative (-5.4);;');
    expect(res).toEqual({
        status: 'finished',
        value: true,
        type: utils_1.boolType,
    });
});
test('zero with int', () => {
    let res = (0, tests_1.runTest)('zero 0;;');
    expect(res).toEqual({
        status: 'finished',
        value: true,
        type: utils_1.boolType,
    });
    res = (0, tests_1.runTest)('zero 1;;');
    expect(res).toEqual({
        status: 'finished',
        value: false,
        type: utils_1.boolType,
    });
});
test('zero with float', () => {
    let res = (0, tests_1.runTest)('zero 0.;;');
    expect(res).toEqual({
        status: 'finished',
        value: true,
        type: utils_1.boolType,
    });
    res = (0, tests_1.runTest)('zero 1.;;');
    expect(res).toEqual({
        status: 'finished',
        value: false,
        type: utils_1.boolType,
    });
});
const testValues = {
    int: '1',
    float: '1.',
    char: "'a'",
    string: '"hello"',
    bool: 'true',
};
Object.entries(testValues).forEach(([type, value]) => {
    test(`any with ${type}`, () => {
        const res = (0, tests_1.runTest)(`any ${value};;`);
        expect(res).toEqual({
            status: 'finished',
            value: true,
            type: utils_1.boolType,
        });
    });
});
//# sourceMappingURL=builtin_predicates.test.js.map