import appRoutes from "../../routes/appRoutes";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import HeaderTitle from "../../components/common/HeaderTitle";

const GiangVien = () => {
  const location = useLocation();

  const pathname = location.pathname.split("/")[2];

  const title = appRoutes[0].children?.find((item) => {
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
        {appRoutes[0].children?.map((item, index) => (
          <NavLink
            key={index}
            className="bg-blue-500 font-bold text-white px-4 py-2 rounded-lg whitespace-nowrap"
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
