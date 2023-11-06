import express from "express";
import { getAllMayTinh } from "../controller/mayTinhController";
import { authenticateUser } from "../middleware/authentication";

const router = express.Router();

router.route("/").get(authenticateUser, getAllMayTinh);

export default router;
