import { Request, Response } from "express";
import NguoiHoc from "../models/NguoiHoc";
import { StatusCodes } from "http-status-codes";

const getAllNguoiHoc = async (req: Request, res: Response) => {
  const ListNguoiHoc = await NguoiHoc.find({})
    .populate("nganh_hoc")
    .populate("nghien_cuu_khoa_hoc")
    .populate("phong_ky_tuc")
    .populate("ky_tuc_nam");
  res.status(StatusCodes.OK).json({ListNguoiHoc});
};

export { getAllNguoiHoc };
