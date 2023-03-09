'use strict';
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
          resolve(value);
        });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator['throw'](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.phonesServices = void 0;
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { Phones } = require('../../database/models');
const SortBy_1 = require('../types/SortBy');
function normalize(phone) {
  const copyOfPhone = Object.assign({}, phone);
  return copyOfPhone;
}
function getMany(page, perPage, sortBy) {
  return __awaiter(this, void 0, void 0, function* () {
    let loadedData;
    try {
      switch (sortBy) {
      case SortBy_1.SortBy.Alphabetically:
        loadedData = yield Phones.findAll({
          order: ['name'],
          raw: true,
        });
        break;
      case SortBy_1.SortBy.Cheapest:
        loadedData = yield Phones.findAll({
          order: ['price'],
          raw: true,
        });
        break;
      default:
        loadedData = yield Phones.findAll({
          order: [['year', 'DESC']],
          raw: true,
        });
        break;
      }
    } catch (e) {
      console.error(e);
      loadedData = [];
    }
    const phonesToSkip = perPage * (page - 1);
    const result = loadedData
      .slice(phonesToSkip, phonesToSkip + perPage)
      .map(normalize);
    return {
      result,
      loadedData: loadedData.length,
    };
  });
}
function findById(phoneId) {
  return Phones.findByPk(phoneId);
}
exports.phonesServices = {
  normalize,
  getMany,
  findById,
};
