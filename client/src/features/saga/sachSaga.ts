import { ISach } from "../../interface";
import { AxiosResponse } from "axios";
import { takeLatest, put } from "redux-saga/effects";
import sachApi from "../../api/sachApi";
import {
  getAllSachAction,
  getAllSachErrorAction,
  getAllSachSuccessAction,
} from "../slice/sachSlice";

function* getAllSachSage() {
  try {
    // You can also export the axios call as a function.
    const response: AxiosResponse<ISach[]> = yield sachApi.getAllSach();
    yield put(getAllSachSuccessAction(response.data));
  } catch (error) {
    yield put(getAllSachErrorAction());
  }
}

// Generator function
export function* watchGetAllSach() {
  yield takeLatest(getAllSachAction, getAllSachSage);
}

export default watchGetAllSach;
