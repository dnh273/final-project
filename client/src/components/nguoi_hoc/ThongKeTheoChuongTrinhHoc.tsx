import React from "react";

import { ListLoaiNguoiHoc, ListNamHoc } from "../../constants/config";
import { useAppSelector } from "../../redux/hook";

const ThongKeTheoChuongTrinhHoc = () => {
  const { nguoihocs } = useAppSelector((state) => state.nguoihoc);

  function filterByNamHocAndLoaiNguoiHoc(
    nam_hoc: string,
    loai_nguoi_hoc: string
  ) {
    return nguoihocs.filter(
      (item) =>
        item.nam_nhap_hoc == nam_hoc && item.loai_nguoi_hoc == loai_nguoi_hoc
    );
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
          {ListLoaiNguoiHoc.map((loai_nguoi_hoc, index) => {
            return (
              <tr key={index}>
                <td className="px-6 py-3 font-semibold">
                  {`${loai_nguoi_hoc.stt ? loai_nguoi_hoc + "." : ""} ${
                    loai_nguoi_hoc.text.slice(0, 1).toLocaleUpperCase() +
                    loai_nguoi_hoc.text.slice(1)
                  }`}
                </td>
                <td className="px-6 py-3">
                  {
                    filterByNamHocAndLoaiNguoiHoc(
                      ListNamHoc[4],
                      loai_nguoi_hoc.text
                    ).length
                  }
                </td>
                <td className="px-6 py-3">
                  {
                    filterByNamHocAndLoaiNguoiHoc(
                      ListNamHoc[3],
                      loai_nguoi_hoc.text
                    ).length
                  }
                </td>
                <td className="px-6 py-3">
                  {
                    filterByNamHocAndLoaiNguoiHoc(
                      ListNamHoc[2],
                      loai_nguoi_hoc.text
                    ).length
                  }
                </td>
                <td className="px-6 py-3">
                  {
                    filterByNamHocAndLoaiNguoiHoc(
                      ListNamHoc[1],
                      loai_nguoi_hoc.text
                    ).length
                  }
                </td>
                <td className="px-6 py-3">
                  {
                    filterByNamHocAndLoaiNguoiHoc(
                      ListNamHoc[0],
                      loai_nguoi_hoc.text
                    ).length
                  }
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ThongKeTheoChuongTrinhHoc;
