import axios from "axios";
import TapChi from "../models/TapChi";
import { ITapChi } from "../types/tapChi.type";
import { DOMAIN } from "../config";
const fetchListTapChiAndUpdate = async () => {
  const oldestData = await TapChi.find().sort({ createdAt: -1 }).limit(1);
  const ListTapChi = await TapChi.find();

  const response = await axios.get(`${DOMAIN}/api/v1/TapChi`);
  if (response.status === 200) {
    const ListIdTapChiDelete = ListTapChi.filter(
      (item) =>
        !response.data.ListTapChi.map((data: ITapChi) => data._id).includes(
          item._id.toString()
        )
    ).map((item) => {
      _id: item.id;
    });

    if (ListIdTapChiDelete.length > 0) {
      await TapChi.deleteMany({ _id: { $in: ListIdTapChiDelete } });
      console.log("Delete TapChi data success");
    }

    if (response.data.ListTapChi.length > 0 && oldestData.length == 0) {
      await TapChi.insertMany(response.data.ListTapChi);
      console.log("Update TapChi success");
    }

    if (response.data.ListTapChi.length > 0 && oldestData.length > 0) {
      const ListTapChiInsert = response.data.ListTapChi.filter(
        (item: ITapChi) => {
          return (
            Date.parse(item.createdAt.toString()) >
            oldestData[0].createdAt.getTime()
          );
        }
      );

      const ListTapChiUpdate = response.data.ListTapChi.filter(
        (item: ITapChi) =>
          response.data.ListTapChi.map((data: ITapChi) => data._id).includes(
            item._id.toString()
          ) &&
          Date.parse(
            response.data.ListTapChi.find(
              (data: ITapChi) => data._id == item._id.toString()
            ).updatedAt
          ) > Date.parse(item.updatedAt.toString())
      );

      const bulkOperations = ListTapChiUpdate.map((update: ITapChi) => {
        return {
          updateOne: {
            filter: { _id: update._id },
            update: { $set: update },
          },
        };
      });

      if (ListTapChiUpdate.length > 0) {
        await TapChi.bulkWrite(bulkOperations);
        console.log("Update TapChi success");
      }

      if (ListTapChiInsert.length > 0) {
        await TapChi.insertMany(ListTapChiInsert);
        console.log("Insert TapChi success");
      }

      if (ListTapChiInsert.length == 0) {
        console.log("No new TapChi data");
      }

      return;
    }
    console.log("No new TapChi data");
    return;
  }
};

export { fetchListTapChiAndUpdate };
