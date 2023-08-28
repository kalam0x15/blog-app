import express from 'express';

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

//Insert data from react Addblog form to database
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

//delete data from the database
app.post('/deletedata', async (req, res) => {
  const details = req.body;
  res.status(200).json({ message: 'Data received successfully' }); 

  console.log(details.Id)
  try {
    const deleteData = await ModelName.findByIdAndDelete(details.Id);
    console.log('Data Deleted Successfully:', deleteData);
  } catch (error) {
    console.error('Error In Deleting Data:', error);
  }


});


//to update or edit a blog
app.post('/updatedata', async (req, res) => {
  const details = req.body;
  res.status(200).json({ message: 'Data received successfully' }); 
  try{
    const dataTOUpdate = await ModelName.findById(details.Id);
    if(!dataTOUpdate){
      console.log('Data not fouond');
      return;
    }

    if (details.imageUrl === ""){
      dataTOUpdate.imageUrl = dataTOUpdate.imageUrl
    }
    else{

      dataTOUpdate.imageUrl = details.imageUrl;
    }
    dataTOUpdate.Content = details.Content;

    await dataTOUpdate.save();
    console.log('Updated Successfully')
  }
  catch(err){
    console.log("Error in updating", err)}
  })
  





app.listen(3001,(err)=>{
    if (err) {
        console.log(err)}
        else{
            console.log('connected successfully')}
})






