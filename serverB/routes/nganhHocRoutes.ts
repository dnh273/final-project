import express from "express";
import { getAllNganhHoc } from "../controller/nganhHocController";

const router = express.Router();

router.route("/").get(getAllNganhHoc);

export default router;
