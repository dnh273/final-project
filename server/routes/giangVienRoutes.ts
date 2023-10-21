import express from "express";
import {
  createGiangVien,
  getAllGiangVien,
} from "../controller/giangVienController";

const router = express.Router();

router.route("/").get(getAllGiangVien).post(createGiangVien);

export default router