import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./utils/db";
import router from "./router";
import { errorHandler, notFoundHandler } from "./utils/utilities";

const app = express();
dotenv.config();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.use("*", notFoundHandler);
app.use(errorHandler);
connectDB();

app.listen(process.env.PORT, () =>
  console.log(`Server running on port ${process.env.PORT}...`)
);
