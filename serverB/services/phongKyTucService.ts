import axios from "axios";
import PhongKyTuc from "../models/PhongKyTuc";
import { IPhongKyTuc } from "../types/phongKyTuc.type";
import { DOMAIN } from "../config";
const fetchListPhongKyTucAndUpdate = async () => {
  const phongKyTuc = await PhongKyTuc.find().sort({ timestamp: -1 }).limit(1);

  const response = await axios.get(`${DOMAIN}/api/v1/PhongKyTuc`);

  if (response.status === 200) {
    const ListPhongKyTucUpdate = response.data.ListPhongKyTuc.filter(
      (item: IPhongKyTuc) =>
        item.createdAt > phongKyTuc[0].createdAt ||
        item.updatedAt > phongKyTuc[0].updatedAt
    );

    if (ListPhongKyTucUpdate.length > 0) {
      await PhongKyTuc.insertMany(ListPhongKyTucUpdate);
      console.log("Daily update PhongKyTuc success");
    } else {
      console.log("No new PhongKyTuc data");
    }
  }
};

export { fetchListPhongKyTucAndUpdate };
