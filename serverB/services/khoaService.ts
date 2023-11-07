import axios from "axios";
import Khoa from "../models/Khoa";
import { IKhoa } from "../types/khoa.type";
import { DOMAIN } from "../config";
const fetchListKhoaAndUpdate = async () => {
  const oldestData = await Khoa.find().sort({ createdAt: -1 }).limit(1);
  const ListKhoa = await Khoa.find();

  const response = await axios.get(`${DOMAIN}/api/v1/khoa`);
  if (response.status === 200) {
    const ListIdKhoaDelete = ListKhoa.filter(
      (item) =>
        !response.data.ListKhoa.map((data: IKhoa) => data._id).includes(
          item._id.toString()
        )
    ).map((item) => {
      _id: item.id;
    });

    if (ListIdKhoaDelete.length > 0) {
      await Khoa.deleteMany({ _id: { $in: ListIdKhoaDelete } });
      console.log("Delete Khoa data success");
    }

    if (response.data.ListKhoa.length > 0 && oldestData.length == 0) {
      await Khoa.insertMany(response.data.ListKhoa);
      console.log("Update Khoa success");
    }

    if (response.data.ListKhoa.length > 0 && oldestData.length > 0) {
      const ListKhoaInsert = response.data.ListKhoa.filter((item: IKhoa) => {
        return (
          Date.parse(item.createdAt.toString()) >
          oldestData[0].createdAt.getTime()
        );
      });

      const ListKhoaUpdate = response.data.ListKhoa.filter(
        (item: IKhoa) =>
          Date.parse(
            response.data.ListKhoa.find(
              (data: IKhoa) => data._id == item._id.toString()
            ).updatedAt
          ) > Date.parse(item.updatedAt.toString())
      );

      const bulkOperations = ListKhoaUpdate.map((update: IKhoa) => {
        return {
          updateOne: {
            filter: { _id: update._id },
            update: { $set: update },
          },
        };
      });

      if (ListKhoaUpdate.length > 0) {
        await Khoa.bulkWrite(bulkOperations);
        console.log("Update Khoa success");
      }

      if (ListKhoaInsert.length > 0) {
        await Khoa.insertMany(ListKhoaInsert);
        console.log("Insert Khoa success");
      }

      if (ListKhoaInsert.length == 0) {
        console.log("No new Khoa data");
      }

      return;
    }
    console.log("No new Khoa data");
    return;
  }
};

export { fetchListKhoaAndUpdate };
