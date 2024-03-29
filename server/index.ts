import express, { Express } from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./db/connect";
import "express-async-errors";
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
import MayTinhRoute from "./routes/mayTinhRoutes";
import DatRoute from "./routes/datRoutes";
import { ListDataNCKH } from "./generate/sach";

dotenv.config();

const app: Express = express();
app.use(cors());
app.use(express.json());

// Route
app.use("/api/v1/giangvien", GiangVienRoute);
app.use("/api/v1/nganhhoc", NganhHocRoute);
app.use("/api/v1/khoa", KhoaRoute);
app.use("/api/v1/nguoihoc", NguoiHocRoute);
app.use("/api/v1/phongkytuc", PhongKyTucRoute);
app.use("/api/v1/nghiencuukhoahoc", NghienCuuKhoaHocRoute);
app.use("/api/v1/sach", SachRoute);
app.use("/api/v1/tapchi", TapChiRoute);
app.use("/api/v1/hoithao", HoiThaoRoute);
app.use("/api/v1/dat", DatRoute);
app.use("/api/v1/maytinh", MayTinhRoute);

app.use(notFound);
app.use(errorHandlerMiddleware);

const port = 3000;
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );

    for (let i = 0; i < ListDataNCKH.length; i++) {
      const res = await fetch("http://localhost:3000/api/v1/nghiencuukhoahoc", {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(ListDataNCKH[i]),
      });

      const result = await res.json();
      console.log(result);
    }
  } catch (error) {
    console.log(error);
  }
};

start();
