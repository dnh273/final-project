import React from "react";

const Bang53 = () => {
  return (
    <div className="relative overflow-x-auto shadow-md rounded-lg">
      <table className="w-full text-sm text-left ">
        <thead className="text-xs text-black uppercase bg-gray-50">
          <tr>
            <th className="px-6 py-3" rowSpan={2}>
              Số lượng cán bộ cơ hữu có báo cáo khoa học tại các hội nghị, hội
              thảo
            </th>
            <th className="px-6 py-3 text-center" colSpan={3}>
              Cấp hội thảo
            </th>
          </tr>
          <tr>
            <th className="px-6 py-3">Hội thảo quốc tế</th>
            <th className="px-6 py-3">Hội thảo trong nước</th>
            <th className="px-6 py-3">Hội thảo ở trường</th>
          </tr>
        </thead>
        <tbody>
          <tr className=" ">
            <td className="px-6 py-3 font-semibold">Từ 1-5 cuốn sách</td>
            <td className="px-6 py-3"></td>
            <td className="px-6 py-3"></td>
            <td className="px-6 py-3"></td>
          </tr>

          <tr className=" ">
            <td className="px-6 py-3 font-semibold">Từ 6-10 cuốn sách</td>
            <td className="px-6 py-3"></td>
            <td className="px-6 py-3"></td>
            <td className="px-6 py-3"></td>
          </tr>
          <tr className=" ">
            <td className="px-6 py-3 font-semibold">Từ 11-15 cuốn sách</td>
            <td className="px-6 py-3"></td>
            <td className="px-6 py-3"></td>
            <td className="px-6 py-3"></td>
          </tr>
          <tr className=" ">
            <td className="px-6 py-3 font-semibold">Trên 15 bài báo</td>
            <td className="px-6 py-3"></td>
            <td className="px-6 py-3"></td>
            <td className="px-6 py-3"></td>
          </tr>
          <tr className=" ">
            <td className="px-6 py-3 font-semibold">Tổng số cán bộ tham gia</td>
            <td className="px-6 py-3"></td>
            <td className="px-6 py-3"></td>
            <td className="px-6 py-3"></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Bang53;
