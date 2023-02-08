const express=require('express')
const app = express() ;
const dotenv=require("dotenv") ;
const mongoose = require("mongoose")
const authRoute = require("./routes/auth")
const userRoute = require("./routes/users")
const postRoute = require("./routes/posts")
const categoryRoute = require("./routes/categories") 
const cors= require("cors") 
const multer = require("multer")
dotenv.config() ;

app.use(express.json()) ;
app.use(cors());

mongoose.set("strictQuery", true);
mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser:true,
}).then(console.log("connected to MongoDb")).catch((err)=>console.log(err)) ;

 /*uploading images using multer*/
const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"images")
    },filename:(req,file,cb)=>{
        cb(null,req.body.name) ;
    },
});
const upload = multer({storage:storage}) ;
app.post("/api/upload",upload.single("file"),(req,res)=>{
    res.status(200).json("file has been uploaded") ;
});

 /*api*/
 app.use("/api/auth",authRoute) ;
 app.use("/api/users",userRoute) ;
 app.use("/api/posts",postRoute) ;
 app.use("/api/categories",categoryRoute) ;

app.listen(5000,()=>{
    console.log("backend is running...") ;
})