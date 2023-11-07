import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar";
import { useAppDispatch } from "../../redux/hook";
import { getAllGiangVienAction } from "../../features/slice/giangVienSlice";
import { getAllDatAction } from "../../features/slice/datSlice";
import { getAllNguoiHocAction } from "../../features/slice/nguoiHocSlice";
import { getAllMayTinhAction } from "../../features/slice/mayTinhSlice";
import { getAllSachAction } from "../../features/slice/sachSlice";

const MainLayout = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getAllGiangVienAction());
    dispatch(getAllDatAction());
    dispatch(getAllNguoiHocAction());
    dispatch(getAllMayTinhAction());
    dispatch(getAllSachAction());
  }, [dispatch]);

  return (
    <div>
      <Sidebar />
      <div className="p-4 p md:ml-64  h-full">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
