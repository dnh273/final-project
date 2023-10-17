import React from "react";
import ThongKeSoNguoiNhapHoc from "../components/nguoi_hoc/ThongKeSoNguoiNhapHoc";
import HeaderTitle from "../components/common/HeaderTitle";
import appRoutes from "../routes/appRoutes";
import { NavLink, Outlet } from "react-router-dom";

const NguoiHoc = () => {
  return (
    <>
      <HeaderTitle title="Quản lý người học" />
      <div className="mb-4">
        {appRoutes[2].child?.map((item, index) => (
          <NavLink
            className="bg-orange-400 font-bold text-white mr-2 px-4 py-2 rounded-lg"
            to={`${item.path}`}
          >
            Bảng {index + 1}
          </NavLink>
        ))}
      </div>
      <Outlet />
    </>
  );
};

export default NguoiHoc;
