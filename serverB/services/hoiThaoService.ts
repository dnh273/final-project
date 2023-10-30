import axios from "axios";
import HoiThao from "../models/HoiThao";
import { IHoiThao } from "../types/hoiThao.type";
import { DOMAIN } from "../config";
const fetchListHoiThaoAndUpdate = async () => {
  const oldestData = await HoiThao.find().sort({ createdAt: -1 }).limit(1);
  const ListHoiThao = await HoiThao.find();

  const response = await axios.get(`${DOMAIN}/api/v1/HoiThao`);
  if (response.status === 200) {
    const ListIdHoiThaoDelete = ListHoiThao.filter(
      (item) =>
        !response.data.ListHoiThao.map((data: IHoiThao) => data._id).includes(
          item._id.toString() 
        )
    ).map((item) => {
      _id: item.id;
    });

    if (ListIdHoiThaoDelete.length > 0) {
      await HoiThao.deleteMany({ _id: { $in: ListIdHoiThaoDelete } });
      console.log("Delete HoiThao data success");
    }

    if (response.data.ListHoiThao.length > 0 && oldestData.length == 0) {
      await HoiThao.insertMany(response.data.ListHoiThao);
      console.log("Update HoiThao success");
    }

    if (response.data.ListHoiThao.length > 0 && oldestData.length > 0) {
      const ListHoiThaoInsert = response.data.ListHoiThao.filter(
        (item: IHoiThao) => {
          return (
            Date.parse(item.createdAt.toString()) >
            oldestData[0].createdAt.getTime()
          );
        }
      );

      const ListHoiThaoUpdate = response.data.ListHoiThao.filter(
        (item: IHoiThao) =>
          response.data.ListHoiThao.map(
            (data: IHoiThao) => data._id
          ).includes(item._id.toString()) &&
          Date.parse(
            response.data.ListHoiThao.find(
              (data: IHoiThao) => data._id == item._id.toString()
            ).updatedAt
          ) > Date.parse(item.updatedAt.toString())
      );

      const bulkOperations = ListHoiThaoUpdate.map((update: IHoiThao) => {
        return {
          updateOne: {
            filter: { _id: update._id },
            update: { $set: update },
          },
        };
      });

      if (ListHoiThaoUpdate.length > 0) {
        await HoiThao.bulkWrite(bulkOperations);
        console.log("Update HoiThao success");
      }

      if (ListHoiThaoInsert.length > 0) {
        await HoiThao.insertMany(ListHoiThaoInsert);
        console.log("Insert HoiThao success");
      }

      if (ListHoiThaoInsert.length == 0) {
        console.log("No new HoiThao data");
      }

      return;
    }
    console.log("No new HoiThao data");
    return;
  }
};

export { fetchListHoiThaoAndUpdate };
