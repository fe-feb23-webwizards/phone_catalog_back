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
exports.phoneDetailsControllers = void 0;
const phoneDetails_1 = require('../services/phoneDetails');
const getOne = (req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const { phoneId } = req.params;
    try {
      const findPhoneById = yield phoneDetails_1.phoneDetailsServices.findById(
        phoneId
      );
      if (!findPhoneById) {
        res.sendStatus(404);
        return;
      }
      res.send(
        phoneDetails_1.phoneDetailsServices.normalize(
          findPhoneById.get({ plain: true })
        )
      );
      return findPhoneById;
    } catch (err) {
      console.error(err);
      res.sendStatus(500);
    }
  });
exports.phoneDetailsControllers = {
  getOne,
};
