import { Request, Response } from "express";
import NganhHoc from "../models/NganhHoc";
import { createCustomError } from "../error/custom-api";
import { StatusCodes } from "http-status-codes";
import Khoa from "../models/Khoa";

const getAllNganhHoc = async (req: Request, res: Response) => {
  const ListNganhHoc = await NganhHoc.find({});
  res.status(StatusCodes.OK).json({ ListNganhHoc });
};



export {  getAllNganhHoc };
