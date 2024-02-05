import express from "express";
import mongoose from "mongoose";
import userRouter from "./routes/user.routes.js";
import authRouter from "./routes/auth.routes.js";
import dotenv from "dotenv";

dotenv.config();

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB...");
  })
  .catch((err) => {
    console.log(err);
  });
const app = express();

// Allow json as input of a server || // Middleware to parse JSON in incoming requests
app.use(express.json());

app.listen(3000, () => {
  console.log("Server is running on port 3000...");
});

app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);
