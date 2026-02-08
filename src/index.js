import dbconnect from "../db/index.js";
import dotenv from "dotenv";
dotenv.config();


dbconnect()
.then(()=>{
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`server is running on port: ${process.env.PORT}`);
    })
    app.on("error",(error)=>{
        console.log("error",error);
        throw error
    })
})
.catch((err)=>{
    console.error("error in connecting with db",err)
})

