const Bang55Part1 = () => {
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
            <td className="px-6 py-3">Từ 1 đến 3 đề tài</td>
            <td className="px-6 py-3"></td>
            <td className="px-6 py-3"></td>
            <td className="px-6 py-3"></td>
            <td className="px-6 py-3"></td>
          </tr>
          <tr>
            <td className="px-6 py-3">Từ 4 đến 6 đề tài</td>
            <td className="px-6 py-3"></td>
            <td className="px-6 py-3"></td>
            <td className="px-6 py-3"></td>
            <td className="px-6 py-3"></td>
          </tr>
          <tr>
            <td className="px-6 py-3">Trên 6 đề tài</td>
            <td className="px-6 py-3"></td>
            <td className="px-6 py-3"></td>
            <td className="px-6 py-3"></td>
            <td className="px-6 py-3"></td>
          </tr>
          <tr>
            <td className="px-6 py-3">Tổng số người học tham gia</td>
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

export default Bang55Part1;
