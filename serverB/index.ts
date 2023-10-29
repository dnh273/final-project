import express, { Request, Response, Express } from "express";
import dotenv from "dotenv";
import cors from "cors";
import "express-async-errors";
import cron from "node-cron";
import connectDB from "./db/connect";
import notFound from "./middleware/not-found";
import errorHandlerMiddleware from "./middleware/error-handler";
import GiangVienRoute from "./routes/giangVienRoutes";
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

cron.schedule("0 0 * * *", () => {
  fetchListGiangVienAndUpdate();
  fetchListKhoaAndUpdate();
  fetchListNguoiHocAndUpdate();
  fetchListNganhHocAndUpdate();
  fetchListNghienCuuKhoaHocAndUpdate();
  fetchListHoiThaoAndUpdate();
  fetchListSachAndUpdate();
  fetchListTapChiAndUpdate();
  fetchListPhongKyTucAndUpdate();
});

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, TypeScript Express!");
});

app.use("/api/v1/giangvien", GiangVienRoute);

app.use(errorHandlerMiddleware);
app.use(notFound);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () => {
      console.log(`Server running at http://localhost:${port}`);
    });
    fetchListGiangVienAndUpdate();
  } catch (error) {
    console.log(error);
  }
};

start();
