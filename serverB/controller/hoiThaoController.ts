import { Request, Response } from "express";
import GiangVien from "../models/GiangVien";
import { createCustomError } from "../error/custom-api";
import { StatusCodes } from "http-status-codes";
import HoiThao from "../models/HoiThao";

const getAllHoiThao = async (req: Request, res: Response) => {
  const ListHoiThao = await HoiThao.find();

res.status(StatusCodes.OK).json({ ListHoiThao });
};

export { getAllHoiThao };
