import { Request, Response } from "express";
import NguoiHoc from "../models/NguoiHoc";
import GiangVien from "../models/GiangVien";
import { createCustomError } from "../error/custom-api";
import { StatusCodes } from "http-status-codes";
import NghienCuuKhoaHoc from "../models/NghienCuuKhoaHoc";


const getAllNghienCuuKhoaHoc = async (req: Request, res: Response) => {
  const ListNghienCuuKhoaHoc = await NghienCuuKhoaHoc.find();

  res.status(StatusCodes.OK).json({ ListNghienCuuKhoaHoc });
};

export {  getAllNghienCuuKhoaHoc };
