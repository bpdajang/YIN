import express from "express";
import dotenv from "dotenv";
import path from "path";
import cookieParser from "cookie-parser";
import cors from "cors";
import connectMongoDB from "./db/connectMongodb.js";
import ResourceRoutes from "./Routes/ResourceRoutes.js";
import AuthRoutes from "./Routes/authRoutes.js";
import DiscussionRoutes from "./Routes/DiscussionRoutes.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;
const _dirname = path.resolve();

const allowedOrigins = [
  "http://localhost:3000",
  "http://localhost:5173",
  "http://127.0.0.1:3000",
  "https://yin-9f4g.onrender.com",
];

app.use(
  cors({
    origin: function (origin, callback) {
      // Allow requests with no origin (mobile apps, Postman)
      if (!origin) return callback(null, true);
      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      }
      callback(new Error("Not allowed by CORS"));
    },
    credentials: true,
  }),
);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cookieParser());

// Routes
app.use("/api/resource", ResourceRoutes);
app.use("/api/auth", AuthRoutes);
app.use("/api/discussions", DiscussionRoutes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(_dirname, "/Frontend/dist")));

  app.all(/^((?!\/api).)*$/, (req, res) => {
    res.sendFile(path.resolve(_dirname, "Frontend", "dist", "index.html"));
  });
}

// Start server and connect to DB
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
  connectMongoDB();
});
