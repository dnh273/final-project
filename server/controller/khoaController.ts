import { Request, Response } from "express";
import Khoa from "../models/Khoa";
import { StatusCodes } from "http-status-codes";
import { createCustomError } from "../error/custom-api";

const createKhoa = async (req: Request, res: Response) => {
  const { ten_khoa } = req.body;

  const isValidKhoa = await Khoa.findOne({ ten_khoa: ten_khoa });

  if (isValidKhoa) {
    throw createCustomError("Khoa đã tồn tại", StatusCodes.BAD_REQUEST);
  }

  await Khoa.create({ ten_khoa: ten_khoa });
  res.status(StatusCodes.CREATED).json({ ten_khoa });
};

const getAllKhoa = async (req: Request, res: Response) => {
  const ListKhoa = await Khoa.find();
  res.status(StatusCodes.OK).json({ ListKhoa });
};

export { createKhoa, getAllKhoa };
