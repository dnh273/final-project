import React from "react";
import { IGiangVien } from "../../interface";
import { useAppSelector } from "../../redux/hook";
import { total } from "../../utils";
import SkeletonTable from "../common/SkeletonTable";
import NotFoundTable from "../common/NotFoundTable";

const ThongKeNhanSu = () => {
  const { giangviens, isLoading } = useAppSelector((state) => state.giangvien);

  const HopDong = {
    BienCheNam: (ele: IGiangVien) =>
      ele.gioi_tinh == "Nam" && ele.loai_hop_dong == "Trong biên chế",
    BienCheNu: (ele: IGiangVien) =>
      ele.gioi_tinh == "Nữ" && ele.loai_hop_dong == "Trong biên chế",
    DaiHanNam: (ele: IGiangVien) =>
      ele.gioi_tinh == "Nam" && ele.loai_hop_dong == "Hợp đồng dài hạn",
    DaiHaiNu: (ele: IGiangVien) =>
      ele.gioi_tinh == "Nữ" && ele.loai_hop_dong == "Hợp đồng dài hạn",
    NganHanNam: (ele: IGiangVien) =>
      ele.gioi_tinh == "Nam" &&
      (ele.loai_hop_dong == "Hợp đồng ngắn hạn" ||
        ele.loai_hop_dong == "Giảng viên thỉnh giảng" ||
        ele.loai_hop_dong == "Giảng viên quốc tế"),
    NganHanNu: (ele: IGiangVien) =>
      ele.gioi_tinh == "Nữ" &&
      (ele.loai_hop_dong == "Hợp đồng ngắn hạn" ||
        ele.loai_hop_dong == "Giảng viên thỉnh giảng" ||
        ele.loai_hop_dong == "Giảng viên quốc tế"),
  };

  const countBienCheNam = () => {
    return giangviens.filter(HopDong.BienCheNam).length;
  };
  const countBienCheNu = () => {
    return giangviens.filter(HopDong.BienCheNu).length;
  };
  const countDaiHanNam = () => {
    return giangviens.filter(HopDong.DaiHanNam).length;
  };
  const countDaiHanNu = () => {
    return giangviens.filter(HopDong.DaiHaiNu).length;
  };
  const countNganHanNam = () => {
    return giangviens.filter(HopDong.NganHanNam).length;
  };
  const countNganHanNu = () => {
    return giangviens.filter(HopDong.NganHanNu).length;
  };

  const countCoHuuNam = () => {
    return countBienCheNam() + countDaiHanNam();
  };

  const countCoHuuNu = () => {
    return countBienCheNu() + countDaiHanNu();
  };

  const totalDaiHan = total(countDaiHanNam(), countDaiHanNu());
  const totalNganHan = total(countNganHanNam(), countNganHanNu());
  const totalBienChe = total(countBienCheNam(), countBienCheNu());
  const totalCoHuuNam = total(countBienCheNam(), countDaiHanNam());
  const totalCoHuuNu = total(countBienCheNu(), countDaiHanNu());
  const totalCoHuu = total(totalBienChe, totalDaiHan);
  const totalSoNam = total(countCoHuuNam(), countNganHanNam());
  const totalSoNu = total(countNganHanNu(), countCoHuuNu());
  const totalSoNamNu = total(totalSoNam, totalSoNu);

  const renderTable = () => {
    if (isLoading) {
      return <SkeletonTable />;
    }

    if (giangviens.length === 0) {
      return <NotFoundTable />;
    }

    return (
      <>
        <tr className=" ">
          <td className="px-6 py-3 font-bold">I</td>
          <td className="px-6 py-3 ">Đội ngũ cơ hữu</td>
          <td className="px-6 py-3">{`${totalCoHuuNam}`}</td>
          <td className="px-6 py-3">{`${totalCoHuuNu}`}</td>
          <td className="px-6 py-3">{`${totalCoHuu}`}</td>
        </tr>
        <tr className=" ">
          <td className="px-6 py-3 font-bold">I.1</td>
          <td className="px-6 py-3 ">Đội ngũ trong biên chế</td>
          <td className="px-6 py-3">{`${countBienCheNam()}`}</td>
          <td className="px-6 py-3">{`${countBienCheNu()}`}</td>

          <td className="px-6 py-3">{`${totalBienChe}`}</td>
        </tr>
        <tr className=" ">
          <td className="px-6 py-3 font-bold">I.2</td>
          <td className="px-6 py-3 ">
            Đội ngũ hợp đồng dài hạn (1 năm trở lên ) và không xác định thời hạn
          </td>
          <td className="px-6 py-3">{`${countDaiHanNam()}`}</td>
          <td className="px-6 py-3">{`${countDaiHanNu()}`}</td>

          <td className="px-6 py-3">{`${totalDaiHan}`}</td>
        </tr>
        <tr className=" ">
          <td className="px-6 py-3 font-bold">II</td>
          <td className="px-6 py-3 ">
            Các đối tượng khác (hợp đồng dưới 1 năm hoặc giảng viên thỉnh giảng)
          </td>
          <td className="px-6 py-3">{`${countNganHanNam()}`}</td>
          <td className="px-6 py-3">{`${countNganHanNu()}`}</td>
          <td className="px-6 py-3">{`${totalNganHan}`}</td>
        </tr>
        <tr className="bg-gray-200 ">
          <td className="px-6 py-3 "></td>
          <td className="px-6 py-3 font-bold ">Tổng số</td>
          <td className="px-6 py-3">{totalSoNam}</td>
          <td className="px-6 py-3">{totalSoNu}</td>
          <td className="px-6 py-3">{totalSoNamNu}</td>
        </tr>
      </>
    );
  };

  return (
    <>
      <div className="relative overflow-x-auto shadow-md rounded-lg">
        <table className="w-full text-sm text-left ">
          <thead className="text-xs text-black uppercase bg-gray-50">
            <tr>
              <th className="px-6 py-3 ">TT</th>
              <th className="px-6 py-3">Phân loại</th>
              <th className="px-6 py-3">Nam</th>
              <th className="px-6 py-3">Nữ</th>
              <th className="px-6 py-3">Tổng số</th>
            </tr>
          </thead>
          <tbody>{renderTable()}</tbody>
        </table>
      </div>
    </>
  );
};

export default ThongKeNhanSu;
