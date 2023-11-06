import { useEffect } from "react";
import HeaderTitle from "../../components/common/HeaderTitle";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { getAllDatAction } from "../../features/slice/datSlice";
import { getAllNguoiHocAction } from "../../features/slice/nguoiHocSlice";
import { getAllMayTinhAction } from "../../features/slice/mayTinhSlice";

const CoSoVatChat = () => {
  const { dats } = useAppSelector((state) => state.dat);
  const { mayTinhs } = useAppSelector((state) => state.maytinh);
  const { nguoihocs } = useAppSelector((state) => state.nguoihoc);

  console.log(dats);
  console.log(mayTinhs);
  console.log(nguoihocs);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllDatAction());
    dispatch(getAllNguoiHocAction());
    dispatch(getAllMayTinhAction());
  }, [dispatch]);

  return (
    <>
      <HeaderTitle title="Cơ sở vật chất" />
      {/* Bang 56 */}
      <p>
        56. Tổng diện tích đất sử dụng của cơ sở giáo dục (tính bằng m2):{" "}
        {dats
          .reduce((total, item) => total + item.dien_tich * 1, 0)
          .toLocaleString()}
      </p>
      {/* Bang 57 */}
      <p>
        57. Tổng diện tích đất sử dụng của đơn vị thực hiện CTĐT (tính bằng m2):{" "}
        {dats
          .filter(
            (dat) => dat.muc_dich == "Học tập" || dat.muc_dich == "Làm việc"
          )
          .reduce((total, item) => total + item.dien_tich * 1, 0)
          .toLocaleString()}
      </p>
      {/* Bang 58 */}
      <p>58. Diện tích sử dụng cho các hạng mục sau (tính bằng m2)</p>
      <p>
        Nơi làm việc:{" "}
        {dats
          .filter((dat) => dat.muc_dich == "Làm việc")
          .reduce((total, item) => total + item.dien_tich * 1, 0)
          .toLocaleString()}{" "}
      </p>
      <p>
        Nơi học:{" "}
        {dats
          .filter((dat) => dat.muc_dich == "Học tập")
          .reduce((total, item) => total + item.dien_tich * 1, 0)
          .toLocaleString()}{" "}
      </p>
      <p>
        Nơi vui chơi giải trí:{" "}
        {dats
          .filter((dat) => dat.muc_dich == "Khác")
          .reduce((total, item) => total + item.dien_tich * 1, 0)
          .toLocaleString()}{" "}
      </p>
      {/* Bang 59 */}
      <p>59. Diện tích phòng học (tính bằng m2)</p>
      <p>
        Tổng diện tích phòng học:{" "}
        {dats
          .filter((dat) => dat.muc_dich == "Học tập")
          .reduce((total, item) => total + item.dien_tich * 1, 0)
          .toLocaleString()}
      </p>
      <p>
        Tỷ số diện tích phòng học trên người học chính quy:{" "}
        {(
          dats
            .filter((dat) => dat.muc_dich == "Học tập")
            .reduce((total, item) => total + item.dien_tich * 1, 0) /
          nguoihocs.filter((item) => !item.nam_tot_nghiep).length
        ).toLocaleString()}
      </p>
      {/* Bang 60  */}
      <p>60. Tổng số máy tính của đơn vị thực hiện CTĐT:</p>
      <p>
        Dùng cho hệ thống văn phòng :{" "}
        {mayTinhs.filter((item) => item.muc_dich == "văn phòng").length}
      </p>
      <p>
        Tỷ số số máy tính dùng cho người học/ người học chính quy :{" "}
        {(
          mayTinhs.filter((item) => item.muc_dich == "văn phòng").length /
          nguoihocs.filter((item) => !item.nam_tot_nghiep).length
        ).toLocaleString()}
      </p>
    </>
  );
};

export default CoSoVatChat;
