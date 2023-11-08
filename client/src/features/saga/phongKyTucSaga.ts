import phongKyTucApi from "../../api/phongKyTucApi";
import { AxiosResponse } from "axios";
import { IPhongKyTuc } from "../../interface";
import { put, takeLatest } from "redux-saga/effects";
import {
  getAllPhongKyTucAction,
  getAllPhongKyTucErrorAction,
  getAllPhongKyTucSuccessAction,
} from "../slice/phongKyTucSlice";

function* getAllPhongKyTucSaga() {
  try {
    const response: AxiosResponse<IPhongKyTuc[]> =
      yield phongKyTucApi.getAllPhongKyTuc();

    yield put(getAllPhongKyTucSuccessAction(response.data));
  } catch (error) {
    yield put(getAllPhongKyTucErrorAction());
  }
}

function* watchGetAllPhongKyTuc() {
  yield takeLatest(getAllPhongKyTucAction, getAllPhongKyTucSaga);
}

export default watchGetAllPhongKyTuc;
