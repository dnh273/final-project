import { createSlice } from "@reduxjs/toolkit";
import { INghienCuuKhoaHoc } from "../../interface";

interface NghienCuuKhoaHocState {
  nghiencuukhoahocs: INghienCuuKhoaHoc[];
  isLoading: boolean;
  isError: boolean;
}

const initialState: NghienCuuKhoaHocState = {
  nghiencuukhoahocs: [],
  isLoading: false,
  isError: false,
};

const NghienCuuKhoaHocSlice = createSlice({
  initialState,
  name: "nghiencuukhoahoc",
  reducers: {
    getAllNghienCuuKhoaHocAction: (state) => {
      state.isLoading = true;
    },
    getAllNghienCuuKhoaHocSuccessAction: (state, action) => {
      state.isLoading = false;
      state.nghiencuukhoahocs = action.payload;
    },
    getAllNghienCuuKhoaHocErrorAction: (state) => {
      state.isLoading = false;
      state.isError = true;
    },
  },
});

export const {
  getAllNghienCuuKhoaHocAction,
  getAllNghienCuuKhoaHocErrorAction,
  getAllNghienCuuKhoaHocSuccessAction,
} = NghienCuuKhoaHocSlice.actions;

const NghienCuuKhoaHocReducer = NghienCuuKhoaHocSlice.reducer;

export default NghienCuuKhoaHocReducer;
