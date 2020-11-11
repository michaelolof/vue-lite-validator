"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.alphaNumeric = void 0;
var required_1 = require("./required");
exports.alphaNumeric = function (value) {
    var valid = { hasError: false, validator: undefined };
    var notRequired = required_1.required(value).hasError;
    if (notRequired)
        return valid;
    if (isAlphaNumeric(value) === false)
        return {
            hasError: true,
            validator: "alphaNumeric",
        };
    return valid;
};
function isAlphaNumeric(str) {
    var code, i, len;
    for (i = 0, len = str.length; i < len; i++) {
        code = str.charCodeAt(i);
        if (!(code > 47 && code < 58) && // numeric (0-9)
            !(code > 64 && code < 91) && // upper alpha (A-Z)
            !(code > 96 && code < 123)) { // lower alpha (a-z)
            return false;
        }
    }
    return true;
}
//# sourceMappingURL=alphaNumeric.js.map