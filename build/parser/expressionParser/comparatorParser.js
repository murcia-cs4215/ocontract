"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseComparator = void 0;
const utils_1 = require("../utils");
const parseComparator = (BaseClass) => {
    const DerivedClass = class extends BaseClass {
        visitLessThan(ctx) {
            return {
                type: 'BinaryExpression',
                operator: '<',
                left: this.visit(ctx._left),
                right: this.visit(ctx._right),
                loc: (0, utils_1.contextToLocation)(ctx),
                contracts: [],
            };
        }
        visitLessThanOrEqual(ctx) {
            return {
                type: 'BinaryExpression',
                operator: '<=',
                left: this.visit(ctx._left),
                right: this.visit(ctx._right),
                loc: (0, utils_1.contextToLocation)(ctx),
                contracts: [],
            };
        }
        visitGreaterThan(ctx) {
            return {
                type: 'BinaryExpression',
                operator: '>',
                left: this.visit(ctx._left),
                right: this.visit(ctx._right),
                loc: (0, utils_1.contextToLocation)(ctx),
                contracts: [],
            };
        }
        visitGreaterThanOrEqual(ctx) {
            return {
                type: 'BinaryExpression',
                operator: '>=',
                left: this.visit(ctx._left),
                right: this.visit(ctx._right),
                loc: (0, utils_1.contextToLocation)(ctx),
                contracts: [],
            };
        }
        visitEqualStructural(ctx) {
            return {
                type: 'BinaryExpression',
                operator: '=',
                left: this.visit(ctx._left),
                right: this.visit(ctx._right),
                loc: (0, utils_1.contextToLocation)(ctx),
                contracts: [],
            };
        }
        visitNotEqualStructural(ctx) {
            return {
                type: 'BinaryExpression',
                operator: '<>',
                left: this.visit(ctx._left),
                right: this.visit(ctx._right),
                loc: (0, utils_1.contextToLocation)(ctx),
                contracts: [],
            };
        }
        visitEqualPhysical(ctx) {
            return {
                type: 'BinaryExpression',
                operator: '==',
                left: this.visit(ctx._left),
                right: this.visit(ctx._right),
                loc: (0, utils_1.contextToLocation)(ctx),
                contracts: [],
            };
        }
        visitNotEqualPhysical(ctx) {
            return {
                type: 'BinaryExpression',
                operator: '!=',
                left: this.visit(ctx._left),
                right: this.visit(ctx._right),
                loc: (0, utils_1.contextToLocation)(ctx),
                contracts: [],
            };
        }
    };
    return DerivedClass;
};
exports.parseComparator = parseComparator;
//# sourceMappingURL=comparatorParser.js.map