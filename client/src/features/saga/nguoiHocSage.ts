import { AxiosResponse } from "axios";
import { INguoiHoc } from "../../interface";
import nguoiHocApi from "../../api/nguoiHocApi";
import {
  getAllNguoiHocAction,
  getAllNguoiHocErrorAction,
  getAllNguoiHocSuccessAction,
} from "../slice/nguoiHocSlice";
import { put, takeLatest } from "redux-saga/effects";

function* getAllNguoiHocSaga() {
  try {
    const response: AxiosResponse<INguoiHoc[]> =
      yield nguoiHocApi.getAllNguoiHoc();
    yield put(getAllNguoiHocSuccessAction(response.data));
  } catch (error) {
    yield put(getAllNguoiHocErrorAction(error));
  }
}

export function* watchGetAllNguoiHoc() {
  yield takeLatest(getAllNguoiHocAction, getAllNguoiHocSaga);
}

export default watchGetAllNguoiHoc;
