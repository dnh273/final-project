import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar";
import { useAppDispatch } from "../../redux/hook";
import { getAllGiangVienAction } from "../../features/slice/giangVienSlice";
import { getAllDatAction } from "../../features/slice/datSlice";
import { getAllNguoiHocAction } from "../../features/slice/nguoiHocSlice";
import { getAllMayTinhAction } from "../../features/slice/mayTinhSlice";
import { getAllSachAction } from "../../features/slice/sachSlice";
import { getAllPhongKyTucAction } from "../../features/slice/phongKyTucSlice";
import { getAllTapChiAction } from "../../features/slice/tapChiSlice";
import { getAllNghienCuuKhoaHocAction } from "../../features/slice/nghienCuuKhoaHocSlice";

const MainLayout = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getAllGiangVienAction());
    dispatch(getAllDatAction());
    dispatch(getAllNguoiHocAction());
    dispatch(getAllMayTinhAction());
    dispatch(getAllSachAction());
    dispatch(getAllPhongKyTucAction());
    dispatch(getAllTapChiAction());
    dispatch(getAllNghienCuuKhoaHocAction());
  }, [dispatch]);

  return (
    <div>
      <Sidebar />
      <div className="p-4 p md:ml-64  h-full">
        <h3 className="font-bold text-3xl">
          QUẢN LÝ CHẤT LƯỢNG GIÁO DỤC ĐẠI HỌC CÔNG NGHỆ
        </h3>
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
