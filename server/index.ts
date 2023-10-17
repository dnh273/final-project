import express, { Express, Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./db/connect";
import "express-async-errors";
import notFound from "./middleware/not-found";
import errorHandlerMiddleware from "./middleware/error-handler";
import GiangVienRoute from "./routes/GiangVienRoute";
import GiangVien from "./models/GiangVien";

dotenv.config();

const app: Express = express();
app.use(cors());
app.use(express.json());

// Route
app.use("/api/v1/giangvien", GiangVienRoute);

app.use(notFound);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 4000;
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );

   
  } catch (error) {
    console.log(error);
  }
};



start();
