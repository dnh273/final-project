import mongoose from "mongoose";

const HoiThaoSchema = new mongoose.Schema(
  {
    ten_hoi_thao: {
      type: String,
      required: [true, "Hãy nhập tên hội thảo"],
    },
    nam_hoc: {
      type: String,
      required: [true, "Hãy nhập năm học"],
    },
    cap_hoi_thao: {
      type: String,
      required: [true, "Hãy nhập cấp hội thảo"],
    },
    giang_vien: [
      {
        type: mongoose.Types.ObjectId,
        ref: "GiangVien",
      },
    ],
  },
   { timestamps: true, versionKey: false } 
);

export default mongoose.model("HoiThao", HoiThaoSchema);
