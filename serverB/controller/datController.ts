import { Request, Response } from "express";
import Dat from "../models/Dat";
import { StatusCodes } from "http-status-codes";

const getAllDat = async (req: Request, res: Response) => {
  const ListDat = await Dat.find();

  res.status(StatusCodes.OK).json({ ListDat });
};

export { getAllDat };
