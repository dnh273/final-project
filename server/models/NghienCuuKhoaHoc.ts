import mongoose from "mongoose";

const NghienCuuKhoaHocSchema = new mongoose.Schema({
  ten_de_tai: { type: String, required: [true, "Hãy nhập tên đề tài"] },
  nam_hoc: {
    type: String,
    required: [true, "Hãy nhập năm họcc"],
  },
});

export default mongoose.model("NghienCuuKhoaHoc", NghienCuuKhoaHocSchema);
