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

// public
import { dirname } from "path";
import { fileURLToPath } from "url";
import path from "path";

const app = express();
colors.enable();

const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(cors());
app.use(helmet({ crossOriginEmbedderPolicy: false, originAgentCluster: true }));
app.use(
  helmet.contentSecurityPolicy({
    useDefaults: true,
    directives: {
      "img-src": ["'self'", "https: data: blob:"],
    },
  })
);
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

app.use(express.static(path.resolve(__dirname, "../", "./client/dist/")));
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../", "./client/dist", "index.html"));
});

// Error handler
app.use(notFound);
app.use(errorHandler);

export default app;
