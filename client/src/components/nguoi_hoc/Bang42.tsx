import React from "react";
import { useAppSelector } from "../../redux/hook";
import SkeletonTable from "../common/SkeletonTable";
import NotFoundTable from "../common/NotFoundTable";

const Bang42 = () => {
  const { isLoading, nguoihocs } = useAppSelector((state) => state.nguoihoc);

  const renderTable = () => {
    if (isLoading) {
      return <SkeletonTable />;
    }
    if (nguoihocs.length == 0) {
      return <NotFoundTable />;
    }

    return (
      <>
        <tr className=" ">
          <td className="px-6 py-3 font-semibold">Số lượng</td>
          <td className="px-6 py-3 "></td>
          <td className="px-6 py-3"></td>
          <td className="px-6 py-3"></td>
          <td className="px-6 py-3"></td>
        </tr>
        <tr className=" ">
          <td className="px-6 py-3 font-semibold">Tỉ lệ (%)</td>
          <td className="px-6 py-3 "></td>
          <td className="px-6 py-3"></td>
          <td className="px-6 py-3"></td>
          <td className="px-6 py-3"></td>
        </tr>
      </>
    );
  };

  return (
    <div className="relative overflow-x-auto shadow-md rounded-lg">
      <table className="w-full text-sm text-left ">
        <thead className="text-xs text-black uppercase bg-gray-50">
          <tr>
            <th className="px-6 py-3 ">Các tiêu chí</th>
            <th className="px-6 py-3">2021-2022</th>
            <th className="px-6 py-3">2020-2021</th>
            <th className="px-6 py-3">2019-2020</th>
            <th className="px-6 py-3">2018-2019</th>
            <th className="px-6 py-3">2017-2018</th>
          </tr>
        </thead>
        <tbody>{renderTable()}</tbody>
      </table>
    </div>
  );
};

export default Bang42;
