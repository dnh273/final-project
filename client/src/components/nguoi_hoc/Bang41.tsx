import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import SkeletonTable from "../common/SkeletonTable";
import NotFoundTable from "../common/NotFoundTable";
import { ListNganh } from "../../constants/config";
import DropdownFilter from "../common/DropdownFilter";
import { filterNguoiHocAction } from "../../features/slice/nguoiHocSlice";

const Bang41 = () => {
  const { nguoihocs, isLoading } = useAppSelector((state) => state.nguoihoc);
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
          <td className="px-6 py-3 font-semibold">
            1. Tổng diện tích phòng ở (m2)
          </td>
          <td className="px-6 py-3">a</td>
          <td className="px-6 py-3">a</td>
          <td className="px-6 py-3">a</td>
          <td className="px-6 py-3">a</td>
          <td className="px-6 py-3">a</td>
        </tr>
        <tr className=" ">
          <td className="px-6 py-3 font-semibold">
            2. Người học có nhu cầu về phòng ở (Trong và ngoài ký túc xá)
          </td>
          <td className="px-6 py-3">a</td>
          <td className="px-6 py-3">a</td>
          <td className="px-6 py-3">a</td>
          <td className="px-6 py-3">a</td>
          <td className="px-6 py-3">a</td>
        </tr>
        <tr className=" ">
          <td className="px-6 py-3 font-semibold">
            3. Người học được ở trong ký túc xá
          </td>
          <td className="px-6 py-3">a</td>
          <td className="px-6 py-3">a</td>
          <td className="px-6 py-3">a</td>
          <td className="px-6 py-3">a</td>
          <td className="px-6 py-3">a</td>
        </tr>
        <tr className=" ">
          <td className="px-6 py-3 font-semibold">
            4. Tỷ số diện tích trên đầu người học ở trong ký túc xá (m2/người)
          </td>
          <td className="px-6 py-3">a</td>
          <td className="px-6 py-3">a</td>
          <td className="px-6 py-3">a</td>
          <td className="px-6 py-3">a</td>
          <td className="px-6 py-3">a</td>
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

export default Bang41;
