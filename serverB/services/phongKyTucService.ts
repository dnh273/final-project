import axios from "axios";
import PhongKyTuc from "../models/PhongKyTuc";
import { IPhongKyTuc } from "../types/phongKyTuc.type";
import { DOMAIN } from "../config";
const fetchListPhongKyTucAndUpdate = async () => {
  const oldestData = await PhongKyTuc.find().sort({ createdAt: -1 }).limit(1);
  const ListPhongKyTuc = await PhongKyTuc.find();

  const response = await axios.get(`${DOMAIN}/api/v1/PhongKyTuc`);
  if (response.status === 200) {
    const ListIdPhongKyTucDelete = ListPhongKyTuc.filter(
      (item) =>
        !response.data.ListPhongKyTuc.map((data: IPhongKyTuc) => data._id).includes(
          item._id.toString() 
        )
    ).map((item) => {
      _id: item.id;
    });

    if (ListIdPhongKyTucDelete.length > 0) {
      await PhongKyTuc.deleteMany({ _id: { $in: ListIdPhongKyTucDelete } });
      console.log("Delete PhongKyTuc data success");
    }

    if (response.data.ListPhongKyTuc.length > 0 && oldestData.length == 0) {
      await PhongKyTuc.insertMany(response.data.ListPhongKyTuc);
      console.log("Update PhongKyTuc success");
    }

    if (response.data.ListPhongKyTuc.length > 0 && oldestData.length > 0) {
      const ListPhongKyTucInsert = response.data.ListPhongKyTuc.filter(
        (item: IPhongKyTuc) => {
          return (
            Date.parse(item.createdAt.toString()) >
            oldestData[0].createdAt.getTime()
          );
        }
      );

      const ListPhongKyTucUpdate = response.data.ListPhongKyTuc.filter(
        (item: IPhongKyTuc) =>
          response.data.ListPhongKyTuc.map(
            (data: IPhongKyTuc) => data._id
          ).includes(item._id.toString()) &&
          Date.parse(
            response.data.ListPhongKyTuc.find(
              (data: IPhongKyTuc) => data._id == item._id.toString()
            ).updatedAt
          ) > Date.parse(item.updatedAt.toString())
      );

      const bulkOperations = ListPhongKyTucUpdate.map((update: IPhongKyTuc) => {
        return {
          updateOne: {
            filter: { _id: update._id },
            update: { $set: update },
          },
        };
      });

      if (ListPhongKyTucUpdate.length > 0) {
        await PhongKyTuc.bulkWrite(bulkOperations);
        console.log("Update PhongKyTuc success");
      }

      if (ListPhongKyTucInsert.length > 0) {
        await PhongKyTuc.insertMany(ListPhongKyTucInsert);
        console.log("Insert PhongKyTuc success");
      }

      if (ListPhongKyTucInsert.length == 0) {
        console.log("No new PhongKyTuc data");
      }

      return;
    }
    console.log("No new PhongKyTuc data");
    return;
  }
};

export { fetchListPhongKyTucAndUpdate };
