import { Request, Response } from "express";
import GiangVien from "../models/GiangVien";
import { StatusCodes } from "http-status-codes";

const getAllGiangVien = async (req: Request, res: Response) => {
  let options = {};

  const { q } = req.query;

  // const page: number = parseInt(req.query.page as any) || 0;
  // const size: number = parseInt(req.query.size as any) || 10;

  if (q) {
    options = {
      ...options,
      $or: [
        { ho_ten: new RegExp(q.toString()) },
        { email: new RegExp(q.toString()) },
      ],
    };
  }

  const ListOfGiangVien = await GiangVien.find(options).populate("sach");
  // .limit(size)
  // .skip(size * page);

  res.status(StatusCodes.OK).json({ ListOfGiangVien });
};

const createGiangVien = async (req: Request, res: Response) => {
  const newGiangVien = await GiangVien.create(req.body);
  res.status(StatusCodes.CREATED).json({ newGiangVien });
};

export { getAllGiangVien, createGiangVien };
