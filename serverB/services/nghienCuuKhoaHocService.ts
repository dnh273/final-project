import axios from "axios";
import NghienCuuKhoaHoc from "../models/NghienCuuKhoaHoc";
import { INghienCuuKhoaHoc } from "../types/nghienCuuKhoaHoc.type";
import { DOMAIN } from "../config";
const fetchListNghienCuuKhoaHocAndUpdate = async () => {
  const oldestData = await NghienCuuKhoaHoc.find().sort({ timestamp: -1 }).limit(1);
  const ListNghienCuuKhoaHoc = await NghienCuuKhoaHoc.find();

  const response = await axios.get(`${DOMAIN}/api/v1/NghienCuuKhoaHoc`);
  if (response.status === 200) {
    const ListNghienCuuKhoaHocDelete = ListNghienCuuKhoaHoc.filter(
      (item) =>
        !response.data.ListNghienCuuKhoaHoc.map(
          (data: INghienCuuKhoaHoc) => data._id
        ).includes(item._id.toString())
    );

    if (ListNghienCuuKhoaHocDelete.length > 0) {
      await NghienCuuKhoaHoc.deleteMany(ListNghienCuuKhoaHocDelete);
      console.log("Delete NghienCuuKhoaHoc data success");
    }

    if (response.data.ListNghienCuuKhoaHoc.length > 0 && oldestData.length == 0) {
      await NghienCuuKhoaHoc.insertMany(response.data.ListNghienCuuKhoaHoc);
      console.log("Update NghienCuuKhoaHoc success");
    }
    if (response.data.ListNghienCuuKhoaHoc.length > 0 && oldestData.length > 0) {
      const ListNghienCuuKhoaHocUpdate = response.data.ListNghienCuuKhoaHoc.filter(
        (item: INghienCuuKhoaHoc) =>
          item.createdAt > oldestData[0].createdAt ||
          item.updatedAt > oldestData[0].updatedAt
      );
      if (ListNghienCuuKhoaHocUpdate.length > 0) {
        await NghienCuuKhoaHoc.insertMany(ListNghienCuuKhoaHocUpdate);
        console.log("Daily update NghienCuuKhoaHoc success");
      }
      if (ListNghienCuuKhoaHocUpdate.length == 0) {
        console.log("No new NghienCuuKhoaHoc data");
      }

      return;
    }
    console.log("No new NghienCuuKhoaHoc data");
    return;
  }
};

export { fetchListNghienCuuKhoaHocAndUpdate };
