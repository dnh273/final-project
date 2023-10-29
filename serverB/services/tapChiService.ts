import axios from "axios";
import TapChi from "../models/TapChi";
import { ITapChi } from "../types/tapChi.type";
import { DOMAIN } from "../config";
const fetchListTapChiAndUpdate = async () => {
  const oldestData = await TapChi.find().sort({ timestamp: -1 }).limit(1);
  const ListTapChi = await TapChi.find();

  const response = await axios.get(`${DOMAIN}/api/v1/TapChi`);
  if (response.status === 200) {
    const ListTapChiDelete = ListTapChi.filter(
      (item) =>
        !response.data.ListTapChi.map(
          (data: ITapChi) => data._id
        ).includes(item._id.toString())
    );

    if (ListTapChiDelete.length > 0) {
      await TapChi.deleteMany(ListTapChiDelete);
      console.log("Delete TapChi data success");
    }

    if (response.data.ListTapChi.length > 0 && oldestData.length == 0) {
      await TapChi.insertMany(response.data.ListTapChi);
      console.log("Update TapChi success");
    }
    if (response.data.ListTapChi.length > 0 && oldestData.length > 0) {
      const ListTapChiUpdate = response.data.ListTapChi.filter(
        (item: ITapChi) =>
          item.createdAt > oldestData[0].createdAt ||
          item.updatedAt > oldestData[0].updatedAt
      );
      if (ListTapChiUpdate.length > 0) {
        await TapChi.insertMany(ListTapChiUpdate);
        console.log("Daily update TapChi success");
      }
      if (ListTapChiUpdate.length == 0) {
        console.log("No new TapChi data");
      }

      return;
    }
    console.log("No new TapChi data");
    return;
  }
};

export { fetchListTapChiAndUpdate };
