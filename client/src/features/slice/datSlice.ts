import { createSlice } from "@reduxjs/toolkit";
import { IDat } from "../../interface";

interface DatState {
  dats: IDat[];
  isLoading: boolean;
  isError: boolean;
}

const initialState: DatState = {
  dats: [],
  isLoading: false,
  isError: false,
};

const DatSlice = createSlice({
  initialState,
  name: "dat",
  reducers: {
    getAllDatAction: (state) => {
      state.isLoading = true;
    },
    getAllDatSuccessAction: (state, action) => {
      state.isLoading = false;
      console.log(action.payload);
      state.dats = action.payload.ListDat;
    },
    getAllDatErrorAction: (state) => {
      state.isLoading = false;
      state.isError = true;
    },
  },
});

export const { getAllDatAction, getAllDatErrorAction, getAllDatSuccessAction } =
  DatSlice.actions;

const DatReducer = DatSlice.reducer;

export default DatReducer;
