import express from "express";
import dotenv from "dotenv";

import userRoutes from "./routes/userRoutes";
import connectDB from "./config/db";

const app = express();

connectDB();
dotenv.config();

app.use(express.json());

app.use("/", (req, res, next) => {
  res.send("Hello world");
});

app.use("/api/users", userRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
