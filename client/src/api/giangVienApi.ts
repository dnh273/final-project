import axios from "axios";

const DOMAIN = "http://localhost:3000";

const giangVienApi = {
  getAllGiangVien: (q = "", size = "", page = "") => {
    return axios.get(
      `${DOMAIN}/api/v1/giangvien?q=${q}&size=${size}&page=${page}`
    );
  },
};

export default giangVienApi;
