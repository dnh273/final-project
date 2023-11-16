import React from "react";
import { useAppSelector } from "../../redux/hook";
import { ListDeTai } from "../../constants/config";

const Bang47 = () => {
  const { giangviens } = useAppSelector((state) => state.giangvien);

  const GVCoHuu = giangviens.filter(
    (item) =>
      item.loai_hop_dong == "Trong biên chế" ||
      item.loai_hop_dong == "Hợp đồng dài hạn"
  );

  const filterByNCKHGiangVien = (loai_de_tai: string, so_de_tai?: number) => {
    return GVCoHuu.filter((item) =>
      item.nghien_cuu_khoa_hoc
        .map((item) => item.loai_de_tai)
        .includes(loai_de_tai)
    ).filter((item) => {
      if (so_de_tai == 4) {
        return (
          item.nghien_cuu_khoa_hoc
            .map((item) => item.loai_de_tai)
            .filter((item) => item == loai_de_tai).length < so_de_tai
        );
      }
      if (so_de_tai == 7) {
        return (
          item.nghien_cuu_khoa_hoc
            .map((item) => item.loai_de_tai)
            .filter((item) => item == loai_de_tai).length < so_de_tai &&
          item.nghien_cuu_khoa_hoc
            .map((item) => item.loai_de_tai)
            .filter((item) => item == loai_de_tai).length > 3
        );
      }
      if (so_de_tai == 9999) {
        return (
          item.nghien_cuu_khoa_hoc
            .map((item) => item.loai_de_tai)
            .filter((item) => item == loai_de_tai).length < so_de_tai &&
          item.nghien_cuu_khoa_hoc
            .map((item) => item.loai_de_tai)
            .filter((item) => item == loai_de_tai).length > 6
        );
      }
      return true;
    });
  };
  return (
    <div className="relative overflow-x-auto shadow-md rounded-lg">
      <table className="w-full text-sm text-left">
        <thead className="text-xs text-black uppercase bg-gray-50">
          <tr>
            <th className="px-6 py-3" rowSpan={2}>
              Số lượng đề tài
            </th>
            <th className="px-6 py-3 text-center" colSpan={3}>
              Số lượng cán bộ tham gia
            </th>
            <th className="px-6 py-3" rowSpan={2}>
              Ghi chú
            </th>
          </tr>
          <tr>
            <th className="px-6 py-3">Đề tài cấp NN</th>
            <th className="px-6 py-3">Đề tài cấp Bộ</th>
            <th className="px-6 py-3">Đề tài cấp trường</th>
          </tr>
        </thead>
        <tbody>
          {[
            { title: "Từ 1-3 đề tài", num: 4 },
            { title: "Từ 4-6 đề tài", num: 7 },
            { title: "Trên 6 đề tài", num: 9999 },
          ].map((so_de_tai, index) => {
            return (
              <tr key={index}>
                <td className="px-6 py-3">{so_de_tai.title}</td>
                {ListDeTai.slice(0, ListDeTai.length - 1).map((de_tai, i) => {
                  return (
                    <td key={(i + 1) * 2 + index} className="px-6 py-3">
                      {
                        filterByNCKHGiangVien(de_tai.loai_de_tai, so_de_tai.num)
                          .length
                      }
                    </td>
                  );
                })}
              </tr>
            );
          })}

          <tr>
            <td className="px-6 py-3">Tổng số cán bộ tham gia</td>
            {ListDeTai.slice(0, ListDeTai.length - 1).map((de_tai, i) => {
              return (
                <td key={i} className="px-6 py-3">
                  {filterByNCKHGiangVien(de_tai.loai_de_tai).length}
                </td>
              );
            })}
            <td className="px-6 py-3"></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Bang47;
