import { RouteType } from "./config";
import Dashboard from "../pages/Dashboard";
import GiangVien from "../pages/GiangVien";
import NguoiHoc from "../pages/NguoiHoc";
import ThanhTich from "../pages/ThanhTich";
import DanhSachBanLanhDao from "../components/giang_vien/DanhSachBanLanhDao";
import ThongKeNhanSu from "../components/giang_vien/ThongKeNhanSu";
import ThongKePhanLoaiGiangVienTheoTrinhDoGioiTInhDoTuoi from "../components/giang_vien/ThongKePhanLoaiGiangVienTheoTrinhDoGioiTinhDoTuoi";
import ThongKeSoLuongGiangVienTheoHamHocVi from "../components/giang_vien/ThongKeSoLuongGiangVienTheoHamHocVi";
import ThongKeSoNguoiNhapHoc from "../components/nguoi_hoc/ThongKeSoNguoiNhapHoc";
import ThongKeTheoChuongTrinhHoc from "../components/nguoi_hoc/ThongKeTheoChuongTrinhHoc";
import ThongKeTiLeSinhVienQuocTe from "../components/nguoi_hoc/ThongKeTiLeSinhVienQuocTe";
import ThongKeTotNghiep from "../components/nguoi_hoc/ThongKeTotNghiep";
import QuyDoiSoLuongGiangVien from "../components/giang_vien/QuyDoiSoLuongGiangVien";

const appRoutes: RouteType[] = [
  {
    path: "/",
    element: <Dashboard />,
    sidebarProps: {
      displayText: "Dashboard",
      icon: <i className="ri-bar-chart-2-fill"></i>,
    },
  },
  {
    path: "/giangvien",
    element: <GiangVien />,
    sidebarProps: {
      displayText: "Giảng Viên",
      icon: <i className="ri-user-2-fill"></i>,
    },
    child: [
      {
        path: "",
        element: <DanhSachBanLanhDao />,
        sidebarProps: { displayText: "Danh sách giảng viên" },
      },
      {
        path: "bang33",
        element: <ThongKeNhanSu />,
        sidebarProps: {
          displayText: "Bảng 33",
        },
      },
      {
        path: "bang34",
        element: <ThongKeSoLuongGiangVienTheoHamHocVi />,
        sidebarProps: {
          displayText: "Bảng 34",
        },
      },
      {
        path: "bang35",
        element: <QuyDoiSoLuongGiangVien />,
        sidebarProps: {
          displayText: "Bảng 35",
        },
      },
      {
        path: "bang36",
        element: <ThongKePhanLoaiGiangVienTheoTrinhDoGioiTInhDoTuoi />,
        sidebarProps: {
          displayText: "Bảng 36",
        },
      },
    ],
  },
  {
    path: "/nguoihoc",
    element: <NguoiHoc />,
    sidebarProps: {
      displayText: "Người học",
      icon: <i className="ri-parent-line"></i>,
    },
    child: [
      { path: "", element: <ThongKeSoNguoiNhapHoc /> },
      { path: "bang2", element: <ThongKeTheoChuongTrinhHoc /> },
      {
        path: "bang3",
        element: <ThongKeTiLeSinhVienQuocTe />,
      },
      { path: "bang4", element: <ThongKeTotNghiep /> },
    ],
  },
  {
    path: "/thanhtich",
    element: <ThanhTich />,
    sidebarProps: {
      displayText: "Thành tích",
      icon: <i className="ri-award-fill"></i>,
    },
  },
];

export default appRoutes;
