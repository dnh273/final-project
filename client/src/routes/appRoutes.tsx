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
        sidebarProps: {
          displayText: "Danh sách giảng viên",
          showText: "Thống kê phân loại giảng viên",
        },
      },
      {
        path: "bang33",
        element: <ThongKeNhanSu />,
        sidebarProps: {
          displayText: "Bảng 33",
          showText:
            "Thống kê số lượng quản lý, giảng viên và nhân viên đơn vị thực hiện CTĐT ",
        },
      },
      {
        path: "bang34",
        element: <ThongKeSoLuongGiangVienTheoHamHocVi />,
        sidebarProps: {
          displayText: "Bảng 34",
          showText: "Thống kê phân loại giảng viên",
        },
      },
      {
        path: "bang35",
        element: <QuyDoiSoLuongGiangVien />,
        sidebarProps: {
          displayText: "Bảng 35",
          showText:
            "Quy đổi số lượng giảng viên của đơn vị thực hiện CTĐT theo quy định hiện hành của Bộ GDĐT ",
        },
      },
      {
        path: "bang36",
        element: <ThongKePhanLoaiGiangVienTheoTrinhDoGioiTInhDoTuoi />,
        sidebarProps: {
          displayText: "Bảng 36",
          showText:
            "Thống kê, phân loại giảng viên cơ hữu theo trình độ, giới tính và độ tuổi ",
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
      {
        path: "",
        element: <ThongKeSoNguoiNhapHoc />,
        sidebarProps: {
          displayText: "Bảng 38",
          showText:
            "Thống kê người đăng ký dự tuyển vào CTĐT, số người học trúng tuyển và nhập học trong 5 năm gần đây (hệ chính quy)",
        },
      },
      {
        path: "bang39",
        element: <ThongKeTheoChuongTrinhHoc />,
        sidebarProps: {
          displayText: "Bảng 39",
          showText:
            "Thống kê người đăng ký dự tuyển vào CTĐT, số người học trúng tuyển và nhập học trong 5 năm gần đây (hệ chính quy)",
        },
      },
      {
        path: "bang40",
        element: <ThongKeTiLeSinhVienQuocTe />,
        sidebarProps: {
          displayText: "Bảng 40",
          showText: "Thống kê số lượng sinh viên quốc tế 5 năm gần nhất ",
        },
      },
      {
        path: "bang43",
        element: <ThongKeTotNghiep />,
        sidebarProps: {
          displayText: "Bảng 43",
          showText:
            "Thống kê số lượng người học của CTĐT tốt nghiệp trong 5 năm gần đây",
        },
      },
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
