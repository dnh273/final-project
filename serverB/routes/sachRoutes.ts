import express from "express";
import {  getAllSach } from "../controller/sachController";
import { authenticateUser } from "../middleware/authentication";

const router = express.Router();

router.route("/").get(authenticateUser,getAllSach)

export default router;
