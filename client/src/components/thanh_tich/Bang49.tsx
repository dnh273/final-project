import { useAppSelector } from "../../redux/hook";

const Bang49 = () => {
  const { giangviens } = useAppSelector((state) => state.giangvien);

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
            "Từ 1-3 cuốn sách",
            "Từ 4-6 cuốn sách",
            "Trên 6 cuốn sách",
            "Tổng",
          ].map((item, index) => {
            return (
              <tr key={index}>
                <td className="px-6 py-3 font-semibold">{item}</td>
                <td className="px-6 py-3">
                  {/* {
                    giangviens.filter((giangvien) =>
                      giangvien.sach.includes(ListLoaiSach[index])
                    ).length
                  } */}
                </td>
                <td className="px-6 py-3">
                  {/* {
                    giangviens.filter((giangvien) =>
                      giangvien.sach.includes(ListLoaiSach[index])
                    ).length
                  } */}
                </td>
                <td className="px-6 py-3">
                  {/* {
                    giangviens.filter((giangvien) =>
                      giangvien.sach.includes(ListLoaiSach[index])
                    ).length
                  } */}
                </td>
                <td className="px-6 py-3">
                  {/* {
                    giangviens.filter((giangvien) =>
                      giangvien.sach.includes(ListLoaiSach[index])
                    ).length
                  } */}
                </td>
              </tr>
            );
          })}

          <tr className=" ">
            <td className="px-6 py-3 font-semibold">Tổng số cán bộ tham gia</td>
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

export default Bang49;
