import express from "express";
import { getAllPhongKyTuc } from "../controller/phongKyTucController";
import { authenticateUser } from "../middleware/authentication";

const router = express.Router();

router.route("/").get(authenticateUser, getAllPhongKyTuc);

export default router;
