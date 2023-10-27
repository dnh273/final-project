import axiosConfig from "./axiosConfig";

const sachApi = {
  getAllSach: () => axiosConfig.get("sach"),
};

export default sachApi;
