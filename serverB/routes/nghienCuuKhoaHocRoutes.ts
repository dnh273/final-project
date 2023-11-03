import express from "express";
import { getAllNghienCuuKhoaHoc } from "../controller/nghienCuuKhoaHocController";
import { authenticateUser } from "../middleware/authentication";

const router = express.Router();

router.route("/").get(authenticateUser, getAllNghienCuuKhoaHoc);
export default router;
