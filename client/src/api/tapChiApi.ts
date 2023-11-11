import axiosPrivate from "./config/axios.private";

const tapChiApi = {
  getAllTapChi: () => axiosPrivate.get(`tapchi`),
};

export default tapChiApi;
