import axios from "axios";
import NguoiHoc from "../models/NguoiHoc";
import { INguoiHoc } from "../types/nguoiHoc.type";
import { DOMAIN } from "../config";
const fetchListNguoiHocAndUpdate = async () => {
  const nguoiHoc = await NguoiHoc.find().sort({ timestamp: -1 }).limit(1);

  const response = await axios.get(`${DOMAIN}/api/v1/NguoiHoc`);

  if (response.status === 200) {
    const ListNguoiHocUpdate = response.data.ListNguoiHoc.filter(
      (item: INguoiHoc) =>
        item.createdAt > nguoiHoc[0].createdAt ||
        item.updatedAt > nguoiHoc[0].updatedAt
    );

    if (ListNguoiHocUpdate.length > 0) {
      await NguoiHoc.insertMany(ListNguoiHocUpdate);
      console.log("Daily update NguoiHoc success");
    } else {
      console.log("No new NguoiHoc data");
    }
  }
};

export { fetchListNguoiHocAndUpdate };
