import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDb from "./config/db.js";
import userRoute from "./routes/userRoutes.js";

dotenv.config();

const app = express();

connectDb();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const port = process.env.PORT;

app.use("/api/user", userRoute);

app.listen(port, () => console.log("server started successfully"));
