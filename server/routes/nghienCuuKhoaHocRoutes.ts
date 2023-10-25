import express from "express";
import {
  createNghienCuuKhoaHoc,
  getAllNghienCuuKhoaHoc,
} from "../controller/nghienCuuKhoaHocController";

const router = express.Router();

router.route("/").get(getAllNghienCuuKhoaHoc).post(createNghienCuuKhoaHoc);

export default router;
