import axios from "axios";
import GiangVien from "../models/GiangVien";
import { IGiangVien } from "../types/giangVien.type";
import { DOMAIN } from "../config";
const fetchListGiangVienAndUpdate = async () => {
  const giangVien = await GiangVien.find().sort({ timestamp: -1 }).limit(1);

  const response = await axios.get(`${DOMAIN}/api/v1/giangvien`);

  if (response.status === 200) {
    const ListGiangVienUpdate = response.data.ListGiangVien.filter(
      (item: IGiangVien) =>
        item.createdAt > giangVien[0].createdAt ||
        item.updatedAt > giangVien[0].updatedAt
    );

    if (ListGiangVienUpdate.length > 0) {
      await GiangVien.insertMany(ListGiangVienUpdate);
      console.log("Daily update GiangVien success");
    } else {
      console.log("No new GiangVien data");
    }
  }
};

export { fetchListGiangVienAndUpdate };
