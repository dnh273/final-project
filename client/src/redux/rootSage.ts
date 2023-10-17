import { all } from "redux-saga/effects";
import watchGetAllGiangVien from "../features/saga/giangVienSaga";

export default function* rootSaga() {
  yield all([watchGetAllGiangVien()]);
}
