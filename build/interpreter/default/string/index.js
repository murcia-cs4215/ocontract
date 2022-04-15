"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stringDefaultFunctions = void 0;
const capitalize_1 = require("./capitalize");
const contains_1 = require("./contains");
const ends_with_1 = require("./ends_with");
const get_1 = require("./get");
const length_1 = require("./length");
const lowercase_1 = require("./lowercase");
const make_1 = require("./make");
const starts_with_1 = require("./starts_with");
const substring_1 = require("./substring");
const uppercase_1 = require("./uppercase");
exports.stringDefaultFunctions = {
    capitalize: {
        value: capitalize_1.capitalize,
        type: capitalize_1.capitalize.getType(),
    },
    contains: {
        value: contains_1.contains,
        type: contains_1.contains.getType(),
    },
    ends_with: {
        value: ends_with_1.ends_with,
        type: ends_with_1.ends_with.getType(),
    },
    get: {
        value: get_1.get,
        type: get_1.get.getType(),
    },
    length: {
        value: length_1.length,
        type: length_1.length.getType(),
    },
    lowercase: {
        value: lowercase_1.lowercase,
        type: lowercase_1.lowercase.getType(),
    },
    make: {
        value: make_1.make,
        type: make_1.make.getType(),
    },
    starts_with: {
        value: starts_with_1.starts_with,
        type: starts_with_1.starts_with.getType(),
    },
    substring: {
        value: substring_1.substring,
        type: substring_1.substring.getType(),
    },
    uppercase: {
        value: uppercase_1.uppercase,
        type: uppercase_1.uppercase.getType(),
    },
};
//# sourceMappingURL=index.js.map