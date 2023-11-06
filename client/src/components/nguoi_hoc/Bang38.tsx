import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { randomNumber } from "../../utils";
import { ListNamHoc, ListNganh } from "../../constants/config";
import SkeletonTable from "../common/SkeletonTable";
import NotFoundTable from "../common/NotFoundTable";
import DropdownFilter from "../common/DropdownFilter";
import { filterNguoiHocAction } from "../../features/slice/nguoiHocSlice";

const Bang38 = () => {
  const { filterNguoiHocs, isLoading } = useAppSelector(
    (state) => state.nguoihoc
  );

  const [listNganhFilter, setListNganhFilter] = useState<string[]>([]);
  const [listNamFilter, setListNamFilter] = useState<string[]>([]);

  const dispatch = useAppDispatch();

  const uniqueNamNhapHocs = [
    ...new Set(filterNguoiHocs.map((item) => item.nam_nhap_hoc)),
  ]
    .sort((nameA, nameB) => {
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }

      // names must be equal
      return 0;
    })
    .reverse()
    .slice(0, 5)
    .reverse();

  const filterByNganhHocVaNamHoc = (nam_hoc: string) => {
    return filterNguoiHocs?.filter((item) => item.nam_nhap_hoc == nam_hoc);
  };

  useEffect(() => {
    dispatch(
      filterNguoiHocAction({
        filterNamNhapHoc: listNamFilter,
        filterNganh: listNganhFilter,
      })
    );
  }, [listNganhFilter, listNamFilter]);

  const renderTable = () => {
    if (isLoading) {
      return <SkeletonTable colSpan={99} />;
    }

    if (filterNguoiHocs.length == 0) {
      return <NotFoundTable colSpan={8} />;
    }
    return uniqueNamNhapHocs.map((nam_hoc, index) => {
      return (
        <tr key={index}>
          <td className="px-6 py-3 text-black border-b">{index + 1}</td>
          <td className="px-6 py-3 text-black border-b">{nam_hoc}</td>
          <td className="px-6 py-3 text-black border-b">
            {filterByNganhHocVaNamHoc(nam_hoc).length * randomNumber(2, 4)}
          </td>
          <td className="px-6 py-3 text-black border-b">
            {filterByNganhHocVaNamHoc(nam_hoc).length + randomNumber(5, 10)}
          </td>
          <td className="px-6 py-3 text-black border-b">
            {filterByNganhHocVaNamHoc(nam_hoc).length}
          </td>
          <td className="px-6 py-3 text-black border-b">
            {Math.min(
              ...filterByNganhHocVaNamHoc(nam_hoc).map((item) => item.diem_thi)
            ) === Infinity
              ? ""
              : Math.min(
                  ...filterByNganhHocVaNamHoc(nam_hoc).map(
                    (item) => item.diem_thi
                  )
                )}
          </td>
          <td className="px-6 py-3 text-black border-b">
            {
              filterByNganhHocVaNamHoc(nam_hoc).filter(
                (item) => item.quoc_tich != "Việt Nam"
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
        <DropdownFilter
          tagName="Năm"
          key={"Năm"}
          LIST={ListNamHoc}
          setListValue={setListNamFilter}
        />
      </div>
      <div className="relative overflow-y-auto rounded-lg">
        <table className="w-full text-sm text-left text-gray-400">
          <thead className="text-xs text-gray-400 uppercase bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-black"></th>
              <th className="px-6 py-3 text-black">Năm học</th>
              <th className="px-6 py-3 text-black">Số thí sinh đăng ký </th>
              <th className="px-6 py-3 text-black">Số thí sinh trúng tuyển</th>
              <th className="px-6 py-3 text-black">Số nhập học thực tế</th>
              <th className="px-6 py-3 text-black">Điểm đầu vào</th>
              <th className="px-6 py-3 text-black">Số sinh viên quốc tế</th>
            </tr>
          </thead>
          <tbody>{renderTable()}</tbody>
        </table>
      </div>
    </>
  );
};

export default Bang38;
