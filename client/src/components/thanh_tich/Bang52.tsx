import React from "react";

const Bang52 = () => {
  return (
    <div className="relative overflow-x-auto shadow-md rounded-lg">
      <table className="w-full text-sm text-left ">
        <thead className="text-xs text-black uppercase bg-gray-50">
          <tr>
            <th className="px-6 py-3" rowSpan={2}>
              TT
            </th>
            <th className="px-6 py-3" rowSpan={2}>
              Phân loại hội thảo
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
            <th className="px-6 py-3">2017</th>
            <th className="px-6 py-3">2018</th>
            <th className="px-6 py-3">2019</th>
            <th className="px-6 py-3">2020</th>
            <th className="px-6 py-3">2021</th>
          </tr>
        </thead>
        <tbody>
          <tr className=" ">
            <td className="px-6 py-3 font-semibold">1</td>
            <td className="px-6 py-3 ">Hội thảo quốc tế</td>
            <td className="px-6 py-3">1</td>
            <td className="px-6 py-3"></td>
            <td className="px-6 py-3"></td>
            <td className="px-6 py-3"></td>
            <td className="px-6 py-3"></td>
            <td className="px-6 py-3"></td>
            <td className="px-6 py-3 bg-gray-200"></td>
          </tr>
          <tr className=" ">
            <td className="px-6 py-3 font-semibold">2</td>
            <td className="px-6 py-3 ">Hội thảo trong nước</td>
            <td className="px-6 py-3">0.5</td>
            <td className="px-6 py-3"></td>
            <td className="px-6 py-3"></td>
            <td className="px-6 py-3"></td>
            <td className="px-6 py-3"></td>
            <td className="px-6 py-3"></td>
            <td className="px-6 py-3 bg-gray-200"></td>
          </tr>
          <tr className=" ">
            <td className="px-6 py-3 font-semibold">3</td>
            <td className="px-6 py-3 ">Hội thảo cấp trường</td>
            <td className="px-6 py-3">0.25</td>
            <td className="px-6 py-3"></td>
            <td className="px-6 py-3"></td>
            <td className="px-6 py-3"></td>
            <td className="px-6 py-3"></td>
            <td className="px-6 py-3"></td>
            <td className="px-6 py-3 bg-gray-200"></td>
          </tr>
          <tr className=" ">
            <td className="px-6 py-3 bg-gray-200 font-semibold"></td>
            <td className="px-6 py-3 bg-gray-200 ">Tổng</td>
            <td className="px-6 py-3 bg-gray-200"></td>
            <td className="px-6 py-3 bg-gray-200"></td>
            <td className="px-6 py-3 bg-gray-200"></td>
            <td className="px-6 py-3 bg-gray-200"></td>
            <td className="px-6 py-3 bg-gray-200"></td>
            <td className="px-6 py-3 bg-gray-200"></td>
            <td className="px-6 py-3 bg-gray-200"></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Bang52;
