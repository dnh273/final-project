import express from "express";
import { getAllHoiThao } from "../controller/hoiThaoController";

const router = express.Router();

router.route("/").get(getAllHoiThao);

export default router;
