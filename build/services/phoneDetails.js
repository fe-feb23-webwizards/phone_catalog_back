'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.phoneDetailsServices = void 0;
const { phonesDetails } = require('../../database/models');
const lodash_1 = __importDefault(require('lodash'));
function normalize(phone) {
  const copyOfPhone = lodash_1.default.cloneDeep(phone);
  delete copyOfPhone.createdAt;
  return copyOfPhone;
}
function findById(phoneId) {
  return phonesDetails.findByPk(phoneId);
}
exports.phoneDetailsServices = {
  normalize,
  findById,
};
