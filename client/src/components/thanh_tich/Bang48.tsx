import React from "react";
import { ListLoaiSach } from "../../constants/config";
import { useAppSelector } from "../../redux/hook";

const Bang48 = () => {
  const { sachs } = useAppSelector((state) => state.sach);

  const filterByLoaiSach = (loai_sach?: string, nam_hoc?: string) => {
    return sachs.filter(
      (item) =>
        (loai_sach ? item.loai_sach == loai_sach : true) &&
        (nam_hoc ? item.nam_hoc == nam_hoc : true)
    );
  };

  return (
    <div className="relative overflow-x-auto shadow-md rounded-lg">
      <table className="w-full text-sm text-left ">
        <thead className="text-xs text-black uppercase bg-gray-50">
          <tr>
            <th className="px-6 py-3" rowSpan={2}>
              TT
            </th>
            <th className="px-6 py-3" rowSpan={2}>
              Phân loại sách
            </th>
            <th className="px-6 py-3" rowSpan={2}>
              Hệ số
            </th>
            <th className="px-6 py-3 text-center" colSpan={6}>
              Số lượng
            </th>
          </tr>
          <tr>
            <th className="px-6 py-3">2018</th>
            <th className="px-6 py-3">2019</th>
            <th className="px-6 py-3">2020</th>
            <th className="px-6 py-3">2021</th>
            <th className="px-6 py-3">2022</th>
            <th className="px-6 py-3">Tổng đã quy đổi</th>
          </tr>
        </thead>
        <tbody>
          {ListLoaiSach.map((item, index) => {
            return (
              <tr className=" " key={index}>
                <td className="px-6 py-3 font-semibold">{index + 1}</td>
                <td className="px-6 py-3 ">{item.loai_sach}</td>
                <td className="px-6 py-3">{item.he_so}</td>
                {["2018", "2019", "2020", "2021", "2022"].map((year, i) => {
                  return (
                    <td className="px-6 py-3" key={(index + 1) * (i + 1) + 30}>
                      {filterByLoaiSach(item.loai_sach, year).length}
                    </td>
                  );
                })}
                <td className="px-6 py-3">
                  {filterByLoaiSach(item.loai_sach).length * item.he_so}
                </td>
              </tr>
            );
          })}

          <tr className=" ">
            <td className="px-6 py-3 bg-gray-200 font-semibold"></td>
            <td className="px-6 py-3 bg-gray-200 ">Tổng</td>
            <td className="px-6 py-3 bg-gray-200"></td>
            {["2018", "2019", "2020", "2021", "2022"].map((year, i) => {
              return (
                <td className="px-6 py-3 bg-gray-200" key={i}>
                  {filterByLoaiSach("", year).length}
                </td>
              );
            })}
            <td className="px-6 py-3 bg-gray-200">
              {ListLoaiSach.reduce(
                (total, item) =>
                  total + filterByLoaiSach(item.loai_sach).length * item.he_so,
                0
              )}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Bang48;
