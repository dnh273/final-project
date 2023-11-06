import axiosPrivate from "./config/axios.private";

const mayTinhApi = {
  getAllMayTinh: () => axiosPrivate.get("maytinh"),
};

export default mayTinhApi;
