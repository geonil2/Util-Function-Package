"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shortCutAddress = void 0;
var shortCutAddress = function (address, unit) {
    if (unit === void 0) { unit = 5; }
    return "".concat(address.substr(0, unit), "...").concat(address.substr(address.length - unit));
};
exports.shortCutAddress = shortCutAddress;
