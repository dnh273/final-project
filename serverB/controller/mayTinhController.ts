import { Request, Response } from "express";
import MayTinh from "../models/MayTinh";
import { StatusCodes } from "http-status-codes";

const getAllMayTinh = async (req: Request, res: Response) => {
  const ListMayTinh = await MayTinh.find();

  res.status(StatusCodes.OK).json({ ListMayTinh });
};

export { getAllMayTinh };
