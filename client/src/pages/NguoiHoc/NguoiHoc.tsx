import HeaderTitle from "../../components/common/HeaderTitle";
import appRoutes from "../../routes/appRoutes";
import { NavLink, Outlet, useLocation } from "react-router-dom";

const NguoiHoc = () => {



  const location = useLocation();

  const pathname = location.pathname.split("/")[2];

  const title = appRoutes[1].children?.find((item) => {
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
        {appRoutes[1].children?.map((item, index) => (
          <NavLink
            key={index}
            className="bg-orange-400 font-bold text-white mr-2 px-4 py-2 rounded-lg"
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

export default NguoiHoc;
