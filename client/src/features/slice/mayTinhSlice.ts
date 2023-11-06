import { createSlice } from "@reduxjs/toolkit";
import { IMayTinh } from "../../interface";

interface MayTinhState {
  mayTinhs: IMayTinh[];
  isLoading: boolean;
  isError: boolean;
}

const initialState: MayTinhState = {
  mayTinhs: [],
  isLoading: false,
  isError: false,
};

const MayTinhSlice = createSlice({
  initialState,
  name: "mayTinh",
  reducers: {
    getAllMayTinhAction: (state) => {
      state.isLoading = true;
    },
    getAllMayTinhSuccessAction: (state, action) => {
      state.isLoading = false;
      state.mayTinhs = action.payload.ListMayTinh;
    },
    getAllMayTinhErrorAction: (state) => {
      state.isLoading = false;
      state.isError = true;
    },
  },
});

export const {
  getAllMayTinhAction,
  getAllMayTinhErrorAction,
  getAllMayTinhSuccessAction,
} = MayTinhSlice.actions;

const MayTinhReducer = MayTinhSlice.reducer;

export default MayTinhReducer;
