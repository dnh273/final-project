import { Request, Response } from "express";
import GiangVien from "../models/GiangVien";
import { StatusCodes } from "http-status-codes";

const getAllGiangVien = async (req: Request, res: Response) => {


  const ListGiangVien = await GiangVien.find().populate("sach");

  res.status(StatusCodes.OK).json({ ListGiangVien });
};

const createGiangVien = async (req: Request, res: Response) => {
  const newGiangVien = await GiangVien.create(req.body);
  res.status(StatusCodes.CREATED).json({ newGiangVien });
};

export { getAllGiangVien, createGiangVien };
