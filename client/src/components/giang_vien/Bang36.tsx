import React from "react";
import data from "../../data/GiangVien.json";
import { IGiangVien } from "../../interface";
import { useAppSelector } from "../../redux/hook";
import SkeletonTable from "../common/SkeletonTable";
import NotFoundTable from "../common/NotFoundTable";

const Bang36 = () => {
  const { giangviens, isLoading } = useAppSelector((state) => state.giangvien);

  const giangviensCoHuu = giangviens.filter(
    (item) =>
      item.loai_hop_dong != "Giảng viên quốc tế" &&
      item.loai_hop_dong != "Giảng viên thỉnh giảng"
  );

  const filterByHocVi = (hoc_vi: string) => {
    return giangviensCoHuu.filter((item) => item.hoc_vi == hoc_vi);
  };

  const filterByGioiTinh = (gioi_tinh: string, arrData: IGiangVien[]) => {
    return arrData.filter((item) => item.gioi_tinh == gioi_tinh);
  };

  const filterByAge = (underAge: number, arrData: IGiangVien[]) => {
    const today = new Date();

    switch (underAge) {
      case 30:
        return arrData.filter(
          (item) => today.getFullYear() - item.nam_sinh <= 30
        );
      case 40:
        return arrData.filter(
          (item) =>
            today.getFullYear() - item.nam_sinh > 30 &&
            today.getFullYear() - item.nam_sinh <= 40
        );
      case 50:
        return arrData.filter(
          (item) =>
            today.getFullYear() - item.nam_sinh > 40 &&
            today.getFullYear() - item.nam_sinh <= 50
        );
      case 60:
        return arrData.filter(
          (item) =>
            today.getFullYear() - item.nam_sinh > 50 &&
            today.getFullYear() - item.nam_sinh <= 60
        );
      case 70:
        return arrData.filter(
          (item) => today.getFullYear() - item.nam_sinh > 60
        );

      default:
        break;
    }
  };

  const GIAOSU = filterByHocVi("Giáo sư");
  const PHOGIAOSU = filterByHocVi("Phó giáo sư");
  const TIENSU = filterByHocVi("Tiến sĩ");
  const THACSI = filterByHocVi("Thạc sĩ");
  const DAIHOC = filterByHocVi("Đại học");

  const arrGiangVien = [GIAOSU, PHOGIAOSU, THACSI, TIENSU, DAIHOC];

  const renderTable = () => {
    if (isLoading) {
      return <SkeletonTable colSpan={11} />;
    }

    if (giangviens.length === 0) {
      return <NotFoundTable colSpan={11} className="h-52" />;
    }

    return (
      <>
        {arrGiangVien?.map((item, index) => {
          return (
            <tr key={index}>
              <td className="px-6 py-3">{index + 1}</td>
              <td className="px-6 py-3">{item[0]?.hoc_vi}</td>
              <td className="px-6 py-3">{`${item?.length}`}</td>
              <td className="px-6 py-3">{`${Math.floor(
                (item.length / data.length) * 100
              )}%`}</td>
              <td className="px-6 py-3">
                {filterByGioiTinh("Nam", item)?.length}
              </td>
              <td className="px-6 py-3">
                {filterByGioiTinh("Nữ", item)?.length}
              </td>
              <td className="px-6 py-3">{filterByAge(30, item)?.length}</td>
              <td className="px-6 py-3">{filterByAge(40, item)?.length}</td>
              <td className="px-6 py-3">{filterByAge(50, item)?.length}</td>
              <td className="px-6 py-3">{filterByAge(60, item)?.length}</td>
              <td className="px-6 py-3">{filterByAge(70, item)?.length}</td>
            </tr>
          );
        })}
        <tr className="bg-gray-200">
          <td className="px-6 py-3 font-bold">{arrGiangVien.length + 1}</td>
          <td className="px-6 py-3 font-bold">Tổng số</td>
          <td className="px-6 py-3 font-bold">{`${giangviensCoHuu.length}`}</td>
          <td className="px-6 py-3 font-bold">{`${Math.floor(
            (giangviensCoHuu.length / giangviensCoHuu.length) * 100
          )}%`}</td>
          <td className="px-6 py-3 font-bold">
            {filterByGioiTinh("Nam", giangviensCoHuu).length}
          </td>
          <td className="px-6 py-3 font-bold">
            {filterByGioiTinh("Nữ", giangviensCoHuu).length}
          </td>
          <td className="px-6 py-3 font-bold">
            {filterByAge(30, giangviensCoHuu)?.length}
          </td>
          <td className="px-6 py-3 font-bold">
            {filterByAge(40, giangviensCoHuu)?.length}
          </td>
          <td className="px-6 py-3 font-bold">
            {filterByAge(50, giangviensCoHuu)?.length}
          </td>
          <td className="px-6 py-3 font-bold">
            {filterByAge(60, giangviensCoHuu)?.length}
          </td>
          <td className="px-6 py-3 font-bold">
            {filterByAge(70, giangviensCoHuu)?.length}
          </td>
        </tr>
      </>
    );
  };

  const calculateAverageAgeCoHuu = () => {
    const year = new Date();

    const currentYear = year.getFullYear();

    return (
      giangviensCoHuu.reduce(
        (total, item) => total + currentYear - item.nam_sinh,
        0
      ) / giangviensCoHuu.length
    );
  };

  return (
    <>
      <div className="relative overflow-x-auto shadow-md rounded-lg">
        <table className="w-full text-sm text-left text-black">
          <thead className="text-xs text-black uppercase bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-black" rowSpan={2}>
                STT
              </th>
              <th className="px-6 py-3 text-black" rowSpan={2}>
                Trình độ/ học vị
              </th>
              <th className="px-6 py-3 text-black" rowSpan={2}>
                Số lượng
              </th>
              <th className="px-6 py-3 text-black" rowSpan={2}>
                Tỉ lệ (%)
              </th>
              <th className="px-6 py-3 text-center" colSpan={2}>
                Phân loại theo giới tính
              </th>
              <th className="px-6 py-3 text-center" colSpan={5}>
                Phân loại theo độ tuổi
              </th>
            </tr>
            <tr>
              <th className="px-6 py-3">Nam</th>
              <th className="px-6 py-3">Nữ</th>
              <th className="px-6 py-3">{`<`}30</th>
              <th className="px-6 py-3">31-40</th>
              <th className="px-6 py-3">41-50</th>
              <th className="px-6 py-3">51-60</th>
              <th className="px-6 py-3">{`>`}60</th>
            </tr>
          </thead>
          <tbody>{renderTable()}</tbody>
        </table>
      </div>
      <div className="flex flex-col gap-2 pt-6 font-semibold">
        <p>
          Tuổi trung bình của giảng viên cơ hữu :{" "}
          {Math.round(calculateAverageAgeCoHuu())}
        </p>
        <p>
          Tỷ lệ giảng viên cơ hữu có trình độ tiến sĩ trở lên trên tổng số giảng
          viên cơ hữu của đơn vị thực hiện CTĐT :{" "}
          {((TIENSU.length / giangviensCoHuu.length) * 100).toLocaleString()}%
        </p>
        <p>
          Tỷ lệ giảng viên cơ hữu có trình độ thạc sĩ trở lên trên tổng số giảng
          viên cơ hữu của đơn vị thực hiện CTĐT:{" "}
          {((THACSI.length / giangviensCoHuu.length) * 100).toLocaleString()}%
        </p>
      </div>
    </>
  );
};

export default Bang36;
