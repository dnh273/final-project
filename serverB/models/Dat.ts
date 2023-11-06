import mongoose from "mongoose";

const DatSchema = new mongoose.Schema(
  {
    ma_khu_dat: { type: String, required: [true, "Hãy nhập mã khu đất"] },
    vi_tri: { type: String, required: [true, "Hãy nhập vị trí"] },
    muc_dich: { type: String, required: [true, "Hãy nhập mục đích"] },
    dien_tich: { type: String, required: [true, "Hãy nhập diện tích"] },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default mongoose.model("Dat", DatSchema);
