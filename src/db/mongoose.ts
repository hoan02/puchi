import mongoose, { ConnectOptions } from "mongoose";

let isConnected = false;

const connectToDB = async () => {
  mongoose.set("strictQuery", true);

  const mongoUrl = process.env.MONGO_URI;

  if (!mongoUrl) {
    console.error("MONGO_URI is not defined in environment variables");
    return;
  }

  if (isConnected) {
    // console.log("MongoDB was previously connected");
    return;
  }

  try {
    await mongoose.connect(mongoUrl, {} as ConnectOptions);

    isConnected = true;

    // console.log("MongoDB connected");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

export default connectToDB;
