import mayTinhApi from "../../api/mayTinhApi";
import { AxiosResponse } from "axios";
import { IMayTinh } from "../../interface";
import { put, takeLatest } from "redux-saga/effects";
import {
  getAllMayTinhAction,
  getAllMayTinhErrorAction,
  getAllMayTinhSuccessAction,
} from "../slice/mayTinhSlice";

function* getAllMayTinhSaga() {
  try {
    const response: AxiosResponse<IMayTinh[]> =
      yield mayTinhApi.getAllMayTinh();

    yield put(getAllMayTinhSuccessAction(response.data));
  } catch (error) {
    yield put(getAllMayTinhErrorAction());
  }
}

function* watchGetAllMayTinh() {
  yield takeLatest(getAllMayTinhAction, getAllMayTinhSaga);
}

export default watchGetAllMayTinh;
