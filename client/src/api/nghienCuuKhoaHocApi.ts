import axiosPrivate from "./config/axios.private";

const nghienCuuKhoaHocApi = {
  getAllNghienCuuKhoaHoc: () => axiosPrivate.get("nghiencuukhoahoc"),
};

export default nghienCuuKhoaHocApi;
