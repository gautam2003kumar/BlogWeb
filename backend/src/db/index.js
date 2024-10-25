import mongoose from "mongoose";
import { DATABASE_NAME } from "../constants.js";

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(
            `${process.env.MONGODB_URL}/${DATABASE_NAME}`
        );
        console.log(`\n MongoDB connected! Database host: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.error("MongoDB connection FAILED:", error);
        process.exit(1);
    }
};

export default connectDB;
