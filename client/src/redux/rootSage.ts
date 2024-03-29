import { all } from "redux-saga/effects";
import watchGetAllGiangVien from "../features/saga/giangVienSaga";
import watchGetAllNguoiHoc from "../features/saga/nguoiHocSage";
import watchGetAllNghienCuuKhoaHoc from "../features/saga/nghienCuuKhoaHocSaga";
import watchGetAllDat from "../features/saga/datSaga";
import watchGetAllMayTinh from "../features/saga/mayTinhSaga";
import watchGetAllSach from "../features/saga/sachSaga";
import watchGetAllPhongKyTuc from "../features/saga/phongKyTucSaga";
import watchGetAllTapChi from "../features/saga/tapChiSaga";

export default function* rootSaga() {
  yield all([
    watchGetAllGiangVien(),
    watchGetAllNguoiHoc(),
    watchGetAllNghienCuuKhoaHoc(),
    watchGetAllDat(),
    watchGetAllMayTinh(),
    watchGetAllSach(),
    watchGetAllPhongKyTuc(),
    watchGetAllTapChi(),
  ]);
}
