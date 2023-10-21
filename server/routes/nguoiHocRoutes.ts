import express from "express";
import { getAllNguoiHoc } from "../controller/nguoiHocController";

const router = express.Router();

router.route("/").get(getAllNguoiHoc);

export default router;
