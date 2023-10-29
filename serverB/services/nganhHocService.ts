import axios from "axios";
import NganhHoc from "../models/NganhHoc";
import { INganhHoc } from "../types/nganhHoc.type";
import { DOMAIN } from "../config";
const fetchListNganhHocAndUpdate = async () => {
  const nganhHoc = await NganhHoc.find().sort({ timestamp: -1 }).limit(1);

  const response = await axios.get(`${DOMAIN}/api/v1/NganhHoc`);

  if (response.status === 200) {
    const ListNganhHocUpdate = response.data.ListNganhHoc.filter(
      (item: INganhHoc) =>
        item.createdAt > nganhHoc[0].createdAt ||
        item.updatedAt > nganhHoc[0].updatedAt
    );

    if (ListNganhHocUpdate.length > 0) {
      await NganhHoc.insertMany(ListNganhHocUpdate);
      console.log("Daily update NganhHoc success");
    } else {
      console.log("No new NganhHoc data");
    }
  }
};

export { fetchListNganhHocAndUpdate };
