import axios from "axios";
import NganhHoc from "../models/NganhHoc";
import { INganhHoc } from "../types/nganhHoc.type";
import { DOMAIN } from "../config";
const fetchListNganhHocAndUpdate = async () => {
  const oldestData = await NganhHoc.find().sort({ createdAt: -1 }).limit(1);
  const ListNganhHoc = await NganhHoc.find();

  const response = await axios.get(`${DOMAIN}/api/v1/nganhHoc`);
  if (response.status === 200) {
    const ListIdNganhHocDelete = ListNganhHoc.filter(
      (item) =>
        !response.data.ListNganhHoc.map((data: INganhHoc) => data._id).includes(
          item._id.toString()
        )
    ).map((item) => {
      _id: item.id;
    });

    if (ListIdNganhHocDelete.length > 0) {
      await NganhHoc.deleteMany({ _id: { $in: ListIdNganhHocDelete } });
      console.log("Delete NganhHoc data success");
    }

    if (response.data.ListNganhHoc.length > 0 && oldestData.length == 0) {
      await NganhHoc.insertMany(response.data.ListNganhHoc);
      console.log("Update NganhHoc success");
    }

    if (response.data.ListNganhHoc.length > 0 && oldestData.length > 0) {
      const ListNganhHocInsert = response.data.ListNganhHoc.filter(
        (item: INganhHoc) => {
          return (
            Date.parse(item.createdAt.toString()) >
            oldestData[0].createdAt.getTime()
          );
        }
      );

      const ListNganhHocUpdate = response.data.ListNganhHoc.filter(
        (item: INganhHoc) =>
          Date.parse(
            response.data.ListNganhHoc.find(
              (data: INganhHoc) => data._id == item._id.toString()
            ).updatedAt
          ) > Date.parse(item.updatedAt.toString())
      );

      const bulkOperations = ListNganhHocUpdate.map((update: INganhHoc) => {
        return {
          updateOne: {
            filter: { _id: update._id },
            update: { $set: update },
          },
        };
      });

      if (ListNganhHocUpdate.length > 0) {
        await NganhHoc.bulkWrite(bulkOperations);
        console.log("Update NganhHoc success");
      }

      if (ListNganhHocInsert.length > 0) {
        await NganhHoc.insertMany(ListNganhHocInsert);
        console.log("Insert NganhHoc success");
      }

      if (ListNganhHocInsert.length == 0) {
        console.log("No new NganhHoc data");
      }

      return;
    }
    console.log("No new NganhHoc data");
    return;
  }
};

export { fetchListNganhHocAndUpdate };
