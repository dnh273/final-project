import express from "express";
import {  getAllSach } from "../controller/sachController";

const router = express.Router();

router.route("/").get(getAllSach)

export default router;
