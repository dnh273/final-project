import nghiCuuKhoaHocApi from "../../api/nghienCuuKhoaHocApi";
import { AxiosResponse } from "axios";
import { INghienCuuKhoaHoc } from "../../interface";
import { put, takeLatest } from "redux-saga/effects";
import {
  getAllNghienCuuKhoaHocAction,
  getAllNghienCuuKhoaHocErrorAction,
  getAllNghienCuuKhoaHocSuccessAction,
} from "../slice/nghienCuuKhoaHocSlice";

function* getAllNghienCuuKhoaHocSaga() {
  try {
    const response: AxiosResponse<INghienCuuKhoaHoc[]> =
      yield nghiCuuKhoaHocApi.getAllNghienCuuKhoaHoc();

    yield put(getAllNghienCuuKhoaHocSuccessAction(response.data));
  } catch (error) {
    yield put(getAllNghienCuuKhoaHocErrorAction());
  }
}

function* watchGetAllNghienCuuKhoaHoc() {
  yield takeLatest(getAllNghienCuuKhoaHocAction, getAllNghienCuuKhoaHocSaga);
}

export default watchGetAllNghienCuuKhoaHoc;
