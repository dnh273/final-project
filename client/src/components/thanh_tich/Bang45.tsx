import { ListDeTai } from "../../constants/config";
import { useAppSelector } from "../../redux/hook";

const Bang45 = () => {
  const { nghiencuukhoahocs } = useAppSelector(
    (state) => state.nghiencuukhoahoc
  );

  const filterLoaiDeTai = (loai_de_tai = "", nam_hoc = "") => {
    return nghiencuukhoahocs?.filter(
      (item) =>
        (loai_de_tai.length > 0 ? item.loai_de_tai == loai_de_tai : true) &&
        (nam_hoc.length > 0 ? item.nam_hoc == nam_hoc : true)
    );
  };

  const ListNamHoc = [
    "2018-2019",
    "2019-2020",
    "2020-2021",
    "2021-2022",
    "2022-2023",
  ];

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
            {ListNamHoc.map((nam_hoc, key) => {
              return (
                <th key={key} className="px-6 py-3">
                  {nam_hoc}
                </th>
              );
            })}
            <th className="px-6 py-3">Tổng đã quy đổi</th>
          </tr>
        </thead>
        <tbody>
          {ListDeTai.map((item, index) => {
            return (
              <tr key={index}>
                <td className="px-6 py-3 font-semibold">{index + 1}</td>
                <td className="px-6 py-3 ">{item.show_text}</td>
                <td className="px-6 py-3">{item.he_so}</td>
                {ListNamHoc.map((nam_hoc, i) => {
                  return (
                    <td className="px-6 py-3" key={(i + 1) * 2 + index}>
                      {filterLoaiDeTai(item.loai_de_tai, nam_hoc).length}
                    </td>
                  );
                })}
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
            {ListNamHoc.map((nam_hoc, i) => {
              return (
                <td className="px-6 py-3 bg-gray-200  " key={i}>
                  {filterLoaiDeTai("", nam_hoc).length}
                </td>
              );
            })}
            <td className="px-6 py-3 bg-gray-200">
              {filterLoaiDeTai("").length}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Bang45;
