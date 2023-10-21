import express from "express";
import { createKhoa, getAllKhoa } from "../controller/khoaController";

const router = express.Router();

router.route("/").get(getAllKhoa).post(createKhoa);

export default router;
