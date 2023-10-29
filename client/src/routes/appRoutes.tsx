import { RouteType } from "./config";
import GiangVien from "../pages/GiangVien";
import NguoiHoc from "../pages/NguoiHoc";
import ThanhTich from "../pages/ThanhTich";
import DanhSachBanLanhDao from "../components/giang_vien/DanhSachBanLanhDao";
import Bang33 from "../components/giang_vien/Bang33";
import Bang34 from "../components/giang_vien/Bang34";
import Bang35 from "../components/giang_vien/Bang35";
import Bang36 from "../components/giang_vien/Bang36";
import Bang38 from "../components/nguoi_hoc/Bang38";
import Bang39 from "../components/nguoi_hoc/Bang39";
import Bang40 from "../components/nguoi_hoc/Bang40";
import Bang41 from "../components/nguoi_hoc/Bang41";
import Bang42 from "../components/nguoi_hoc/Bang42";
import Bang43 from "../components/nguoi_hoc/Bang43";
import Bang45 from "../components/thanh_tich/Bang45";
import Bang46 from "../components/thanh_tich/Bang46";
import Bang47 from "../components/thanh_tich/Bang47";
import Bang48 from "../components/thanh_tich/Bang48";
import Bang49 from "../components/thanh_tich/Bang49";
import Bang50 from "../components/thanh_tich/Bang50";
import Bang51 from "../components/thanh_tich/Bang51";
import Bang52 from "../components/thanh_tich/Bang52";
import Bang53 from "../components/thanh_tich/Bang53";

const appRoutes: RouteType[] = [
  {
    path: "/",
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
        element: <Bang33 />,
        sidebarProps: {
          displayText: "Bảng 33",
          showText:
            "Thống kê số lượng quản lý, giảng viên và nhân viên đơn vị thực hiện CTĐT ",
        },
      },
      {
        path: "bang34",
        element: <Bang34 />,
        sidebarProps: {
          displayText: "Bảng 34",
          showText: "Thống kê phân loại giảng viên",
        },
      },
      {
        path: "bang35",
        element: <Bang35 />,
        sidebarProps: {
          displayText: "Bảng 35",
          showText:
            "Quy đổi số lượng giảng viên của đơn vị thực hiện CTĐT theo quy định hiện hành của Bộ GDĐT ",
        },
      },
      {
        path: "bang36",
        element: <Bang36 />,
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
        element: <Bang38 />,
        sidebarProps: {
          displayText: "Bảng 38",
          showText:
            "Thống kê người đăng ký dự tuyển vào CTĐT, số người học trúng tuyển và nhập học trong 5 năm gần đây (hệ chính quy)",
        },
      },
      {
        path: "bang39",
        element: <Bang39 />,
        sidebarProps: {
          displayText: "Bảng 39",
          showText:
            "Thống kê, phân loại số lượng người học theo học CTĐT trong 5 năm gần đây các hệ chính quy và không chính quy",
        },
      },
      {
        path: "bang40",
        element: <Bang40 />,
        sidebarProps: {
          displayText: "Bảng 40",
          showText: "Thống kê số lượng sinh viên quốc tế 5 năm gần nhất ",
        },
      },
      {
        path: "bang41",
        element: <Bang41 />,
        sidebarProps: {
          displayText: "Bảng 41",
          showText:
            "Thống kê số lượng người học các CTĐT có nhu cầu ở ký túc xá",
        },
      },
      {
        path: "bang42",
        element: <Bang42 />,
        sidebarProps: {
          displayText: "Bảng 42",
          showText:
            "Thống kê số lượng (người ) và tỷ lệ (%) người học của CTĐT tham gia nghiên cứu khoa học ",
        },
      },
      {
        path: "bang43",
        element: <Bang43 />,
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
    child: [
      {
        path: "",
        element: <Bang45 />,
        sidebarProps: {
          displayText: "Bảng 45",
          showText:
            "Số lượng đề tài nghiên cứu khoa học và chuyển giao khoa học công nghệ của đơn vị thực hiện CTĐT được nghiệm thu trong 5 năm gần đây",
        },
      },
      {
        path: "bang46",
        element: <Bang46 />,
        sidebarProps: {
          displayText: "Bảng 46",
          showText:
            "Doanh thu từ nghiên cứu khoa học và chuyển giao công nghệ của đơn vị thực hiện CTĐT trong 5 năm gần đây",
        },
      },
      {
        path: "bang47",
        element: <Bang47 />,
        sidebarProps: {
          displayText: "Bảng 47",
          showText:
            "Số lượng đội ngũ cơ hữu của đơn vị thực hiện CTĐT tham gia thực hiện đề tài khoa học trong 05 năm gần đây",
        },
      },
      {
        path: "bang48",
        element: <Bang48 />,
        sidebarProps: {
          displayText: "Bảng 48",
          showText:
            "Số lượng đầu sách của đơn vị thực hiện CTĐT được xuất bản trong 5 năm gần đây",
        },
      },
      {
        path: "bang49",
        element: <Bang49 />,
        sidebarProps: {
          displayText: "Bảng 49",
          showText:
            "Số lượng đội ngũ cơ hữu của đơn vị thực hiện CTĐT tham gia viết sách 5 năm gần đây",
        },
      },
      {
        path: "bang50",
        element: <Bang50 />,
        sidebarProps: {
          displayText: "Bảng 50",
          showText:
            "Số lượng bài của đội ngũ cơ hữu đơn vị thực hiện CTĐT được đăng tạp chí trong 5 năm gần đây",
        },
      },
      {
        path: "bang51",
        element: <Bang51 />,
        sidebarProps: {
          displayText: "Bảng 51",
          showText:
            "Số lượng đội ngũ cơ hữu của đơn vị thực hiện CTĐT tham gia viết bài đăng tạp chí trong 5 năm gần đây",
        },
      },
      {
        path: "bang52",
        element: <Bang52 />,
        sidebarProps: {
          displayText: "Bảng 52",
          showText:
            " Số lượng báo cáo khoa học do đội ngũ cơ hữu của đơn vị thực hiện CTĐT báo cáo tại các hội nghị, hội thảo, được đăng toàn văn trong tuyển tập công trình hay kỷ yếu trong 5 năm gần đây",
        },
      },
      {
        path: "bang53",
        element: <Bang53 />,
        sidebarProps: {
          displayText: "Bảng 53",
          showText:
            "Số lượng đội ngũ cơ hữu của đơn vị thực hiện CTĐT có báo cáo khoa học tại các hội nghị, hội thảo được đăng toàn văn trong tuyển tập công trình hay kỷ yếu trong 05 năm gần đây",
        },
      },
    ],
  },
];

export default appRoutes;
