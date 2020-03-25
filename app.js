const express = require("express");
const app = express();
const mongoose = require("mongoose")
const morgan = require("morgan");
// const dotenv = require("dotenv");
require('dotenv').config({path:'.env'});

console.log(process.env.MONGO_URI)

//db
mongoose.connect(process.env.MONGO_URI,
    {useNewUrlParser:true,useUnifiedTopology:true}
    )
    .then (() => console.log("db connected"));

mongoose.connection.on("error",err =>{
    console.log(`Db connection error: ${err.messsage}`);
});


//Bring routes
const postRoutes = require("./routes/post");

//middleware
app.use(morgan ("dev"));

app.use("/", postRoutes);


const port = process.env.PORT || 5050;
app.listen(port, ()=>{
    console.log('listening to {port}');
}); 