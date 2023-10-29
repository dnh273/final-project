import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import TapChi from "../models/TapChi";



const getAllTapChi = async (req: Request, res: Response) => {
  const ListTapChi = await TapChi.find();

  res.status(StatusCodes.OK).json({ ListTapChi });
};

export { getAllTapChi };
