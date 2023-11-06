import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import SkeletonTable from "../common/SkeletonTable";
import NotFoundTable from "../common/NotFoundTable";
import DropdownFilter from "../common/DropdownFilter";
import { ListNamHoc, ListNganh } from "../../constants/config";
import { filterNguoiHocAction } from "../../features/slice/nguoiHocSlice";
import { INghienCuuKhoaHoc } from "../../interface";

const Bang42 = () => {
  const { isLoading, nguoihocs } = useAppSelector((state) => state.nguoihoc);
  const { nghiencuukhoahocs } = useAppSelector(
    (state) => state.nghiencuukhoahoc
  );
  const [listNganhFilter, setListNganhFilter] = useState<string[]>([]);

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

  const filterByNamHoc = (nam_hoc: string, arr: INghienCuuKhoaHoc[]) => {
    return arr.filter((item) => item.nam_hoc == nam_hoc);
  };

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
                {filterByNamHoc(nam_hoc, nghiencuukhoahocs).length}
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
                  filterByNamHoc(nam_hoc, nghiencuukhoahocs).length /
                  nguoihocs.length
                ).toFixed()}
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
