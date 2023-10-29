import axios from "axios";
import HoiThao from "../models/HoiThao";
import { IHoiThao } from "../types/hoiThao.type";
import { DOMAIN } from "../config";
const fetchListHoiThaoAndUpdate = async () => {
  const oldestData = await HoiThao.find().sort({ timestamp: -1 }).limit(1);
  const ListHoiThao = await HoiThao.find();

  const response = await axios.get(`${DOMAIN}/api/v1/HoiThao`);
  if (response.status === 200) {
    const ListHoiThaoDelete = ListHoiThao.filter(
      (item) =>
        !response.data.ListHoiThao.map(
          (data: IHoiThao) => data._id
        ).includes(item._id.toString())
    );

    if (ListHoiThaoDelete.length > 0) {
      await HoiThao.deleteMany(ListHoiThaoDelete);
      console.log("Delete HoiThao data success");
    }

    if (response.data.ListHoiThao.length > 0 && oldestData.length == 0) {
      await HoiThao.insertMany(response.data.ListHoiThao);
      console.log("Update HoiThao success");
    }
    if (response.data.ListHoiThao.length > 0 && oldestData.length > 0) {
      const ListHoiThaoUpdate = response.data.ListHoiThao.filter(
        (item: IHoiThao) =>
          item.createdAt > oldestData[0].createdAt ||
          item.updatedAt > oldestData[0].updatedAt
      );
      if (ListHoiThaoUpdate.length > 0) {
        await HoiThao.insertMany(ListHoiThaoUpdate);
        console.log("Daily update HoiThao success");
      }
      if (ListHoiThaoUpdate.length == 0) {
        console.log("No new HoiThao data");
      }

      return;
    }
    console.log("No new HoiThao data");
    return;
  }
};

export { fetchListHoiThaoAndUpdate };
