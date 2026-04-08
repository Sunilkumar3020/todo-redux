import mongoose from "mongoose";

const connectDB = async (url) => {
    try {
        await mongoose.connect(url)
        console.log("Mongodb Connected Successfully");
    } catch (error) {
        console.error(error);
        process.exit(1)
    }
}

export default connectDB