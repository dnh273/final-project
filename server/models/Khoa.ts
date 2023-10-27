import mongoose from "mongoose";

const KhoaSchema = new mongoose.Schema(
  {
    ten_khoa: {
      type: String,
      trim: true,
      required: [true, "Hãy nhập tên khoa"],
    },
    nganhs: [
      {
        type: mongoose.Types.ObjectId,
        ref: "NganhHoc",
      },
    ],
  },
   { timestamps: true, versionKey: false } 
);

export default mongoose.model("Khoa", KhoaSchema);
