"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseIntBinOp = void 0;
const utils_1 = require("../utils");
const parseIntBinOp = (BaseClass) => {
    const DerivedClass = class extends BaseClass {
        visitAddition(ctx) {
            return {
                type: 'BinaryExpression',
                operator: '+',
                left: this.visit(ctx._left),
                right: this.visit(ctx._right),
                loc: (0, utils_1.contextToLocation)(ctx),
                contracts: [],
            };
        }
        visitSubtraction(ctx) {
            return {
                type: 'BinaryExpression',
                operator: '-',
                left: this.visit(ctx._left),
                right: this.visit(ctx._right),
                loc: (0, utils_1.contextToLocation)(ctx),
                contracts: [],
            };
        }
        visitMultiplication(ctx) {
            return {
                type: 'BinaryExpression',
                operator: '*',
                left: this.visit(ctx._left),
                right: this.visit(ctx._right),
                loc: (0, utils_1.contextToLocation)(ctx),
                contracts: [],
            };
        }
        visitDivision(ctx) {
            return {
                type: 'BinaryExpression',
                operator: '/',
                left: this.visit(ctx._left),
                right: this.visit(ctx._right),
                loc: (0, utils_1.contextToLocation)(ctx),
                contracts: [],
            };
        }
        visitModulus(ctx) {
            return {
                type: 'BinaryExpression',
                operator: 'mod',
                left: this.visit(ctx._left),
                right: this.visit(ctx._right),
                loc: (0, utils_1.contextToLocation)(ctx),
                contracts: [],
            };
        }
    };
    return DerivedClass;
};
exports.parseIntBinOp = parseIntBinOp;
//# sourceMappingURL=intBinOpParser.js.map