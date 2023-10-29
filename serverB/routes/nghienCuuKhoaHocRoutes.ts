import express from "express";
import {
  getAllNghienCuuKhoaHoc,
} from "../controller/nghienCuuKhoaHocController";

const router = express.Router();

router.route("/").get(getAllNghienCuuKhoaHoc)
export default router;
