import express from "express";
import { getAllNganhHoc } from "../controller/nganhHocController";
import { authenticateUser } from "../middleware/authentication";

const router = express.Router();

router.route("/").get(authenticateUser, getAllNganhHoc);

export default router;
