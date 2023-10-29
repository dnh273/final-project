import express from "express";
import { getAllPhongKyTuc } from "../controller/phongKyTucController";

const router = express.Router();

router.route("/").get(getAllPhongKyTuc);

export default router