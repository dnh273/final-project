import express from "express";
import { getAllTapChi } from "../controller/tapChiController";
import { authenticateUser } from "../middleware/authentication";

const router = express.Router();

router.route("/").get(authenticateUser, getAllTapChi);

export default router;
