import axiosPrivate from "./config/axios.private";

const nghiCuuKhoaHocApi = {
  getAllNghienCuuKhoaHoc: () => axiosPrivate.get("sach"),
};

export default nghiCuuKhoaHocApi;
