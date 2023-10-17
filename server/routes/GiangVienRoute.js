"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const GiangVienController_1 = require("../controller/GiangVienController");
const router = express_1.default.Router();
router.route("/").get(GiangVienController_1.getAllGiangVien).post(GiangVienController_1.createGiangVien);
exports.default = router;
