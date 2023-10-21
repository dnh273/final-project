import { Request, Response } from "express";
import NganhHoc from "../models/NganhHoc";
import { createCustomError } from "../error/custom-api";
import { StatusCodes } from "http-status-codes";
import Khoa from "../models/Khoa";

const createNganhHoc = async (req: Request, res: Response) => {
  const { ten_nganh, ten_khoa } = req.body;

  const isValidNganh = await NganhHoc.findOne({ ten_nganh: ten_nganh });
  const khoa = await Khoa.findOne({ ten_khoa: ten_khoa });

  console.log(isValidNganh);
  if (isValidNganh) {
    throw createCustomError("Ngành học đã tồn tại", StatusCodes.BAD_REQUEST);
  }

  if (!khoa) {
    throw createCustomError("Khoa không tồn tại", StatusCodes.NOT_FOUND);
  }

  const nganhHoc = await NganhHoc.create({ ten_nganh: ten_nganh });

  await Khoa.findByIdAndUpdate(
    khoa._id,
    {
      $push: { nganhs: { ten_nganh: nganhHoc.ten_nganh, _id: nganhHoc._id } },
    },
    { new: true, useFindAndModify: false }
  );
  res.status(StatusCodes.CREATED).json({ khoa });
};

const getAllNganhHoc = async (req: Request, res: Response) => {
  const nganhHocs = await NganhHoc.find({})
  res.status(StatusCodes.OK).json({ nganh_hocs: nganhHocs });
};

const deleteNganhHoc = async (req: Request, res: Response) => {
  const { id: nganh_hoc_id } = req.params;

  const nganhHoc = await NganhHoc.findOne({ _id: nganh_hoc_id });

  if (!nganhHoc) {
    throw createCustomError(
      "Không tìm thấy ngành học với mã id này",
      StatusCodes.NOT_FOUND
    );
  }

  NganhHoc.deleteOne({ _id: nganh_hoc_id });
  res.status(StatusCodes.OK).json({ msg: "Xoá thành công" });
};

export { deleteNganhHoc, createNganhHoc, getAllNganhHoc };
