import express from "express";
import { createHoiThao, getAllHoiThao } from "../controller/hoiThaoController";

const router = express.Router();

router.route("/").post(createHoiThao).get(getAllHoiThao);

export default router;
