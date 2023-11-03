import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IGiangVien } from "../../interface";

interface GiangVienState {
  giangviens: IGiangVien[];
  filterGiangViens: IGiangVien[];
  isLoading: boolean;
  isError: boolean;
}

interface FilterGiangVienAction {
  filterKhoa: string[];
  filterHocVi: string[];
  query: string;
}

const initialState: GiangVienState = {
  giangviens: [],
  filterGiangViens: [],
  isError: false,
  isLoading: false,
};

const GiangVienSlice = createSlice({
  name: "giangvien",
  initialState,
  reducers: {
    getAllGiangVienAction: (state) => {
      state.isLoading = true;
    },
    getAllGiangVienSuccessAction: (state, action) => {
      state.isLoading = false;
      console.log(action.payload);
      state.giangviens = action.payload.ListGiangVien;
      state.filterGiangViens = action.payload.ListGiangVien;
    },
    getAllGiangVienErrorAction: (state, action) => {
      state.isLoading = false;
      state.isError = action.payload;
    },
    filterGiangVienAction: (
      state,
      {
        payload: { filterHocVi, filterKhoa, query },
      }: PayloadAction<FilterGiangVienAction>
    ) => {
  
      state.filterGiangViens = [...state.giangviens]
        .filter((item) =>
          filterHocVi.length > 0 ? filterHocVi.includes(item.hoc_vi) : true
        )
        .filter((item) =>
          filterKhoa.length > 0 ? filterKhoa.includes(item.khoa) : true
        )
        .filter(
          (item) =>
            item.ho_ten
              .normalize()
              .toUpperCase()
              .includes(query.normalize().toUpperCase()) ||
            item.email
              .normalize()
              .toUpperCase()
              .includes(query.normalize().toUpperCase())
        );
    },
  },
});

export const {
  getAllGiangVienAction,
  getAllGiangVienErrorAction,
  getAllGiangVienSuccessAction,
  filterGiangVienAction,
} = GiangVienSlice.actions;

const GiangVienReducer = GiangVienSlice.reducer;
export default GiangVienReducer;
