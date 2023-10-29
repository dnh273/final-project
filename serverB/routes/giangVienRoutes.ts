import express from "express";
import { getAllGiangVien } from "../controller/giangVienController";

const router = express.Router();

router.route("/").get(getAllGiangVien);

export default router;
