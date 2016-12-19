// server dependencies
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");

// require Search schema
var Search = require("./models/search");

// create a new express app
var app = express();

// set the initial PORT
var PORT = process.env.PORT || 3000;

// run morgan for Logging
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use(express.static("./public"));

//------- MongoDB configuration -------//
mongoose.connect("");
var db = mongoose.connection;

db.on("error", function(err) {
  console.log("Mongoose Error: ", err);
});

db.once("open", function() {
  console.log("Mongoose connection successful.");
});
//------------------------------------//
