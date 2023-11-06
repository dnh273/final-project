import express from "express";
import { getAllMayTinh } from "../controller/mayTinhController";

const router = express.Router();

router.route("/").get(getAllMayTinh);

export default router;
