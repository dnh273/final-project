import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { INguoiHoc } from "../../interface";

interface NguoiHocState {
  nguoihocs: INguoiHoc[];
  filterNguoiHocs: INguoiHoc[];
  isLoading: boolean;
  isError: boolean;
}

interface FilterAction {
  filterNganh: string[];
  filterNamNhapHoc: string[];
}

const initialState: NguoiHocState = {
  nguoihocs: [],
  isLoading: false,
  isError: false,
  filterNguoiHocs: [],
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
      state.nguoihocs = action.payload.ListNguoiHoc;
      state.filterNguoiHocs = action.payload.ListNguoiHoc;
    },
    getAllNguoiHocErrorAction: (state, action) => {
      state.isLoading = false;
      state.isError = action.payload;
    },
    filterNguoiHocAction: (
      state,
      {
        payload: { filterNamNhapHoc, filterNganh },
      }: PayloadAction<FilterAction>
    ) => {
      state.filterNguoiHocs = [...state.nguoihocs]
        .filter((item) =>
          filterNamNhapHoc.length > 0
            ? filterNamNhapHoc.includes(item.nam_nhap_hoc)
            : true
        )
        .filter((item) =>
          filterNganh.length > 0
            ? filterNganh.includes(item.nganh_hoc.ten_nganh)
            : true
        );
    },
  },
});

export const {
  getAllNguoiHocErrorAction,
  getAllNguoiHocAction,
  getAllNguoiHocSuccessAction,
  filterNguoiHocAction,
} = NguoiHocSlice.actions;

const NguoiHocReducer = NguoiHocSlice.reducer;

export default NguoiHocReducer;
