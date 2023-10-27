import mongoose from "mongoose";

const SachSchema = new mongoose.Schema(
  {
    ten_sach: {
      type: String,
      required: [true, "Hãy nhập tên sách"],
    },
    nam_hoc: {
      type: String,
      required: [true, "Hãy nhập năm học"],
    },
    loai_sach: {
      type: String,
      required: [true, "Hãy nhập loại sách"],
    },
  },
   { timestamps: true, versionKey: false } 
);

export default mongoose.model("Sach", SachSchema);
