import mongoose from "mongoose";

const PhongKyTucSchema = new mongoose.Schema({
  ky_tuc: {
    type: String,
    required: [true, "Hãy nhập ký túc xá"],
  },
  ma_phong: {
    type: Number,
    required: [true, "Hãy nhập tên phòng"],
  },
  dien_tich: {
    type: Number,
    required: [true, "Hãy nhập diện tích phòng"],
  },
  so_nguoi_toi_da: {
    type: Number,
    required: [true, "Hãy nhập số người tối đa trên 1 phòng"],
  },
  // nguoi_hoc_trong_phong: [
  //   {
  //     type: mongoose.Types.ObjectId,
  //     ref: "NguoiHoc",
  //   },
  // ],
});

export default mongoose.model("PhongKyTuc", PhongKyTucSchema);
