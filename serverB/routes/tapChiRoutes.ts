import express from "express";
import { getAllTapChi } from "../controller/tapChiController";

const router = express.Router();

router.route("/").get(getAllTapChi);

export default router;
