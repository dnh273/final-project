import { createSlice } from "@reduxjs/toolkit";
import { ITapChi } from "../../interface";

interface TapChiState {
  tapchis: ITapChi[];
  isLoading: boolean;
  isError: boolean;
}

const initialState: TapChiState = {
  tapchis: [],
  isError: false,
  isLoading: false,
};

const TapChiSlice = createSlice({
  name: "tapchi",
  initialState,
  reducers: {
    getAllTapChiAction: (state) => {
      state.isLoading = true;
    },
    getAllTapChiSuccessAction: (state, action) => {
      state.isLoading = false;
      state.tapchis = action.payload.ListTapChi;
    },
    getAllTapChiErrorAction: (state) => {
      state.isLoading = false;
      state.isError = true;
    },
  },
});

export const {
  getAllTapChiAction,
  getAllTapChiErrorAction,
  getAllTapChiSuccessAction,
} = TapChiSlice.actions;

const TapChiReducer = TapChiSlice.reducer;
export default TapChiReducer;
