import { Request, Response } from "express";
import GiangVien from "../models/GiangVien";
import { createCustomError } from "../error/custom-api";
import { StatusCodes } from "http-status-codes";
import TapChi from "../models/TapChi";

const createTapChi = async (req: Request, res: Response) => {
  const { ten_tap_chi, nam_hoc, loai_tap_chi, id_giang_vien } = req.body;

  const isValidGiangVien = await GiangVien.findById(id_giang_vien);

  if (!isValidGiangVien) {
    throw createCustomError("Giảng viên không tồn tại", StatusCodes.NOT_FOUND);
  }

  const tapChi = await TapChi.create({ ten_tap_chi, nam_hoc, loai_tap_chi });

  res.status(StatusCodes.CREATED).json({ tapChi });
};

const getAllTapChi = async (req: Request, res: Response) => {
  const ListTapChi = await TapChi.find();

  res.status(StatusCodes.OK).json({ ListTapChi });
};

export { getAllTapChi, createTapChi };
