import mongoconn from "./models/mongoconn.js";
import axios from "axios";
import mongoose from "mongoose";
import express from 'express';
import cors from 'cors';
import ModelName from "./models/schema.js";


const app = express();


mongoconn();


app.use(express.json());
app.use(cors());



app.get('/',(res,req)=>{
    ModelName.find()
    .then(articles => req.json(articles))
    .catch(err => req.json(err))
})


app.listen(3001,(err)=>{
    if (err) {
        console.log(err)}
        else{
            console.log('connected successfully')}
})