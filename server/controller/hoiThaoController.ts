import { Request, Response } from "express";
import GiangVien from "../models/GiangVien";
import { createCustomError } from "../error/custom-api";
import { StatusCodes } from "http-status-codes";
import HoiThao from "../models/HoiThao";

const createHoiThao = async (req: Request, res: Response) => {
  const { ten_hoi_thao, cap_hoi_thao, nam_hoc, id_giang_vien } = req.body;

  const isValidGiangVien = await GiangVien.findById(id_giang_vien);

  if (!isValidGiangVien) {
    throw createCustomError("Giảng viên không tồn tại", StatusCodes.NOT_FOUND);
  }

  const hoiThao = await HoiThao.create({ ten_hoi_thao, cap_hoi_thao, nam_hoc });

  await GiangVien.findByIdAndUpdate(
    id_giang_vien,
    {
      $push: {
        hoi_thao: hoiThao._id,
      },
    },
    { new: true, useFindAndModify: false }
  );

  await HoiThao.findByIdAndUpdate(hoiThao._id, {
    $push: {
      giang_vien: id_giang_vien,
    },
  });

  res.status(StatusCodes.CREATED).json({ hoiThao });
};

const getAllHoiThao = async (req: Request, res: Response) => {
  const ListHoiThao = await HoiThao.find();

  res.status(StatusCodes.OK).json({ ListHoiThao });
};

export { getAllHoiThao, createHoiThao };
