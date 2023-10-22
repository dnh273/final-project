import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import giangVienReducer from "../features/slice/giangVienSlice";
import rootSaga from "./rootSage";
import NguoiHocReducer from "../features/slice/nguoiHocSlice";
// ...

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    giangvien: giangVienReducer,
    nguoihoc: NguoiHocReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
