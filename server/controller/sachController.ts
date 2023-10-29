import { Request, Response } from "express";
import GiangVien from "../models/GiangVien";
import { createCustomError } from "../error/custom-api";
import { StatusCodes } from "http-status-codes";
import Sach from "../models/Sach";

const createSach = async (req: Request, res: Response) => {
  const { id_giang_vien, loai_sach, ten_sach, nam_hoc } = req.body;

  const isValidGiangVien = await GiangVien.findById(id_giang_vien);

  if (!isValidGiangVien) {
    throw createCustomError("Giảng viên không tồn tại", StatusCodes.NOT_FOUND);
  }

  const sach = await Sach.create({
    loai_sach,
    nam_hoc,
    ten_sach,
  });

  await GiangVien.findByIdAndUpdate(
    id_giang_vien,
    {
      $push: {
        sach: sach._id,
      },
    },
    { new: true, useFindAndModify: false }
  );

  res.status(StatusCodes.CREATED).json({ sach });
};

const getAllSach = async (req: Request, res: Response) => {
  const ListSach = await Sach.find({});

  res.status(StatusCodes.OK).json({ ListSach });
};

export { createSach, getAllSach };
