import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import {
  ListLoaiNguoiHoc,
  ListNamHoc,
  ListNganh,
} from "../../constants/config";
import SkeletonTable from "../common/SkeletonTable";
import NotFoundTable from "../common/NotFoundTable";
import DropdownFilter from "../common/DropdownFilter";
import { filterNguoiHocAction } from "../../features/slice/nguoiHocSlice";

const Bang43 = () => {
  const { filterNguoiHocs, isLoading } = useAppSelector(
    (state) => state.nguoihoc
  );
  const [listNganhFilter, setListNganhFilter] = useState<string[]>([]);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(
      filterNguoiHocAction({
        filterNamNhapHoc: [],
        filterNganh: listNganhFilter,
      })
    );
  }, [listNganhFilter]);

  const filterByNganhHocVaNamHoc = (
    nam_hoc: string,
    loai_nguoi_hoc: string[]
  ) => {
    return filterNguoiHocs.filter(
      (item) =>
        loai_nguoi_hoc.includes(item.loai_nguoi_hoc) &&
        item.nam_tot_nghiep == nam_hoc
    );
  };

  const renderTable = () => {
    if (isLoading) {
      return <SkeletonTable />;
    }

    if (filterNguoiHocs.length === 0) {
      return <NotFoundTable />;
    }

    return ListLoaiNguoiHoc.map((loai_nguoi_hoc, index) => {
      return (
        <tr key={index}>
          <td className="px-6 py-3 font-semibold">
            {`${loai_nguoi_hoc.stt ? loai_nguoi_hoc.stt + "." : ""} ${
              loai_nguoi_hoc.displayTextTotNghiep
                .slice(0, 1)
                .toLocaleUpperCase() +
              loai_nguoi_hoc.displayTextTotNghiep.slice(1)
            }`}
            {loai_nguoi_hoc.child && (
              <span className="block pt-1">Trong đó</span>
            )}
          </td>
          <td className="px-6 py-3">
            {
              filterByNganhHocVaNamHoc(
                ListNamHoc[0],
                loai_nguoi_hoc.conditional
              ).length
            }
          </td>
          <td className="px-6 py-3">
            {
              filterByNganhHocVaNamHoc(
                ListNamHoc[1],
                loai_nguoi_hoc.conditional
              ).length
            }
          </td>
          <td className="px-6 py-3">
            {
              filterByNganhHocVaNamHoc(
                ListNamHoc[2],
                loai_nguoi_hoc.conditional
              ).length
            }
          </td>
          <td className="px-6 py-3">
            {
              filterByNganhHocVaNamHoc(
                ListNamHoc[3],
                loai_nguoi_hoc.conditional
              ).length
            }
          </td>
          <td className="px-6 py-3">
            {
              filterByNganhHocVaNamHoc(
                ListNamHoc[4],
                loai_nguoi_hoc.conditional
              ).length
            }
          </td>
        </tr>
      );
    });
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
              <th className="px-6 py-3">2017-2018</th>
              <th className="px-6 py-3">2018-2019</th>
              <th className="px-6 py-3">2019-2020</th>
              <th className="px-6 py-3">2020-2021</th>
              <th className="px-6 py-3">2021-2022</th>
            </tr>
          </thead>
          <tbody>{renderTable()}</tbody>
        </table>
      </div>
    </>
  );
};

export default Bang43;
