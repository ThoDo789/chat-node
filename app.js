require("dotenv").config();

const mongoose = require("mongoose");

mongoose.connect('mongodb://1270.0.1:27017/dynamic-chat-app');

const app = require('express')();

const http = require('http').Server(app);
// ref route
const userRoute = require('./routers/userRoute')

app.use('/', userRoute)

http.listen(3000, function(){
    console.log("hello node js")
})


