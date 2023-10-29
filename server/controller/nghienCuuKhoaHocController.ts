import { Request, Response } from "express";
import NguoiHoc from "../models/NguoiHoc";
import GiangVien from "../models/GiangVien";
import { createCustomError } from "../error/custom-api";
import { StatusCodes } from "http-status-codes";
import NghienCuuKhoaHoc from "../models/NghienCuuKhoaHoc";

const createNghienCuuKhoaHoc = async (req: Request, res: Response) => {
  const {
    id_nguoi_hoc,
    id_giang_vien,
    ten_de_tai,
    nam_hoc,
    kinh_phi,
    doanh_thu,
  } = req.body;

  const isValidNguoiHoc = NguoiHoc.findById(id_nguoi_hoc);
  const isValidGiangVien = GiangVien.findById(id_giang_vien);

  if (!isValidNguoiHoc) {
    throw createCustomError("Người học không tồn tài", StatusCodes.NOT_FOUND);
  }
  if (!isValidGiangVien) {
    throw createCustomError("Giảng viên không tồn tài", StatusCodes.NOT_FOUND);
  }

  const nckh = await NghienCuuKhoaHoc.create({
    nam_hoc: nam_hoc,
    ten_de_tai: ten_de_tai,
    kinh_phi: kinh_phi,
    doanh_thu: doanh_thu,
  });

  await GiangVien.findByIdAndUpdate(
    id_giang_vien,
    {
      $push: {
        nghien_cuu_khoa_hoc: nckh._id,
      },
    },
    { new: true, useFindAndModify: false }
  );

  await NguoiHoc.findByIdAndUpdate(id_nguoi_hoc, {
    $addToSet: { nghien_cuu_khoa_hoc: nckh._id },
  });

  res.status(StatusCodes.CREATED).json({ nckh });
};

const getAllNghienCuuKhoaHoc = async (req: Request, res: Response) => {
  const ListNghienCuuKhoaHoc = await NghienCuuKhoaHoc.find();

  res.status(StatusCodes.OK).json({ ListNghienCuuKhoaHoc });
};

export { createNghienCuuKhoaHoc, getAllNghienCuuKhoaHoc };
