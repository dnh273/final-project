import { ILogin } from "../interface";
import axiosPublic from "./config/axios.public";

const authApi = {
  login: (data: ILogin) => axiosPublic.post("auth/login", data),
};

export default authApi;
