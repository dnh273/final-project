import axiosPrivate from "./config/axios.private";

const nguoiHocApi = {
  getAllNguoiHoc: () => axiosPrivate.get(`nguoihoc`),
};

export default nguoiHocApi;
