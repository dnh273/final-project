import axios from "axios";
import NganhHoc from "../models/NganhHoc";
import { INganhHoc } from "../types/nganhHoc.type";
import { DOMAIN } from "../config";
const fetchListNganhHocAndUpdate = async () => {
  const oldestData = await NganhHoc.find().sort({ timestamp: -1 }).limit(1);
  const ListNganhHoc = await NganhHoc.find();

  const response = await axios.get(`${DOMAIN}/api/v1/NganhHoc`);
  if (response.status === 200) {
    const ListNganhHocDelete = ListNganhHoc.filter(
      (item) =>
        !response.data.ListNganhHoc.map(
          (data: INganhHoc) => data._id
        ).includes(item._id.toString())
    );

    if (ListNganhHocDelete.length > 0) {
      await NganhHoc.deleteMany(ListNganhHocDelete);
      console.log("Delete NganhHoc data success");
    }

    if (response.data.ListNganhHoc.length > 0 && oldestData.length == 0) {
      await NganhHoc.insertMany(response.data.ListNganhHoc);
      console.log("Update NganhHoc success");
    }
    if (response.data.ListNganhHoc.length > 0 && oldestData.length > 0) {
      const ListNganhHocUpdate = response.data.ListNganhHoc.filter(
        (item: INganhHoc) =>
          item.createdAt > oldestData[0].createdAt ||
          item.updatedAt > oldestData[0].updatedAt
      );
      if (ListNganhHocUpdate.length > 0) {
        await NganhHoc.insertMany(ListNganhHocUpdate);
        console.log("Daily update NganhHoc success");
      }
      if (ListNganhHocUpdate.length == 0) {
        console.log("No new NganhHoc data");
      }

      return;
    }
    console.log("No new NganhHoc data");
    return;
  }
};

export { fetchListNganhHocAndUpdate };
