import mongoose from "mongoose";

const NganhHocSchema = new mongoose.Schema({
  ten_nganh: {
    type: String,
    trim: true,
    required: [true, "Hãy nhập tên ngành học"],
    maxLength: [100, "Ngành học không quá 100 chữ"],
  },
});

export default mongoose.model("NganhHoc", NganhHocSchema);
