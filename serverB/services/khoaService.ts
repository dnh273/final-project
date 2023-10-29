import axios from "axios";
import Khoa from "../models/Khoa";
import { IKhoa } from "../types/khoa.type";
import { DOMAIN } from "../config";
const fetchListKhoaAndUpdate = async () => {
  const khoa = await Khoa.find().sort({ timestamp: -1 }).limit(1);

  const response = await axios.get(`${DOMAIN}/api/v1/Khoa`);

  if (response.status === 200) {
    const ListKhoaUpdate = response.data.ListKhoa.filter(
      (item: IKhoa) =>
        item.createdAt > khoa[0].createdAt || item.updatedAt > khoa[0].updatedAt
    );

    if (ListKhoaUpdate.length > 0) {
      await Khoa.insertMany(ListKhoaUpdate);
      console.log("Daily update Khoa success");
    } else {
      console.log("No new Khoa data");
    }
  }
};

export { fetchListKhoaAndUpdate };
