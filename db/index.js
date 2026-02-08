import mongoose from "mongoose";
import {DB_NAME} from "../src/constants.js"
import dotenv from "dotenv";
dotenv.config();

const dbconnect = async ()=>{
  try{
       const connecteddb = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
       console.log(`db connected host : ${connecteddb.connection.host}`)
  }catch(error){
       console.error("error in connecting with database",error.message)
       process.exit(1)
  }
}

export default dbconnect