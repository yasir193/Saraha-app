// database connection
import mongoose from "mongoose";


export const database_connection = async () =>{
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/saraha_app')
    console.log('database connected') 
  } catch (error) {
    console.log(error)
  }
}