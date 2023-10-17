import appRoutes from "../routes/appRoutes";
import { NavLink, Outlet } from "react-router-dom";


const GiangVien = () => {
  

  return (
    <>
      <div className="mb-4 flex">
        {appRoutes[1].child?.map((item, index) => (
          <NavLink
            key={index}
            className="bg-orange-400 font-bold text-white mr-2 px-4 py-2 rounded-lg whitespace-nowrap"
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
