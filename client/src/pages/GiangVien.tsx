import { useEffect } from "react";
import { useAppDispatch } from "../redux/hook";
import appRoutes from "../routes/appRoutes";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { getAllGiangVienAction } from "../features/slice/giangVienSlice";
import HeaderTitle from "../components/common/HeaderTitle";

const GiangVien = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllGiangVienAction());
  }, []);

  const location = useLocation();

  const pathname = location.pathname.split("/")[2];

  const title = appRoutes[1].child?.find((item) => {
    if (pathname) {
      return item.path == pathname;
    } else {
      return item.path == "";
    }
  });

  return (
    <>
      <HeaderTitle title={title?.sidebarProps?.showText} />
      <div className="mb-4 flex flex-wrap gap-2">
        {appRoutes[1].child?.map((item, index) => (
          <NavLink
            key={index}
            className="bg-orange-400 font-bold text-white px-4 py-2 rounded-lg whitespace-nowrap"
            to={`${item.path}`}
          >
            {item.sidebarProps?.displayText}
          </NavLink>
        ))}
      </div>
      <Outlet />
    </>
  );
};

export default GiangVien;
