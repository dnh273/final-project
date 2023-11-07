import axios from "axios";
import NghienCuuKhoaHoc from "../models/NghienCuuKhoaHoc";
import { INghienCuuKhoaHoc } from "../types/nghienCuuKhoaHoc.type";
import { DOMAIN } from "../config";
const fetchListNghienCuuKhoaHocAndUpdate = async () => {
  const oldestData = await NghienCuuKhoaHoc.find()
    .sort({ createdAt: -1 })
    .limit(1);
  const ListNghienCuuKhoaHoc = await NghienCuuKhoaHoc.find();

  const response = await axios.get(`${DOMAIN}/api/v1/nghienCuuKhoaHoc`);
  if (response.status === 200) {
    const ListIdNghienCuuKhoaHocDelete = ListNghienCuuKhoaHoc.filter(
      (item) =>
        !response.data.ListNghienCuuKhoaHoc.map(
          (data: INghienCuuKhoaHoc) => data._id
        ).includes(item._id.toString())
    ).map((item) => {
      _id: item.id;
    });

    if (ListIdNghienCuuKhoaHocDelete.length > 0) {
      await NghienCuuKhoaHoc.deleteMany({
        _id: { $in: ListIdNghienCuuKhoaHocDelete },
      });
      console.log("Delete NghienCuuKhoaHoc data success");
    }

    if (
      response.data.ListNghienCuuKhoaHoc.length > 0 &&
      oldestData.length == 0
    ) {
      await NghienCuuKhoaHoc.insertMany(response.data.ListNghienCuuKhoaHoc);
      console.log("Update NghienCuuKhoaHoc success");
    }

    if (
      response.data.ListNghienCuuKhoaHoc.length > 0 &&
      oldestData.length > 0
    ) {
      const ListNghienCuuKhoaHocInsert =
        response.data.ListNghienCuuKhoaHoc.filter((item: INghienCuuKhoaHoc) => {
          return (
            Date.parse(item.createdAt.toString()) >
            oldestData[0].createdAt.getTime()
          );
        });

      const ListNghienCuuKhoaHocUpdate =
        response.data.ListNghienCuuKhoaHoc.filter(
          (item: INghienCuuKhoaHoc) =>
            Date.parse(
              response.data.ListNghienCuuKhoaHoc.find(
                (data: INghienCuuKhoaHoc) => data._id == item._id.toString()
              ).updatedAt
            ) > Date.parse(item.updatedAt.toString())
        );

      const bulkOperations = ListNghienCuuKhoaHocUpdate.map(
        (update: INghienCuuKhoaHoc) => {
          return {
            updateOne: {
              filter: { _id: update._id },
              update: { $set: update },
            },
          };
        }
      );

      if (ListNghienCuuKhoaHocUpdate.length > 0) {
        await NghienCuuKhoaHoc.bulkWrite(bulkOperations);
        console.log("Update NghienCuuKhoaHoc success");
      }

      if (ListNghienCuuKhoaHocInsert.length > 0) {
        await NghienCuuKhoaHoc.insertMany(ListNghienCuuKhoaHocInsert);
        console.log("Insert NghienCuuKhoaHoc success");
      }

      if (ListNghienCuuKhoaHocInsert.length == 0) {
        console.log("No new NghienCuuKhoaHoc data");
      }

      return;
    }
    console.log("No new NghienCuuKhoaHoc data");
    return;
  }
};

export { fetchListNghienCuuKhoaHocAndUpdate };
