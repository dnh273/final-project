import axiosPrivate from "./config/axios.private";

const phongKyTucApi = {
  getAllPhongKyTuc: () => axiosPrivate.get("phongkytuc"),
};

export default phongKyTucApi;
