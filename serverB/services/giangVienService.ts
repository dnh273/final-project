import axios from "axios";
import GiangVien from "../models/GiangVien";
import { IGiangVien } from "../types/giangVien.type";
import { DOMAIN } from "../config";
const fetchListGiangVienAndUpdate = async () => {
  const oldestData = await GiangVien.find().sort({ createdAt: -1 }).limit(1);
  const ListGiangVien = await GiangVien.find();

  const response = await axios.get(`${DOMAIN}/api/v1/GiangVien`);
  if (response.status === 200) {
    const ListIdGiangVienDelete = ListGiangVien.filter(
      (item) =>
        !response.data.ListGiangVien.map((data: IGiangVien) => data._id).includes(
          item._id.toString() 
        )
    ).map((item) => {
      _id: item.id;
    });

    if (ListIdGiangVienDelete.length > 0) {
      await GiangVien.deleteMany({ _id: { $in: ListIdGiangVienDelete } });
      console.log("Delete GiangVien data success");
    }

    if (response.data.ListGiangVien.length > 0 && oldestData.length == 0) {
      await GiangVien.insertMany(response.data.ListGiangVien);
      console.log("Update GiangVien success");
    }

    if (response.data.ListGiangVien.length > 0 && oldestData.length > 0) {
      const ListGiangVienInsert = response.data.ListGiangVien.filter(
        (item: IGiangVien) => {
          return (
            Date.parse(item.createdAt.toString()) >
            oldestData[0].createdAt.getTime()
          );
        }
      );

      const ListGiangVienUpdate = response.data.ListGiangVien.filter(
        (item: IGiangVien) =>
          response.data.ListGiangVien.map(
            (data: IGiangVien) => data._id
          ).includes(item._id.toString()) &&
          Date.parse(
            response.data.ListGiangVien.find(
              (data: IGiangVien) => data._id == item._id.toString()
            ).updatedAt
          ) > Date.parse(item.updatedAt.toString())
      );

      const bulkOperations = ListGiangVienUpdate.map((update: IGiangVien) => {
        return {
          updateOne: {
            filter: { _id: update._id },
            update: { $set: update },
          },
        };
      });

      if (ListGiangVienUpdate.length > 0) {
        await GiangVien.bulkWrite(bulkOperations);
        console.log("Update GiangVien success");
      }

      if (ListGiangVienInsert.length > 0) {
        await GiangVien.insertMany(ListGiangVienInsert);
        console.log("Insert GiangVien success");
      }

      if (ListGiangVienInsert.length == 0) {
        console.log("No new GiangVien data");
      }

      return;
    }
    console.log("No new GiangVien data");
    return;
  }
};

export { fetchListGiangVienAndUpdate };
