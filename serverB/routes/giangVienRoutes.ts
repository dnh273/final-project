import express from "express";
import { getAllGiangVien } from "../controller/giangVienController";
import { authenticateUser } from "../middleware/authentication";

const router = express.Router();

router.route("/").get(authenticateUser, getAllGiangVien);

export default router;
