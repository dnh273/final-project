import { Request, Response } from "express";
import NguoiHoc from "../models/NguoiHoc";
import { StatusCodes } from "http-status-codes";

const createNguoiHoc = async (req: Request, res: Response) => {
  const { nganh_hoc } = req.body;
};

const getAllNguoiHoc = async (req: Request, res: Response) => {
  const ListNguoiHoc = await NguoiHoc.find({}).populate("nganh_hoc");

  res.status(StatusCodes.OK).json(ListNguoiHoc);
};

export { getAllNguoiHoc };
