import React from "react";
import { useAppSelector } from "../../redux/hook";
import { ListLoaiTapChi } from "../../constants/config";

const Bang50 = () => {
  const { tapchis } = useAppSelector((state) => state.tapchi);

  const filterLoaiTapChiTheoNam = (
    list_tap_chi: string[],
    nam_hoc?: string
  ) => {
    return tapchis.filter(
      (item) =>
        (list_tap_chi.length > 0
          ? list_tap_chi.includes(item.loai_tap_chi)
          : true) && (nam_hoc ? item.nam_hoc == nam_hoc : true)
    );
  };

  const ListNam = ["2018", "2019", "2020", "2021", "2022"];

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
            <th className="px-6 py-3 text-center" colSpan={5}>
              Số lượng
            </th>
            <th className="px-6 py-3" rowSpan={2}>
              Tổng đã quy đổi
            </th>
          </tr>
          <tr>
            {ListNam.map((item, index) => (
              <th key={index} className="px-6 py-3">
                {item}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {ListLoaiTapChi.map((loai_tap_chi, index) => {
            return (
              <tr className=" " key={index}>
                <td className="px-6 py-3 font-semibold">{index + 1}</td>
                <td className="px-6 py-3 ">{loai_tap_chi.loai_tap_chi}</td>
                <td className="px-6 py-3">{loai_tap_chi.he_so}</td>
                {ListNam.map((nam, i) => {
                  return (
                    <td key={i} className="px-6 py-3">
                      {
                        filterLoaiTapChiTheoNam(loai_tap_chi.list_tap_chi, nam)
                          .length
                      }
                    </td>
                  );
                })}
                <td className="px-6 py-3 bg-gray-200">
                  {filterLoaiTapChiTheoNam(loai_tap_chi.list_tap_chi).length *
                    loai_tap_chi.he_so}
                </td>
              </tr>
            );
          })}

          <tr className=" ">
            <td className="px-6 py-3 bg-gray-200 font-semibold"></td>
            <td className="px-6 py-3 bg-gray-200 ">Tổng</td>
            <td className="px-6 py-3 bg-gray-200"></td>
            {ListNam.map((nam, i) => {
              return (
                <td key={i} className="px-6 py-3 bg-gray-200">
                  {filterLoaiTapChiTheoNam([], nam).length}
                </td>
              );
            })}
            <td className="px-6 py-3 bg-gray-200">
              {ListLoaiTapChi.reduce(
                (total, loai_tap_chi) =>
                  total +
                  filterLoaiTapChiTheoNam(loai_tap_chi.list_tap_chi).length *
                    loai_tap_chi.he_so,
                0
              )}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Bang50;
