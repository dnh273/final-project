import React from "react";
import data from "../../data/NguoiHoc1.json";

const ThongKeSoNguoiNhapHoc = () => {
  return (
    <div className="relative overflow-y-auto rounded-lg">
      <table className="w-full text-sm text-left text-gray-400">
        <thead className="text-xs text-gray-400 uppercase bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-black"></th>
            <th className="px-6 py-3 text-black">Ngành</th>
            <th className="px-6 py-3 text-black">Năm học</th>
            <th className="px-6 py-3 text-black">Số thí sinh đăng ký </th>
            <th className="px-6 py-3 text-black">Số thí sinh trúng tuyển</th>
            <th className="px-6 py-3 text-black">Số nhập học thực tế</th>
            <th className="px-6 py-3 text-black">Điểm đầu vào</th>
            <th className="px-6 py-3 text-black">Số sinh viên quốc tế</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr>
              <td className="px-6 py-3 text-black border-b">{index}</td>
              <td className="px-6 py-3 text-black border-b font-semibold">
                {item.nganh}
              </td>
              <td className="px-6 py-3 text-black border-b">
                {item.ma_nam_hoc + 2016}
              </td>
              <td className="px-6 py-3 text-black border-b">
                {item.so_dang_ky}
              </td>
              <td className="px-6 py-3 text-black border-b">
                {item.so_trung_tuyen}
              </td>
              <td className="px-6 py-3 text-black border-b">
                {item.so_nhap_hoc}
              </td>
              <td className="px-6 py-3 text-black border-b">
                {item.diem_trung_tuyen}
              </td>
              <td className="px-6 py-3 text-black border-b">
                {item.so_sinh_vien_quoc_te}
              </td>
            </tr>
          ))}
          <tr className=" ">
            <td className="px-6 py-3"></td>
            <td className="px-6 py-3"></td>
            <td className="px-6 py-3"></td>
            <td className="px-6 py-3"></td>
            <td className="px-6 py-3"></td>
            <td className="px-6 py-3"></td>
            <td className="px-6 py-3"></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ThongKeSoNguoiNhapHoc;
