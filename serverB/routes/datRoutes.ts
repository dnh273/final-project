import express from "express";
import { getAllDat } from "../controller/datController";
import { authenticateUser } from "../middleware/authentication";

const router = express.Router();

router.route("/").get(authenticateUser, getAllDat);

export default router;
