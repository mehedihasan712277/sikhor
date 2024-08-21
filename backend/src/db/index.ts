import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      process.env.DATABASE_URL!
    );
    console.log(
      `MongoDB Connected | host : ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.error(`MongoDB connection failed\n ${error}`);
    process.exit(1);
  }
};
