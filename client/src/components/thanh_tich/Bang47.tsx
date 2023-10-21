import React from "react";

const Bang47 = () => {
  return (
    <div className="relative overflow-x-auto shadow-md rounded-lg">
      <table className="w-full text-sm text-left">
        <thead className="text-xs text-black uppercase bg-gray-50">
          <tr>
            <th className="px-6 py-3" rowSpan={2}>
              Số lượng đề tài
            </th>
            <th className="px-6 py-3 text-center" colSpan={3}>
              Số lượng cán bộ tham gia
            </th>
            <th className="px-6 py-3" rowSpan={2}>
              Ghi chú
            </th>
          </tr>
          <tr>
            <th className="px-6 py-3">Đề tài cấp NN</th>
            <th className="px-6 py-3">Đề tài cấp Bộ</th>
            <th className="px-6 py-3">Đề tài cấp trường</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-6 py-3">ádg</td>
            <td className="px-6 py-3">ádg</td>
            <td className="px-6 py-3">ádg</td>
            <td className="px-6 py-3">ádg</td>
            <td className="px-6 py-3">ádg</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Bang47;
