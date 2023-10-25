import express from "express";
import { createSach, getAllSach } from "../controller/sachController";

const router = express.Router();

router.route("/").get(getAllSach).post(createSach);

export default router;
