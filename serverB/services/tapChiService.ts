import axios from "axios";
import TapChi from "../models/TapChi";
import { ITapChi } from "../types/tapChi.type";
import { DOMAIN } from "../config";
const fetchListTapChiAndUpdate = async () => {
  const tapChi = await TapChi.find().sort({ timestamp: -1 }).limit(1);

  const response = await axios.get(`${DOMAIN}/api/v1/TapChi`);

  if (response.status === 200) {
    const ListTapChiUpdate = response.data.ListTapChi.filter(
      (item: ITapChi) =>
        item.createdAt > tapChi[0].createdAt ||
        item.updatedAt > tapChi[0].updatedAt
    );

    if (ListTapChiUpdate.length > 0) {
      await TapChi.insertMany(ListTapChiUpdate);
      console.log("Daily update TapChi success");
    } else {
      console.log("No new TapChi data");
    }
  }
};

export { fetchListTapChiAndUpdate };
