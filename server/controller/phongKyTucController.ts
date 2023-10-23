import { Request, Response } from "express";
import PhongKyTuc from "../models/PhongKyTuc";
import { StatusCodes } from "http-status-codes";

const getAllPhongKyTuc = async (req: Request, res: Response) => {
  const ListPhongKyTuc = await PhongKyTuc.find({});

  res
    .status(StatusCodes.OK)
    .json({ listId: ListPhongKyTuc.map((item) => item._id) });
};

export { getAllPhongKyTuc };
