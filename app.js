require("dotenv").config();

const mongoose = require("mongoose");

mongoose.connect('mongodb://1270.0.1:27017/dynamic-chat-app');

const app = require('express')();

const http = require('http').Server(app);

http.listen(4000, function(){
    console.log("hello node js")
})


