"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createGiangVien = exports.getAllGiangVien = void 0;
const GiangVien_1 = __importDefault(require("../models/GiangVien"));
const http_status_codes_1 = require("http-status-codes");
const getAllGiangVien = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let options = {};
    const { q } = req.query;
    // const page: number = parseInt(req.query.page as any) || 0;
    // const size: number = parseInt(req.query.size as any) || 10;
    if (q) {
        options = Object.assign(Object.assign({}, options), { $or: [
                { ho_ten: new RegExp(q.toString()) },
                { email: new RegExp(q.toString()) },
            ] });
    }
    const ListOfGiangVien = yield GiangVien_1.default.find(options);
    // .limit(size)
    // .skip(size * page);
    res.status(http_status_codes_1.StatusCodes.OK).json({ ListOfGiangVien });
});
exports.getAllGiangVien = getAllGiangVien;
const createGiangVien = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newGiangVien = yield GiangVien_1.default.create(req.body);
    res.status(http_status_codes_1.StatusCodes.CREATED).json({ newGiangVien });
});
exports.createGiangVien = createGiangVien;
