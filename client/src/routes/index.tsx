import { useRoutes } from "react-router-dom";
import { publicRoutes } from "./public.routes";
import { protectedRoutes } from "./protected.routes";
import { getToken } from "../utils/storage";

const AppRoutes = () => {
  const isAuth = getToken();

  const routes = isAuth ? protectedRoutes : publicRoutes;

  const element = useRoutes([...routes]);

  return element;
};

export default AppRoutes;
