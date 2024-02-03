import "dotenv/config";
import cors from "cors";
import express, { Request, Response } from "express";
import connectDB from "./database/connect";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/api/test", async (req: Request, res: Response) => {
  res.json({ message: "Hello from express endpoint!" });
});

const startServer = async () => {
  const port = process.env.PORT || 5000;
  try {
    connectDB();
    app.listen(port, () => console.log(`Server running on port : ${port} 🔥`));
  } catch (error) {
    console.log(error);
  }
};

startServer();
