import axiosConfig from "./axiosConfig";

const nguoiHocApi = {
  getAllNguoiHoc: () => axiosConfig.get(`nguoihoc`),
};

export default nguoiHocApi;
