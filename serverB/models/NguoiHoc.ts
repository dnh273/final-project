import mongoose from "mongoose";
import NganhHoc from "./NganhHoc";

const NguoiHocSchema = new mongoose.Schema(
  {
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
    quoc_tich: {
      type: String,
      trim: true,
      required: [true, "Hãy nhập trường quốc tịch"],
      maxlength: [100, "Quốc tịch không quá 100 chữ cái"],
    },
    loai_nguoi_hoc: {
      type: String,
      trim: true,
      required: [true, "Hãy nhập trường quốc tịch"],
      maxlength: [100, "Quốc tịch không quá 100 chữ cái"],
    },
    nganh_hoc: {
      type: mongoose.Types.ObjectId,
      ref: "NganhHoc",
      required: [true, "Hãy nhập ngành học"],
    },
    phong_ky_tuc: {
      type: mongoose.Types.ObjectId,
      ref: "PhongKyTuc",
    },
    diem_thi: {
      type: Number,
      trim: true,
      default: function () {
        if (
          this.loai_nguoi_hoc == "học viên cao học" ||
          this.loai_nguoi_hoc == "nghiên cứu sinh"
        ) {
          return null;
        }
        return this.diem_thi;
      },
      maxlength: [100, "Quốc tịch không quá 100 chữ cái"],
    },
    nam_nhap_hoc: {
      type: String,
      trim: true,
      required: [true, "Hãy nhập trường năm nhập học"],
    },
    nam_tot_nghiep: {
      type: String,
      trim: true,
      default: "",
    },
    nghien_cuu_khoa_hoc: {
      type: mongoose.Types.ObjectId,
      ref: "NghienCuuKhoaHoc",
    },
  },
   { timestamps: true, versionKey: false } 
);

export default mongoose.model("NguoiHoc", NguoiHocSchema);
