import express from "express";
import dotenv from "dotenv";
import path from "path";
import cookieParser from "cookie-parser";
import cors from "cors";
import connectMongoDB from "./db/connectMongodb.js";
import ResourceRoutes from "./Routes/ResourceRoutes.js";
import AuthRoutes from "./Routes/authRoutes.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;
const _dirname = path.resolve();

const allowedOrigins = [
  "https://yin-9f4g.onrender.com", // your frontend Render URL
];

app.use(
  cors({
    origin: allowedOrigins,
    credentials: true, // if you use cookies or auth tokens
  })
);

app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(express.json()); // for parsing application/json

app.use(cookieParser()); // Added cookie-parser middleware

// Routes

app.use("/api/resource", ResourceRoutes);
app.use("/api/auth", AuthRoutes);

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
