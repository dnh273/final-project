import { IGiangVien } from "../../interface";
import { AxiosResponse } from "axios";
import { takeLatest, put } from "redux-saga/effects";
import giangVienApi from "../../api/giangVienApi";
import {
  getAllGiangVienAction,
  getAllGiangVienErrorAction,
  getAllGiangVienSuccessAction,
} from "../slice/giangVienSlice";

function* getAllGiangVienSage() {
  try {
    // You can also export the axios call as a function.
    const response: AxiosResponse<IGiangVien[]> =
      yield giangVienApi.getAllGiangVien();
    yield put(getAllGiangVienSuccessAction(response.data));
  } catch (error) {
    yield put(getAllGiangVienErrorAction(error));
  }
}

// Generator function
export function* watchGetAllGiangVien() {
  yield takeLatest(getAllGiangVienAction, getAllGiangVienSage);
}

export default watchGetAllGiangVien;
