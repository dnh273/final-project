import axios from "axios";
import PhongKyTuc from "../models/PhongKyTuc";
import { IPhongKyTuc } from "../types/phongKyTuc.type";
import { DOMAIN } from "../config";
const fetchListPhongKyTucAndUpdate = async () => {
  const oldestData = await PhongKyTuc.find().sort({ timestamp: -1 }).limit(1);
  const ListPhongKyTuc = await PhongKyTuc.find();

  const response = await axios.get(`${DOMAIN}/api/v1/PhongKyTuc`);
  if (response.status === 200) {
    const ListPhongKyTucDelete = ListPhongKyTuc.filter(
      (item) =>
        !response.data.ListPhongKyTuc.map(
          (data: IPhongKyTuc) => data._id
        ).includes(item._id.toString())
    );

    if (ListPhongKyTucDelete.length > 0) {
      await PhongKyTuc.deleteMany(ListPhongKyTucDelete);
      console.log("Delete PhongKyTuc data success");
    }

    if (response.data.ListPhongKyTuc.length > 0 && oldestData.length == 0) {
      await PhongKyTuc.insertMany(response.data.ListPhongKyTuc);
      console.log("Update PhongKyTuc success");
    }
    if (response.data.ListPhongKyTuc.length > 0 && oldestData.length > 0) {
      const ListPhongKyTucUpdate = response.data.ListPhongKyTuc.filter(
        (item: IPhongKyTuc) =>
          item.createdAt > oldestData[0].createdAt ||
          item.updatedAt > oldestData[0].updatedAt
      );
      if (ListPhongKyTucUpdate.length > 0) {
        await PhongKyTuc.insertMany(ListPhongKyTucUpdate);
        console.log("Daily update PhongKyTuc success");
      }
      if (ListPhongKyTucUpdate.length == 0) {
        console.log("No new PhongKyTuc data");
      }

      return;
    }
    console.log("No new PhongKyTuc data");
    return;
  }
};

export { fetchListPhongKyTucAndUpdate };
