"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.firstLetterUppercase = void 0;
// Make first letter uppercase
var firstLetterUppercase = function (word) {
    return word[0].toUpperCase() + word.slice(1, word.length);
};
exports.firstLetterUppercase = firstLetterUppercase;
