import { ListDeTai } from "../../constants/config";
import { useAppSelector } from "../../redux/hook";

const Bang45 = () => {
  const { nghiencuukhoahocs } = useAppSelector(
    (state) => state.nghiencuukhoahoc
  );

  const filterLoaiDeTai = (loai_de_tai = "", nam_hoc = "") => {
    return nghiencuukhoahocs.filter(
      (item) =>
        (loai_de_tai.length > 0 ? item.loai_de_tai == loai_de_tai : true) &&
        (nam_hoc.length > 0 ? item.nam_hoc == nam_hoc : true)
    );
  };

  return (
    <div className="relative overflow-x-auto shadow-md rounded-lg">
      <table className="w-full text-sm text-left ">
        <thead className="text-xs text-black uppercase bg-gray-50">
          <tr>
            <th className="px-6 py-3" rowSpan={2}>
              TT
            </th>
            <th className="px-6 py-3" rowSpan={2}>
              Phân loại đề tài
            </th>
            <th className="px-6 py-3" rowSpan={2}>
              Hệ số
            </th>
            <th className="px-6 py-3 text-center" colSpan={6}>
              Số lượng
            </th>
          </tr>
          <tr>
            <th className="px-6 py-3">2017</th>
            <th className="px-6 py-3">2018</th>
            <th className="px-6 py-3">2019</th>
            <th className="px-6 py-3">2020</th>
            <th className="px-6 py-3">2021</th>
            <th className="px-6 py-3">Tổng đã quy đổi</th>
          </tr>
        </thead>
        <tbody>
          {ListDeTai.map((item, index) => {
            return (
              <tr key={index}>
                <td className="px-6 py-3 font-semibold">{index + 1}</td>
                <td className="px-6 py-3 ">{item.loai_de_tai}</td>
                <td className="px-6 py-3">{item.he_so}</td>
                <td className="px-6 py-3">
                  {filterLoaiDeTai(item.loai_de_tai, "2017-2018").length}
                </td>
                <td className="px-6 py-3">
                  {filterLoaiDeTai(item.loai_de_tai, "2018-2019").length}
                </td>
                <td className="px-6 py-3">
                  {filterLoaiDeTai(item.loai_de_tai, "2019-2020").length}
                </td>
                <td className="px-6 py-3">
                  {filterLoaiDeTai(item.loai_de_tai, "2020-2021").length}
                </td>
                <td className="px-6 py-3">
                  {filterLoaiDeTai(item.loai_de_tai, "2021-2022").length}
                </td>
                <td className="px-6 py-3 bg-gray-200">
                  {filterLoaiDeTai(item.loai_de_tai).length}
                </td>
              </tr>
            );
          })}
          <tr className=" ">
            <td className="px-6 py-3 bg-gray-200 font-semibold"></td>
            <td className="px-6 py-3 bg-gray-200 ">Tổng</td>
            <td className="px-6 py-3 bg-gray-200 "></td>
            <td className="px-6 py-3 bg-gray-200">{filterLoaiDeTai("2017-2018").length}</td>
            <td className="px-6 py-3 bg-gray-200">{filterLoaiDeTai("2018-2019").length}</td>
            <td className="px-6 py-3 bg-gray-200">
              {filterLoaiDeTai("2019-2020").length}
            </td>
            <td className="px-6 py-3 bg-gray-200">
              {filterLoaiDeTai("2020-2021").length}
            </td>
            <td className="px-6 py-3 bg-gray-200">
              {filterLoaiDeTai("2021-2022").length}
            </td>
            <td className="px-6 py-3 bg-gray-200">
              {filterLoaiDeTai().length}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Bang45;
