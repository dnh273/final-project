import { createSlice } from "@reduxjs/toolkit";
import { IGiangVien } from "../../interface";

interface GiangVienState {
  giangviens: IGiangVien[];
  filterGiangViens: IGiangVien[];
  isLoading: boolean;
  isError: boolean;

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
      state.giangviens = action.payload.ListOfGiangVien;
      state.filterGiangViens = action.payload.ListOfGiangVien;
    },
    getAllGiangVienErrorAction: (state, action) => {
      state.isLoading = false;
      state.isError = action.payload;
    },
    filterByKhoaAction: (state, action) => {
      const cloneGiangViens = [...state.giangviens];
      state.filterGiangViens = cloneGiangViens.filter((item) =>
        action.payload.length > 0 ? action.payload.includes(item.khoa) : true
      );
    },
    filterByHocViAction: (state, action) => {
      const cloneGiangViens = [...state.giangviens];
      state.filterGiangViens = cloneGiangViens.filter((item) =>
        action.payload.length > 0 ? action.payload.includes(item.hoc_vi) : true
      );
    },
    searchQueryAction: (state, action) => {
      if (action.payload) {
        const cloneGiangViens = [...state.filterGiangViens];
        state.filterGiangViens = cloneGiangViens.filter(
          (item) =>
            item.ho_ten
              .normalize()
              .toUpperCase()
              .includes(action.payload.normalize().toUpperCase()) ||
            item.email
              .normalize()
              .toUpperCase()
              .includes(action.payload.normalize().toUpperCase())
        );
      } else {
        state.filterGiangViens = [...state.giangviens];
      }
    },
  },
});

export const {
  getAllGiangVienAction,
  getAllGiangVienErrorAction,
  getAllGiangVienSuccessAction,
  filterByHocViAction,
  filterByKhoaAction,
  searchQueryAction,
} = GiangVienSlice.actions;

const giangVienReducer = GiangVienSlice.reducer;
export default giangVienReducer;
