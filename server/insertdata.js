import mongoose from 'mongoose';
import mongoconn from './models/mongoconn.js';
import ModelName from './models/schema.js';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';


const app = express();
mongoconn()
app.use(bodyParser.json());

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



app.listen(3002)




