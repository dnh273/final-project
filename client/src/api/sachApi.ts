import axiosPrivate from "./config/axios.private";

const sachApi = {
  getAllSach: () => axiosPrivate.get("sach"),
};

export default sachApi;
