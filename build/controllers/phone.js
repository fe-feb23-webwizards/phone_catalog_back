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
exports.phonesControllers = void 0;
const phones_1 = require('../services/phones');
const SortBy_1 = require('../types/SortBy');
const getMany = (req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const normilizedUrl = new URL(req.url, `http://${req.headers.host}`);
    const params = normilizedUrl.searchParams;
    const page = Number(params.get('page')) || 1;
    const perPage = Number(params.get('perPage')) || 16;
    const sortBy = params.get('sortBy') || SortBy_1.SortBy.Newest;
    const loadPhones = yield phones_1.phonesServices.getMany(
      page,
      perPage,
      sortBy
    );
    res.send({
      data: loadPhones.result,
      total: loadPhones.loadedData,
    });
  });
const getOne = (req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const { phoneId } = req.params;
    try {
      const findPhoneById = yield phones_1.phonesServices.findById(phoneId);
      if (!findPhoneById) {
        res.sendStatus(404);
        return;
      }
      res.send(
        phones_1.phonesServices.normalize(findPhoneById.get({ plain: true }))
      );
      return findPhoneById;
    } catch (err) {
      console.error(err);
      res.sendStatus(500);
    }
  });
exports.phonesControllers = {
  getMany,
  getOne,
};
