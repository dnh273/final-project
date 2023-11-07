import { createSlice } from "@reduxjs/toolkit";
import { ISach } from "../../interface";

interface SachState {
  sachs: ISach[];
  isLoading: boolean;
  isError: boolean;
}

const initialState: SachState = {
  sachs: [],
  isLoading: false,
  isError: false,
};

const SachSlice = createSlice({
  initialState,
  name: "sach",
  reducers: {
    getAllSachAction: (state) => {
      state.isLoading = true;
    },
    getAllSachSuccessAction: (state, action) => {
      state.isLoading = false;
      console.log(action.payload);
      state.sachs = action.payload.ListSach;
    },
    getAllSachErrorAction: (state) => {
      state.isLoading = false;
      state.isError = true;
    },
  },
});

export const {
  getAllSachAction,
  getAllSachErrorAction,
  getAllSachSuccessAction,
} = SachSlice.actions;

const SachReducer = SachSlice.reducer;

export default SachReducer;
