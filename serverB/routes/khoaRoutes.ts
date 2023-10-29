import express from "express";
import {  getAllKhoa } from "../controller/khoaController";

const router = express.Router();

router.route("/").get(getAllKhoa)

export default router;
