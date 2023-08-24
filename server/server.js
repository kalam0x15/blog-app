import express from 'express';
import Home from './home.js';
import bodyParser from 'body-parser';
import mongoconn from './models/mongoconn.js';
import ModelName from './models/schema.js';
import cors from 'cors';
import mongoose from 'mongoose';


const app = express();

mongoconn();
app.use(express.json());
app.use(cors());
app.use(bodyParser.json())

/
app.get('/showdata',(res,req)=>{
    ModelName.find()
    .then(articles => req.json(articles))
    .catch(err => req.json(err))
})

//Insert data from react Addblog form to mongodb
app.post('/data', async (req, res) => {
    const details = req.body;
    res.status(200).json({ message: 'Data received successfully' }); 
  
    const data = await new ModelName({
      Title : details.Title,
      imageUrl : details.imageUrl,
      Description  :details.Description ,
      Content : details.Content
    })
  
    try {
      const savedData = await data.save();
      console.log('Person saved successfully:', savedData);
    } catch (error) {
      console.error('Error saving person:', error);
    }
    
  
});

app.listen(3001,(err)=>{
    if (err) {
        console.log(err)}
        else{
            console.log('connected successfully')}
})






