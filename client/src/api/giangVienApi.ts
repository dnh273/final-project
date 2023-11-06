import axiosPrivate from "./config/axios.private";

const giangVienApi = {
  getAllGiangVien: () => axiosPrivate.get(`giangvien`),
};

export default giangVienApi;
