"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const phone_1 = require("../controllers/phone");
exports.router = express_1.default.Router();
exports.router.get('/', phone_1.phonesControllers.getMany);
exports.router.get('/:phoneId', phone_1.phonesControllers.getOne);
