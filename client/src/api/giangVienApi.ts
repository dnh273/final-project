import axiosPrivate from "./config/axios.private";

const giangVienApi = {
  getAllGiangVien: (q = "", size = "", page = "") =>
    axiosPrivate.get(`giangvien?q=${q}&size=${size}&page=${page}`),
};

export default giangVienApi;
