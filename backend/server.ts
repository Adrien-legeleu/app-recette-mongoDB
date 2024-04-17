import express from "express";
import mongooose from "mongoose";
import dotenv from "dotenv";
import appRouter from "./src/routes";
import cookieParser from "cookie-parser";
import cors from "cors";

dotenv.config();

const uri = process.env.MONGODB_URI || "";
const PORT = 5000;

if (uri) {
  mongooose
    .connect(uri)
    .then(() => {
      console.log("DB connected!");
    })
    .catch((err) => console.log(err));
} else {
  console.log("No URI to DB");
}

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.use("", appRouter);

app.listen(PORT, () => {
  console.log(
    `server listen on port ${PORT} => url : http://localhost:${PORT}`
  );
});
