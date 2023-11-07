import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import GiangVienReducer from "../features/slice/giangVienSlice";
import rootSaga from "./rootSage";
import NguoiHocReducer from "../features/slice/nguoiHocSlice";
import NghienCuuKhoaHocReducer from "../features/slice/nghienCuuKhoaHocSlice";
import DatReducer from "../features/slice/datSlice";
import MayTinhReducer from "../features/slice/mayTinhSlice";
import SachReducer from "../features/slice/sachSlice";
// ...

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    giangvien: GiangVienReducer,
    nguoihoc: NguoiHocReducer,
    nghiencuukhoahoc: NghienCuuKhoaHocReducer,
    dat: DatReducer,
    maytinh: MayTinhReducer,
    sach: SachReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
