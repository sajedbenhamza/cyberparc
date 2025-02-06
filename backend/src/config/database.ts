import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables from .env

const MONGO_URI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/cyberparcDB"; // Fallback to local if not set

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI, {
      dbName: "users", // Ensure your database name is correct
    });

    console.log("✅ MongoDB Atlas Connected Successfully");
  } catch (error) {
    console.error("❌ MongoDB Connection Failed", error);
    process.exit(1);
  }
};

export default connectDB;
