import axios from "axios";
import NguoiHoc from "../models/NguoiHoc";
import { INguoiHoc } from "../types/nguoiHoc.type";
import { DOMAIN } from "../config";
const fetchListNguoiHocAndUpdate = async () => {
  const oldestData = await NguoiHoc.find().sort({ timestamp: -1 }).limit(1);
  const ListNguoiHoc = await NguoiHoc.find();

  const response = await axios.get(`${DOMAIN}/api/v1/NguoiHoc`);
  if (response.status === 200) {
    const ListNguoiHocDelete = ListNguoiHoc.filter(
      (item) =>
        !response.data.ListNguoiHoc.map(
          (data: INguoiHoc) => data._id
        ).includes(item._id.toString())
    );

    if (ListNguoiHocDelete.length > 0) {
      await NguoiHoc.deleteMany(ListNguoiHocDelete);
      console.log("Delete NguoiHoc data success");
    }

    if (response.data.ListNguoiHoc.length > 0 && oldestData.length == 0) {
      await NguoiHoc.insertMany(response.data.ListNguoiHoc);
      console.log("Update NguoiHoc success");
    }
    if (response.data.ListNguoiHoc.length > 0 && oldestData.length > 0) {
      const ListNguoiHocUpdate = response.data.ListNguoiHoc.filter(
        (item: INguoiHoc) =>
          item.createdAt > oldestData[0].createdAt ||
          item.updatedAt > oldestData[0].updatedAt
      );
      if (ListNguoiHocUpdate.length > 0) {
        await NguoiHoc.insertMany(ListNguoiHocUpdate);
        console.log("Daily update NguoiHoc success");
      }
      if (ListNguoiHocUpdate.length == 0) {
        console.log("No new NguoiHoc data");
      }

      return;
    }
    console.log("No new NguoiHoc data");
    return;
  }
};

export { fetchListNguoiHocAndUpdate };
