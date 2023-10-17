import { IGiangVien } from "../../interface";
import HeaderTitle from "../common/HeaderTitle";
import { useAppSelector } from "../../redux/hook";

const QuyDoiSoLuongGiangVien = () => {
  const { giangviens } = useAppSelector((state) => state.giangvien);

  const filterByHocVi = (hoc_vi: string) => {
    return giangviens.filter((item) => item.hoc_vi == hoc_vi);
  };

  function total(...args: number[]): number {
    return args.reduce((acc, num) => acc + num, 0);
  }

  const filterByLoaiHopDong = (
    giangviens: IGiangVien[],
    loai_hop_dong: string
  ) => {
    return giangviens.filter((item) => item.loai_hop_dong == loai_hop_dong);
  };

  const GIAOSU = filterByHocVi("Giáo sư");
  const PHOGIAOSU = filterByHocVi("Phó giáo sư");
  const TIENSU = filterByHocVi("Tiến sĩ");
  const THACSI = filterByHocVi("Thạc sĩ");
  const DAIHOC = filterByHocVi("Đại học");

  const arrGiangVien = [GIAOSU, PHOGIAOSU, TIENSU, THACSI, DAIHOC];

  return (
    <>
      <HeaderTitle title="Bảng 35" />
      <div className="relative overflow-y-auto rounded-lg">
        <table className="w-full text-sm text-left text-black">
          <thead className="text-xs text-black uppercase bg-gray-50">
            <tr>
              <th className="px-6 py-3 border-b text-center">STT</th>
              <th className="px-6 py-3 border-b text-center">
                Trình độ học vị
              </th>
              <th className="px-6 py-3 border-b text-center">Hệ số quy đổi</th>
              <th className="px-6 py-3 border-b text-center">
                Số lượng giảng viên
              </th>
              <th className="px-6 py-3 border-b text-center" colSpan={3}>
                Giảng viên cơ hữu (GV)
              </th>

              <th className="px-6 py-3 border-b text-center">
                GV thỉnh giảng trong nước
              </th>
              <th className="px-6 py-3 border-b text-center">GV quốc tế</th>
              <th className="px-6 py-3 border-b text-center">GV quy đổi</th>
            </tr>

            <tr>
              <th className="px-6 py-3"></th>
              <th className="px-6 py-3"></th>
              <th className="px-6 py-3"></th>
              <th className="px-6 py-3"></th>
              <th className="px-6 py-3">
                GV trong biên chế trực tiếp giảng dạy
              </th>
              <th className="px-6 py-3">
                GV hợp đồng dài hạn trực tiếp giảng dạy
              </th>
              <th className="px-6 py-3">GV kiêm nhiệm là cán bộ quản lý</th>
              <th className="px-6 py-3"></th>
              <th className="px-6 py-3"></th>
              <th className="px-6 py-3"></th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="px-6 py-4  whitespace-nowrap text-black font-bold"></td>
              <td className="px-6 py-4  whitespace-nowrap text-black font-bold">
                Hệ số quy đổi
              </td>
              <td className="px-6 py-4  whitespace-nowrap text-black font-bold"></td>
              <td className="px-6 py-4  whitespace-nowrap text-black font-bold"></td>
              <td className="px-6 py-4  whitespace-nowrap text-black font-bold">
                1.0
              </td>
              <td className="px-6 py-4  whitespace-nowrap text-black font-bold">
                1.0
              </td>
              <td className="px-6 py-4  whitespace-nowrap text-black font-bold">
                0.3
              </td>
              <td className="px-6 py-4  whitespace-nowrap text-black font-bold">
                0.3
              </td>
              <td className="px-6 py-4  whitespace-nowrap text-black font-bold">
                0.2
              </td>
            </tr>

            {arrGiangVien.map((item, index, arr) => {
              return (
                <tr className=" border-b" key={index}>
                  <td className="px-6 py-4 font-medium whitespace-nowrap text-black "></td>
                  <td className="px-6 py-4 font-medium whitespace-nowrap text-black ">
                    {arr.length - index}
                  </td>
                  <td className="px-6 py-4 font-medium whitespace-nowrap text-black ">
                    {item[index].hoc_vi}
                  </td>
                  <td className="px-6 py-4 font-medium whitespace-nowrap text-black ">
                    {item.length}
                  </td>
                  <td className="px-6 py-4 font-medium whitespace-nowrap text-black ">
                    {filterByLoaiHopDong(item, "Trong biên chế").length}
                  </td>
                  <td className="px-6 py-4 font-medium whitespace-nowrap text-black ">
                    {filterByLoaiHopDong(item, "Hợp đồng dài hạn").length}
                  </td>
                  <td className="px-6 py-4 font-medium whitespace-nowrap text-black ">
                    {filterByLoaiHopDong(item, "Hợp đồng ngắn hạn").length}
                  </td>
                  <td className="px-6 py-4 font-medium whitespace-nowrap text-black ">
                    0
                  </td>
                  <td className="px-6 py-4 font-medium whitespace-nowrap text-black ">
                    0
                  </td>
                  <td className="px-6 py-4 font-medium whitespace-nowrap text-black ">
                    {total(
                      filterByLoaiHopDong(item, "Trong biên chế").length,
                      filterByLoaiHopDong(item, "Hợp đồng dài hạn").length,
                      filterByLoaiHopDong(item, "Hợp đồng ngắn hạn").length *
                        0.3
                    )}
                  </td>
                </tr>
              );
            })}
            <tr className="border-b">
              <td className="px-6 py-4 font-medium whitespace-nowrap text-black "></td>
              <td className="px-6 py-4 font-medium whitespace-nowrap text-black ">
                Tổng số
              </td>
              <td className="px-6 py-4 font-medium whitespace-nowrap text-black "></td>
              <td className="px-6 py-4 font-medium whitespace-nowrap text-black ">
                {giangviens.length}
              </td>
              <td className="px-6 py-4 font-medium whitespace-nowrap text-black ">
                {
                  giangviens.filter(
                    (item) => item.loai_hop_dong == "Trong biên chế"
                  ).length
                }
              </td>
              <td className="px-6 py-4 font-medium whitespace-nowrap text-black ">
                {
                  giangviens.filter(
                    (item) => item.loai_hop_dong == "Hợp đồng dài hạn"
                  ).length
                }
              </td>
              <td className="px-6 py-4 font-medium whitespace-nowrap text-black ">
                {
                  giangviens.filter(
                    (item) => item.loai_hop_dong == "Hợp đồng ngắn hạn"
                  ).length
                }
              </td>
              <td className="px-6 py-4 font-medium whitespace-nowrap text-black ">
                0
              </td>
              <td className="px-6 py-4 font-medium whitespace-nowrap text-black ">
                0
              </td>
              <td className="px-6 py-4 font-medium whitespace-nowrap text-black ">
                {total(
                  filterByLoaiHopDong(giangviens, "Trong biên chế").length,
                  filterByLoaiHopDong(giangviens, "Hợp đồng dài hạn").length,
                  filterByLoaiHopDong(giangviens, "Hợp đồng ngắn hạn").length *
                    0.3
                )}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default QuyDoiSoLuongGiangVien;