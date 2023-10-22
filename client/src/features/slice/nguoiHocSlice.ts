import { createSlice } from "@reduxjs/toolkit";
import { INguoiHoc } from "../../interface";

interface NguoiHocState {
  nguoihocs: INguoiHoc[];
  isLoading: boolean;
  isError: boolean;
}

const initialState: NguoiHocState = {
  nguoihocs: [],
  isLoading: false,
  isError: false,
};

const NguoiHocSlice = createSlice({
  name: "nguoihoc",
  initialState,
  reducers: {
    getAllNguoiHocAction: (state) => {
      state.isLoading = true;
    },
    getAllNguoiHocSuccessAction: (state, action) => {
      state.isLoading = false;
      state.nguoihocs = action.payload;
    },
    getAllNguoiHocErrorAction: (state, action) => {
      state.isLoading = false;
      state.isError = action.payload;
    },
  },
});

export const {
  getAllNguoiHocErrorAction,
  getAllNguoiHocAction,
  getAllNguoiHocSuccessAction,
} = NguoiHocSlice.actions;

const NguoiHocReducer = NguoiHocSlice.reducer;

export default NguoiHocReducer;
