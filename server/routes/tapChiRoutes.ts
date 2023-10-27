import express from "express";
import { createTapChi, getAllTapChi } from "../controller/tapChiController";

const router = express.Router();

router.route("/").post(createTapChi).get(getAllTapChi);

export default router;
