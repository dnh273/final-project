import express from "express";
import createNghienCuuKhoaHoc from "../controller/nghienCuuKhoaHoc";

const router = express.Router();

router.route("/").post(createNghienCuuKhoaHoc);

export default router