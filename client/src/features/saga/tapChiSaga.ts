import { ITapChi } from "../../interface";
import { AxiosResponse } from "axios";
import { takeLatest, put } from "redux-saga/effects";
import tapChiApi from "../../api/tapChiApi";
import {
  getAllTapChiAction,
  getAllTapChiErrorAction,
  getAllTapChiSuccessAction,
} from "../slice/tapChiSlice";

function* getAllTapChiSage() {
  try {
    // You can also export the axios call as a function.
    const response: AxiosResponse<ITapChi[]> = yield tapChiApi.getAllTapChi();
    yield put(getAllTapChiSuccessAction(response.data));
  } catch (error) {
    yield put(getAllTapChiErrorAction());
  }
}

// Generator function
export function* watchGetAllTapChi() {
  yield takeLatest(getAllTapChiAction, getAllTapChiSage);
}

export default watchGetAllTapChi;
