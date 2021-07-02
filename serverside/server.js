import dotenv from "dotenv";

const app = express();

dotenv.config();

app.use("/", (req, res, next) => {
  res.send("Hello world");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
