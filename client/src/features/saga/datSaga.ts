import datApi from "../../api/datApi";
import { AxiosResponse } from "axios";
import { IDat } from "../../interface";
import { put, takeLatest } from "redux-saga/effects";
import {
  getAllDatAction,
  getAllDatErrorAction,
  getAllDatSuccessAction,
} from "../slice/datSlice";

function* getAllDatSaga() {
  try {
    const response: AxiosResponse<IDat[]> = yield datApi.getAllDat();

    yield put(getAllDatSuccessAction(response.data));
  } catch (error) {
    yield put(getAllDatErrorAction());
  }
}

function* watchGetAllDat() {
  yield takeLatest(getAllDatAction, getAllDatSaga);
}

export default watchGetAllDat;
