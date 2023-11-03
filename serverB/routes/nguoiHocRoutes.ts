import express from "express";
import { getAllNguoiHoc } from "../controller/nguoiHocController";
import { authenticateUser } from "../middleware/authentication";

const router = express.Router();

router.route("/").get(authenticateUser, getAllNguoiHoc);

export default router;
