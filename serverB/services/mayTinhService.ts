import axios from "axios";
import MayTinh from "../models/MayTinh";
import { IMayTinh } from "../types/mayTinh.type";
import { DOMAIN } from "../config";
const fetchListMayTinhAndUpdate = async () => {
  const oldestData = await MayTinh.find().sort({ createdAt: -1 }).limit(1);
  const ListMayTinh = await MayTinh.find();

  const response = await axios.get(`${DOMAIN}/api/v1/MayTinh`);
  if (response.status === 200) {
    const ListIdMayTinhDelete = ListMayTinh.filter(
      (item) =>
        !response.data.ListMayTinh.map((data: IMayTinh) => data._id).includes(
          item._id.toString() 
        )
    ).map((item) => {
      _id: item.id;
    });

    if (ListIdMayTinhDelete.length > 0) {
      await MayTinh.deleteMany({ _id: { $in: ListIdMayTinhDelete } });
      console.log("Delete MayTinh data success");
    }

    if (response.data.ListMayTinh.length > 0 && oldestData.length == 0) {
      await MayTinh.insertMany(response.data.ListMayTinh);
      console.log("Update MayTinh success");
    }

    if (response.data.ListMayTinh.length > 0 && oldestData.length > 0) {
      const ListMayTinhInsert = response.data.ListMayTinh.filter(
        (item: IMayTinh) => {
          return (
            Date.parse(item.createdAt.toString()) >
            oldestData[0].createdAt.getTime()
          );
        }
      );

      const ListMayTinhUpdate = response.data.ListMayTinh.filter(
        (item: IMayTinh) =>
          response.data.ListMayTinh.map(
            (data: IMayTinh) => data._id
          ).includes(item._id.toString()) &&
          Date.parse(
            response.data.ListMayTinh.find(
              (data: IMayTinh) => data._id == item._id.toString()
            ).updatedAt
          ) > Date.parse(item.updatedAt.toString())
      );

      const bulkOperations = ListMayTinhUpdate.map((update: IMayTinh) => {
        return {
          updateOne: {
            filter: { _id: update._id },
            update: { $set: update },
          },
        };
      });

      if (ListMayTinhUpdate.length > 0) {
        await MayTinh.bulkWrite(bulkOperations);
        console.log("Update MayTinh success");
      }

      if (ListMayTinhInsert.length > 0) {
        await MayTinh.insertMany(ListMayTinhInsert);
        console.log("Insert MayTinh success");
      }

      if (ListMayTinhInsert.length == 0) {
        console.log("No new MayTinh data");
      }

      return;
    }
    console.log("No new MayTinh data");
    return;
  }
};

export { fetchListMayTinhAndUpdate };
