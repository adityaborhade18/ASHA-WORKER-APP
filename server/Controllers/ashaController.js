import AshaWorker from '../Models/Ashaworker.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';



export const register=async(req,res)=>{
    const {name,email,password}=req.body;

    if(!name || !email || !password){
        return res.status(400).json({message:"All fields are required"});
    }   
    const existingAshaWorker = await AshaWorker.findOne({email});
    if(existingAshaWorker){
        return res.status(409).json({message:"Asha Worker already exists"});
    }   
    
   const hashedPassword=await bcrypt.hash(password,10);
   const newAshaWorker=new AshaWorker({name,email,password:hashedPassword});
   await newAshaWorker.save();
   
   const token=jwt.sign({id:newAshaWorker._id},process.env.JWT_SECRET,{expiresIn:'7d'});
   
   res.cookie('token',token,
    {
        httpOnly:true,
        sameSite:'Lax',
        maxAge:7*24*60*60*1000
    });
   res.status(201).json({success:true,message:"Asha Worker registered successfully",ashaWorker:{id:newAshaWorker._id,name:newAshaWorker.name,email:newAshaWorker.email}});   
}

export const login=async(req,res)=>{
    const {email,password}=req.body;

    if(!email || !password){
        return res.status(400).json({message:"All fields are required"});
    }
    const ashaWorker=await AshaWorker.findOne({email});
    if(!ashaWorker){
        return res.status(401).json({message:"Invalid email or password"});
    }
    const isPasswordValid=await bcrypt.compare(password,ashaWorker.password);
    if(!isPasswordValid){
        return res.status(401).json({message:"Invalid email or password"});
    }
    const token=jwt.sign({id:ashaWorker._id},process.env.JWT_SECRET,{expiresIn:'7d'});
    res.cookie('token',token,
    {
        httpOnly:true,
        sameSite:'Lax',
        maxAge:7*24*60*60*1000
    });
    res.status(200).json({success:true,message:"Asha Worker logged in successfully",ashaWorker:{id:ashaWorker._id,name:ashaWorker.name,email:ashaWorker.email}});
}

export const logout=(req,res)=>{
    res.clearCookie('token',{
        httpOnly:true,
        sameSite:'Lax',
    });
    res.status(200).json({success:true,message:"Asha Worker logged out successfully"});
}

export const getProfile=async(req,res)=>{

    try{

    const token=req.cookies.token;
    if(!token){
        return res.status(401).json({message:"Unauthorized"});
    }
    const decoded=jwt.verify(token,process.env.JWT_SECRET);
    const ashaWorker=await AshaWorker.findById(decoded.id).select('-password');
    if(!ashaWorker){
        return res.status(404).json({message:"Asha Worker not found"});
    }
    res.status(200).json({success:true,ashaWorker});
    }catch(err){
        console.log("getprofile error:",err);
        res.status(500).json({message:"Server error"});
    }

}