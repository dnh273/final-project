import axios from "axios";
import Khoa from "../models/Khoa";
import { IKhoa } from "../types/khoa.type";
import { DOMAIN } from "../config";
const fetchListKhoaAndUpdate = async () => {
  const oldestData = await Khoa.find().sort({ timestamp: -1 }).limit(1);
  const ListKhoa = await Khoa.find();

  const response = await axios.get(`${DOMAIN}/api/v1/Khoa`);
  if (response.status === 200) {
    const ListKhoaDelete = ListKhoa.filter(
      (item) =>
        !response.data.ListKhoa.map(
          (data: IKhoa) => data._id
        ).includes(item._id.toString())
    );

    if (ListKhoaDelete.length > 0) {
      await Khoa.deleteMany(ListKhoaDelete);
      console.log("Delete Khoa data success");
    }

    if (response.data.ListKhoa.length > 0 && oldestData.length == 0) {
      await Khoa.insertMany(response.data.ListKhoa);
      console.log("Update Khoa success");
    }
    if (response.data.ListKhoa.length > 0 && oldestData.length > 0) {
      const ListKhoaUpdate = response.data.ListKhoa.filter(
        (item: IKhoa) =>
          item.createdAt > oldestData[0].createdAt ||
          item.updatedAt > oldestData[0].updatedAt
      );
      if (ListKhoaUpdate.length > 0) {
        await Khoa.insertMany(ListKhoaUpdate);
        console.log("Daily update Khoa success");
      }
      if (ListKhoaUpdate.length == 0) {
        console.log("No new Khoa data");
      }

      return;
    }
    console.log("No new Khoa data");
    return;
  }
};

export { fetchListKhoaAndUpdate };
