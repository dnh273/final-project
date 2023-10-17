import express from "express";
import {
  createGiangVien,
  getAllGiangVien,
} from "../controller/GiangVienController";

const router = express.Router();

router.route("/").get(getAllGiangVien).post(createGiangVien);

export default router