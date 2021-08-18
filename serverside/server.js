import dotenv from "dotenv";
import express from "express";
import colors from "colors";
import userRoutes from "./routes/userRoutes.js";
import connectDB from "./config/db.js";
import tutionRoutes from "./routes/tutionRoutes.js";

const app = express();

dotenv.config();
connectDB();

app.use(express.json());

app.use("/api/tuition", tutionRoutes);

app.use("/api/users", userRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
