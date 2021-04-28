const express = require("express");
var cors = require('cors')
var cookieParser = require('cookie-parser')
var session = require('express-session');
mongoose = require('mongoose').set('debug', true);
const uri = "mongodb+srv://spacelender:admin123@spacelendermaster.nodha.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });


const app = express(); // create express app
app.use(cors())

app.get("/", (req, res) => {
  res.send("This is from express.js");
});

// start express server on port 5000
app.listen(5000, () => {
  console.log("server started on port 5000");
});