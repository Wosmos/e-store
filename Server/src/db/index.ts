import mongoose from "mongoose";
import { DB_NAME } from "../constants";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `mongodb+srv://wosmo:imhere@cluster0.fjocvun.mongodb.net/youtube`
    );
    console.log(
      `MongoDB connnected to : ${DB_NAME} 😘🥳, \nDB Host: ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.error("MongoDB connection failed😭, \n ", error);
    process.exit(1);
  }
};


export default connectDB;
