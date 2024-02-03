import mongoose from "mongoose";

const connectDB = () => {
  mongoose.set("strictQuery", true);
  mongoose
    .connect(process.env.MONGODB_CONNECTION_STRING as string)
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.log("ERROR :", err));
};

export default connectDB;