import mongoose from "mongoose";

const MayTinhSchema = new mongoose.Schema(
  {
    muc_dich: { type: String, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default mongoose.model("MayTinh", MayTinhSchema);
