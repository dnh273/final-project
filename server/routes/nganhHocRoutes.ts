import express from "express";
import {
  createNganhHoc,
  deleteNganhHoc,
  getAllNganhHoc,
} from "../controller/nganhHocController";

const router = express.Router();

router
  .route("/")
  .get(getAllNganhHoc)
  .post(createNganhHoc)
  .delete(deleteNganhHoc);

export default router;
