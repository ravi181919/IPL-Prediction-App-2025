import express from "express";
import { config } from "dotenv";
import { serverErrorHandler } from "./middleware/serverErrorHandler.js";
import getRoutes from "./router/getRoutes.js";
import cors from 'cors';

config();
const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true,
  methods: ["GET", "POST"]
}));


app.get("/", (req, res) => {
  try {
    res.status(200).json({ message: "Welcome to Ipl Predication Application" });
  } catch (error) {
    serverErrorHandler(req, res, error);
  }
});

app.use("/api/ipl", getRoutes);

app.listen(PORT, () => {
  console.log(`server is listen on :: http://localhost:${PORT}`);
});
