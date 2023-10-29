import { Request, Response } from "express";
import Khoa from "../models/Khoa";
import { StatusCodes } from "http-status-codes";
import { createCustomError } from "../error/custom-api";

const getAllKhoa = async (req: Request, res: Response) => {
  const ListKhoa = await Khoa.find();
  res.status(StatusCodes.OK).json({ ListKhoa });
};

export {  getAllKhoa };
