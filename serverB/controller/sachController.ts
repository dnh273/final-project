import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import Sach from "../models/Sach";

const getAllSach = async (req: Request, res: Response) => {
  const ListSach = await Sach.find({});

  res.status(StatusCodes.OK).json({ ListSach });
};

export { getAllSach };
