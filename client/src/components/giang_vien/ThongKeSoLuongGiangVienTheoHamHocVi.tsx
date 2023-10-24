import { useAppSelector } from "../../redux/hook";
import NotFoundTable from "../common/NotFoundTable";
import SkeletonTable from "../common/SkeletonTable";

const ThongKeSoLuongGiangVienTheoHamHocVi = () => {
  const { giangviens, isLoading } = useAppSelector((state) => state.giangvien);

  const filterByHocVi = (hoc_vi: string) => {
    return giangviens?.filter((item) => item.hoc_vi == hoc_vi);
  };

  const GIAOSU = filterByHocVi("Giáo sư");
  const PHOGIAOSU = filterByHocVi("Phó giáo sư");
  const TIENSU = filterByHocVi("Tiến sĩ");
  const THACSI = filterByHocVi("Thạc sĩ");
  const DAIHOC = filterByHocVi("Đại học");

  const arrGiangVien = [GIAOSU, PHOGIAOSU, TIENSU, THACSI, DAIHOC];

  const renderTable = () => {
    if (isLoading) {
      return <SkeletonTable />;
    }

    if (giangviens.length === 0) {
      return <NotFoundTable />;
    }

    return (
      <>
        {arrGiangVien?.map((item, index) => {
          return (
            <tr className=" border-b" key={index}>
              <td className="px-6 py-4 font-medium whitespace-nowrap text-black ">
                {index + 1}
              </td>
              <td className="px-6 py-4 font-medium whitespace-nowrap text-black ">
                {item[index]?.hoc_vi}
              </td>
              <td className="px-6 py-4 font-medium whitespace-nowrap text-black ">
                {item.length}
              </td>
              <td className="px-6 py-4 font-medium whitespace-nowrap text-black ">
                {
                  item.filter(
                    (value) => value.loai_hop_dong == "Trong biên chế"
                  ).length
                }
              </td>
              <td className="px-6 py-4 font-medium whitespace-nowrap text-black ">
                {
                  item.filter(
                    (value) => value.loai_hop_dong == "Hợp đồng dài hạn"
                  ).length
                }
              </td>
              <td className="px-6 py-4 font-medium whitespace-nowrap text-black ">
                {
                  item.filter(
                    (value) => value.loai_hop_dong == "Hợp đồng ngắn hạn"
                  ).length
                }
              </td>
              <td className="px-6 py-4 font-medium whitespace-nowrap text-black ">
                {
                  item.filter(
                    (value) => value.loai_hop_dong == "Giảng viên thỉnh giảng"
                  ).length
                }
              </td>
              <td className="px-6 py-4 font-medium whitespace-nowrap text-black ">
                {
                  item.filter(
                    (value) => value.loai_hop_dong == "Giảng viên quốc tế"
                  ).length
                }
              </td>
            </tr>
          );
        })}
        <tr className="border-b bg-gray-200">
          <td className="px-6 py-4 font-medium whitespace-nowrap text-black "></td>
          <td className="px-6 py-4 font-medium whitespace-nowrap text-black text-bold">
            Tổng số
          </td>
          <td className="px-6 py-4 font-medium whitespace-nowrap text-black">
            {giangviens.length}
          </td>
          <td className="px-6 py-4 font-medium whitespace-nowrap text-black">
            {
              giangviens.filter(
                (item) => item.loai_hop_dong == "Trong biên chế"
              ).length
            }
          </td>
          <td className="px-6 py-4 font-medium whitespace-nowrap text-black">
            {
              giangviens.filter(
                (item) => item.loai_hop_dong == "Hợp đồng dài hạn"
              ).length
            }
          </td>
          <td className="px-6 py-4 font-medium whitespace-nowrap text-black">
            {
              giangviens.filter(
                (item) => item.loai_hop_dong == "Hợp đồng ngắn hạn"
              ).length
            }
          </td>
          <td className="px-6 py-4 font-medium whitespace-nowrap text-black">
            {
              giangviens.filter(
                (item) => item.loai_hop_dong == "Giảng viên thỉnh giảng"
              ).length
            }
          </td>
          <td className="px-6 py-4 font-medium whitespace-nowrap text-black">
            {
              giangviens.filter(
                (item) => item.loai_hop_dong == "Giảng viên quốc tế"
              ).length
            }
          </td>
        </tr>
      </>
    );
  };

  return (
    <>
      <div className="relative overflow-y-auto rounded-lg">
        <table className="w-full text-sm text-left text-black">
          <thead className="text-xs text-black uppercase bg-gray-50">
            <tr>
              <th className="px-6 py-3 border-b text-center">STT</th>
              <th className="px-6 py-3 border-b text-center">
                Trình độ học vị
              </th>
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
            </tr>

            <tr>
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
            </tr>
          </thead>
          <tbody>{renderTable()}</tbody>
        </table>
      </div>
    </>
  );
};

export default ThongKeSoLuongGiangVienTheoHamHocVi;
