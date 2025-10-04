import mongoose from 'mongoose';

async function connectDB(){
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Connected to database successfully");
    }catch(err){
        console.log("Error connecting to database:",err);
    }
}

export default connectDB;