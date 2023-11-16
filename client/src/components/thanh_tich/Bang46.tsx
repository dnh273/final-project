import { useAppSelector } from "../../redux/hook";

const Bang46 = () => {
  const { nghiencuukhoahocs } = useAppSelector(
    (state) => state.nghiencuukhoahoc
  );

  const { giangviens } = useAppSelector((state) => state.giangvien);
  const ListNamHoc = [
    "2018-2019",
    "2019-2020",
    "2020-2021",
    "2021-2022",
    "2022-2023",
  ];

  const totalDoanhThuNCKHByName = (nam_hoc?: string) => {
    return nghiencuukhoahocs.reduce(
      (total, item) =>
        item.nam_hoc
          ? item.nam_hoc == nam_hoc
            ? total + item.doanh_thu
            : total
          : item.doanh_thu,
      0
    );
  };

  const totalKinhPhiNCKHByName = (nam_hoc?: string) => {
    return nghiencuukhoahocs.reduce(
      (total, item) =>
        item.nam_hoc
          ? item.nam_hoc == nam_hoc
            ? total + item.kinh_phi
            : total
          : item.kinh_phi,
      0
    );
  };

  const totalGVCoHuu = () => {
    return giangviens.filter(
      (item) =>
        item.loai_hop_dong == "Trong biên chế" ||
        item.loai_hop_dong == "Hợp đồng dài hạn"
    ).length;
  };
  return (
    <div className="relative overflow-x-auto shadow-md rounded-lg">
      <table className="w-full text-sm text-left">
        <thead className="text-xs text-black uppercase bg-gray-50">
          <tr>
            <th className="px-6 py-3">TT</th>
            <th className="px-6 py-3">Năm</th>
            <th className="px-6 py-3">
              Doanh thu từ NCKH và chuyển giao công nghệ (triệu VNĐ)
            </th>
            <th className="px-6 py-3">
              Tỷ lệ doanh thu từ NCKH và chuyển giao công nghệ so với tổng kinh
              phí đầu vào của đơn vị thực hiện CTĐT (%)
            </th>
            <th className="px-6 py-3">
              Tỷ số doanh thu từ NCKH và chuyển giao công nghệ trên cán bộ cơ
              hữu (triệu VNĐ/người)
            </th>
          </tr>
        </thead>
        <tbody>
          {ListNamHoc.map((nam_hoc, index) => {
            return (
              <tr key={index}>
                <td className="px-6 py-3 font-semibold">{index + 1}</td>
                <td className="px-6 py-3 ">{nam_hoc}</td>
                <td className="px-6 py-3">
                  {totalDoanhThuNCKHByName(nam_hoc).toLocaleString()}
                </td>
                <td className="px-6 py-3">
                  {(
                    (totalDoanhThuNCKHByName(nam_hoc) /
                      totalKinhPhiNCKHByName(nam_hoc)) *
                    100
                  ).toLocaleString()}
                </td>
                <td className="px-6 py-3">
                  {(
                    totalDoanhThuNCKHByName(nam_hoc) / totalGVCoHuu()
                  ).toLocaleString()}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Bang46;
