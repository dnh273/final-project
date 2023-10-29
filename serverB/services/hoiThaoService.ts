import axios from "axios";
import HoiThao from "../models/HoiThao";
import { DOMAIN } from "../config";
import { IHoiThao } from "../types/hoiThao.type";

const fetchListHoiThaoAndUpdate = async () => {
  const hoiThao = await HoiThao.find().sort({ timestamp: -1 }).limit(1);

  const response = await axios.get(`${DOMAIN}/api/v1/hoithao`);
  if (response.status === 200) {
    const ListHoiThaoUpdate = response.data.ListHoiThao.filter(
      (item: IHoiThao) =>
        item.createdAt > hoiThao[0].createdAt ||
        item.updatedAt > hoiThao[0].updatedAt
    );

    if (ListHoiThaoUpdate.length > 0) {
      await HoiThao.insertMany(ListHoiThaoUpdate);
      console.log("Daily update HoiThao success");
    } else {
      console.log("No new HoiThao data");
    }
  }
};

export { fetchListHoiThaoAndUpdate };
