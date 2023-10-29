import axios from "axios";
import NghienCuuKhoaHoc from "../models/NghienCuuKhoaHoc";
import { INghienCuuKhoaHoc } from "../types/nghienCuuKhoaHoc.type";
import { DOMAIN } from "../config";
const fetchListNghienCuuKhoaHocAndUpdate = async () => {
  const nghienCuuKhoaHoc = await NghienCuuKhoaHoc.find()
    .sort({ timestamp: -1 })
    .limit(1);

  const response = await axios.get(`${DOMAIN}/api/v1/NghienCuuKhoaHoc`);

  if (response.status === 200) {
    const ListNghienCuuKhoaHocUpdate =
      response.data.ListNghienCuuKhoaHoc.filter(
        (item: INghienCuuKhoaHoc) =>
          item.createdAt > nghienCuuKhoaHoc[0].createdAt ||
          item.updatedAt > nghienCuuKhoaHoc[0].updatedAt
      );

    if (ListNghienCuuKhoaHocUpdate.length > 0) {
      await NghienCuuKhoaHoc.insertMany(ListNghienCuuKhoaHocUpdate);
      console.log("Daily update NghienCuuKhoaHoc success");
    } else {
      console.log("No new NghienCuuKhoaHoc data");
    }
  }
};

export { fetchListNghienCuuKhoaHocAndUpdate };
