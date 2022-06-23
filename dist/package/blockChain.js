"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shortCutAddress = void 0;
var shortCutAddress = function (address, unit) {
    if (unit === void 0) { unit = 5; }
    if (!address || address.length < unit * 2) {
        return address;
    }
    return "".concat(address.substr(0, unit), "...").concat(address.substr(address.length - unit));
};
exports.shortCutAddress = shortCutAddress;
