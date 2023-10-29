import axios from "axios";
import GiangVien from "../models/GiangVien";
import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

const getAllGiangVien = async (req: Request, res: Response) => {
  const ListGiangVien = await GiangVien.find();

  res.status(StatusCodes.OK).json({ ListGiangVien });
};

export { getAllGiangVien };
