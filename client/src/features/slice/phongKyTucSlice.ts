import { createSlice } from "@reduxjs/toolkit";
import { IPhongKyTuc } from "../../interface";

interface PhongKyTucState {
  phongkytucs: IPhongKyTuc[];
  isLoading: boolean;
  isError: boolean;
}

const initialState: PhongKyTucState = {
  phongkytucs: [],
  isLoading: false,
  isError: false,
};

const PhongKyTucSlice = createSlice({
  initialState,
  name: "phongkytuc",
  reducers: {
    getAllPhongKyTucAction: (state) => {
      state.isLoading = true;
    },
    getAllPhongKyTucSuccessAction: (state, action) => {
      state.isLoading = false;
      state.phongkytucs = action.payload.ListPhongKyTuc;
    },
    getAllPhongKyTucErrorAction: (state) => {
      state.isLoading = false;
      state.isError = true;
    },
  },
});

export const {
  getAllPhongKyTucAction,
  getAllPhongKyTucErrorAction,
  getAllPhongKyTucSuccessAction,
} = PhongKyTucSlice.actions;

const PhongKyTucReducer = PhongKyTucSlice.reducer;

export default PhongKyTucReducer;
