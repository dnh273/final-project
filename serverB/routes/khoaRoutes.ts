import express from "express";
import { getAllKhoa } from "../controller/khoaController";
import { authenticateUser } from "../middleware/authentication";

const router = express.Router();

router.route("/").get(authenticateUser, getAllKhoa);

export default router;
