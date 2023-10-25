import mongoose from "mongoose";

const GiangVienSchema = new mongoose.Schema({
  ho_ten: {
    type: String,
    trim: true,
    required: [true, "Hãy nhập trường họ và tên"],
    maxlength: [100, "Họ và tên không quá 100 chữ cái"],
  },
  gioi_tinh: {
    type: String,
    enum: ["Nữ", "Nam"],
    required: [true, "Hãy nhập trường giới tính"],
  },
  nam_sinh: {
    type: Number,
    required: [true, "Hãy nhập trường năm sinh"],
  },
  email: {
    type: String,
    required: [true, "Hãy nhập trường email"],
  },
  hoc_vi: {
    type: String,
    required: [true, "Hãy nhập trường năm sinh"],
  },
  chuc_vu: {
    type: String,
    default: null,
  },
  khoa: {
    type: String,
    required: [true, "Hãy nhập trường khoa"],
  },
  dien_thoai: {
    type: String,
    required: [true, "Hãy nhập trường điện thoại"],
  },
  loai_hop_dong: {
    type: String,
    required: [true, "Hãy nhập loại hợp đồng"],
  },
  nghien_cuu_khoa_hoc: [
    {
      type: mongoose.Types.ObjectId,
      ref: "NghienCuuKhoaHoc",
    },
  ],
  sach: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Sach",
    },
  ],
  phong_ban: {
    type: String,
    default: null,
  },
});

export default mongoose.model("GiangVien", GiangVienSchema);
