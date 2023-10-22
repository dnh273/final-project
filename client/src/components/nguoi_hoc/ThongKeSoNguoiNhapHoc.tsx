import React from "react";
import { useAppSelector } from "../../redux/hook";
import { randomNumber } from "../../utils";
import { ListNamHoc, ListNganh } from "../../constants/config";

const ThongKeSoNguoiNhapHoc = () => {
  const { nguoihocs } = useAppSelector((state) => state.nguoihoc);

  const filterByNganhHocVaNamHoc = (ten_nganh: string, nam_hoc: string) => {
    return nguoihocs?.filter(
      (item) =>
        item.nganh_hoc.ten_nganh == ten_nganh && item.nam_nhap_hoc == nam_hoc 
    );
  };

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
          {ListNamHoc.map((nam_hoc, i) => {
            return ListNganh.map((nganh, index) => {
              return (
                <tr key={index}>
                  <td className="px-6 py-3 text-black border-b">
                    {index + i * 10 + 1}
                  </td>
                  <td className="px-6 py-3 text-black border-b font-semibold">
                    {nganh}
                  </td>
                  <td className="px-6 py-3 text-black border-b">{nam_hoc}</td>
                  <td className="px-6 py-3 text-black border-b">
                    {filterByNganhHocVaNamHoc(nganh, nam_hoc).length *
                      randomNumber(2, 4)}
                  </td>
                  <td className="px-6 py-3 text-black border-b">
                    {filterByNganhHocVaNamHoc(nganh, nam_hoc).length +
                      randomNumber(5, 10)}
                  </td>
                  <td className="px-6 py-3 text-black border-b">
                    {filterByNganhHocVaNamHoc(nganh, nam_hoc).length}
                  </td>
                  <td className="px-6 py-3 text-black border-b">
                    {Math.min(
                      ...filterByNganhHocVaNamHoc(nganh, nam_hoc).map(
                        (item) => item.diem_thi
                      )
                    )}
                  </td>
                  <td className="px-6 py-3 text-black border-b">
                    {
                      filterByNganhHocVaNamHoc(nganh, nam_hoc).filter(
                        (item) => item.quoc_tich != "Việt Nam"
                      ).length
                    }
                  </td>
                </tr>
              );
            });
          })}

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
