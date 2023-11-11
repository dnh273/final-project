import GiangVien from "../models/GiangVien";
import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

const getAllGiangVien = async (req: Request, res: Response) => {
  const ListGiangVien = await GiangVien.find()
    .populate("sach")
    .populate("tap_chi")
    .populate("nghien_cuu_khoa_hoc");

  res.status(StatusCodes.OK).json({ ListGiangVien });
};

export { getAllGiangVien };
