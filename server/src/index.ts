import "dotenv/config";
import cors from "cors";
import express from "express";
import connectDB from "./database/connect";
import userRoutes from "./routes/users";
import authRoutes from "./routes/auth";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);

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
