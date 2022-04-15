"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTypeOfContract = exports.formatContractType = exports.curryParamTypes = exports.isSameType = exports.isAny = exports.isNumeric = exports.isChar = exports.isString = exports.isBool = exports.isFloat = exports.isInt = exports.isJoinedType = exports.isFunctionType = exports.isPrimitiveType = exports.valueTypeToPrimitive = exports.primitiveTypes = exports.anyType = exports.numericType = exports.unitType = exports.charType = exports.stringType = exports.boolType = exports.floatType = exports.intType = exports.makeFunctionType = exports.makeJoined = exports.makePrimitive = void 0;
const lodash_isequal_1 = __importDefault(require("lodash.isequal"));
const formatters_1 = require("../utils/formatters");
function makePrimitive(type) {
    return {
        type: 'PrimitiveType',
        valueType: type,
    };
}
exports.makePrimitive = makePrimitive;
function makeJoined(type) {
    return {
        type: 'JoinedType',
        valueType: type,
    };
}
exports.makeJoined = makeJoined;
function makeFunctionType(...types) {
    const parameterTypes = types.slice(0, -1);
    const returnType = types[types.length - 1];
    if (isJoinedType(returnType)) {
        throw new Error('Return type cannot be a joined type!');
    }
    return curryParamTypes(parameterTypes, returnType);
}
exports.makeFunctionType = makeFunctionType;
exports.intType = makePrimitive('int');
exports.floatType = makePrimitive('float');
exports.boolType = makePrimitive('bool');
exports.stringType = makePrimitive('string');
exports.charType = makePrimitive('char');
exports.unitType = makePrimitive('unit');
exports.numericType = makeJoined('numeric');
exports.anyType = makeJoined('any');
exports.primitiveTypes = [
    exports.intType,
    exports.floatType,
    exports.boolType,
    exports.stringType,
    exports.charType,
    exports.unitType,
];
exports.valueTypeToPrimitive = {
    int: exports.intType,
    float: exports.floatType,
    bool: exports.boolType,
    string: exports.stringType,
    char: exports.charType,
};
function isPrimitiveType(type) {
    return type.type === 'PrimitiveType';
}
exports.isPrimitiveType = isPrimitiveType;
function isFunctionType(type) {
    return type.type === 'FunctionType';
}
exports.isFunctionType = isFunctionType;
function isJoinedType(type) {
    return type.type === 'JoinedType';
}
exports.isJoinedType = isJoinedType;
function isInt(type) {
    return (0, lodash_isequal_1.default)(type, exports.intType);
}
exports.isInt = isInt;
function isFloat(type) {
    return (0, lodash_isequal_1.default)(type, exports.floatType);
}
exports.isFloat = isFloat;
function isBool(type) {
    return (0, lodash_isequal_1.default)(type, exports.boolType);
}
exports.isBool = isBool;
function isString(type) {
    return (0, lodash_isequal_1.default)(type, exports.stringType);
}
exports.isString = isString;
function isChar(type) {
    return (0, lodash_isequal_1.default)(type, exports.charType);
}
exports.isChar = isChar;
function isNumeric(type) {
    return (0, lodash_isequal_1.default)(type, exports.numericType);
}
exports.isNumeric = isNumeric;
function isAny(type) {
    return (0, lodash_isequal_1.default)(type, exports.anyType);
}
exports.isAny = isAny;
function isSameType(type1, type2) {
    if (isAny(type1) || isAny(type2)) {
        return true;
    }
    if (isNumeric(type1)) {
        return isNumeric(type2) || isInt(type2) || isFloat(type2);
    }
    if (isNumeric(type2)) {
        return isNumeric(type1) || isInt(type1) || isFloat(type1);
    }
    return (0, lodash_isequal_1.default)(type1, type2);
}
exports.isSameType = isSameType;
/**
 * Curries a function with type of format x -> x -> x -> x
 * to a type with format x -> (x -> (x -> x)).
 */
function curryParamTypes(paramTypes, returnType) {
    let finalType = returnType;
    for (let i = paramTypes.length - 1; i >= 0; i--) {
        finalType = {
            type: 'FunctionType',
            parameterType: paramTypes[i],
            returnType: finalType,
        };
    }
    return finalType;
}
exports.curryParamTypes = curryParamTypes;
function formatContractType(contractType) {
    if (contractType.type === 'FlatContractType') {
        if (Array.isArray(contractType.contractType)) {
            return (0, formatters_1.formatType)(contractType.contractType.map((t) => t.parameterType));
        }
        return (0, formatters_1.formatType)(contractType.contractType.parameterType);
    }
    return `${formatContractType(contractType.parameterType)} -> ${formatContractType(contractType.returnType)}`;
}
exports.formatContractType = formatContractType;
function getTypeOfContract(contract) {
    if (contract.type === 'FlatContract') {
        return contract.contract.getType().parameterType;
    }
    return makeFunctionType(getTypeOfContract(contract.parameterContract), getTypeOfContract(contract.returnContract));
}
exports.getTypeOfContract = getTypeOfContract;
//# sourceMappingURL=utils.js.map