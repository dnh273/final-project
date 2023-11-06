import { ListNamHoc } from "../../constants/config";

const Bang55Part2 = () => {
  return (
    <div className="relative overflow-x-auto shadow-md rounded-lg">
      <table className="w-full text-sm text-left">
        <thead className="text-xs text-black uppercase bg-gray-50">
          <tr>
            <th className="px-6 py-3" rowSpan={2}>
              STT
            </th>
            <th className="px-6 py-3" rowSpan={2}>
              Thành tích nghiên cứu khoa học
            </th>
            <th className="px-6 py-3 text-center" colSpan={5}>
              Số lượng
            </th>
          </tr>
          <tr>
            {ListNamHoc.map((nam_hoc, index) => {
              return (
                <th key={index} className="px-6 py-3">
                  {nam_hoc}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-6 py-3">1</td>
            <td className="px-6 py-3">
              Số giải thưởng nghiên cứu khoa học, sáng tạo
            </td>
            <td className="px-6 py-3"></td>
            <td className="px-6 py-3"></td>
            <td className="px-6 py-3"></td>
            <td className="px-6 py-3"></td>
            <td className="px-6 py-3"></td>
          </tr>
          <tr>
            <td className="px-6 py-3">2</td>
            <td className="px-6 py-3">
              Số bài báo được đăng, công trình được công bố
            </td>
            <td className="px-6 py-3"></td>
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

export default Bang55Part2;
