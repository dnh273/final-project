import { Request, Response } from "express";
import NguoiHoc from "../models/NguoiHoc";
import GiangVien from "../models/GiangVien";
import { createCustomError } from "../error/custom-api";
import { StatusCodes } from "http-status-codes";
import NghienCuuKhoaHoc from "../models/NghienCuuKhoaHoc";

const createNghienCuuKhoaHoc = async (req: Request, res: Response) => {
  const {
    list_id_nguoi_hoc,
    id_giang_vien,
    ten_de_tai,
    nam_hoc,
    kinh_phi,
    doanh_thu,
    loai_de_tai,
  } = req.body;

  const isValidGiangVien = await GiangVien.findById(id_giang_vien);

  for (let i = 0; i < list_id_nguoi_hoc.length; i++) {
    const isValidNguoiHoc = await NguoiHoc.findById(list_id_nguoi_hoc[i]);
    if (!isValidNguoiHoc) {
      throw createCustomError(
        `Người học không tồn tài ${list_id_nguoi_hoc[i]}`,
        StatusCodes.NOT_FOUND
      );
    }
  }

  if (!isValidGiangVien) {
    throw createCustomError("Giảng viên không tồn tài", StatusCodes.NOT_FOUND);
  }

  const nckh = await NghienCuuKhoaHoc.create({
    nam_hoc: nam_hoc,
    ten_de_tai: ten_de_tai,
    kinh_phi: kinh_phi,
    doanh_thu: doanh_thu,
    loai_de_tai,
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
  for (let i = 0; i < list_id_nguoi_hoc.length; i++) {
    await NguoiHoc.bulkWrite([
      {
        updateOne: {
          filter: { _id: list_id_nguoi_hoc[i] },
          update: { nghien_cuu_khoa_hoc: nckh._id },
        },
      },
    ]);
  }
  res.status(StatusCodes.CREATED).json({ nckh });
};

const getAllNghienCuuKhoaHoc = async (req: Request, res: Response) => {
  const ListNghienCuuKhoaHoc = await NghienCuuKhoaHoc.find();

  res.status(StatusCodes.OK).json({ ListNghienCuuKhoaHoc });
};

export { createNghienCuuKhoaHoc, getAllNghienCuuKhoaHoc };
