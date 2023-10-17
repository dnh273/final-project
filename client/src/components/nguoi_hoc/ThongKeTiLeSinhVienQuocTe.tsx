import React from "react";

const ThongKeTiLeSinhVienQuocTe = () => {
  return (
    <div className="relative overflow-x-auto shadow-md rounded-lg">
      <table className="w-full text-sm text-left ">
        <thead className="text-xs text-black uppercase bg-gray-50">
          <tr>
            <th className="px-6 py-3 ">Các tiêu chí</th>
            <th className="px-6 py-3">2017-2018</th>
            <th className="px-6 py-3">2018-2019</th>
            <th className="px-6 py-3">2019-2020</th>
            <th className="px-6 py-3">2020-2021</th>
            <th className="px-6 py-3">2021-2022</th>
          </tr>
        </thead>
        <tbody>
          <tr className=" ">
            <td className="px-6 py-3 ">Số lượng</td>
            <td className="px-6 py-3 "></td>
            <td className="px-6 py-3"></td>
            <td className="px-6 py-3"></td>
            <td className="px-6 py-3"></td>
          </tr>
          <tr className=" ">
            <td className="px-6 py-3 ">Tỉ lệ `(%)`</td>
            <td className="px-6 py-3 "></td>
            <td className="px-6 py-3"></td>
            <td className="px-6 py-3"></td>
            <td className="px-6 py-3"></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ThongKeTiLeSinhVienQuocTe;
