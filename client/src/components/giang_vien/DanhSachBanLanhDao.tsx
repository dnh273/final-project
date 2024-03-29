import { useEffect, useState } from "react";
import SearchTable from "../common/SearchTable";
import DropdownFilter from "../common/DropdownFilter";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { filterGiangVienAction } from "../../features/slice/giangVienSlice";
import SkeletonTable from "../common/SkeletonTable";
import NotFoundTable from "../common/NotFoundTable";
import { useSearchParams } from "react-router-dom";

const DanhSachBanLanhDao = () => {
  const dispatch = useAppDispatch();

  const { filterGiangViens, giangviens, isLoading } = useAppSelector(
    (state) => state.giangvien
  );
  const [searchParams, setSearchParams] = useSearchParams({ q: "" });
  const q = searchParams.get("q");
  const [listKhoaFilter, setListKhoaFilter] = useState<string[]>([]);
  const [listHocViFilter, setListHocViFilter] = useState<string[]>([]);

  const uniqueKhoas = [...new Set(giangviens.map((item) => item.khoa))];
  const uniqueHocVis = [...new Set(giangviens.map((item) => item.hoc_vi))];

  const renderTable = () => {
    if (isLoading) {
      return <SkeletonTable colSpan={8} />;
    }

    if (filterGiangViens?.length === 0) {
      return <NotFoundTable />;
    }

    return filterGiangViens?.map((item, index) => (
      <tr className="bg-white border-b" key={index}>
        <td className="px-6 py-4 font-medium whitespace-nowrap text-gray-800 text-center">
          {index + 1}
        </td>
        <td className="px-6 py-4 font-medium whitespace-nowrap text-gray-800">
          {item.ho_ten}
        </td>
        <td className="px-6 py-4 font-medium whitespace-nowrap text-gray-800">
          {item.nam_sinh}
        </td>
        <td className="px-6 py-4 font-medium whitespace-nowrap text-gray-800">
          {item.chuc_vu}
        </td>
        <td className="px-6 py-4 font-medium whitespace-nowrap text-gray-800">
          {item.hoc_vi}
        </td>
        <td className="px-6 py-4 font-medium whitespace-nowrap text-gray-800">
          {item.khoa}
        </td>
        <td className="px-6 py-4 font-medium whitespace-nowrap text-gray-800">
          {item.dien_thoai}
        </td>
        <td className="px-6 py-4 font-medium whitespace-nowrap text-gray-800">
          {item.email}
        </td>
      </tr>
    ));
  };

  useEffect(() => {
    dispatch(
      filterGiangVienAction({
        filterHocVi: listHocViFilter,
        filterKhoa: listKhoaFilter,
        query: q,
      })
    );
  }, [listHocViFilter, listKhoaFilter, q, dispatch]);

  return (
    <>
      <div className="flex flex-wrap items-center pb-4">
        <SearchTable setQ={setSearchParams} />
        <DropdownFilter
          tagName="Khoa"
          setListValue={setListKhoaFilter}
          key={"Khoa"}
          LIST={uniqueKhoas}
        />
        <DropdownFilter
          tagName="Học vị"
          key={"Hoc Vi"}
          setListValue={setListHocViFilter}
          LIST={uniqueHocVis}
        />
      </div>
      <div className="relative overflow-y-auto rounded-lg">
        <table className="w-full text-sm text-left text-gray-400">
          <thead className="text-xs text-gray-400 uppercase bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-black">Mã giảng viên</th>
              <th className="px-6 py-3 text-black">Họ và tên</th>
              <th className="px-6 py-3 text-black">Năm sinh</th>
              <th className="px-6 py-3 text-black">Chức vụ</th>
              <th className="px-6 py-3 text-black">Học vị</th>
              <th className="px-6 py-3 text-black">Khoa</th>
              <th className="px-6 py-3 text-black">Điện thoại</th>
              <th className="px-6 py-3 text-black">Email</th>
            </tr>
          </thead>
          <tbody>{renderTable()}</tbody>
        </table>
      </div>
    </>
  );
};

export default DanhSachBanLanhDao;
