import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import multer from "multer";
import connectMongoDB from "./db/connectMongodb.js";
import ResourceRoutes from "./Routes/ResourceRoutes.js";
import AuthRoutes from "./Routes/authRoutes.js";

dotenv.config();

const app = express();
const port = 5000;

app.use(
  cors({
    origin: "http://localhost:3000", // Adjust to your frontend URL
    credentials: true,
  })
);

app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(express.json()); // for parsing application/json

app.use(cookieParser()); // Added cookie-parser middleware

// Routes

app.use("/api/resource", ResourceRoutes);
app.use("/api/auth", AuthRoutes);

// Start server and connect to DB

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
  connectMongoDB();
});
