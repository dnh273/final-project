import axiosPrivate from "./config/axios.private";

const datApi = {
  getAllDat: () => axiosPrivate.get("dat"),
};

export default datApi;
