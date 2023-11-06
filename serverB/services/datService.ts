import axios from "axios";
import Dat from "../models/Dat";
import { IDat } from "../types/dat.type";
import { DOMAIN } from "../config";
const fetchListDatAndUpdate = async () => {
  const oldestData = await Dat.find().sort({ createdAt: -1 }).limit(1);
  const ListDat = await Dat.find();

  const response = await axios.get(`${DOMAIN}/api/v1/Dat`);
  if (response.status === 200) {
    const ListIdDatDelete = ListDat.filter(
      (item) =>
        !response.data.ListDat.map((data: IDat) => data._id).includes(
          item._id.toString()
        )
    ).map((item) => {
      _id: item.id;
    });

    if (ListIdDatDelete.length > 0) {
      await Dat.deleteMany({ _id: { $in: ListIdDatDelete } });
      console.log("Delete Dat data success");
    }

    if (response.data.ListDat.length > 0 && oldestData.length == 0) {
      await Dat.insertMany(response.data.ListDat);
      console.log("Update Dat success");
    }

    if (response.data.ListDat.length > 0 && oldestData.length > 0) {
      const ListDatInsert = response.data.ListDat.filter((item: IDat) => {
        return (
          Date.parse(item.createdAt.toString()) >
          oldestData[0].createdAt.getTime()
        );
      });

      const ListDatUpdate = response.data.ListDat.filter(
        (item: IDat) =>
          response.data.ListDat.map((data: IDat) => data._id).includes(
            item._id.toString()
          ) &&
          Date.parse(
            response.data.ListDat.find(
              (data: IDat) => data._id == item._id.toString()
            ).updatedAt
          ) > Date.parse(item.updatedAt.toString())
      );

      const bulkOperations = ListDatUpdate.map((update: IDat) => {
        return {
          updateOne: {
            filter: { _id: update._id },
            update: { $set: update },
          },
        };
      });

      if (ListDatUpdate.length > 0) {
        await Dat.bulkWrite(bulkOperations);
        console.log("Update Dat success");
      }

      if (ListDatInsert.length > 0) {
        await Dat.insertMany(ListDatInsert);
        console.log("Insert Dat success");
      }

      if (ListDatInsert.length == 0) {
        console.log("No new Dat data");
      }

      return;
    }
    console.log("No new Dat data");
    return;
  }
};

export { fetchListDatAndUpdate };
