import axios from "axios";
import { DOMAIN } from "../../constants/config";

const axiosPublic = axios.create({
  baseURL: `${DOMAIN}/api/v1/`,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosPublic;
