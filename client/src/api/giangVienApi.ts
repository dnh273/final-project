import axiosConfig from "./axiosConfig";

const giangVienApi = {
  getAllGiangVien: (q = "", size = "", page = "") =>
    axiosConfig.get(`giangvien?q=${q}&size=${size}&page=${page}`),
};

export default giangVienApi;
