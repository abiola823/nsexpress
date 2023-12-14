import mongoose from "mongoose";
import express from "express";
const PORT = process.env.PORT || 6000;
const app = express();



const connectDB = async () => {
            try {
                const conn = await mongoose.connect(process.env.MONGO_URI);
                    console.log(`Database connected successfully`);
                
            } catch (error) {
                console.log(error);
            }
}
export default connectDB;