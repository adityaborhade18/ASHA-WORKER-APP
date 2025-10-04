import express from 'express';
import dotenv from 'dotenv';
import cookieparser from 'cookie-parser';
import cors from 'cors';
import connectDB from './Config/db.js';
import ashaRouter from './Routes/ashaRouter.js';

dotenv.config();
const app=express();

await connectDB();

app.use(express.json());
app.use(cookieparser());

const allowedOrigins = ['']
app.use(cors({
    origin:allowedOrigins,
    credentials:true,
}));

app.use('/api/asha',ashaRouter);

app.get('/',(req,res)=>{
    res.send("API is Running");
})

app.listen(5000,()=>{
    console.log("Server is Runnning on port 5000");
});

