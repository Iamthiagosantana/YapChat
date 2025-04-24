import mongoose from "mongoose";
import serverConfig from "./serverConfig";

const connectDB = async () => {
    try {
        await mongoose.connect(serverConfig.mongoUri);
        console.log("MongoDB connected");
    }
    catch (error) {
        console.error("MongoDB connection error:", error);
        process.exit(1);
    }
}

export default connectDB;