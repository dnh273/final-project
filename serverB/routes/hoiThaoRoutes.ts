import express from "express";
import { getAllHoiThao } from "../controller/hoiThaoController";
import { authenticateUser } from "../middleware/authentication";

const router = express.Router();

router.route("/").get(authenticateUser, getAllHoiThao);

export default router;
