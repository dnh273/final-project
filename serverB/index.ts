import express, { Request, Response, Express } from "express";
import dotenv from "dotenv";
import cors from "cors";
import "express-async-errors";
import cron from "node-cron";
import connectDB from "./db/connect";
import notFound from "./middleware/not-found";
import errorHandlerMiddleware from "./middleware/error-handler";
import GiangVienRoute from "./routes/giangVienRoutes";
import NganhHocRoute from "./routes/nganhHocRoutes";
import NguoiHocRoute from "./routes/nguoiHocRoutes";
import KhoaRoute from "./routes/khoaRoutes";
import PhongKyTucRoute from "./routes/phongKyTucRoutes";
import NghienCuuKhoaHocRoute from "./routes/nghienCuuKhoaHocRoutes";
import SachRoute from "./routes/sachRoutes";
import HoiThaoRoute from "./routes/hoiThaoRoutes";
import TapChiRoute from "./routes/tapChiRoutes";
import { fetchListGiangVienAndUpdate } from "./services/giangVienService";
import { fetchListHoiThaoAndUpdate } from "./services/hoiThaoService";
import { fetchListKhoaAndUpdate } from "./services/khoaService";
import { fetchListNguoiHocAndUpdate } from "./services/nguoiHocService";
import { fetchListNganhHocAndUpdate } from "./services/nganhHocService";
import { fetchListNghienCuuKhoaHocAndUpdate } from "./services/nghienCuuKhoaHocService";
import { fetchListSachAndUpdate } from "./services/sachService";
import { fetchListTapChiAndUpdate } from "./services/tapChiService";
import { fetchListPhongKyTucAndUpdate } from "./services/phongKyTucService";

dotenv.config();

const app: Express = express();
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 4000;

cron.schedule("0 0 * * *", async () => {
  await fetchListGiangVienAndUpdate();
  await fetchListKhoaAndUpdate();
  await fetchListNguoiHocAndUpdate();
  await fetchListNganhHocAndUpdate();
  await fetchListNghienCuuKhoaHocAndUpdate();
  await fetchListHoiThaoAndUpdate();
  await fetchListSachAndUpdate();
  await fetchListTapChiAndUpdate();
  await fetchListPhongKyTucAndUpdate();
});

app.use("/api/v1/giangvien", GiangVienRoute);
app.use("/api/v1/nganhhoc", NganhHocRoute);
app.use("/api/v1/khoa", KhoaRoute);
app.use("/api/v1/nguoihoc", NguoiHocRoute);
app.use("/api/v1/phongkytuc", PhongKyTucRoute);
app.use("/api/v1/nghiencuukhoahoc", NghienCuuKhoaHocRoute);
app.use("/api/v1/sach", SachRoute);
app.use("/api/v1/tapchi", TapChiRoute);
app.use("/api/v1/hoithao", HoiThaoRoute);

app.use(errorHandlerMiddleware);
app.use(notFound);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () => {
      console.log(`Server running at http://localhost:${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
