import React, { useEffect, useState } from "react";

import {
  ListLoaiNguoiHoc,
  ListNamHoc,
  ListNganh,
} from "../../constants/config";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import SkeletonTable from "../common/SkeletonTable";
import NotFoundTable from "../common/NotFoundTable";
import DropdownFilter from "../common/DropdownFilter";
import { filterNguoiHocAction } from "../../features/slice/nguoiHocSlice";

const Bang39 = () => {
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

  function filterByNamHocAndLoaiNguoiHoc(
    nam_hoc: string,
    loai_nguoi_hoc: string
  ) {
    return filterNguoiHocs.filter(
      (item) =>
        item.nam_nhap_hoc == nam_hoc && item.loai_nguoi_hoc == loai_nguoi_hoc
    );
  }

  const renderTable = () => {
    if (isLoading) {
      return <SkeletonTable colSpan={99} />;
    }

    if (filterNguoiHocs.length == 0) {
      return <NotFoundTable />;
    }

    return ListLoaiNguoiHoc.map((loai_nguoi_hoc, index) => {
      return (
        <tr key={index}>
          <td className="px-6 py-3 font-semibold">
            {`${loai_nguoi_hoc.stt ? loai_nguoi_hoc.stt + "." : ""} ${
              loai_nguoi_hoc.text.slice(0, 1).toLocaleUpperCase() +
              loai_nguoi_hoc.text.slice(1)
            }`}
          </td>
          <td className="px-6 py-3">
            {
              filterByNamHocAndLoaiNguoiHoc(ListNamHoc[4], loai_nguoi_hoc.text)
                .length
            }
          </td>
          <td className="px-6 py-3">
            {
              filterByNamHocAndLoaiNguoiHoc(ListNamHoc[3], loai_nguoi_hoc.text)
                .length
            }
          </td>
          <td className="px-6 py-3">
            {
              filterByNamHocAndLoaiNguoiHoc(ListNamHoc[2], loai_nguoi_hoc.text)
                .length
            }
          </td>
          <td className="px-6 py-3">
            {
              filterByNamHocAndLoaiNguoiHoc(ListNamHoc[1], loai_nguoi_hoc.text)
                .length
            }
          </td>
          <td className="px-6 py-3">
            {
              filterByNamHocAndLoaiNguoiHoc(ListNamHoc[0], loai_nguoi_hoc.text)
                .length
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
    </>
  );
};

export default Bang39;
