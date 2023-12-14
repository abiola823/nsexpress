import express from "express";
import userRoutes from './routes/userRoutes.js';
import connectDB from './config/db.js';
import dotenv from 'dotenv';
dotenv.config();
const app = express()
const PORT = process.env.PORT || 6000;

connectDB()


app.use(express.json());
app.use(express.urlencoded({extended: true}));



app.use('/users', userRoutes);
app.listen(PORT, () => console.log(`Application running on port ${PORT}`))