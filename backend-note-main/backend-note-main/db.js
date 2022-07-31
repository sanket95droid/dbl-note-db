// 'Mongoose' is a layer which helps you to manage the dataBase
//  this file is used to connect to the mongodb(dataBase)
const mongoose = require('mongoose');
// const mongoURI = "mongodb://localhost:27017/inotebook?readPreference=primary&appname=MongoDB%20Compass&ssl=false";
const mongoURI = "mongodb+srv://abhishek:abhishek@cluster0.i8n1k.mongodb.net/test";

const connectToMongo = () => {
    mongoose.connect(mongoURI, ()=>{
        console.log("Connected to mongo successfully");
    })
}

module.exports = connectToMongo;