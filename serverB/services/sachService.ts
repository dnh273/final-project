import axios from "axios";
import Sach from "../models/Sach";
import { ISach } from "../types/sach.type";
import { DOMAIN } from "../config";
const fetchListSachAndUpdate = async () => {
  const oldestData = await Sach.find().sort({ createdAt: -1 }).limit(1);
  const ListSach = await Sach.find();

  const response = await axios.get(`${DOMAIN}/api/v1/sach`);
  if (response.status === 200) {
    const ListIdSachDelete = ListSach.filter(
      (item) =>
        !response.data.ListSach.map((data: ISach) => data._id).includes(
          item._id.toString()
        )
    ).map((item) => {
      _id: item.id;
    });

    if (ListIdSachDelete.length > 0) {
      await Sach.deleteMany({ _id: { $in: ListIdSachDelete } });
      console.log("Delete Sach data success");
    }

    if (response.data.ListSach.length > 0 && oldestData.length == 0) {
      await Sach.insertMany(response.data.ListSach);
      console.log("Update Sach success");
    }

    if (response.data.ListSach.length > 0 && oldestData.length > 0) {
      const ListSachInsert = response.data.ListSach.filter(
        (item: ISach) => {
          return (
            Date.parse(item.createdAt.toString()) >
            oldestData[0].createdAt.getTime()
          );
        }
      );

      const oldestDataUpdated = await Sach.find()
        .sort({ updatedAt: -1 })
        .limit(1);

      const ListSachUpdate = response.data.ListSach.filter(
        (item: ISach) => {
          return (
            Date.parse(
              response.data.ListSach.find(
                (data: ISach) => data._id == item._id.toString()
              ).updatedAt
            ) > oldestData[0].updatedAt.getTime()
          );
        }
      );

      const bulkOperations = ListSachUpdate.map((update: ISach) => {
        return {
          updateOne: {
            filter: { _id: update._id },
            update: { $set: update },
          },
        };
      });

      if (ListSachUpdate.length > 0) {
        await Sach.bulkWrite(bulkOperations);
        console.log("Update Sach success");
      }

      if (ListSachInsert.length > 0) {
        await Sach.insertMany(ListSachInsert);
        console.log("Insert Sach success");
      }

      if (ListSachInsert.length == 0) {
        console.log("No new Sach data");
      }

      return;
    }
    console.log("No new Sach data");
    return;
  }
};

export { fetchListSachAndUpdate };
