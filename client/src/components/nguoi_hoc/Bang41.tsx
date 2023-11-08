import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import SkeletonTable from "../common/SkeletonTable";
import NotFoundTable from "../common/NotFoundTable";
import { ListNamHoc, ListNganh } from "../../constants/config";
import DropdownFilter from "../common/DropdownFilter";
import { filterNguoiHocAction } from "../../features/slice/nguoiHocSlice";

const Bang41 = () => {
  const { nguoihocs, isLoading } = useAppSelector((state) => state.nguoihoc);
  const { phongkytucs } = useAppSelector((state) => state.phongkytuc);
  const [listNganhFilter, setListNganhFilter] = useState<string[]>([]);

  const dispatch = useAppDispatch();

  const filterKyTucTheoNam = (nam_hoc: string) => {
    return nguoihocs.filter((item) => item.ky_tuc_nam.includes(nam_hoc));
  };
  console.log(phongkytucs);

  const totalDienTich = phongkytucs.reduce(
    (total, item) => total + item.dien_tich,
    0
  );

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
          <td className="px-6 py-3">{totalDienTich}</td>
          <td className="px-6 py-3">{totalDienTich}</td>
          <td className="px-6 py-3">{totalDienTich}</td>
          <td className="px-6 py-3">{totalDienTich}</td>
          <td className="px-6 py-3">{totalDienTich}</td>
        </tr>
        <tr className=" ">
          <td className="px-6 py-3 font-semibold">
            2. Người học có nhu cầu về phòng ở (Trong và ngoài ký túc xá)
          </td>
          {ListNamHoc.map((nam_hoc, index) => {
            return (
              <td key={index} className="px-6 py-3">
                {filterKyTucTheoNam(nam_hoc).length * 2.5}
              </td>
            );
          })}
        </tr>
        <tr className=" ">
          <td className="px-6 py-3 font-semibold">
            3. Người học được ở trong ký túc xá
          </td>
          {ListNamHoc.map((nam_hoc, index) => {
            return (
              <td key={index} className="px-6 py-3">
                {filterKyTucTheoNam(nam_hoc).length}
              </td>
            );
          })}
        </tr>
        <tr className=" ">
          <td className="px-6 py-3 font-semibold">
            4. Tỷ số diện tích trên đầu người học ở trong ký túc xá (m2/người)
          </td>
          {ListNamHoc.map((nam_hoc, index) => {
            return (
              <td key={index} className="px-6 py-3">
                {(
                  filterKyTucTheoNam(nam_hoc).length / totalDienTich
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
              {ListNamHoc.map((nam_hoc, index) => {
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

export default Bang41;
