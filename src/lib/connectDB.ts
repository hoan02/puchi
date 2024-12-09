import mongoose, { ConnectOptions } from "mongoose";

let isConnected = false;

const connectDB = async () => {
  mongoose.set("strictQuery", true);

  const mongoUrl = process.env.MONGO_URI;

  if (!mongoUrl) {
    console.error("MONGO_URI is not set");
    return;
  }

  if (isConnected) {
    return;
  }

  try {
    await mongoose.connect(mongoUrl, {
      //   dbName: "",
    } as ConnectOptions);
    isConnected = true;
  } catch (error) {
    console.error("Lỗi kết nối đến MongoDB:", error);
  }
};

export default connectDB;
