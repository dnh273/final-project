import axios from "axios";
import Sach from "../models/Sach";
import { ISach } from "../types/sach.type";
import { DOMAIN } from "../config";
const fetchListSachAndUpdate = async () => {
  const sach = await Sach.find().sort({ timestamp: -1 }).limit(1);

  const response = await axios.get(`${DOMAIN}/api/v1/Sach`);

  if (response.status === 200) {
    const ListSachUpdate = response.data.ListSach.filter(
      (item: ISach) =>
        item.createdAt > sach[0].createdAt || item.updatedAt > sach[0].updatedAt
    );

    if (ListSachUpdate.length > 0) {
      await Sach.insertMany(ListSachUpdate);
      console.log("Daily update Sach success");
    } else {
      console.log("No new Sach data");
    }
  }
};

export { fetchListSachAndUpdate };
