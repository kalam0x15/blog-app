import mongoose from "mongoose";

    const schema = new mongoose.Schema({
        Title: String,
        Description: String,
        Content: String
    });
    
    
    const ModelName = mongoose.model('ModelName', schema, 'blogdb');
    export default ModelName;


