import dotenv from "dotenv";
import express from "express";
import colors from "colors";
import userRoutes from "./routes/userRoutes.js";
import connectDB from "./config/db.js";
import { tutors } from "./tution.js";
import { router } from "./routes/tutionRoutes.js";

const app = express();

dotenv.config();
connectDB();

app.use(express.json());

app.use("/api/tutors", router);

app.get("/api/tutors/:id", (req, res) => {
  const tutor = tutors.find((p) => p._id === req.params.id);
  console.log(`${tutor}`);
  res.json(tutor);
});

app.use("/api/users", userRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
