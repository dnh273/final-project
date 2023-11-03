import axios, { AxiosInstance } from "axios";
import { DOMAIN } from "../../constants/config";
import { getToken, removeToken } from "../../utils/storage";
import { useNavigate } from "react-router-dom";

const axiosPrivate: AxiosInstance = axios.create({
  baseURL: `${DOMAIN}/api/v1/`,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosPrivate.interceptors.request.use(
  function (config) {
    const accessToken = getToken();
    config.headers["Authorization"] = `Bearer ${accessToken}`;
    return config;
  },
  (error) => Promise.reject(error)
);

axiosPrivate.interceptors.response.use(
  function (response) {
    return response;
  },
  (error) => {
    const navigate = useNavigate();
    if (error.response.status === 401) {
      removeToken();
      navigate("/auth/login");
    }
    return Promise.reject(error);
  }
);

export default axiosPrivate;
