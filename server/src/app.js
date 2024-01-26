import express from "express";
import colors from "@colors/colors";
import "dotenv/config";
import morgan from "morgan";
import cors from "cors";
import cookieParser from "cookie-parser";
import compression from "compression";
import helmet from "helmet";
import router from "./routes/index.js";
import { v2 as cloudinary } from "cloudinary";

// database connection
import "./db/database.js";
import { errorHandler, notFound } from "./middlewares/errorMiddleware.js";

const app = express();
colors.enable();

app.use(cors());
app.use(helmet());
app.use(morgan("combined"));
app.use(cookieParser());
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// cloudinary config

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRETE,
});

// routes

app.use("/api/v1", router);

// Error handler
app.use(notFound);
app.use(errorHandler);

export default app;
