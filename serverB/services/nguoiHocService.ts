import axios from "axios";
import NguoiHoc from "../models/NguoiHoc";
import { INguoiHoc } from "../types/nguoiHoc.type";
import { DOMAIN } from "../config";
const fetchListNguoiHocAndUpdate = async () => {
  const oldestData = await NguoiHoc.find().sort({ createdAt: -1 }).limit(1);
  const ListNguoiHoc = await NguoiHoc.find();

  const response = await axios.get(`${DOMAIN}/api/v1/NguoiHoc`);
  if (response.status === 200) {
    const ListIdNguoiHocDelete = ListNguoiHoc.filter(
      (item) =>
        !response.data.ListNguoiHoc.map((data: INguoiHoc) => data._id).includes(
          item._id.toString() 
        )
    ).map((item) => {
      _id: item.id;
    });

    if (ListIdNguoiHocDelete.length > 0) {
      await NguoiHoc.deleteMany({ _id: { $in: ListIdNguoiHocDelete } });
      console.log("Delete NguoiHoc data success");
    }

    if (response.data.ListNguoiHoc.length > 0 && oldestData.length == 0) {
      await NguoiHoc.insertMany(response.data.ListNguoiHoc);
      console.log("Update NguoiHoc success");
    }

    if (response.data.ListNguoiHoc.length > 0 && oldestData.length > 0) {
      const ListNguoiHocInsert = response.data.ListNguoiHoc.filter(
        (item: INguoiHoc) => {
          return (
            Date.parse(item.createdAt.toString()) >
            oldestData[0].createdAt.getTime()
          );
        }
      );

      const ListNguoiHocUpdate = response.data.ListNguoiHoc.filter(
        (item: INguoiHoc) =>
          response.data.ListNguoiHoc.map(
            (data: INguoiHoc) => data._id
          ).includes(item._id.toString()) &&
          Date.parse(
            response.data.ListNguoiHoc.find(
              (data: INguoiHoc) => data._id == item._id.toString()
            ).updatedAt
          ) > Date.parse(item.updatedAt.toString())
      );

      const bulkOperations = ListNguoiHocUpdate.map((update: INguoiHoc) => {
        return {
          updateOne: {
            filter: { _id: update._id },
            update: { $set: update },
          },
        };
      });

      if (ListNguoiHocUpdate.length > 0) {
        await NguoiHoc.bulkWrite(bulkOperations);
        console.log("Update NguoiHoc success");
      }

      if (ListNguoiHocInsert.length > 0) {
        await NguoiHoc.insertMany(ListNguoiHocInsert);
        console.log("Insert NguoiHoc success");
      }

      if (ListNguoiHocInsert.length == 0) {
        console.log("No new NguoiHoc data");
      }

      return;
    }
    console.log("No new NguoiHoc data");
    return;
  }
};

export { fetchListNguoiHocAndUpdate };
