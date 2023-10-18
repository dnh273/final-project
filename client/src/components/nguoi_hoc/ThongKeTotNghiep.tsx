import React from "react";
import data from "../../data/NguoiHoc2.json";
import { ISoLuongNguoiHoc } from "../../interface";

const ThongKeTotNghiep = () => {
  function filterByNamHoc(arr: ISoLuongNguoiHoc[], ma_nam_hoc: number) {
    return arr.filter((item) => item.ma_nam_hoc == ma_nam_hoc);
  }

  return (
    <div className="relative overflow-x-auto shadow-md rounded-lg">
      <table className="w-full text-sm text-left ">
        <thead className="text-xs text-black uppercase bg-gray-50">
          <tr>
            <th className="px-6 py-3 ">Các tiêu chí</th>
            <th className="px-6 py-3">2021-2022</th>
            <th className="px-6 py-3">2020-2021</th>
            <th className="px-6 py-3">2019-2020</th>
            <th className="px-6 py-3">2018-2019</th>
            <th className="px-6 py-3">2017-2018</th>
          </tr>
        </thead>
        <tbody>
          <tr className=" ">
            <td className="px-6 py-3 font-semibold">1. Nghiên cứu sinh</td>
            {[5, 4, 3, 2, 1].map((item, index) => (
              <td className="px-6 py-3" key={index}>
                {filterByNamHoc(data, item).reduce(
                  (total, item) => total + item.nghien_cuu_sinh,
                  0
                )}
              </td>
            ))}
          </tr>
          <tr className=" ">
            <td className="px-6 py-3 font-semibold">2. Học viên cao học</td>
            {[5, 4, 3, 2, 1].map((item, index) => (
              <td className="px-6 py-3" key={index}>
                {filterByNamHoc(data, item).reduce(
                  (total, item) => total + item.hoc_vien_cao_hoc,
                  0
                )}
              </td>
            ))}
          </tr>
          <tr className=" ">
            <td className="px-6 py-3 font-semibold">3. Sinh viên đại học</td>
            {[5, 4, 3, 2, 1].map((item, index) => (
              <td className="px-6 py-3" key={index}>
                {filterByNamHoc(data, item).reduce(
                  (total, item) => total + item.sinh_vien_dai_hoc,
                  0
                )}
              </td>
            ))}
          </tr>
          <tr className=" ">
            <td className="px-6 py-3 font-semibold">
              Sinh viên đại học chính quy
            </td>
            {[5, 4, 3, 2, 1].map((item, index) => (
              <td className="px-6 py-3" key={index}>
                {filterByNamHoc(data, item).reduce(
                  (total, item) => total + item.dh_chinh_quy,
                  0
                )}
              </td>
            ))}
          </tr>
          <tr className=" ">
            <td className="px-6 py-3 font-semibold">
              Sinh viên đại học không chính quy
            </td>
            {[5, 4, 3, 2, 1].map((item, index) => (
              <td className="px-6 py-3" key={index}>
                {filterByNamHoc(data, item).reduce(
                  (total, item) => total + item.dh_khong_chinh_quy,
                  0
                )}
              </td>
            ))}
          </tr>
          <tr className=" ">
            <td className="px-6 py-3 font-semibold">4. Sinh viên cao đẳng</td>
            {[5, 4, 3, 2, 1].map((item, index) => (
              <td className="px-6 py-3" key={index}>
                {filterByNamHoc(data, item).reduce(
                  (total, item) => total + item.sinh_vien_cao_dang,
                  0
                )}
              </td>
            ))}
          </tr>
          <tr className=" ">
            <td className="px-6 py-3 font-semibold">
              Sinh viên cao đẳng chính quy
            </td>
            {[5, 4, 3, 2, 1].map((item, index) => (
              <td className="px-6 py-3" key={index}>
                {filterByNamHoc(data, item).reduce(
                  (total, item) => total + item.cd_chinh_quy,
                  0
                )}
              </td>
            ))}
          </tr>
          <tr className=" ">
            <td className="px-6 py-3 font-semibold">
              Sinh viên cao đẳng không chính quy
            </td>
            {[5, 4, 3, 2, 1].map((item, index) => (
              <td className="px-6 py-3" key={index}>
                {filterByNamHoc(data, item).reduce(
                  (total, item) => total + item.cd_khong_chinh_quy,
                  0
                )}
              </td>
            ))}
          </tr>
          <tr className=" ">
            <td className="px-6 py-3 font-semibold">Khác</td>
            {[5, 4, 3, 2, 1].map((item, index) => (
              <td className="px-6 py-3" key={index}>
                {filterByNamHoc(data, item).reduce(
                  (total, item) => total + item.khac,
                  0
                )}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ThongKeTotNghiep;
