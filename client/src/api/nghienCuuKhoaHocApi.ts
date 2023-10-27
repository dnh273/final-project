
import axiosConfig from "./axiosConfig";

const nghiCuuKhoaHocApi = {
  getAllNghienCuuKhoaHoc: () => axiosConfig.get("sach"),
};

export default nghiCuuKhoaHocApi;
