import React from "react";
import { useAppSelector } from "../../redux/hook";
import { ListNamHoc } from "../../constants/config";
import SkeletonTable from "../common/SkeletonTable";
import NotFoundTable from "../common/NotFoundTable";

const Bang40 = () => {
  const { nguoihocs, isLoading } = useAppSelector((state) => state.nguoihoc);

  const filterByQuocTichAndNamHoc = (quoc_tich: string, nam_hoc: string) => {
    return nguoihocs.filter(
      (item) => item.quoc_tich != quoc_tich && item.nam_nhap_hoc == nam_hoc
    );
  };

  const renderTable = () => {
    if (isLoading) {
      return <SkeletonTable colSpan={99}/>;
    }

    if (nguoihocs.length === 0) {
      return <NotFoundTable />;
    }
    return (
      <>
        <tr className=" ">
          <td className="px-6 py-3 font-semibold">Số lượng</td>
          {ListNamHoc.map((nam_hoc, index) => {
            return (
              <td className="px-6 py-3" key={index}>
                {filterByQuocTichAndNamHoc("Việt Nam", nam_hoc).length}
              </td>
            );
          })}
        </tr>
        <tr className=" ">
          <td className="px-6 py-3 font-semibold">Tỉ lệ (%)</td>
          {ListNamHoc.map((nam_hoc, index) => {
            return (
              <td className="px-6 py-3" key={index}>
                {(
                  (filterByQuocTichAndNamHoc("Việt Nam", nam_hoc).length /
                    nguoihocs.filter((item) => item.nam_nhap_hoc == nam_hoc)
                      .length) *
                  100
                ).toLocaleString()}
              </td>
            );
          })}
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

export default Bang40;
