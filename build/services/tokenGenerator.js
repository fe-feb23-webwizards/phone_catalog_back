'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.token = void 0;
const rand = function () {
  return Math.random().toString(36).substr(2);
};
const token = function () {
  return rand() + rand();
};
exports.token = token;
(0, exports.token)();
