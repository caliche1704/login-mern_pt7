import mongoose from "mongoose";

export const connectDB = async () => {
    try {
       await mongoose.connect("mongodb+srv://carlos:carlso123@cluster0.id0big2.mongodb.net/"); 
       console.log(">> DB Connect "); 
    } catch (error) {
        console.log(error)
    }
};