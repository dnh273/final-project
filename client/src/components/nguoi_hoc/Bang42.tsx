import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import SkeletonTable from "../common/SkeletonTable";
import NotFoundTable from "../common/NotFoundTable";
import DropdownFilter from "../common/DropdownFilter";
import { ListNganh } from "../../constants/config";
import { filterNguoiHocAction } from "../../features/slice/nguoiHocSlice";
import { INghienCuuKhoaHoc } from "../../interface";

const Bang42 = () => {
  const { isLoading, nguoihocs } = useAppSelector((state) => state.nguoihoc);
  const { nghiencuukhoahocs } = useAppSelector(
    (state) => state.nghiencuukhoahoc
  );

  const [listNganhFilter, setListNganhFilter] = useState<string[]>([]);

  const ListNamHoc = [
    "2018-2019",
    "2019-2020",
    "2020-2021",
    "2021-2022",
    "2022-2023",
  ];
  const reversedListNameHoc = [...ListNamHoc].reverse();

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(
      filterNguoiHocAction({
        filterNamNhapHoc: [],
        filterNganh: listNganhFilter,
      })
    );
  }, [listNganhFilter]);

  const filterNCKHByNamHoc = (nam_hoc: string, arr: INghienCuuKhoaHoc[]) => {
    return arr.filter((item) => item.nam_hoc == nam_hoc);
  };

  const filterNguoiHocNCKH = (nam_hoc: string) => {
    return nguoihocs.filter(
      (item) =>
        item.nghien_cuu_khoa_hoc && item.nghien_cuu_khoa_hoc.nam_hoc == nam_hoc
    );
  };
  console.log(filterNguoiHocNCKH("2018-2019").length);

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
          {reversedListNameHoc.map((nam_hoc, index) => {
            return (
              <td className="px-6 py-3" key={index}>
                {filterNguoiHocNCKH(nam_hoc).length}
              </td>
            );
          })}
        </tr>
        <tr className=" ">
          <td className="px-6 py-3 font-semibold">Tỉ lệ (%)</td>
          {reversedListNameHoc.map((nam_hoc, index) => {
            return (
              <td className="px-6 py-3" key={index}>
                {(
                  (filterNCKHByNamHoc(nam_hoc, nghiencuukhoahocs).length /
                    filterNguoiHocNCKH(nam_hoc).length) *
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
    <>
      <div className="flex flex-wrap items-center pb-4">
        <DropdownFilter
          tagName="Ngành"
          key={"Ngành"}
          LIST={ListNganh}
          setListValue={setListNganhFilter}
        />
      </div>
      <div className="relative overflow-x-auto shadow-md rounded-lg">
        <table className="w-full text-sm text-left ">
          <thead className="text-xs text-black uppercase bg-gray-50">
            <tr>
              <th className="px-6 py-3 ">Các tiêu chí</th>
              {reversedListNameHoc.map((nam_hoc, index) => {
                return (
                  <th key={index} className="px-6 py-3">
                    {nam_hoc}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>{renderTable()}</tbody>
        </table>
      </div>
    </>
  );
};

export default Bang42;
