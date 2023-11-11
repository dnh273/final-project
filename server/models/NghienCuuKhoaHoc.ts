import mongoose from "mongoose";

const NghienCuuKhoaHocSchema = new mongoose.Schema(
  {
    ten_de_tai: {
      type: String,
      required: [true, "Hãy nhập tên đề tài"],
      unique: true,
    },
    nam_hoc: {
      type: String,
      required: [true, "Hãy nhập năm họcc"],
    },
    loai_de_tai: {
      type: String,
      required: [true, "Hãy nhập loại đề tài"],
    },
    kinh_phi: {
      type: Number,
      required: [true, "Hãy nhập kinh phí"],
    },
    doanh_thu: {
      type: Number,
      required: [true, "Hãy nhập doanh thu"],
    },
  },
  { timestamps: true, versionKey: false }
);

export default mongoose.model("NghienCuuKhoaHoc", NghienCuuKhoaHocSchema);
