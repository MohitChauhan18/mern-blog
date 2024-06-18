import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.route.js';
import userRoutes from './routes/user.route.js';
import cookieParser from 'cookie-parser';


dotenv.config();

mongoose.connect(process.env.MONGO).then(()=>{console.log("MONGODB CONNECTED")});

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use('/api/user', userRoutes);
app.use('/api/auth',authRoutes);


app.listen(3000,()=>{
    console.log('Running at port 3000 !');
})

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    res.status(statusCode).json({
      success: false,
      statusCode,
      message,
    });
  });