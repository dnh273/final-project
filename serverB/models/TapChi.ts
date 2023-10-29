import mongoose from "mongoose";

const TapChiSchema = new mongoose.Schema(
  {
    ten_tap_chi: {
      type: String,
      required: [true, "Hãy nhập tên tạp chí"],
    },
    nam_hoc: {
      type: String,
      required: [true, "Hãy nhập năm học"],
    },
    loai_tap_chi: {
      type: String,
      required: [true, "Hãy nhập loại tạp chí"],
    },
  },
  { timestamps: true, versionKey: false }
);

export default mongoose.model("TapChi", TapChiSchema);
