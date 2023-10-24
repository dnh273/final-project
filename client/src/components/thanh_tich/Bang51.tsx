import React from "react";

const Bang51 = () => {
  return (
    <div className="relative overflow-x-auto shadow-md rounded-lg">
      <table className="w-full text-sm text-left ">
        <thead className="text-xs text-black uppercase bg-gray-50">
          <tr>
            <th className="px-6 py-3" rowSpan={2}>
              Số lượng cán bộ cơ hữu có bài báo đăng trên tạp chí
            </th>
            <th className="px-6 py-3 text-center" colSpan={3}>
              Nơi đăng
            </th>
          </tr>
          <tr>
            <th className="px-6 py-3">
              Tạp chí khoa học quốc tế (ISI, SCOPUS,...)
            </th>
            <th className="px-6 py-3">Tạp chí khoa học cấp ngành trong nước</th>
            <th className="px-6 py-3">Tạp chí/ tập san cấp trường</th>
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

export default Bang51;
