import express from "express";
import { getAllDat } from "../controller/datController";

const router = express.Router();

router.route("/").get(getAllDat);

export default router;
