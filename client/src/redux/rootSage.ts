import { all } from "redux-saga/effects";
import watchGetAllGiangVien from "../features/saga/giangVienSaga";
import watchGetAllNguoiHoc from "../features/saga/nguoiHocSage";

export default function* rootSaga() {
  yield all([watchGetAllGiangVien(), watchGetAllNguoiHoc()]);
}
