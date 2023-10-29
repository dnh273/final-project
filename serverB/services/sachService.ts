import axios from "axios";
import Sach from "../models/Sach";
import { ISach } from "../types/sach.type";
import { DOMAIN } from "../config";
const fetchListSachAndUpdate = async () => {
  const oldestData = await Sach.find().sort({ timestamp: -1 }).limit(1);
  const ListSach = await Sach.find();

  const response = await axios.get(`${DOMAIN}/api/v1/Sach`);
  if (response.status === 200) {
    const ListSachDelete = ListSach.filter(
      (item) =>
        !response.data.ListSach.map((data: ISach) => data._id).includes(
          item._id.toString()
        )
    );

    if (ListSachDelete.length > 0) {
      await Sach.deleteMany(ListSachDelete);
      console.log("Delete Sach data success");
    }
    if (response.data.ListSach.length > 0 && oldestData.length == 0) {
      await Sach.insertMany(response.data.ListSach);
      console.log("Update Sach success");
    }
    if (response.data.ListSach.length > 0 && oldestData.length > 0) {
      const ListSachUpdate = response.data.ListSach.filter(
        (item: ISach) =>
          item.createdAt > oldestData[0].createdAt ||
          item.updatedAt > oldestData[0].updatedAt
      );
      if (ListSachUpdate.length > 0) {
        await Sach.insertMany(ListSachUpdate);
        console.log("Daily update Sach success");
      }
      if (ListSachUpdate.length == 0) {
        console.log("No new Sach data");
      }

      return;
    }
    console.log("No new Sach data");
    return;
  }
};

export { fetchListSachAndUpdate };
