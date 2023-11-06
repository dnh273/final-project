import axiosPrivate from "./config/axios.private";

const nghienCuuKhoaHocApi = {
  getAllNghienCuuKhoaHoc: () => axiosPrivate.get("sach"),
};

export default nghienCuuKhoaHocApi;
