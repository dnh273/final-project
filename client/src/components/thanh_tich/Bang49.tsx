import { ListLoaiSach } from "../../constants/config";
import { useAppSelector } from "../../redux/hook";

const Bang49 = () => {
  const { giangviens } = useAppSelector((state) => state.giangvien);

  const filterBySachGiangVien = (loai_sach: string, so_sach?: number) => {
    return giangviens
      .filter((item) =>
        item.sach.map((item) => item.loai_sach).includes(loai_sach)
      )
      .filter((item) => {
        if (so_sach == 4) {
          return (
            item.sach
              .map((item) => item.loai_sach)
              .filter((item) => item == loai_sach).length < so_sach
          );
        }
        if (so_sach == 7) {
          return (
            item.sach
              .map((item) => item.loai_sach)
              .filter((item) => item == loai_sach).length < so_sach &&
            item.sach
              .map((item) => item.loai_sach)
              .filter((item) => item == loai_sach).length > 3
          );
        }
        if (so_sach == 9999) {
          return (
            item.sach
              .map((item) => item.loai_sach)
              .filter((item) => item == loai_sach).length < so_sach &&
            item.sach
              .map((item) => item.loai_sach)
              .filter((item) => item == loai_sach).length > 6
          );
        }
        return true;
      });
  };

  return (
    <div className="relative overflow-x-auto shadow-md rounded-lg">
      <table className="w-full text-sm text-left ">
        <thead className="text-xs text-black uppercase bg-gray-50">
          <tr>
            <th className="px-6 py-3" rowSpan={2}>
              Số lượng sách
            </th>
            <th className="px-6 py-3 text-center" colSpan={4}>
              Số lượng cán bộ cơ hữu tham gia viết sách
            </th>
          </tr>
          <tr>
            <th className="px-6 py-3">Sách chuyên khảo</th>
            <th className="px-6 py-3">Sách giáo trình</th>
            <th className="px-6 py-3">Sách tham khảo</th>
            <th className="px-6 py-3">Sách hướng dẫn</th>
          </tr>
        </thead>
        <tbody>
          {[
            { title: "Từ 1-3 cuốn sách", num: 4 },
            { title: "Từ 4-6 cuốn sách", num: 7 },
            { title: "Trên 6 cuốn sách", num: 9999 },
          ].map((item, index) => {
            return (
              <tr key={index}>
                <td className="px-6 py-3 font-semibold">{item.title}</td>
                {ListLoaiSach.map((sach, i) => {
                  return (
                    <td className="px-6 py-3" key={(i + 1) * (index + 10)}>
                      {filterBySachGiangVien(sach.loai_sach, item.num).length}
                    </td>
                  );
                })}
              </tr>
            );
          })}

          <tr className=" ">
            <td className="px-6 py-3 font-semibold">Tổng số cán bộ tham gia</td>
            {ListLoaiSach.map((sach, i) => {
              return (
                <td className="px-6 py-3" key={i}>
                  {filterBySachGiangVien(sach.loai_sach).length}
                </td>
              );
            })}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Bang49;
