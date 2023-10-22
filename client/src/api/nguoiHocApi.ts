import axios from "axios";

const DOMAIN = "http://localhost:3000";

const nguoiHocApi = {
  getAllNguoiHoc: () => {
    return axios.get(`${DOMAIN}/api/v1/nguoihoc`);
  },
};

export default nguoiHocApi;
