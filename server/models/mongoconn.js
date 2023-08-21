import mongoose from "mongoose";

const mongoconn = () =>{
    
    mongoose.connect('mongodb://127.0.0.1:27017/blog',{
        useNewUrlParser : true,
        useUnifiedTopology: true
    })
    .then(()=>{
        console.log("Connected to MongoDB")}).catch((err)=>{ console.error(err) });
    }


export default mongoconn;